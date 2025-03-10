import * as stylex from '@stylexjs/stylex';

const reduce_motion = '@media (prefers-reduced-motion: reduce)';

export const values = stylex.defineVars({
    transitionDuration: stylex.types.time({
        default: '0.15s',
        [reduce_motion]: '0s'
    }),
    transitionEasing: 'ease-in-out'
});

export const tokens = stylex.defineVars({
    borderWidth: stylex.types.length(0),
    borderRadius: stylex.types.length(0),
    paddingY: stylex.types.length(0),
    paddingX: stylex.types.length(0)
});
