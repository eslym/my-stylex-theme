import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const defaultSurfaceColors = stylex.defineVars({
  light1: {
    "default": "#f5f7fa",
    [supports_oklch]: "oklch(97.5% 0.0046 257.3)"
  },
  dark1: {
    "default": "#060a10",
    [supports_oklch]: "oklch(14.5% 0.0153 256.8)"
  },
  lightA1: {
    "default": "#267bfa06",
    [supports_p3]: "color(display-p3 0 0.3922 0.9804 / 0.02)"
  },
  darkA1: {
    "default": "#000be507",
    [supports_p3]: "color(display-p3 0 0.0431 0.9765 / 0.021)"
  },
  light2: {
    "default": "#f0f4fa",
    [supports_oklch]: "oklch(96.5% 0.0093 257.3)"
  },
  dark2: {
    "default": "#13181f",
    [supports_oklch]: "oklch(20.8% 0.0157 256.8)"
  },
  lightA2: {
    "default": "#136ffa0b",
    [supports_p3]: "color(display-p3 0 0.3294 0.8745 / 0.036)"
  },
  darkA2: {
    "default": "#73adfe16",
    [supports_p3]: "color(display-p3 0.5176 0.7098 0.9961 / 0.082)"
  },
  light3: {
    "default": "#e4ebf4",
    [supports_oklch]: "oklch(93.7% 0.014 257.3)"
  },
  dark3: {
    "default": "#1b222c",
    [supports_oklch]: "oklch(25.1% 0.022 256.8)"
  },
  lightA3: {
    "default": "#0754b817",
    [supports_p3]: "color(display-p3 0 0.2824 0.6549 / 0.084)"
  },
  darkA3: {
    "default": "#83b4fb24",
    [supports_p3]: "color(display-p3 0.5647 0.7373 1 / 0.135)"
  },
  light4: {
    "default": "#dae3ef",
    [supports_oklch]: "oklch(91.2% 0.0188 257.3)"
  },
  dark4: {
    "default": "#202a37",
    [supports_oklch]: "oklch(28.1% 0.0282 256.8)"
  },
  lightA4: {
    "default": "#0349a521",
    [supports_p3]: "color(display-p3 0 0.2314 0.5882 / 0.12)"
  },
  darkA4: {
    "default": "#82b8ff2f",
    [supports_p3]: "color(display-p3 0.5647 0.7373 1 / 0.18)"
  },
  light5: {
    "default": "#d1dbea",
    [supports_oklch]: "oklch(88.9% 0.0236 257.3)"
  },
  dark5: {
    "default": "#263141",
    [supports_oklch]: "oklch(31.1% 0.0317 256.8)"
  },
  lightA5: {
    "default": "#023e992a",
    [supports_p3]: "color(display-p3 0 0.2039 0.5569 / 0.156)"
  },
  darkA5: {
    "default": "#86b6fc3a",
    [supports_p3]: "color(display-p3 0.5725 0.7333 1 / 0.221)"
  },
  light6: {
    "default": "#c7d4e6",
    [supports_oklch]: "oklch(86.5% 0.0286 257.3)"
  },
  dark6: {
    "default": "#2d3a4d",
    [supports_oklch]: "oklch(34.6% 0.0382 256.8)"
  },
  lightA6: {
    "default": "#05449a35",
    [supports_p3]: "color(display-p3 0 0.2235 0.5412 / 0.196)"
  },
  darkA6: {
    "default": "#8ab9ff46",
    [supports_p3]: "color(display-p3 0.6 0.749 1 / 0.266)"
  },
  light7: {
    "default": "#b9c9df",
    [supports_oklch]: "oklch(83% 0.0361 257.3)"
  },
  dark7: {
    "default": "#374860",
    [supports_oklch]: "oklch(39.8% 0.0464 256.8)"
  },
  lightA7: {
    "default": "#03409443",
    [supports_p3]: "color(display-p3 0 0.1922 0.5255 / 0.248)"
  },
  darkA7: {
    "default": "#8abafe5a",
    [supports_p3]: "color(display-p3 0.5882 0.7451 1 / 0.343)"
  },
  light8: {
    "default": "#a1b6d4",
    [supports_oklch]: "oklch(77% 0.0494 257.3)"
  },
  dark8: {
    "default": "#4a6282",
    [supports_oklch]: "oklch(49% 0.06 256.8)"
  },
  lightA8: {
    "default": "#013c905b",
    [supports_p3]: "color(display-p3 0.0039 0.1882 0.5098 / 0.34)"
  },
  darkA8: {
    "default": "#8dbeff7d",
    [supports_p3]: "color(display-p3 0.6078 0.7569 1 / 0.478)"
  },
  light9: {
    "default": "#7388a5",
    [supports_oklch]: "oklch(62.1% 0.0507 257.3)"
  },
  dark9: {
    "default": "#586f90",
    [supports_oklch]: "oklch(53.7% 0.0584 256.8)"
  },
  lightA9: {
    "default": "#00275d8a",
    [supports_p3]: "color(display-p3 0 0.1216 0.3255 / 0.524)"
  },
  darkA9: {
    "default": "#98c1fe8c",
    [supports_p3]: "color(display-p3 0.6471 0.7725 1 / 0.535)"
  },
  light10: {
    "default": "#697d99",
    [supports_oklch]: "oklch(58.5% 0.0495 257.3)"
  },
  dark10: {
    "default": "#677d9c",
    [supports_oklch]: "oklch(58.3% 0.0545 256.8)"
  },
  lightA10: {
    "default": "#00235394",
    [supports_p3]: "color(display-p3 0 0.1059 0.2941 / 0.564)"
  },
  darkA10: {
    "default": "#a6cbff98",
    [supports_p3]: "color(display-p3 0.6941 0.8078 1 / 0.584)"
  },
  light11: {
    "default": "#4e5e76",
    [supports_oklch]: "oklch(47.9% 0.043 257.3)"
  },
  dark11: {
    "default": "#a4b5cd",
    [supports_oklch]: "oklch(76.8% 0.04 256.8)"
  },
  lightA11: {
    "default": "#01183bb0",
    [supports_p3]: "color(display-p3 0 0.0745 0.2039 / 0.676)"
  },
  darkA11: {
    "default": "#cce1ffcb",
    [supports_p3]: "color(display-p3 0.8235 0.8863 1 / 0.788)"
  },
  light12: {
    "default": "#16202e",
    [supports_oklch]: "oklch(24.1% 0.0306 257.3)"
  },
  dark12: {
    "default": "#eaeef5",
    [supports_oklch]: "oklch(94.9% 0.0108 256.8)"
  },
  lightA12: {
    "default": "#000b1ae9",
    [supports_p3]: "color(display-p3 0 0.0353 0.0902 / 0.904)"
  },
  darkA12: {
    "default": "#f4f8fff5",
    [supports_p3]: "color(display-p3 0.9647 0.9765 1 / 0.956)"
  }
});
