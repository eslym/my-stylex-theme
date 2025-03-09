import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const defaultAccentColors = stylex.defineVars({
  light1: {
    "default": "#f6f7f8",
    [supports_oklch]: "oklch(97.6% 0.0023 257.3)"
  },
  dark1: {
    "default": "#080a0d",
    [supports_oklch]: "oklch(14.5% 0.0071 256.8)"
  },
  lightA1: {
    "default": "#2f629505",
    [supports_p3]: "color(display-p3 0 0.2471 0.4902 / 0.016)"
  },
  darkA1: {
    "default": "#000aca04",
    [supports_p3]: "color(display-p3 0 0.0431 0.9451 / 0.013)"
  },
  light2: {
    "default": "#f1f3f6",
    [supports_oklch]: "oklch(96.4% 0.0045 257.3)"
  },
  dark2: {
    "default": "#15181b",
    [supports_oklch]: "oklch(20.7% 0.0078 256.8)"
  },
  lightA2: {
    "default": "#1548940a",
    [supports_p3]: "color(display-p3 0 0.2196 0.5451 / 0.036)"
  },
  darkA2: {
    "default": "#a6d1fb12",
    [supports_p3]: "color(display-p3 0.7137 0.8235 0.9922 / 0.07)"
  },
  light3: {
    "default": "#e7ebf1",
    [supports_oklch]: "oklch(93.9% 0.0099 257.3)"
  },
  dark3: {
    "default": "#1e242b",
    [supports_oklch]: "oklch(25.7% 0.0163 256.8)"
  },
  lightA3: {
    "default": "#083b8814",
    [supports_p3]: "color(display-p3 0 0.1647 0.4392 / 0.072)"
  },
  darkA3: {
    "default": "#9cc8fb23",
    [supports_p3]: "color(display-p3 0.6706 0.8196 1 / 0.131)"
  },
  light4: {
    "default": "#dce3ec",
    [supports_oklch]: "oklch(91.3% 0.0144 257.3)"
  },
  dark4: {
    "default": "#252c37",
    [supports_oklch]: "oklch(29.2% 0.0227 256.8)"
  },
  lightA4: {
    "default": "#043d871f",
    [supports_p3]: "color(display-p3 0 0.2039 0.4745 / 0.116)"
  },
  darkA4: {
    "default": "#9dc3ff2f",
    [supports_p3]: "color(display-p3 0.651 0.7804 1 / 0.18)"
  },
  light5: {
    "default": "#d2dae6",
    [supports_oklch]: "oklch(88.7% 0.0186 257.3)"
  },
  dark5: {
    "default": "#2c3542",
    [supports_oklch]: "oklch(32.7% 0.0254 256.8)"
  },
  lightA5: {
    "default": "#02337e29",
    [supports_p3]: "color(display-p3 0 0.1765 0.4549 / 0.156)"
  },
  darkA5: {
    "default": "#9dc4fc3b",
    [supports_p3]: "color(display-p3 0.6667 0.7922 1 / 0.225)"
  },
  light6: {
    "default": "#c7d1df",
    [supports_oklch]: "oklch(85.7% 0.0232 257.3)"
  },
  dark6: {
    "default": "#36404e",
    [supports_oklch]: "oklch(36.8% 0.028 256.8)"
  },
  lightA6: {
    "default": "#05357935",
    [supports_p3]: "color(display-p3 0 0.1608 0.4235 / 0.196)"
  },
  darkA6: {
    "default": "#a9ccff47",
    [supports_p3]: "color(display-p3 0.698 0.8157 1 / 0.274)"
  },
  light7: {
    "default": "#b7c3d6",
    [supports_oklch]: "oklch(81.5% 0.0291 257.3)"
  },
  dark7: {
    "default": "#434f60",
    [supports_oklch]: "oklch(42.4% 0.0318 256.8)"
  },
  lightA7: {
    "default": "#032f7545",
    [supports_p3]: "color(display-p3 0 0.1529 0.4078 / 0.26)"
  },
  darkA7: {
    "default": "#accefe5a",
    [supports_p3]: "color(display-p3 0.7137 0.8275 1 / 0.343)"
  },
  light8: {
    "default": "#9eafc7",
    [supports_oklch]: "oklch(74.9% 0.0395 257.3)"
  },
  dark8: {
    "default": "#59687d",
    [supports_oklch]: "oklch(51.3% 0.0389 256.8)"
  },
  lightA8: {
    "default": "#012f705e",
    [supports_p3]: "color(display-p3 0 0.1451 0.4 / 0.356)"
  },
  darkA8: {
    "default": "#b2d2ff78",
    [supports_p3]: "color(display-p3 0.7373 0.8392 1 / 0.462)"
  },
  light9: {
    "default": "#45556c",
    [supports_oklch]: "oklch(44.6% 0.043 257.3)"
  },
  dark9: {
    "default": "#90a1b9",
    [supports_oklch]: "oklch(70.4% 0.04 256.8)"
  },
  lightA9: {
    "default": "#001636b9",
    [supports_p3]: "color(display-p3 0 0.0706 0.1882 / 0.712)"
  },
  darkA9: {
    "default": "#c5dcfeb7",
    [supports_p3]: "color(display-p3 0.8 0.8706 1 / 0.707)"
  },
  light10: {
    "default": "#37465c",
    [supports_oklch]: "oklch(39.1% 0.043 257.3)"
  },
  dark10: {
    "default": "#8596ad",
    [supports_oklch]: "oklch(66.7% 0.04 256.8)"
  },
  lightA10: {
    "default": "#001330c7",
    [supports_p3]: "color(display-p3 0 0.0627 0.1647 / 0.768)"
  },
  darkA10: {
    "default": "#c3dcffaa",
    [supports_p3]: "color(display-p3 0.7922 0.8706 1 / 0.658)"
  },
  light11: {
    "default": "#506178",
    [supports_oklch]: "oklch(48.7% 0.043 257.3)"
  },
  dark11: {
    "default": "#a5b7cf",
    [supports_oklch]: "oklch(77.4% 0.04 256.8)"
  },
  lightA11: {
    "default": "#011a3cae",
    [supports_p3]: "color(display-p3 0 0.0784 0.2078 / 0.668)"
  },
  darkA11: {
    "default": "#cae0fece",
    [supports_p3]: "color(display-p3 0.8196 0.8863 1 / 0.796)"
  },
  light12: {
    "default": "#202935",
    [supports_oklch]: "oklch(27.7% 0.0255 257.3)"
  },
  dark12: {
    "default": "#e2eaf7",
    [supports_oklch]: "oklch(93.5% 0.0188 256.8)"
  },
  lightA12: {
    "default": "#010c19df",
    [supports_p3]: "color(display-p3 0 0.0314 0.0824 / 0.864)"
  },
  darkA12: {
    "default": "#e9f2fff7",
    [supports_p3]: "color(display-p3 0.9216 0.9529 1 / 0.964)"
  }
});
