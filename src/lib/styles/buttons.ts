import * as stylex from '@stylexjs/stylex';
import { tokens, values } from './values.stylex';
import { radixAccent, radixScale, radixSurface } from '$lib/styles/theme/radix.stylex';

const where_disabled = ':where(:disabled, [aria-disabled=true])';

const styles = stylex.create({
    base: {
        [tokens.borderWidth]: '0',
        [tokens.paddingY]: '0.25rem',
        [tokens.paddingX]: '1rem',
        [tokens.borderRadius]: '4px',
        outlineColor: radixAccent.alpha8,
        outlineWidth: {
            default: 0,
            ':focus-visible': '2px'
        },
        outlineOffset: {
            default: 0,
            ':focus-visible': '1px'
        },
        outlineStyle: 'solid',
        borderRadius: tokens.borderRadius,
        borderStyle: 'none',
        borderWidth: tokens.borderWidth,
        fontSize: '1rem',
        textAlign: 'center',
        verticalAlign: 'middle',
        padding: `${tokens.paddingY} ${tokens.paddingX}`,
        cursor: 'pointer',
        userSelect: 'none',
        display: 'inline-block',
        transitionProperty:
            'background-color, color, border-color, outline-color, outline-width, outline-offset, transform',
        transitionDuration: values.transitionDuration,
        transitionTimingFunction: values.transitionEasing,
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
        fontWeight: 500,
        lineHeight: 1.25
    },
    solid: {
        backgroundColor: {
            default: radixSurface.light9,
            ':hover': radixSurface.light10
        },
        color: radixScale.whiteA12
    },
    outline: {
        [tokens.borderWidth]: '2px',
        padding: `calc(${tokens.paddingY} - ${tokens.borderWidth}) calc(${tokens.paddingX} - ${tokens.borderWidth})`,
        backgroundColor: {
            default: 'transparent',
            ':hover': radixAccent.alpha3
        },
        color: radixAccent.color11,
        borderWidth: tokens.borderWidth,
        borderStyle: 'solid',
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
        fontSize: '0.5rem',
        [tokens.borderWidth]: '1px',
        [tokens.paddingY]: '0.05rem',
        [tokens.paddingX]: '0.5rem'
    },
    sm: {
        fontSize: '0.75rem',
        [tokens.borderWidth]: '2px',
        [tokens.paddingY]: '0.125rem',
        [tokens.paddingX]: '0.75rem'
    },
    md: {
        fontSize: '1rem',
        [tokens.borderWidth]: '2px',
        [tokens.paddingY]: '0.25rem',
        [tokens.paddingX]: '1rem'
    },
    lg: {
        fontSize: '1.25rem',
        [tokens.borderWidth]: '2px',
        [tokens.paddingY]: '0.315rem',
        [tokens.paddingX]: '1.75rem'
    },
    xl: {
        fontSize: '1.5rem',
        [tokens.borderWidth]: '2px',
        [tokens.paddingY]: '0.5rem',
        [tokens.paddingX]: '2.5rem'
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
