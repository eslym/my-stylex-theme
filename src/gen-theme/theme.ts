import { array_12, make_color, type Tupple } from './utils';
import { generateRadixColors } from './colors';

export type ThemeOptions = {
    extra?: Record<string, string | [light: string, dark: string]>;
    surface: [light: string, dark: string];
    accent: string | [light: string, dark: string];
};

export type ColorVar = {
    default: string;
    [k: `@supports (${string})`]: string;
};

export type ColorScale = Record<'color' | 'alpha', Record<'light' | 'dark', Tupple<ColorVar, 12>>>;

export type ThemeSpec = Record<'surface' | 'accent', ColorScale>;

export type ThemeResult = {
    default: ThemeSpec;
    [name: string]: ThemeSpec;
};

function light_dark(color: string | [light: string, dark: string]): [light: string, dark: string] {
    return Array.isArray(color) ? color : [color, color];
}

export function generate_theme({ extra = {}, surface, accent }: ThemeOptions): ThemeResult {
    const [light, dark] = light_dark(accent);
    const default_light = generateRadixColors({
        appearance: 'light',
        gray: light,
        background: surface[0],
        accent: light
    });
    const default_dark = generateRadixColors({
        appearance: 'dark',
        gray: dark,
        background: surface[1],
        accent: dark
    });

    const theme_colors: ThemeResult = {
        default: {
            surface: color_scale(default_light, default_dark),
            accent: color_scale(default_light, default_dark, 'accent')
        }
    };

    for (const [name, color] of Object.entries(extra)) {
        const [light, dark] = light_dark(color);
        const light_theme = generateRadixColors({
            appearance: 'light',
            gray: light,
            background: surface[0],
            accent: light
        });
        const dark_theme = generateRadixColors({
            appearance: 'dark',
            gray: dark,
            background: surface[1],
            accent: dark
        });
        theme_colors[name] = {
            surface: color_scale(light_theme, dark_theme),
            accent: color_scale(light_theme, dark_theme, 'accent')
        };
    }
    return theme_colors;
}

type GeneratedRadixColors = ReturnType<typeof generateRadixColors>;

function color_scale(
    light: GeneratedRadixColors,
    dark: GeneratedRadixColors,
    type: 'gray' | 'accent' = 'gray'
): ColorScale {
    const scale = `${type}Scale` as const;
    const scaleAlpha = `${type}ScaleAlpha` as const;
    const scaleP3 = `${type}ScaleWideGamut` as const;
    const scaleAlphaP3 = `${type}ScaleAlphaWideGamut` as const;
    return {
        color: {
            light: array_12.map((_, i) => make_color(light[scale][i], light[scaleP3][i])) as Tupple<
                ColorVar,
                12
            >,
            dark: array_12.map((_, i) => make_color(dark[scale][i], dark[scaleP3][i])) as Tupple<
                ColorVar,
                12
            >
        },
        alpha: {
            light: array_12.map((_, i) =>
                make_color(light[scaleAlpha][i], light[scaleAlphaP3][i])
            ) as Tupple<ColorVar, 12>,
            dark: array_12.map((_, i) =>
                make_color(dark[scaleAlpha][i], dark[scaleAlphaP3][i])
            ) as Tupple<ColorVar, 12>
        }
    };
}
