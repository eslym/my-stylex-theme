import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const tertiaryAccentColors = stylex.defineVars({
  light1: {
    "default": "#f6f7f8",
    [supports_oklch]: "oklch(97.6% 0.0016 256.8)"
  },
  dark1: {
    "default": "#080a0d",
    [supports_oklch]: "oklch(14.5% 0.0072 261.3)"
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
    "default": "#f2f3f5",
    [supports_oklch]: "oklch(96.4% 0.0032 256.8)"
  },
  dark2: {
    "default": "#16181b",
    [supports_oklch]: "oklch(20.8% 0.0064 261.3)"
  },
  lightA2: {
    "default": "#18346d09",
    [supports_p3]: "color(display-p3 0 0.1255 0.3686 / 0.032)"
  },
  darkA2: {
    "default": "#b4d1fb12",
    [supports_p3]: "color(display-p3 0.7137 0.8235 0.9922 / 0.07)"
  },
  light3: {
    "default": "#e8ebef",
    [supports_oklch]: "oklch(93.8% 0.0069 256.8)"
  },
  dark3: {
    "default": "#202225",
    [supports_oklch]: "oklch(25.1% 0.0075 261.3)"
  },
  lightA3: {
    "default": "#09316713",
    [supports_p3]: "color(display-p3 0.0039 0.1176 0.349 / 0.068)"
  },
  darkA3: {
    "default": "#ccdef81d",
    [supports_p3]: "color(display-p3 0.8196 0.8902 0.9961 / 0.111)"
  },
  light4: {
    "default": "#dee3e9",
    [supports_oklch]: "oklch(91.3% 0.01 256.8)"
  },
  dark4: {
    "default": "#272a2e",
    [supports_oklch]: "oklch(28.2% 0.0085 261.3)"
  },
  lightA4: {
    "default": "#0430651d",
    [supports_p3]: "color(display-p3 0 0.149 0.3294 / 0.108)"
  },
  darkA4: {
    "default": "#cce0fb26",
    [supports_p3]: "color(display-p3 0.8392 0.8902 1 / 0.147)"
  },
  light5: {
    "default": "#d4dae2",
    [supports_oklch]: "oklch(88.7% 0.013 256.8)"
  },
  dark5: {
    "default": "#2f3136",
    [supports_oklch]: "oklch(31.3% 0.0088 261.3)"
  },
  lightA5: {
    "default": "#02295e27",
    [supports_p3]: "color(display-p3 0 0.1333 0.3216 / 0.148)"
  },
  darkA5: {
    "default": "#d8e3fe2e",
    [supports_p3]: "color(display-p3 0.8471 0.8902 1 / 0.18)"
  },
  light6: {
    "default": "#cad1db",
    [supports_oklch]: "oklch(85.7% 0.0162 256.8)"
  },
  dark6: {
    "default": "#383b3f",
    [supports_oklch]: "oklch(35.1% 0.0087 261.3)"
  },
  lightA6: {
    "default": "#01255931",
    [supports_p3]: "color(display-p3 0 0.1255 0.3137 / 0.188)"
  },
  darkA6: {
    "default": "#dceafc38",
    [supports_p3]: "color(display-p3 0.8902 0.9255 1 / 0.217)"
  },
  light7: {
    "default": "#bbc4d0",
    [supports_oklch]: "oklch(81.6% 0.0203 256.8)"
  },
  dark7: {
    "default": "#46494d",
    [supports_oklch]: "oklch(40.4% 0.0085 261.3)"
  },
  lightA7: {
    "default": "#03275641",
    [supports_p3]: "color(display-p3 0 0.1137 0.2902 / 0.244)"
  },
  darkA7: {
    "default": "#e5f0ff46",
    [supports_p3]: "color(display-p3 0.9137 0.9412 1 / 0.274)"
  },
  light8: {
    "default": "#a3afc0",
    [supports_oklch]: "oklch(75.1% 0.0276 256.8)"
  },
  dark8: {
    "default": "#606165",
    [supports_oklch]: "oklch(49.4% 0.0057 261.3)"
  },
  lightA8: {
    "default": "#01235459",
    [supports_p3]: "color(display-p3 0.0039 0.1176 0.2902 / 0.34)"
  },
  darkA8: {
    "default": "#f1f4ff5f",
    [supports_p3]: "color(display-p3 0.949 0.9569 1 / 0.372)"
  },
  light9: {
    "default": "#4a5565",
    [supports_oklch]: "oklch(44.6% 0.03 256.8)"
  },
  dark9: {
    "default": "#99a1af",
    [supports_oklch]: "oklch(70.7% 0.022 261.3)"
  },
  lightA9: {
    "default": "#001026b4",
    [supports_p3]: "color(display-p3 0 0.051 0.1373 / 0.696)"
  },
  darkA9: {
    "default": "#dfeaffac",
    [supports_p3]: "color(display-p3 0.8824 0.9255 1 / 0.67)"
  },
  light10: {
    "default": "#3b4656",
    [supports_oklch]: "oklch(39.1% 0.03 256.8)"
  },
  dark10: {
    "default": "#8e96a3",
    [supports_oklch]: "oklch(67% 0.022 261.3)"
  },
  lightA10: {
    "default": "#000f23c3",
    [supports_p3]: "color(display-p3 0 0.0471 0.1255 / 0.756)"
  },
  darkA10: {
    "default": "#dce9fea0",
    [supports_p3]: "color(display-p3 0.8784 0.9216 1 / 0.621)"
  },
  light11: {
    "default": "#556071",
    [supports_oklch]: "oklch(48.6% 0.03 256.8)"
  },
  dark11: {
    "default": "#aeb6c4",
    [supports_oklch]: "oklch(77.4% 0.022 261.3)"
  },
  lightA11: {
    "default": "#02122ca9",
    [supports_p3]: "color(display-p3 0 0.0549 0.1451 / 0.652)"
  },
  darkA11: {
    "default": "#e2edffc2",
    [supports_p3]: "color(display-p3 0.898 0.9333 1 / 0.756)"
  },
  light12: {
    "default": "#222830",
    [supports_oklch]: "oklch(27.4% 0.018 256.8)"
  },
  dark12: {
    "default": "#e5ecf8",
    [supports_oklch]: "oklch(94.2% 0.0174 261.3)"
  },
  lightA12: {
    "default": "#010811dd",
    [supports_p3]: "color(display-p3 0 0.0235 0.0549 / 0.86)"
  },
  darkA12: {
    "default": "#ebf3fff8",
    [supports_p3]: "color(display-p3 0.9333 0.9569 1 / 0.968)"
  }
});
