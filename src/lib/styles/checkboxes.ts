import { radixColors } from '$lib/styles/theme/radix.stylex';
import { baseValue } from '$lib/styles/values.stylex';
import stylex from '@stylexjs/stylex';

const where_disabled = ':where(:disabled, [aria-disabled=true])';

export const switches = stylex.create({
    styles: {
        '::before': {
            backgroundColor: radixColors.whiteA12,
            borderRadius: '50%',
            content: '""',
            display: 'block',
            position: 'absolute',
            width: `calc(${baseValue.lengthRelative} * 3)`,
            height: `calc(${baseValue.lengthRelative} * 3)`,
            border: `1px solid ${radixColors.blackA4}`,
            origin: 'center',
            transform: `translateX(calc(${baseValue.lengthRelative} * -1))`,
            transitionProperty: 'transform',
            transitionDuration: baseValue.transitionDuration,
            transitionTimingFunction: baseValue.transitionEasing
        },
        ':checked': {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative}))`
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
        width: `calc(${baseValue.lengthRelative} * 6)`,
        height: `calc(${baseValue.lengthRelative} * 4)`,
        borderRadius: '9999px',
        backgroundColor: {
            default: radixColors.surfaceLight9,
            ':checked': radixColors.accentLight9
        },
        boxShadow: `0 calc(${baseValue.lengthRelative} * 0.5) calc(${baseValue.lengthRelative} * 0.5) 0 ${radixColors.blackA5} inset`,
        transitionProperty:
            'background-color, border-color, box-shadow, color, outline-color, outline-width',
        transitionDuration: baseValue.transitionDuration,
        transitionTimingFunction: baseValue.transitionEasing,
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        opacity: {
            default: 1,
            [where_disabled]: 0.5
        }
    },
    sm: {
        '::before': {
            width: `calc(${baseValue.lengthRelative} * 2)`,
            height: `calc(${baseValue.lengthRelative} * 2)`,
            transform: `translateX(calc(${baseValue.lengthRelative} * -0.5))`
        },
        ':checked': {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative} * 0.5))`
            }
        },
        width: `calc(${baseValue.lengthRelative} * 4)`,
        height: `calc(${baseValue.lengthRelative} * 3)`
    },
    md: {
        '::before': {
            width: `calc(${baseValue.lengthRelative} * 3)`,
            height: `calc(${baseValue.lengthRelative} * 3)`,
            transform: `translateX(calc(${baseValue.lengthRelative} * -1))`
        },
        ':checked': {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative}))`
            }
        },
        width: `calc(${baseValue.lengthRelative} * 6)`,
        height: `calc(${baseValue.lengthRelative} * 4)`
    },
    lg: {
        '::before': {
            width: `calc(${baseValue.lengthRelative} * 4)`,
            height: `calc(${baseValue.lengthRelative} * 4)`,
            transform: `translateX(calc(${baseValue.lengthRelative} * -1.5))`
        },
        ':checked': {
            '::before': {
                transform: `translateX(calc(${baseValue.lengthRelative} * 1.5))`
            }
        },
        width: `calc(${baseValue.lengthRelative} * 8)`,
        height: `calc(${baseValue.lengthRelative} * 5)`
    }
});
