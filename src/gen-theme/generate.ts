import { camelCase, kebabCase } from 'lodash-es';
import { T } from './template';
import {
    generate_theme,
    type ColorScale,
    type ThemeOptions,
    type ThemeResult,
    type ThemeSpec
} from './theme';
import { get_color, make_color, supports_oklch, supports_p3 } from './utils';
import { resolve } from 'path';

type ColorCategory = 'accent' | 'surface';
type CodeExt = 'ts' | 'js';

const stringify_replace = {
    [JSON.stringify(supports_p3)]: '[supports_p3]',
    [JSON.stringify(supports_oklch)]: '[supports_oklch]'
};

const stylex_define = T.fn`stylex.defineVars`;
const stylex_create_theme = T.fn`stylex.createTheme`;

const array_12 = [...Array(12).keys()];

function* colors_props_for(scale: ColorScale, index: number): Iterable<[string, Iterable<string>]> {
    const n = index + 1;
    yield [`light${n}`, T.stringify(scale.color.light[index], stringify_replace)];
    yield [`dark${n}`, T.stringify(scale.color.dark[index], stringify_replace)];
    yield [`lightA${n}`, T.stringify(scale.alpha.light[index], stringify_replace)];
    yield [`darkA${n}`, T.stringify(scale.alpha.dark[index], stringify_replace)];
}

function* theme_props_for(source: string, i: number): Iterable<[string, Iterable<string>]> {
    yield [`color${i}`, T.tl`light-dark(${`${source}.light${i}`}, ${`${source}.dark${i}`})`];
    yield [`alpha${i}`, T.tl`light-dark(${`${source}.lightA${i}`}, ${`${source}.darkA${i}`})`];
    yield [`light${i}`, `${source}.light${i}`];
    yield [`lightA${i}`, `${source}.lightA${i}`];
    yield [`dark${i}`, `${source}.dark${i}`];
    yield [`darkA${i}`, `${source}.darkA${i}`];
}

function generate_color_code(
    dir: string,
    ext: CodeExt,
    name: string,
    cat: ColorCategory,
    scale: ColorScale
): Promise<number> {
    const exports = T.code`export const ${camelCase(`${name} ${cat} colors`)} = ${stylex_define(
        T.obj(T.flat(T.map(array_12, (i) => colors_props_for(scale, i))))
    )};`;

    const code = T.str(
        T.lf([
            `import * as stylex from '@stylexjs/stylex';`,
            '',
            `const supports_p3 = ${JSON.stringify(supports_p3)};`,
            `const supports_oklch = ${JSON.stringify(supports_oklch)};`,
            '',
            exports,
            ''
        ])
    );

    const path = resolve(dir, `colors/${cat}/${kebabCase(name)}.stylex.${ext}`);

    return Bun.write(path, code);
}

function generate_scheme_code(
    dir: string,
    ext: CodeExt,
    name: string,
    cat: ColorCategory
): Promise<number> {
    const src_var = camelCase(`${name} ${cat} colors`);
    const radix_var = camelCase(`radix ${cat}`);

    const exports = T.code`export const ${camelCase(`${cat} ${name}`)} = ${stylex_create_theme(
        radix_var,
        T.obj(T.flat(T.map(array_12, (i) => theme_props_for(src_var, i + 1))))
    )};`;

    const code = T.str(
        T.lf([
            `import * as stylex from '@stylexjs/stylex';`,
            `import { ${radix_var} } from '../../radix.stylex';`,
            `import { ${src_var} } from '../../colors/${cat}/${kebabCase(name)}.stylex';`,
            '',
            exports,
            ''
        ])
    );

    const path = resolve(dir, `schemes/${cat}/${kebabCase(name)}.stylex.${ext}`);

    return Bun.write(path, code);
}

function* generate_scheme_codes(
    dir: string,
    ext: CodeExt,
    name: string,
    spec: ThemeSpec
): Iterable<Promise<number>> {
    for (const [cat, scale] of Object.entries(spec)) {
        yield generate_color_code(dir, ext, name, cat as ColorCategory, scale);
        yield generate_scheme_code(dir, ext, name, cat as ColorCategory);
    }
}

function generate_radix_base(dir: string, ext: CodeExt): Promise<number> {
    const src_var = { accent: 'defaultAccentColors', surface: 'defaultSurfaceColors' } as const;
    const radix_var = { accent: 'radixAccent', surface: 'radixSurface' } as const;

    const lines: Iterable<string>[] = [
        `import * as stylex from '@stylexjs/stylex';`,
        `import { ${src_var.accent} } from './colors/accent/default.stylex';`,
        `import { ${src_var.surface} } from './colors/surface/default.stylex';`,
        '',
        `const supports_p3 = ${JSON.stringify(supports_p3)};`,
        `const supports_oklch = ${JSON.stringify(supports_oklch)};`,
        ''
    ];

    for (const cat of ['accent', 'surface'] as const) {
        const props = T.obj(T.flat(T.map(array_12, (i) => theme_props_for(src_var[cat], i + 1))));
        lines.push(T.code`export const ${radix_var[cat]} = ${stylex_define(props)};`);
        lines.push('');
    }

    const props: [string, Iterable<string>][] = [];
    for (const i of array_12) {
        const n = i + 1;
        for (const color of ['black', 'white'] as const) {
            props.push([
                `${color}A${n}`,
                T.stringify(
                    make_color(
                        get_color(color, { alpha: true, num: n }),
                        get_color(color, { alpha: true, num: n, p3: true })
                    ),
                    stringify_replace
                )
            ]);
        }
    }
    lines.push(T.code`export const radixScale = ${stylex_define(T.obj(props))};`);

    const code = T.str(T.lf(lines));

    const path = resolve(dir, `radix.stylex.${ext}`);

    return Bun.write(path, code);
}

export async function generate_codes(dir: string, config: ThemeOptions, ext: CodeExt = 'ts') {
    await Bun.$`rm -rf ${dir}`;
    await Bun.$`mkdir -p ${dir}/{colors,schemes}/{accent,surface}`;

    const colors = generate_theme(config);

    const promises = Array.from(generate_scheme_codes(dir, ext, 'default', colors.default));
    promises.push(generate_radix_base(dir, ext));

    delete (colors as any).default;

    for (const [name, spec] of Object.entries(colors)) {
        promises.push(...generate_scheme_codes(dir, ext, name, spec));
    }

    await Promise.all(promises);
}
