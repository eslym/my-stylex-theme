import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const primaryAccentColors = stylex.defineVars({
  light1: {
    "default": "#f7f6fa",
    [supports_oklch]: "oklch(97.6% 0.0046 293)"
  },
  dark1: {
    "default": "#0b0717",
    [supports_oklch]: "oklch(14.5% 0.035 293.5)"
  },
  lightA1: {
    "default": "#622ffb05",
    [supports_p3]: "color(display-p3 0.2471 0 0.9804 / 0.016)"
  },
  darkA1: {
    "default": "#1d00f70e",
    [supports_p3]: "color(display-p3 0.0392 0 1 / 0.049)"
  },
  light2: {
    "default": "#f4f2fd",
    [supports_oklch]: "oklch(96.5% 0.0141 293)"
  },
  dark2: {
    "default": "#181328",
    [supports_oklch]: "oklch(20.4% 0.0422 293.5)"
  },
  lightA2: {
    "default": "#f0edff99",
    [supports_p3]: "color(display-p3 0.9216 0.902 1 / 0.4)"
  },
  darkA2: {
    "default": "#7a52fa20",
    [supports_p3]: "color(display-p3 0.4706 0.3373 0.9961 / 0.119)"
  },
  light3: {
    "default": "#ede9ff",
    [supports_oklch]: "oklch(94.3% 0.031 293)"
  },
  dark3: {
    "default": "#291a4c",
    [supports_oklch]: "oklch(26.7% 0.089 293.5)"
  },
  lightA3: {
    "default": "#ede9ff",
    [supports_p3]: "color(display-p3 0.8902 0.8706 1 / 0.6)"
  },
  darkA3: {
    "default": "#7d46fe45",
    [supports_p3]: "color(display-p3 0.4824 0.298 1 / 0.258)"
  },
  light4: {
    "default": "#e3dcff",
    [supports_oklch]: "oklch(91.4% 0.0612 293)"
  },
  dark4: {
    "default": "#361c68",
    [supports_oklch]: "oklch(31% 0.1244 293.5)"
  },
  lightA4: {
    "default": "#e3dcff",
    [supports_p3]: "color(display-p3 0.7451 0.6863 1 / 0.4)"
  },
  darkA4: {
    "default": "#7d39ff62",
    [supports_p3]: "color(display-p3 0.4667 0.2431 1 / 0.368)"
  },
  light5: {
    "default": "#daceff",
    [supports_oklch]: "oklch(88.2% 0.0882 293)"
  },
  dark5: {
    "default": "#402576",
    [supports_oklch]: "oklch(34.7% 0.1322 293.5)"
  },
  lightA5: {
    "default": "#daceff",
    [supports_p3]: "color(display-p3 0.3137 0.1176 1 / 0.2)"
  },
  darkA5: {
    "default": "#8447fd71",
    [supports_p3]: "color(display-p3 0.502 0.298 1 / 0.425)"
  },
  light6: {
    "default": "#cdbdff",
    [supports_oklch]: "oklch(84.1% 0.1128 293)"
  },
  dark6: {
    "default": "#4b3085",
    [supports_oklch]: "oklch(38.9% 0.1368 293.5)"
  },
  lightA6: {
    "default": "#cdbdff",
    [supports_p3]: "color(display-p3 0.1961 0 0.9804 / 0.24)"
  },
  darkA6: {
    "default": "#8b55fe81",
    [supports_p3]: "color(display-p3 0.5373 0.3569 1 / 0.482)"
  },
  light7: {
    "default": "#bca6ff",
    [supports_oklch]: "oklch(78.3% 0.1419 293)"
  },
  dark7: {
    "default": "#5a3d9c",
    [supports_oklch]: "oklch(44.4% 0.1487 293.5)"
  },
  lightA7: {
    "default": "#bca6ff",
    [supports_p3]: "color(display-p3 0.2039 0.0039 0.9686 / 0.332)"
  },
  darkA7: {
    "default": "#9160ff98",
    [supports_p3]: "color(display-p3 0.5569 0.3961 1 / 0.576)"
  },
  light8: {
    "default": "#a784ff",
    [supports_oklch]: "oklch(70.6% 0.1873 293)"
  },
  dark8: {
    "default": "#704cc1",
    [supports_oklch]: "oklch(51.6% 0.175 293.5)"
  },
  lightA8: {
    "default": "#a784ff",
    [supports_p3]: "color(display-p3 0.2353 0 0.9569 / 0.468)"
  },
  darkA8: {
    "default": "#9262febf",
    [supports_p3]: "color(display-p3 0.5686 0.4118 1 / 0.719)"
  },
  light9: {
    "default": "#7f22fe",
    [supports_oklch]: "oklch(54.1% 0.281 293)"
  },
  dark9: {
    "default": "#a684ff",
    [supports_oklch]: "oklch(70.2% 0.183 293.5)"
  },
  lightA9: {
    "default": "#6100ffcc",
    [supports_p3]: "color(display-p3 0.3569 0 0.9529 / 0.836)"
  },
  darkA9: {
    "default": "#a684ff",
    [supports_p3]: "color(display-p3 0.651 0.5373 1 / 0.968)"
  },
  light10: {
    "default": "#7020e0",
    [supports_oklch]: "oklch(49.4% 0.253 293)"
  },
  dark10: {
    "default": "#9b78f7",
    [supports_oklch]: "oklch(66.5% 0.183 293.5)"
  },
  lightA10: {
    "default": "#5d01dddf",
    [supports_p3]: "color(display-p3 0.302 0 0.8196 / 0.848)"
  },
  darkA10: {
    "default": "#a07cfff7",
    [supports_p3]: "color(display-p3 0.6235 0.502 1 / 0.935)"
  },
  light11: {
    "default": "#6e1cdd",
    [supports_oklch]: "oklch(48.6% 0.253 293)"
  },
  dark11: {
    "default": "#bca3ff",
    [supports_oklch]: "oklch(77.8% 0.183 293.5)"
  },
  lightA11: {
    "default": "#5d01dae3",
    [supports_p3]: "color(display-p3 0.302 0 0.8078 / 0.86)"
  },
  darkA11: {
    "default": "#bca3ff",
    [supports_p3]: "color(display-p3 0.7412 0.6588 1 / 0.976)"
  },
  light12: {
    "default": "#391077",
    [supports_oklch]: "oklch(31.4% 0.1559 293)"
  },
  dark12: {
    "default": "#e3dbff",
    [supports_oklch]: "oklch(91.2% 0.0606 293.5)"
  },
  lightA12: {
    "default": "#2c006eef",
    [supports_p3]: "color(display-p3 0.1412 0 0.4039 / 0.924)"
  },
  darkA12: {
    "default": "#e3dbff",
    [supports_p3]: "color(display-p3 0.898 0.8706 1 / 0.988)"
  }
});
