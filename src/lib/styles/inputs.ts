import { radixAccent, radixSurface } from '$lib/styles/theme/radix.stylex';
import { tokens } from '$lib/styles/values.stylex';
import * as stylex from '@stylexjs/stylex';

const where_disabled = ':where(:disabled, [aria-disabled=true])';

const styles = stylex.create({
    base: {
        '::placeholder': {
            color: radixSurface.alpha7,
            transitionProperty: `color`,
            transitionDuration: '0.15s',
            transitionTimingFunction: 'ease-in-out'
        },
        [tokens.borderWidth]: '0',
        [tokens.paddingY]: '0.25rem',
        [tokens.paddingX]: '0.5rem',
        [tokens.borderRadius]: '4px',
        borderStyle: 'none',
        borderWidth: tokens.borderWidth,
        borderColor: radixAccent.color9,
        borderRadius: tokens.borderRadius,
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
        color: radixSurface.color12,
        padding: `${tokens.paddingY} ${tokens.paddingX}`,
        lineHeight: 1.25,
        fontSize: '1rem',
        transitionProperty: `color, border-color, background-color, outline-color, outline-width, outline-offset`,
        transitionDuration: '0.15s',
        transitionTimingFunction: 'ease-in-out',
        pointerEvents: {
            default: 'auto',
            [where_disabled]: 'none'
        },
        opacity: {
            default: 1,
            [where_disabled]: 0.5
        }
    },
    normal: {
        [tokens.borderWidth]: '2px',
        backgroundColor: 'transparent',
        borderColor: {
            default: radixAccent.color8,
            ':focus-visible': radixAccent.color9
        },
        padding: `calc(${tokens.paddingY} - ${tokens.borderWidth}) calc(${tokens.paddingX} - ${tokens.borderWidth})`
    },
    solid: {
        backgroundColor: radixSurface.color3
    },
    sm: {
        [tokens.paddingY]: '0.125rem',
        [tokens.paddingX]: '0.25rem',
        fontSize: '0.875rem'
    },
    md: {
        [tokens.paddingY]: '0.25rem',
        [tokens.paddingX]: '0.5rem',
        fontSize: '1rem'
    },
    lg: {
        [tokens.paddingY]: '0.5rem',
        [tokens.paddingX]: '1rem',
        fontSize: '1.25rem'
    }
});

export const textfield = {
    normal: [styles.base, styles.normal],
    solid: [styles.base, styles.solid],
    sizes: {
        sm: styles.sm,
        md: styles.md,
        lg: styles.lg
    }
};
