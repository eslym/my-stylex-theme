import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const secondaryAccentColors = stylex.defineVars({
  light1: {
    "default": "#f7f8f9",
    [supports_oklch]: "oklch(97.8% 0.0021 262.9)"
  },
  dark1: {
    "default": "#040a14",
    [supports_oklch]: "oklch(14.5% 0.0249 254.6)"
  },
  lightA1: {
    "default": "#3b7bbb04",
    [supports_p3]: "color(display-p3 0 0.3294 0.6549 / 0.012)"
  },
  darkA1: {
    "default": "#000bf20b",
    [supports_p3]: "color(display-p3 0 0.0431 0.9961 / 0.037)"
  },
  light2: {
    "default": "#f0f4fb",
    [supports_oklch]: "oklch(96.5% 0.0104 262.9)"
  },
  dark2: {
    "default": "#0e1824",
    [supports_oklch]: "oklch(20.5% 0.0287 254.6)"
  },
  lightA2: {
    "default": "#c8dcff33",
    [supports_p3]: "color(display-p3 0 0.3294 0.9843 / 0.036)"
  },
  darkA2: {
    "default": "#2f8af71c",
    [supports_p3]: "color(display-p3 0.2706 0.5725 0.9922 / 0.103)"
  },
  light3: {
    "default": "#e4ecfb",
    [supports_oklch]: "oklch(94.2% 0.0221 262.9)"
  },
  dark3: {
    "default": "#0d2745",
    [supports_oklch]: "oklch(27% 0.0652 254.6)"
  },
  lightA3: {
    "default": "#8cb4ff33",
    [supports_p3]: "color(display-p3 0 0.3294 0.9804 / 0.084)"
  },
  darkA3: {
    "default": "#1681fc3e",
    [supports_p3]: "color(display-p3 0.2078 0.5098 1 / 0.233)"
  },
  light4: {
    "default": "#d4e4ff",
    [supports_oklch]: "oklch(91.6% 0.0433 262.9)"
  },
  dark4: {
    "default": "#053161",
    [supports_oklch]: "oklch(31.5% 0.0963 254.6)"
  },
  lightA4: {
    "default": "#d4e4ff",
    [supports_p3]: "color(display-p3 0.7529 0.8314 1 / 0.6)"
  },
  darkA4: {
    "default": "#0078fe5b",
    [supports_p3]: "color(display-p3 0.1412 0.4706 1 / 0.343)"
  },
  light5: {
    "default": "#c2d9ff",
    [supports_oklch]: "oklch(88.2% 0.0653 262.9)"
  },
  dark5: {
    "default": "#0e3e73",
    [supports_oklch]: "oklch(36.3% 0.1046 254.6)"
  },
  lightA5: {
    "default": "#c2d9ff",
    [supports_p3]: "color(display-p3 0.4706 0.6471 1 / 0.4)"
  },
  darkA5: {
    "default": "#1382fd6e",
    [supports_p3]: "color(display-p3 0.2196 0.5255 1 / 0.413)"
  },
  light6: {
    "default": "#accbff",
    [supports_oklch]: "oklch(84.1% 0.0902 262.9)"
  },
  dark6: {
    "default": "#1b4c85",
    [supports_oklch]: "oklch(41.4% 0.1088 254.6)"
  },
  lightA6: {
    "default": "#accbff",
    [supports_p3]: "color(display-p3 0 0.0392 1 / 0.2)"
  },
  darkA6: {
    "default": "#2c8dfe81",
    [supports_p3]: "color(display-p3 0.2902 0.5647 1 / 0.486)"
  },
  light7: {
    "default": "#93b8ff",
    [supports_oklch]: "oklch(78.4% 0.1105 262.9)"
  },
  dark7: {
    "default": "#265c9b",
    [supports_oklch]: "oklch(47.2% 0.1174 254.6)"
  },
  lightA7: {
    "default": "#93b8ff",
    [supports_p3]: "color(display-p3 0 0.298 0.9725 / 0.384)"
  },
  darkA7: {
    "default": "#3a95ff97",
    [supports_p3]: "color(display-p3 0.3294 0.5961 1 / 0.572)"
  },
  light8: {
    "default": "#6f9efa",
    [supports_oklch]: "oklch(70.6% 0.1449 262.9)"
  },
  dark8: {
    "default": "#2f6eba",
    [supports_oklch]: "oklch(53.7% 0.1352 254.6)"
  },
  lightA8: {
    "default": "#0055fa8e",
    [supports_p3]: "color(display-p3 0 0.2745 0.9294 / 0.516)"
  },
  darkA8: {
    "default": "#3d94feb8",
    [supports_p3]: "color(display-p3 0.3451 0.6 1 / 0.694)"
  },
  light9: {
    "default": "#155dfc",
    [supports_oklch]: "oklch(54.6% 0.245 262.9)"
  },
  dark9: {
    "default": "#51a2ff",
    [supports_oklch]: "oklch(70.7% 0.165 254.6)"
  },
  lightA9: {
    "default": "#0000ff66",
    [supports_p3]: "color(display-p3 0 0.2275 0.949 / 0.824)"
  },
  darkA9: {
    "default": "#51a2ff",
    [supports_p3]: "color(display-p3 0.4118 0.6471 1 / 0.972)"
  },
  light10: {
    "default": "#1252df",
    [supports_oklch]: "oklch(50% 0.2236 262.9)"
  },
  dark10: {
    "default": "#4496f7",
    [supports_oklch]: "oklch(67% 0.165 254.6)"
  },
  lightA10: {
    "default": "#0045dded",
    [supports_p3]: "color(display-p3 0 0.1961 0.8196 / 0.844)"
  },
  darkA10: {
    "default": "#469bfff7",
    [supports_p3]: "color(display-p3 0.3725 0.6157 1 / 0.939)"
  },
  light11: {
    "default": "#0f4fdd",
    [supports_oklch]: "oklch(49.2% 0.2236 262.9)"
  },
  dark11: {
    "default": "#79b7ff",
    [supports_oklch]: "oklch(76.9% 0.1289 254.6)"
  },
  lightA11: {
    "default": "#0044dbf0",
    [supports_p3]: "color(display-p3 0 0.1922 0.8118 / 0.856)"
  },
  darkA11: {
    "default": "#79b7ff",
    [supports_p3]: "color(display-p3 0.5412 0.7255 1 / 0.976)"
  },
  light12: {
    "default": "#102c69",
    [supports_oklch]: "oklch(31.4% 0.1114 262.9)"
  },
  dark12: {
    "default": "#cbe3ff",
    [supports_oklch]: "oklch(90.8% 0.0483 254.6)"
  },
  lightA12: {
    "default": "#001e5fef",
    [supports_p3]: "color(display-p3 0 0.0863 0.3373 / 0.908)"
  },
  darkA12: {
    "default": "#cbe3ff",
    [supports_p3]: "color(display-p3 0.8275 0.898 1 / 0.988)"
  }
});
