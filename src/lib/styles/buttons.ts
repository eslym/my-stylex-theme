import stylex from '@stylexjs/stylex';
import { radixColors } from './theme/radix.stylex';
import { baseValue } from './values.stylex';

const where_disabled = ':where(:disabled, [aria-disabled=true])';
const supports_oklch = '@supports (color: oklch(1 0 0))';

const styles = stylex.create({
    base: {
        outlineColor: radixColors.accentA8,
        outlineWidth: {
            default: 0,
            ':focus-visible': `calc(${baseValue.lengthFixed} * 0.5)`
        },
        outlineOffset: {
            default: 0,
            ':focus-visible': '1px'
        },
        outlineStyle: 'solid',
        borderRadius: baseValue.lengthFixed,
        fontSize: baseValue.fontSize,
        textAlign: 'center',
        paddingLeft: `calc(${baseValue.lengthRelative} * 3)`,
        paddingRight: `calc(${baseValue.lengthRelative} * 3)`,
        cursor: 'pointer',
        userSelect: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty:
            'background-color, color, border-color, outline-color, outline-width, transform',
        transitionDuration: baseValue.transitionDuration,
        transitionTimingFunction: baseValue.transitionEasing,
        transformOrigin: 'center',
        transform: {
            default: 'scale(1)',
            ':active': 'scale(0.97)'
        },
        opacity: {
            default: 1,
            [where_disabled]: 0.5
        },
        pointerEvents: {
            default: 'auto',
            [where_disabled]: 'none'
        },
        border: 'none',
        fontWeight: 500,
        height: `calc(${baseValue.lengthRelative} * 7)`,
        gap: baseValue.lengthRelative
    },
    solid: {
        backgroundColor: {
            default: radixColors.accentLight9,
            ':hover': {
                default: `hsl(from ${radixColors.accentLight9} h s calc(l * 1.15))`,
                [supports_oklch]: `oklch(from ${radixColors.accentLight9} calc(l * 1.15) c h)`
            }
        },
        color: radixColors.surfaceDark12
    },
    outline: {
        backgroundColor: {
            default: 'transparent',
            ':hover': radixColors.accentA3
        },
        color: radixColors.accent11,
        borderStyle: 'solid',
        borderWidth: `calc(${baseValue.lengthFixed} * 0.5)`,
        borderColor: radixColors.accent10
    },
    ghost: {
        backgroundColor: {
            default: radixColors.accentA3,
            ':hover': radixColors.accentA4
        },
        color: radixColors.accent11
    },
    minimal: {
        backgroundColor: {
            default: 'transparent',
            ':hover': radixColors.accentA3
        },
        color: radixColors.accent11
    },
    xs: {
        height: `calc(${baseValue.lengthRelative} * 5)`,
        fontSize: `calc(${baseValue.fontSize} * 0.75)`,
        paddingLeft: `calc(${baseValue.lengthRelative} * 1.5)`,
        paddingRight: `calc(${baseValue.lengthRelative} * 1.5)`
    },
    sm: {
        height: `calc(${baseValue.lengthRelative} * 6)`,
        fontSize: `calc(${baseValue.fontSize} * 0.875)`,
        paddingLeft: `calc(${baseValue.lengthRelative} * 2)`,
        paddingRight: `calc(${baseValue.lengthRelative} * 2)`
    },
    md: {
        height: `calc(${baseValue.lengthRelative} * 7)`,
        fontSize: baseValue.fontSize,
        paddingLeft: `calc(${baseValue.lengthRelative} * 3)`,
        paddingRight: `calc(${baseValue.lengthRelative} * 3)`,
        borderRadius: `calc(${baseValue.lengthFixed} * 0.5)`
    },
    lg: {
        height: `calc(${baseValue.lengthRelative} * 8)`,
        fontSize: `calc(${baseValue.fontSize} * 1.125)`,
        paddingLeft: `calc(${baseValue.lengthRelative} * 4)`,
        paddingRight: `calc(${baseValue.lengthRelative} * 4)`,
        borderRadius: `calc(${baseValue.lengthFixed} * 1.25)`
    },
    xl: {
        height: `calc(${baseValue.lengthRelative} * 9)`,
        fontSize: `calc(${baseValue.fontSize} * 1.25)`,
        paddingLeft: `calc(${baseValue.lengthRelative} * 6)`,
        paddingRight: `calc(${baseValue.lengthRelative} * 6)`,
        borderRadius: `calc(${baseValue.lengthFixed} * 1.5)`
    }
});

export const button = {
    solid: [styles.base, styles.solid] as const,
    outline: [styles.base, styles.outline] as const,
    ghost: [styles.base, styles.ghost] as const,
    minimal: [styles.base, styles.minimal] as const,
    size: {
        xs: styles.xs,
        sm: styles.sm,
        md: styles.md,
        lg: styles.lg,
        xl: styles.xl
    } as const
} as const;
