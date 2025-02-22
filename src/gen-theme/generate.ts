import camel from 'to-camel-case';
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

function* props_for(
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

function generate_base(colors: ThemeResult) {
    const props: [string, Iterable<string>][] = [];
    for (let i = 0; i < 12; i++) {
        const n = i + 1;
        props.push(...props_for('surface', colors.surface, i));
        props.push(...props_for('accent', colors.default, i));
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
            "import stylex from '@stylexjs/stylex';",
            '',
            concat('const supports_p3 = ', JSON.stringify(supports_p3), ';'),
            concat('const supports_oklch = ', JSON.stringify(supports_oklch), ';'),
            '',
            concat('export const radixColors = stylex.defineVars(', obj(props), ');')
        ])
    );
}

function generate_scheme(name: string, scheme: ColorScale, type = 'accent') {
    const props: [string, Iterable<string>][] = [];
    for (let i = 0; i < 12; i++) {
        props.push(...props_for(type, scheme, i));
    }
    const scheme_name = camel(`${type} ${name}`);
    return collect(
        lined([
            "import stylex from '@stylexjs/stylex';",
            "import { radixColors } from '../radix.stylex';",
            '',
            concat('const supports_p3 = ', JSON.stringify(supports_p3), ';'),
            concat('const supports_oklch = ', JSON.stringify(supports_oklch), ';'),
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

export async function generate_codes(dir: string, config: ThemeOptions, ext = 'ts') {
    await Bun.$`rm -rf ${dir}`;
    await Bun.$`mkdir -p ${dir}/accents`;

    const colors = generate_theme(config);

    await Bun.write(`${dir}/radix.stylex.${ext}`, generate_base(colors));

    for (const [name, scheme] of Object.entries(colors.accents)) {
        await Bun.write(`${dir}/accents/${name}.stylex.${ext}`, generate_scheme(name, scheme));
    }
}
