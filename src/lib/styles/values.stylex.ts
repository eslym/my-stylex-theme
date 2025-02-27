import stylex from '@stylexjs/stylex';

const reduce_motion = '@media (prefers-reduced-motion: reduce)';

export const baseValue = stylex.defineVars({
    lengthFixed: stylex.types.length('4px'),
    lengthRelative: stylex.types.length('0.25rem'),
    fontSize: stylex.types.length('1rem'),
    transitionDuration: stylex.types.time({
        default: '0.15s',
        [reduce_motion]: '0s'
    }),
    transitionEasing: 'ease-in-out',
    glow: '0 0 0 0 transparent'
});
