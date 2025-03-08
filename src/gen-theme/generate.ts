import { camelCase, kebabCase } from 'lodash-es';
import { collect, concat, lined, obj } from './template';
import { generate_theme, type ColorScale, type ThemeOptions, type ThemeResult } from './theme';
import { get_color, make_color, make_light_dark, supports_oklch, supports_p3 } from './utils';

function* stringify(value: any): Iterable<string> {
    if (typeof value === 'string') {
        yield* JSON.stringify(value);
        return;
    }
    yield* obj(
        Object.entries(value).map(([k, v]) => {
            if (k === supports_p3) {
                return ['[supports_p3]', stringify(v)];
            }
            if (k === supports_oklch) {
                return ['[supports_oklch]', stringify(v)];
            }
            return [k, stringify(v)];
        })
    );
}

function* colors_props_for(scale: ColorScale, index: number): Iterable<[string, Iterable<string>]> {
    const n = index + 1;
    yield [`light${n}`, stringify(scale.color.light[index])];
    yield [`dark${n}`, stringify(scale.color.dark[index])];
    yield [`lightA${n}`, stringify(scale.alpha.light[index])];
    yield [`darkA${n}`, stringify(scale.alpha.dark[index])];
}

function* theme_props_for(
    name: string,
    scale: ColorScale,
    index: number
): Iterable<[string, Iterable<string>]> {
    const n = index + 1;
    yield [
        `${name}${n}`,
        stringify(make_light_dark(scale.color.light[index], scale.color.dark[index]))
    ];
    yield [`${name}Light${n}`, stringify(scale.color.light[index])];
    yield [`${name}Dark${n}`, stringify(scale.color.dark[index])];
    yield [
        `${name}A${n}`,
        stringify(make_light_dark(scale.alpha.light[index], scale.alpha.dark[index]))
    ];
    yield [`${name}LightA${n}`, stringify(scale.alpha.light[index])];
    yield [`${name}DarkA${n}`, stringify(scale.alpha.dark[index])];
}

function* theme_props_vars_for(
    name: string,
    color: string,
    index: number,
    scheme: 'light' | 'dark' | 'auto'
): Iterable<[string, Iterable<string>]> {
    const n = index + 1;
    yield [
        `${name}${n}`,
        scheme === 'auto'
            ? concat(
                  '`light-dark(${ ',
                  color,
                  '.light',
                  n.toString(),
                  ' }, ${ ',
                  color,
                  '.dark',
                  n.toString(),
                  ' })`'
              )
            : scheme === 'light'
              ? `${color}.light${n}`
              : `${color}.dark${n}`
    ];
    yield [`${name}Light${n}`, `${color}.light${n}`];
    yield [`${name}Dark${n}`, `${color}.dark${n}`];
    yield [
        `${name}A${n}`,
        scheme === 'auto'
            ? concat(
                  '`light-dark(${ ',
                  color,
                  '.lightA',
                  n.toString(),
                  ' }, ${ ',
                  color,
                  '.darkA',
                  n.toString(),
                  ' })`'
              )
            : scheme === 'light'
              ? `${color}.lightA${n}`
              : `${color}.darkA${n}`
    ];
    yield [`${name}LightA${n}`, `${color}.lightA${n}`];
    yield [`${name}DarkA${n}`, `${color}.darkA${n}`];
}

function generate_base(colors: ThemeResult) {
    const props: [string, Iterable<string>][] = [];
    for (let i = 0; i < 12; i++) {
        const n = i + 1;
        props.push(...theme_props_for('surface', colors.surface, i));
        props.push(...theme_props_vars_for('accent', 'defaultColors', i, 'auto'));
        props.push([
            `blackA${i + 1}`,
            stringify(
                make_color(
                    get_color('black', { num: n, alpha: true }),
                    get_color('black', { num: n, alpha: true, p3: true })
                )
            )
        ]);
        props.push([
            `whiteA${i + 1}`,
            stringify(
                make_color(
                    get_color('white', { num: n, alpha: true }),
                    get_color('white', { num: n, alpha: true, p3: true })
                )
            )
        ]);
    }
    return collect(
        lined([
            "import * as stylex from'@stylexjs/stylex';",
            "import { defaultColors } from './colors/default.stylex';",
            '',
            concat('const supports_p3 = ', JSON.stringify(supports_p3), ';'),
            concat('const supports_oklch = ', JSON.stringify(supports_oklch), ';'),
            '',
            concat('export const radixColors = stylex.defineVars(', obj(props), ');')
        ])
    );
}

function generate_color_code(name: string, colors: ColorScale) {
    const color_var = camelCase(`${name} colors`);
    const props: [string, Iterable<string>][] = [];
    for (let i = 0; i < 12; i++) {
        props.push(...colors_props_for(colors, i));
    }

    return collect(
        lined([
            "import * as stylex from'@stylexjs/stylex';",
            '',
            concat('const supports_p3 = ', JSON.stringify(supports_p3), ';'),
            concat('const supports_oklch = ', JSON.stringify(supports_oklch), ';'),
            '',
            concat('export const ', color_var, ' = stylex.defineVars(', obj(props), ');')
        ])
    );
}

function generate_theme_code(
    name: string,
    type = 'accent',
    scheme: 'light' | 'dark' | 'auto' = 'auto'
) {
    const color_var = camelCase(`${name} colors`);
    const scheme_name = camelCase(`${type} ${name}`);
    const props: [string, Iterable<string>][] = [];
    for (let i = 0; i < 12; i++) {
        props.push(...theme_props_vars_for(type, color_var, i, scheme));
    }
    return collect(
        lined([
            "import * as stylex from'@stylexjs/stylex';",
            `import { ${color_var} } from '../colors/${kebabCase(name)}.stylex';`,
            "import { radixColors } from '../radix.stylex';",
            '',
            concat(
                'export const ',
                scheme_name,
                ' = stylex.createTheme(radixColors, ',
                obj(props),
                ');'
            )
        ])
    );
}

function generate_default_theme_code() {
    return collect(
        lined([
            "import * as stylex from'@stylexjs/stylex';",
            "import { radixColors } from '../radix.stylex';",
            '',
            concat('export const accentDefault = stylex.createTheme(radixColors, {});')
        ])
    );
}

export async function generate_codes(dir: string, config: ThemeOptions, ext = 'ts') {
    await Bun.$`rm -rf ${dir}`;
    await Bun.$`mkdir -p ${dir}/accents`;
    await Bun.$`mkdir -p ${dir}/colors`;

    const colors = generate_theme(config);

    await Bun.write(
        `${dir}/colors/default.stylex.${ext}`,
        generate_color_code('default', colors.default)
    );
    await Bun.write(`${dir}/radix.stylex.${ext}`, generate_base(colors));
    await Bun.write(`${dir}/accents/default.stylex.${ext}`, generate_default_theme_code());
    await Bun.write(
        `${dir}/accents/default-light.stylex.${ext}`,
        generate_theme_code('default', 'accent', 'light')
    );
    await Bun.write(
        `${dir}/accents/default-dark.stylex.${ext}`,
        generate_theme_code('default', 'accent', 'dark')
    );

    for (const [name, scheme] of Object.entries(colors.accents)) {
        const filename = kebabCase(name);
        await Bun.write(
            `${dir}/colors/${filename}.stylex.${ext}`,
            generate_color_code(name, scheme)
        );
        await Bun.write(`${dir}/accents/${filename}.stylex.${ext}`, generate_theme_code(name));
        await Bun.write(
            `${dir}/accents/${filename}-light.stylex.${ext}`,
            generate_theme_code(name, 'accent', 'light')
        );
        await Bun.write(
            `${dir}/accents/${filename}-dark.stylex.${ext}`,
            generate_theme_code(name, 'accent', 'dark')
        );
    }
}
