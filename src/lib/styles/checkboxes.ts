import { radixAccent, radixScale, radixSurface } from '$lib/styles/theme/radix.stylex';
import { values } from '$lib/styles/values.stylex';
import * as stylex from '@stylexjs/stylex';

const where_checked = ':where(:checked, [aria-checked=true])';
const where_indeterminate = ':where(:indeterminate, [aria-checked=mixed])';
const where_disabled = ':where(:disabled, [aria-disabled=true])';

export const switches = stylex.create({
    styles: {
        '::before': {
            backgroundColor: radixScale.whiteA12,
            borderRadius: '50%',
            content: '""',
            display: 'block',
            position: 'absolute',
            width: `1rem`,
            height: `1rem`,
            border: `1px solid ${radixScale.blackA4}`,
            transformOrigin: 'center',
            transform: `translateX(-40%)`,
            transitionProperty: 'transform',
            transitionDuration: values.transitionDuration,
            transitionTimingFunction: values.transitionEasing
        },
        [where_checked]: {
            '::before': {
                transform: `translateX(40%)`
            }
        },
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
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `2rem`,
        height: `1.25rem`,
        borderRadius: '9999px',
        backgroundColor: {
            default: `light-dark(${radixScale.blackA3}, ${radixScale.whiteA3})`,
            [where_checked]: radixSurface.light9
        },
        boxShadow: `0 0.125rem 0.125rem 0 ${radixScale.blackA5} inset`,
        transitionProperty: 'background-color, color, outline-color, outline-width, outline-offset',
        transitionDuration: values.transitionDuration,
        transitionTimingFunction: values.transitionEasing,
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
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
        '::before': {
            width: `0.75rem`,
            height: `0.75rem`,
        },
        width: `1.5rem`,
        height: `1rem`
    },
    md: {
        '::before': {
            width: `1rem`,
            height: `1rem`,
        },
        width: `2rem`,
        height: `1.25rem`
    },
    lg: {
        '::before': {
            width: `1.25rem`,
            height: `1.25rem`,
        },
        width: `2.5rem`,
        height: `1.5rem`
    }
});

export const checkbox = stylex.create({
    styles: {
        '::before': {
            content: '""',
            borderTopStyle: 'none',
            borderLeftStyle: 'solid',
            borderBottomStyle: 'solid',
            borderRightStyle: 'none',
            borderColor: radixScale.whiteA12,
            borderWidth: 0,
            marginTop: '-10%',
            width: '50%',
            height: '25%',
            transformOrigin: 'center',
            rotate: '-45deg',
            transform: 'scale(0)',
            transitionProperty: 'transform border-width',
            transitionDuration: values.transitionDuration,
            transitionTimingFunction: values.transitionEasing
        },
        [where_checked]: {
            '::before': {
                borderWidth: `0.125rem`,
                transform: 'scale(1)'
            }
        },
        [where_indeterminate]: {
            '::before': {
                height: '0',
                rotate: '0deg',
                marginTop: '0',
                borderWidth: `0.125rem`,
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
        borderRadius: `0.25rem`,
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
            [where_checked]: radixSurface.light9,
            [where_indeterminate]: radixSurface.lightA9
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
        height: `1rem`,
        borderRadius: `0.125rem`
    },
    md: {
        width: `1.25rem`,
        height: `1.25rem`,
        borderRadius: `0.25rem`
    },
    lg: {
        width: `1.5rem`,
        height: `1.5rem`,
        borderRadius: `0.3125rem`
    }
});
