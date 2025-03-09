import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const secondarySurfaceColors = stylex.defineVars({
  light1: {
    "default": "#edf7ff",
    [supports_oklch]: "oklch(97.5% 0.0264 262.9)"
  },
  dark1: {
    "default": "#000823",
    [supports_oklch]: "oklch(14.5% 0.063 254.6)"
  },
  lightA1: {
    "default": "#edf7ff",
    [supports_p3]: "color(display-p3 0.9294 0.9686 1 / 0.8)"
  },
  darkA1: {
    "default": "#0000f71b",
    [supports_p3]: "color(display-p3 0 0 1 / 0.094)"
  },
  light2: {
    "default": "#e6f4ff",
    [supports_oklch]: "oklch(96.5% 0.0528 262.9)"
  },
  dark2: {
    "default": "#011734",
    [supports_oklch]: "oklch(20.8% 0.0648 254.6)"
  },
  lightA2: {
    "default": "#e6f4ff",
    [supports_p3]: "color(display-p3 0.898 0.9529 1 / 0.8)"
  },
  darkA2: {
    "default": "#0056fe2c",
    [supports_p3]: "color(display-p3 0 0.3529 0.9961 / 0.164)"
  },
  light3: {
    "default": "#d8ebff",
    [supports_oklch]: "oklch(93.7% 0.0806 262.9)"
  },
  dark3: {
    "default": "#00204c",
    [supports_oklch]: "oklch(25.1% 0.0908 254.6)"
  },
  lightA3: {
    "default": "#d8ebff",
    [supports_p3]: "color(display-p3 0.7843 0.8784 1 / 0.6)"
  },
  darkA3: {
    "default": "#005cfe45",
    [supports_p3]: "color(display-p3 0.0118 0.3608 1 / 0.258)"
  },
  light4: {
    "default": "#cce3ff",
    [supports_oklch]: "oklch(91.2% 0.1082 262.9)"
  },
  dark4: {
    "default": "#002660",
    [supports_oklch]: "oklch(28.1% 0.1164 254.6)"
  },
  lightA4: {
    "default": "#cce3ff",
    [supports_p3]: "color(display-p3 0.5686 0.7451 1 / 0.4)"
  },
  darkA4: {
    "default": "#005afe5a",
    [supports_p3]: "color(display-p3 0.051 0.3569 1 / 0.335)"
  },
  light5: {
    "default": "#c0dbff",
    [supports_oklch]: "oklch(88.9% 0.1366 262.9)"
  },
  dark5: {
    "default": "#002c70",
    [supports_oklch]: "oklch(31.1% 0.1309 254.6)"
  },
  lightA5: {
    "default": "#c0dbff",
    [supports_p3]: "color(display-p3 0.4627 0.6667 1 / 0.4)"
  },
  darkA5: {
    "default": "#005bfd6b",
    [supports_p3]: "color(display-p3 0.0784 0.3647 1 / 0.4)"
  },
  light6: {
    "default": "#b5d3ff",
    [supports_oklch]: "oklch(86.5% 0.1647 262.9)"
  },
  dark6: {
    "default": "#038",
    [supports_oklch]: "oklch(34.6% 0.1576 254.6)"
  },
  lightA6: {
    "default": "#b5d3ff",
    [supports_p3]: "color(display-p3 0 0.1961 1 / 0.2)"
  },
  darkA6: {
    "default": "#0059fe84",
    [supports_p3]: "color(display-p3 0.1059 0.3569 1 / 0.494)"
  },
  light7: {
    "default": "#a3c7ff",
    [supports_oklch]: "oklch(83% 0.2081 262.9)"
  },
  dark7: {
    "default": "#0040a1",
    [supports_oklch]: "oklch(39.8% 0.1913 254.6)"
  },
  lightA7: {
    "default": "#a3c7ff",
    [supports_p3]: "color(display-p3 0.0039 0.3451 0.9843 / 0.32)"
  },
  darkA7: {
    "default": "#0061fe9e",
    [supports_p3]: "color(display-p3 0.1333 0.3922 1 / 0.592)"
  },
  light8: {
    "default": "#84b3ff",
    [supports_oklch]: "oklch(77% 0.2844 262.9)"
  },
  dark8: {
    "default": "#005acf",
    [supports_oklch]: "oklch(49% 0.2475 254.6)"
  },
  lightA8: {
    "default": "#84b3ff",
    [supports_p3]: "color(display-p3 0 0.3294 0.9725 / 0.432)"
  },
  darkA8: {
    "default": "#006dfece",
    [supports_p3]: "color(display-p3 0.1765 0.4392 1 / 0.776)"
  },
  light9: {
    "default": "#367aff",
    [supports_oklch]: "oklch(62.1% 0.2919 262.9)"
  },
  dark9: {
    "default": "#0067e8",
    [supports_oklch]: "oklch(53.7% 0.2409 254.6)"
  },
  lightA9: {
    "default": "#367aff",
    [supports_p3]: "color(display-p3 0 0.2667 0.9608 / 0.712)"
  },
  darkA9: {
    "default": "#0070fee8",
    [supports_p3]: "color(display-p3 0.1882 0.4471 1 / 0.874)"
  },
  light10: {
    "default": "#2069ff",
    [supports_oklch]: "oklch(58.5% 0.2841 262.9)"
  },
  dark10: {
    "default": "#0075fb",
    [supports_oklch]: "oklch(58.3% 0.2249 254.6)"
  },
  lightA10: {
    "default": "#2069ff",
    [supports_p3]: "color(display-p3 0 0.251 0.9608 / 0.784)"
  },
  darkA10: {
    "default": "#0077fffb",
    [supports_p3]: "color(display-p3 0.2039 0.4706 1 / 0.947)"
  },
  light11: {
    "default": "#0045e4",
    [supports_oklch]: "oklch(47.9% 0.245 262.9)"
  },
  dark11: {
    "default": "#71b6ff",
    [supports_oklch]: "oklch(76.8% 0.165 254.6)"
  },
  lightA11: {
    "default": "#0045e4",
    [supports_p3]: "color(display-p3 0 0.1843 0.8431 / 0.896)"
  },
  darkA11: {
    "default": "#71b6ff",
    [supports_p3]: "color(display-p3 0.5176 0.7216 1 / 0.976)"
  },
  light12: {
    "default": "#000070",
    [supports_oklch]: "oklch(24.1% 0.1738 262.9)"
  },
  dark12: {
    "default": "#daf0ff",
    [supports_oklch]: "oklch(94.9% 0.0445 254.6)"
  },
  lightA12: {
    "default": "#000070",
    [supports_p3]: "color(display-p3 0 0 0.4196)"
  },
  darkA12: {
    "default": "#daf0ff",
    [supports_p3]: "color(display-p3 0.8784 0.9451 1 / 0.992)"
  }
});
