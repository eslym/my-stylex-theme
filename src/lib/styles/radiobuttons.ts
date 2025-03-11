import { radixAccent, radixScale, radixSurface } from '$lib/styles/theme/radix.stylex';
import { values } from '$lib/styles/values.stylex';
import * as stylex from '@stylexjs/stylex';

const where_checked = ':where(:checked, [aria-checked=true])';
const where_disabled = ':where(:disabled, [aria-disabled=true])';

export const radiobutton = stylex.create({
    styles: {
        '::before': {
            content: '""',
            borderRadius: '50%',
            backgroundColor: radixScale.whiteA12,
            width: '50%',
            height: '50%',
            transform: 'scale(0)',
            transitionProperty: 'transform',
            transitionDuration: values.transitionDuration,
            transitionTimingFunction: values.transitionEasing
        },
        [where_checked]: {
            '::before': {
                transform: 'scale(1)'
            }
        },
        outlineColor: radixAccent.alpha8,
        outlineWidth: {
            default: 0,
            ':focus-visible': `2px`
        },
        outlineOffset: {
            default: 0,
            ':focus-visible': '1px'
        },
        outlineStyle: 'solid',
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: `1.25rem`,
        height: `1.25rem`,
        borderStyle: 'solid',
        borderColor: {
            default: `light-dark(${radixScale.blackA7}, ${radixScale.whiteA7})`,
            ':focus': `light-dark(${radixScale.blackA8}, ${radixScale.whiteA8})`
        },
        borderWidth: {
            default: `1px`,
            [where_checked]: 0
        },
        backgroundColor: {
            default: 'transparent',
            [where_checked]: radixSurface.light9
        },
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        transitionProperty: 'background-color, border-width, outline-color, outline-width, outline-offset',
        transitionDuration: values.transitionDuration,
        transitionTimingFunction: values.transitionEasing,
        boxShadow: {
            default: `0 0 0 0 ${radixScale.blackA3}`,
            [where_checked]: `0 0.5rem 1rem 0 ${radixScale.blackA3}`
        },
        opacity: {
            default: 1,
            [where_disabled]: 0.5
        },
        pointerEvents: {
            default: 'auto',
            [where_disabled]: 'none'
        }
    },
    sm: {
        width: `1rem`,
        height: `1rem`
    },
    md: {
        width: `1.25rem`,
        height: `1.25rem`
    },
    lg: {
        width: `1.5rem`,
        height: `1.5rem`
    }
});
