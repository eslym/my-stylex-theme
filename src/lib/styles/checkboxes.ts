import { radixColors } from '$lib/styles/theme/radix.stylex';
import { baseValue } from '$lib/styles/values.stylex';
import stylex from '@stylexjs/stylex';

const where_checked = ':where(:checked, [aria-checked=true])';
const where_disabled = ':where(:disabled, [aria-disabled=true])';

export const switches = stylex.create({
    styles: {
        '::before': {
            backgroundColor: radixColors.whiteA12,
            borderRadius: '50%',
            content: '""',
            display: 'block',
            position: 'absolute',
            width: `calc(${baseValue.lengthRelative} * 4)`,
            height: `calc(${baseValue.lengthRelative} * 4)`,
            border: `1px solid ${radixColors.blackA4}`,
            origin: 'center',
            transform: `translateX(calc(${baseValue.lengthRelative} * -1.5))`,
            transitionProperty: 'transform',
            transitionDuration: baseValue.transitionDuration,
            transitionTimingFunction: baseValue.transitionEasing
        },
        [where_checked]: {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative} * 1.5))`
            }
        },
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
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `calc(${baseValue.lengthRelative} * 8)`,
        height: `calc(${baseValue.lengthRelative} * 5)`,
        borderRadius: '9999px',
        backgroundColor: {
            default: radixColors.surface6,
            [where_checked]: radixColors.accentLight9
        },
        boxShadow: `0 calc(${baseValue.lengthRelative} * 0.5) calc(${baseValue.lengthRelative} * 0.5) 0 ${radixColors.blackA5} inset`,
        transitionProperty: 'background-color, color, outline-color, outline-width',
        transitionDuration: baseValue.transitionDuration,
        transitionTimingFunction: baseValue.transitionEasing,
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
            width: `calc(${baseValue.lengthRelative} * 3)`,
            height: `calc(${baseValue.lengthRelative} * 3)`,
            transform: `translateX(calc(${baseValue.lengthRelative} * -1))`
        },
        [where_checked]: {
            '::before': {
                transform: `translateX(${baseValue.lengthRelative})`
            }
        },
        width: `calc(${baseValue.lengthRelative} * 6)`,
        height: `calc(${baseValue.lengthRelative} * 4)`
    },
    md: {
        '::before': {
            width: `calc(${baseValue.lengthRelative} * 3)`,
            height: `calc(${baseValue.lengthRelative} * 3)`,
            transform: `translateX(calc(${baseValue.lengthRelative} * -1))`
        },
        [where_checked]: {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative}))`
            }
        },
        width: `calc(${baseValue.lengthRelative} * 8)`,
        height: `calc(${baseValue.lengthRelative} * 5)`
    },
    lg: {
        '::before': {
            width: `calc(${baseValue.lengthRelative} * 5)`,
            height: `calc(${baseValue.lengthRelative} * 5)`,
            transform: `translateX(calc(${baseValue.lengthRelative} * -2))`
        },
        [where_checked]: {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative} * 2))`
            }
        },
        width: `calc(${baseValue.lengthRelative} * 10)`,
        height: `calc(${baseValue.lengthRelative} * 6)`
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
            borderColor: radixColors.whiteA12,
            borderWidth: 0,
            marginTop: '-10%',
            width: '50%',
            height: '25%',
            origin: 'center',
            rotate: '-45deg',
            transform: 'scale(0)',
            transitionProperty: 'transform border-width',
            transitionDuration: baseValue.transitionDuration,
            transitionTimingFunction: baseValue.transitionEasing
        },
        [where_checked]: {
            '::before': {
                borderWidth: `calc(${baseValue.lengthRelative} * 0.5)`,
                transform: 'scale(1)'
            }
        },
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
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: `calc(${baseValue.lengthRelative} * 0.75)`,
        width: `calc(${baseValue.lengthRelative} * 5)`,
        height: `calc(${baseValue.lengthRelative} * 5)`,
        borderStyle: 'solid',
        borderColor: {
            default: radixColors.surface9,
            ':focus': radixColors.accent9
        },
        borderWidth: {
            default: `calc(${baseValue.lengthFixed} * 0.25)`,
            [where_checked]: 0
        },
        backgroundColor: {
            default: 'transparent',
            [where_checked]: radixColors.accentLight9
        },
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        transitionProperty: 'background-color, border-width, outline-color, outline-width',
        transitionDuration: baseValue.transitionDuration,
        transitionTimingFunction: baseValue.transitionEasing,
        boxShadow: {
            default: `0 0 0 0 ${radixColors.blackA3}`,
            [where_checked]: `0 calc(${baseValue.lengthRelative} * 0.5) calc(${baseValue.lengthRelative} * 1) 0 ${radixColors.blackA3}`
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
        width: `calc(${baseValue.lengthRelative} * 4)`,
        height: `calc(${baseValue.lengthRelative} * 4)`,
        borderRadius: `calc(${baseValue.lengthRelative} * 0.5)`
    },
    md: {
        width: `calc(${baseValue.lengthRelative} * 5)`,
        height: `calc(${baseValue.lengthRelative} * 5)`,
        borderRadius: `calc(${baseValue.lengthRelative} * 0.75)`
    },
    lg: {
        width: `calc(${baseValue.lengthRelative} * 6)`,
        height: `calc(${baseValue.lengthRelative} * 6)`,
        borderRadius: `calc(${baseValue.lengthRelative} * 1.5)`
    }
});
