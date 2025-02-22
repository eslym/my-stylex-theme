import * as radix from '@radix-ui/colors';
import type { ColorVar } from './theme';

type _tupple<T, N extends number, R extends T[] = []> = R['length'] extends N
    ? R
    : _tupple<T, N, [T, ...R]>;

export type Tupple<T, N extends number> = _tupple<T, N>;

export function get_color(
    name: string,
    {
        alpha,
        dark,
        p3,
        num
    }: {
        alpha?: boolean;
        dark?: boolean;
        p3?: boolean;
        num: number;
    }
) {
    let c = name;
    if (dark) c += 'Dark';
    if (p3) c += 'P3';
    if (alpha) c += 'A';
    let n = name;
    if (alpha) n += 'A';
    n += num;
    return (radix as any)[c][n];
}

export const array_12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export const media_dark = '@media (prefers-color-scheme: dark)' as const;
export const supports_p3 = '@supports (color: color(display-p3 1 0 0))' as const;
export const supports_oklch = '@supports (color: oklch(1 0 0))' as const;

export function make_color(srgb: string, p3?: string): string | ColorVar {
    return p3
        ? p3.startsWith('oklch')
            ? ({
                  default: srgb,
                  [supports_oklch]: p3
              } as any)
            : ({
                  default: srgb,
                  [supports_p3]: p3
              } as any)
        : srgb;
}

export function make_light_dark(
    light: string | ColorVar,
    dark: string | ColorVar
): string | ColorVar {
    if (typeof light === 'string') {
        return 'light-dark(' + light + ', ' + dark + ')';
    }
    const supports = supports_p3 in light ? supports_p3 : supports_oklch;
    return {
        default: 'light-dark(' + light.default + ', ' + (dark as any).default + ')',
        [supports]: 'light-dark(' + light[supports] + ', ' + (dark as any)[supports] + ')'
    };
}
