import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const primarySurfaceColors = stylex.defineVars({
  light1: {
    "default": "#f7f4ff",
    [supports_oklch]: "oklch(97.6% 0.0317 293)"
  },
  dark1: {
    "default": "#0c041f",
    [supports_oklch]: "oklch(14.5% 0.0557 293.5)"
  },
  lightA1: {
    "default": "#f7f4ff",
    [supports_p3]: "color(display-p3 0.9608 0.9529 1 / 0.8)"
  },
  darkA1: {
    "default": "#2200fe16",
    [supports_p3]: "color(display-p3 0.0902 0 0.9961 / 0.078)"
  },
  light2: {
    "default": "#f4efff",
    [supports_oklch]: "oklch(96.6% 0.0575 293)"
  },
  dark2: {
    "default": "#1a122e",
    [supports_oklch]: "oklch(20.9% 0.0533 293.5)"
  },
  lightA2: {
    "default": "#f4efff",
    [supports_p3]: "color(display-p3 0.949 0.9294 1 / 0.8)"
  },
  darkA2: {
    "default": "#753ffb26",
    [supports_p3]: "color(display-p3 0.4627 0.2667 1 / 0.139)"
  },
  light3: {
    "default": "#ebe4ff",
    [supports_oklch]: "oklch(93.7% 0.104 293)"
  },
  dark3: {
    "default": "#251941",
    [supports_oklch]: "oklch(25.2% 0.0723 293.5)"
  },
  lightA3: {
    "default": "#ebe4ff",
    [supports_p3]: "color(display-p3 0.8784 0.8392 1 / 0.6)"
  },
  darkA3: {
    "default": "#814cfc3a",
    [supports_p3]: "color(display-p3 0.4941 0.3137 1 / 0.217)"
  },
  light4: {
    "default": "#e3daff",
    [supports_oklch]: "oklch(91.2% 0.137 293)"
  },
  dark4: {
    "default": "#2e1b55",
    [supports_oklch]: "oklch(28.3% 0.0993 293.5)"
  },
  lightA4: {
    "default": "#e3daff",
    [supports_p3]: "color(display-p3 0.7373 0.6667 1 / 0.4)"
  },
  darkA4: {
    "default": "#7f41fd4f",
    [supports_p3]: "color(display-p3 0.4824 0.2824 1 / 0.294)"
  },
  light5: {
    "default": "#dcd0ff",
    [supports_oklch]: "oklch(88.8% 0.177 293)"
  },
  dark5: {
    "default": "#361f65",
    [supports_oklch]: "oklch(31.3% 0.117 293.5)"
  },
  lightA5: {
    "default": "#dcd0ff",
    [supports_p3]: "color(display-p3 0.3529 0.1569 1 / 0.2)"
  },
  darkA5: {
    "default": "#8143ff5f",
    [supports_p3]: "color(display-p3 0.4941 0.2824 1 / 0.356)"
  },
  light6: {
    "default": "#d4c7ff",
    [supports_oklch]: "oklch(86.4% 0.2034 293)"
  },
  dark6: {
    "default": "#402677",
    [supports_oklch]: "oklch(35% 0.1315 293.5)"
  },
  lightA6: {
    "default": "#d4c7ff",
    [supports_p3]: "color(display-p3 0.1961 0 1 / 0.2)"
  },
  darkA6: {
    "default": "#8248fd72",
    [supports_p3]: "color(display-p3 0.498 0.3059 1 / 0.429)"
  },
  light7: {
    "default": "#cab9ff",
    [supports_oklch]: "oklch(83% 0.2506 293)"
  },
  dark7: {
    "default": "#502d94",
    [supports_oklch]: "oklch(40.1% 0.1593 293.5)"
  },
  lightA7: {
    "default": "#cab9ff",
    [supports_p3]: "color(display-p3 0.2 0 0.9804 / 0.256)"
  },
  darkA7: {
    "default": "#8648ff90",
    [supports_p3]: "color(display-p3 0.5059 0.3059 1 / 0.543)"
  },
  light8: {
    "default": "#b99fff",
    [supports_oklch]: "oklch(76.9% 0.3392 293)"
  },
  dark8: {
    "default": "#6c39c8",
    [supports_oklch]: "oklch(49.2% 0.208 293.5)"
  },
  lightA8: {
    "default": "#b99fff",
    [supports_p3]: "color(display-p3 0.2314 0 0.9725 / 0.36)"
  },
  darkA8: {
    "default": "#8947ffc6",
    [supports_p3]: "color(display-p3 0.5137 0.298 1 / 0.747)"
  },
  light9: {
    "default": "#9355ff",
    [supports_oklch]: "oklch(62.1% 0.3419 293)"
  },
  dark9: {
    "default": "#7a44e0",
    [supports_oklch]: "oklch(54% 0.2212 293.5)"
  },
  lightA9: {
    "default": "#9355ff",
    [supports_p3]: "color(display-p3 0.302 0 0.9569 / 0.648)"
  },
  darkA9: {
    "default": "#8a4dffdf",
    [supports_p3]: "color(display-p3 0.5255 0.3216 1 / 0.841)"
  },
  light10: {
    "default": "#8b3cff",
    [supports_oklch]: "oklch(58.6% 0.3249 293)"
  },
  dark10: {
    "default": "#8755ee",
    [supports_oklch]: "oklch(58.6% 0.2175 293.5)"
  },
  lightA10: {
    "default": "#8b3cff",
    [supports_p3]: "color(display-p3 0.3412 0 0.9608 / 0.74)"
  },
  darkA10: {
    "default": "#905afeee",
    [supports_p3]: "color(display-p3 0.5529 0.3765 1 / 0.898)"
  },
  light11: {
    "default": "#7000e9",
    [supports_oklch]: "oklch(48.1% 0.281 293)"
  },
  dark11: {
    "default": "#ba9fff",
    [supports_oklch]: "oklch(77% 0.183 293.5)"
  },
  lightA11: {
    "default": "#7000e9",
    [supports_p3]: "color(display-p3 0.3608 0 0.8706 / 0.936)"
  },
  darkA11: {
    "default": "#ba9fff",
    [supports_p3]: "color(display-p3 0.7294 0.6431 1 / 0.976)"
  },
  light12: {
    "default": "#2a0062",
    [supports_oklch]: "oklch(24.5% 0.2353 293)"
  },
  dark12: {
    "default": "#efeaff",
    [supports_oklch]: "oklch(94.9% 0.0341 293.5)"
  },
  lightA12: {
    "default": "#2a0062",
    [supports_p3]: "color(display-p3 0.1373 0 0.3608 / 0.988)"
  },
  darkA12: {
    "default": "#efeaff",
    [supports_p3]: "color(display-p3 0.9412 0.9255 1 / 0.992)"
  }
});
