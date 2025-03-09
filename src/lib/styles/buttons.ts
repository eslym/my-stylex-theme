import * as stylex from '@stylexjs/stylex';
import { baseValue } from './values.stylex';
import { radixAccent, radixScale, radixSurface } from '$lib/styles/theme/radix.stylex';

const where_disabled = ':where(:disabled, [aria-disabled=true])';

const styles = stylex.create({
    base: {
        outlineColor: radixAccent.alpha8,
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
            default: radixSurface.light9,
            ':hover': radixSurface.light10
        },
        color: radixScale.whiteA12
    },
    outline: {
        backgroundColor: {
            default: 'transparent',
            ':hover': radixAccent.alpha3
        },
        color: radixAccent.color11,
        borderStyle: 'solid',
        borderWidth: `calc(${baseValue.lengthFixed} * 0.5)`,
        borderColor: radixAccent.color8
    },
    ghost: {
        backgroundColor: {
            default: radixAccent.alpha3,
            ':hover': radixAccent.alpha4
        },
        color: radixAccent.color11
    },
    minimal: {
        backgroundColor: {
            default: 'transparent',
            ':hover': radixAccent.alpha3
        },
        color: radixAccent.color11
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
