import stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const radixColors = stylex.defineVars({
  surface1: {
    default: "light-dark(#f5f7fa, #060a10)",
    [supports_oklch]: "light-dark(oklch(97.5% 0.0046 257.3), oklch(14.5% 0.0153 256.8))",
  },
  surfaceLight1: {
    default: "#f5f7fa",
    [supports_oklch]: "oklch(97.5% 0.0046 257.3)",
  },
  surfaceDark1: {
    default: "#060a10",
    [supports_oklch]: "oklch(14.5% 0.0153 256.8)",
  },
  surfaceA1: {
    default: "light-dark(#267bfa06, #000be507)",
    [supports_p3]: "light-dark(color(display-p3 0 0.3922 0.9804 / 0.02), color(display-p3 0 0.0431 0.9765 / 0.021))",
  },
  surfaceLightA1: {
    default: "#267bfa06",
    [supports_p3]: "color(display-p3 0 0.3922 0.9804 / 0.02)",
  },
  surfaceDarkA1: {
    default: "#000be507",
    [supports_p3]: "color(display-p3 0 0.0431 0.9765 / 0.021)",
  },
  accent1: {
    default: "light-dark(#f6f7f8, #080a0d)",
    [supports_oklch]: "light-dark(oklch(97.6% 0.0023 257.3), oklch(14.5% 0.0071 256.8))",
  },
  accentLight1: {
    default: "#f6f7f8",
    [supports_oklch]: "oklch(97.6% 0.0023 257.3)",
  },
  accentDark1: {
    default: "#080a0d",
    [supports_oklch]: "oklch(14.5% 0.0071 256.8)",
  },
  accentA1: {
    default: "light-dark(#2f629505, #000aca04)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2471 0.4902 / 0.016), color(display-p3 0 0.0431 0.9451 / 0.013))",
  },
  accentLightA1: {
    default: "#2f629505",
    [supports_p3]: "color(display-p3 0 0.2471 0.4902 / 0.016)",
  },
  accentDarkA1: {
    default: "#000aca04",
    [supports_p3]: "color(display-p3 0 0.0431 0.9451 / 0.013)",
  },
  blackA1: {
    default: "rgba(0, 0, 0, 0.05)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.05)",
  },
  whiteA1: {
    default: "rgba(255, 255, 255, 0.05)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.05)",
  },
  surface2: {
    default: "light-dark(#f0f4fa, #13181f)",
    [supports_oklch]: "light-dark(oklch(96.5% 0.0093 257.3), oklch(20.8% 0.0157 256.8))",
  },
  surfaceLight2: {
    default: "#f0f4fa",
    [supports_oklch]: "oklch(96.5% 0.0093 257.3)",
  },
  surfaceDark2: {
    default: "#13181f",
    [supports_oklch]: "oklch(20.8% 0.0157 256.8)",
  },
  surfaceA2: {
    default: "light-dark(#136ffa0b, #73adfe16)",
    [supports_p3]: "light-dark(color(display-p3 0 0.3294 0.8745 / 0.036), color(display-p3 0.5176 0.7098 0.9961 / 0.082))",
  },
  surfaceLightA2: {
    default: "#136ffa0b",
    [supports_p3]: "color(display-p3 0 0.3294 0.8745 / 0.036)",
  },
  surfaceDarkA2: {
    default: "#73adfe16",
    [supports_p3]: "color(display-p3 0.5176 0.7098 0.9961 / 0.082)",
  },
  accent2: {
    default: "light-dark(#f1f3f6, #15181b)",
    [supports_oklch]: "light-dark(oklch(96.4% 0.0045 257.3), oklch(20.7% 0.0078 256.8))",
  },
  accentLight2: {
    default: "#f1f3f6",
    [supports_oklch]: "oklch(96.4% 0.0045 257.3)",
  },
  accentDark2: {
    default: "#15181b",
    [supports_oklch]: "oklch(20.7% 0.0078 256.8)",
  },
  accentA2: {
    default: "light-dark(#1548940a, #a6d1fb12)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2196 0.5451 / 0.036), color(display-p3 0.7137 0.8235 0.9922 / 0.07))",
  },
  accentLightA2: {
    default: "#1548940a",
    [supports_p3]: "color(display-p3 0 0.2196 0.5451 / 0.036)",
  },
  accentDarkA2: {
    default: "#a6d1fb12",
    [supports_p3]: "color(display-p3 0.7137 0.8235 0.9922 / 0.07)",
  },
  blackA2: {
    default: "rgba(0, 0, 0, 0.1)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.1)",
  },
  whiteA2: {
    default: "rgba(255, 255, 255, 0.1)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.1)",
  },
  surface3: {
    default: "light-dark(#e4ebf4, #1b222c)",
    [supports_oklch]: "light-dark(oklch(93.7% 0.014 257.3), oklch(25.1% 0.022 256.8))",
  },
  surfaceLight3: {
    default: "#e4ebf4",
    [supports_oklch]: "oklch(93.7% 0.014 257.3)",
  },
  surfaceDark3: {
    default: "#1b222c",
    [supports_oklch]: "oklch(25.1% 0.022 256.8)",
  },
  surfaceA3: {
    default: "light-dark(#0754b817, #83b4fb24)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2824 0.6549 / 0.084), color(display-p3 0.5647 0.7373 1 / 0.135))",
  },
  surfaceLightA3: {
    default: "#0754b817",
    [supports_p3]: "color(display-p3 0 0.2824 0.6549 / 0.084)",
  },
  surfaceDarkA3: {
    default: "#83b4fb24",
    [supports_p3]: "color(display-p3 0.5647 0.7373 1 / 0.135)",
  },
  accent3: {
    default: "light-dark(#e7ebf1, #1e242b)",
    [supports_oklch]: "light-dark(oklch(93.9% 0.0099 257.3), oklch(25.7% 0.0163 256.8))",
  },
  accentLight3: {
    default: "#e7ebf1",
    [supports_oklch]: "oklch(93.9% 0.0099 257.3)",
  },
  accentDark3: {
    default: "#1e242b",
    [supports_oklch]: "oklch(25.7% 0.0163 256.8)",
  },
  accentA3: {
    default: "light-dark(#083b8814, #9cc8fb23)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1647 0.4392 / 0.072), color(display-p3 0.6706 0.8196 1 / 0.131))",
  },
  accentLightA3: {
    default: "#083b8814",
    [supports_p3]: "color(display-p3 0 0.1647 0.4392 / 0.072)",
  },
  accentDarkA3: {
    default: "#9cc8fb23",
    [supports_p3]: "color(display-p3 0.6706 0.8196 1 / 0.131)",
  },
  blackA3: {
    default: "rgba(0, 0, 0, 0.15)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.15)",
  },
  whiteA3: {
    default: "rgba(255, 255, 255, 0.15)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.15)",
  },
  surface4: {
    default: "light-dark(#dae3ef, #202a37)",
    [supports_oklch]: "light-dark(oklch(91.2% 0.0188 257.3), oklch(28.1% 0.0282 256.8))",
  },
  surfaceLight4: {
    default: "#dae3ef",
    [supports_oklch]: "oklch(91.2% 0.0188 257.3)",
  },
  surfaceDark4: {
    default: "#202a37",
    [supports_oklch]: "oklch(28.1% 0.0282 256.8)",
  },
  surfaceA4: {
    default: "light-dark(#0349a521, #82b8ff2f)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2314 0.5882 / 0.12), color(display-p3 0.5647 0.7373 1 / 0.18))",
  },
  surfaceLightA4: {
    default: "#0349a521",
    [supports_p3]: "color(display-p3 0 0.2314 0.5882 / 0.12)",
  },
  surfaceDarkA4: {
    default: "#82b8ff2f",
    [supports_p3]: "color(display-p3 0.5647 0.7373 1 / 0.18)",
  },
  accent4: {
    default: "light-dark(#dce3ec, #252c37)",
    [supports_oklch]: "light-dark(oklch(91.3% 0.0144 257.3), oklch(29.2% 0.0227 256.8))",
  },
  accentLight4: {
    default: "#dce3ec",
    [supports_oklch]: "oklch(91.3% 0.0144 257.3)",
  },
  accentDark4: {
    default: "#252c37",
    [supports_oklch]: "oklch(29.2% 0.0227 256.8)",
  },
  accentA4: {
    default: "light-dark(#043d871f, #9dc3ff2f)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2039 0.4745 / 0.116), color(display-p3 0.651 0.7804 1 / 0.18))",
  },
  accentLightA4: {
    default: "#043d871f",
    [supports_p3]: "color(display-p3 0 0.2039 0.4745 / 0.116)",
  },
  accentDarkA4: {
    default: "#9dc3ff2f",
    [supports_p3]: "color(display-p3 0.651 0.7804 1 / 0.18)",
  },
  blackA4: {
    default: "rgba(0, 0, 0, 0.2)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.2)",
  },
  whiteA4: {
    default: "rgba(255, 255, 255, 0.2)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.2)",
  },
  surface5: {
    default: "light-dark(#d1dbea, #263141)",
    [supports_oklch]: "light-dark(oklch(88.9% 0.0236 257.3), oklch(31.1% 0.0317 256.8))",
  },
  surfaceLight5: {
    default: "#d1dbea",
    [supports_oklch]: "oklch(88.9% 0.0236 257.3)",
  },
  surfaceDark5: {
    default: "#263141",
    [supports_oklch]: "oklch(31.1% 0.0317 256.8)",
  },
  surfaceA5: {
    default: "light-dark(#023e992a, #86b6fc3a)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2039 0.5569 / 0.156), color(display-p3 0.5725 0.7333 1 / 0.221))",
  },
  surfaceLightA5: {
    default: "#023e992a",
    [supports_p3]: "color(display-p3 0 0.2039 0.5569 / 0.156)",
  },
  surfaceDarkA5: {
    default: "#86b6fc3a",
    [supports_p3]: "color(display-p3 0.5725 0.7333 1 / 0.221)",
  },
  accent5: {
    default: "light-dark(#d2dae6, #2c3542)",
    [supports_oklch]: "light-dark(oklch(88.7% 0.0186 257.3), oklch(32.7% 0.0254 256.8))",
  },
  accentLight5: {
    default: "#d2dae6",
    [supports_oklch]: "oklch(88.7% 0.0186 257.3)",
  },
  accentDark5: {
    default: "#2c3542",
    [supports_oklch]: "oklch(32.7% 0.0254 256.8)",
  },
  accentA5: {
    default: "light-dark(#02337e29, #9dc4fc3b)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1765 0.4549 / 0.156), color(display-p3 0.6667 0.7922 1 / 0.225))",
  },
  accentLightA5: {
    default: "#02337e29",
    [supports_p3]: "color(display-p3 0 0.1765 0.4549 / 0.156)",
  },
  accentDarkA5: {
    default: "#9dc4fc3b",
    [supports_p3]: "color(display-p3 0.6667 0.7922 1 / 0.225)",
  },
  blackA5: {
    default: "rgba(0, 0, 0, 0.3)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.3)",
  },
  whiteA5: {
    default: "rgba(255, 255, 255, 0.3)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.3)",
  },
  surface6: {
    default: "light-dark(#c7d4e6, #2d3a4d)",
    [supports_oklch]: "light-dark(oklch(86.5% 0.0286 257.3), oklch(34.6% 0.0382 256.8))",
  },
  surfaceLight6: {
    default: "#c7d4e6",
    [supports_oklch]: "oklch(86.5% 0.0286 257.3)",
  },
  surfaceDark6: {
    default: "#2d3a4d",
    [supports_oklch]: "oklch(34.6% 0.0382 256.8)",
  },
  surfaceA6: {
    default: "light-dark(#05449a35, #8ab9ff46)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2235 0.5412 / 0.196), color(display-p3 0.6 0.749 1 / 0.266))",
  },
  surfaceLightA6: {
    default: "#05449a35",
    [supports_p3]: "color(display-p3 0 0.2235 0.5412 / 0.196)",
  },
  surfaceDarkA6: {
    default: "#8ab9ff46",
    [supports_p3]: "color(display-p3 0.6 0.749 1 / 0.266)",
  },
  accent6: {
    default: "light-dark(#c7d1df, #36404e)",
    [supports_oklch]: "light-dark(oklch(85.7% 0.0232 257.3), oklch(36.8% 0.028 256.8))",
  },
  accentLight6: {
    default: "#c7d1df",
    [supports_oklch]: "oklch(85.7% 0.0232 257.3)",
  },
  accentDark6: {
    default: "#36404e",
    [supports_oklch]: "oklch(36.8% 0.028 256.8)",
  },
  accentA6: {
    default: "light-dark(#05357935, #a9ccff47)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1608 0.4235 / 0.196), color(display-p3 0.698 0.8157 1 / 0.274))",
  },
  accentLightA6: {
    default: "#05357935",
    [supports_p3]: "color(display-p3 0 0.1608 0.4235 / 0.196)",
  },
  accentDarkA6: {
    default: "#a9ccff47",
    [supports_p3]: "color(display-p3 0.698 0.8157 1 / 0.274)",
  },
  blackA6: {
    default: "rgba(0, 0, 0, 0.4)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.4)",
  },
  whiteA6: {
    default: "rgba(255, 255, 255, 0.4)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.4)",
  },
  surface7: {
    default: "light-dark(#b9c9df, #374860)",
    [supports_oklch]: "light-dark(oklch(83% 0.0361 257.3), oklch(39.8% 0.0464 256.8))",
  },
  surfaceLight7: {
    default: "#b9c9df",
    [supports_oklch]: "oklch(83% 0.0361 257.3)",
  },
  surfaceDark7: {
    default: "#374860",
    [supports_oklch]: "oklch(39.8% 0.0464 256.8)",
  },
  surfaceA7: {
    default: "light-dark(#03409443, #8abafe5a)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1922 0.5255 / 0.248), color(display-p3 0.5882 0.7451 1 / 0.343))",
  },
  surfaceLightA7: {
    default: "#03409443",
    [supports_p3]: "color(display-p3 0 0.1922 0.5255 / 0.248)",
  },
  surfaceDarkA7: {
    default: "#8abafe5a",
    [supports_p3]: "color(display-p3 0.5882 0.7451 1 / 0.343)",
  },
  accent7: {
    default: "light-dark(#b7c3d6, #434f60)",
    [supports_oklch]: "light-dark(oklch(81.5% 0.0291 257.3), oklch(42.4% 0.0318 256.8))",
  },
  accentLight7: {
    default: "#b7c3d6",
    [supports_oklch]: "oklch(81.5% 0.0291 257.3)",
  },
  accentDark7: {
    default: "#434f60",
    [supports_oklch]: "oklch(42.4% 0.0318 256.8)",
  },
  accentA7: {
    default: "light-dark(#032f7545, #accefe5a)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1529 0.4078 / 0.26), color(display-p3 0.7137 0.8275 1 / 0.343))",
  },
  accentLightA7: {
    default: "#032f7545",
    [supports_p3]: "color(display-p3 0 0.1529 0.4078 / 0.26)",
  },
  accentDarkA7: {
    default: "#accefe5a",
    [supports_p3]: "color(display-p3 0.7137 0.8275 1 / 0.343)",
  },
  blackA7: {
    default: "rgba(0, 0, 0, 0.5)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.5)",
  },
  whiteA7: {
    default: "rgba(255, 255, 255, 0.5)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.5)",
  },
  surface8: {
    default: "light-dark(#a1b6d4, #4a6282)",
    [supports_oklch]: "light-dark(oklch(77% 0.0494 257.3), oklch(49% 0.06 256.8))",
  },
  surfaceLight8: {
    default: "#a1b6d4",
    [supports_oklch]: "oklch(77% 0.0494 257.3)",
  },
  surfaceDark8: {
    default: "#4a6282",
    [supports_oklch]: "oklch(49% 0.06 256.8)",
  },
  surfaceA8: {
    default: "light-dark(#013c905b, #8dbeff7d)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.1882 0.5098 / 0.34), color(display-p3 0.6078 0.7569 1 / 0.478))",
  },
  surfaceLightA8: {
    default: "#013c905b",
    [supports_p3]: "color(display-p3 0.0039 0.1882 0.5098 / 0.34)",
  },
  surfaceDarkA8: {
    default: "#8dbeff7d",
    [supports_p3]: "color(display-p3 0.6078 0.7569 1 / 0.478)",
  },
  accent8: {
    default: "light-dark(#9eafc7, #59687d)",
    [supports_oklch]: "light-dark(oklch(74.9% 0.0395 257.3), oklch(51.3% 0.0389 256.8))",
  },
  accentLight8: {
    default: "#9eafc7",
    [supports_oklch]: "oklch(74.9% 0.0395 257.3)",
  },
  accentDark8: {
    default: "#59687d",
    [supports_oklch]: "oklch(51.3% 0.0389 256.8)",
  },
  accentA8: {
    default: "light-dark(#012f705e, #b2d2ff78)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1451 0.4 / 0.356), color(display-p3 0.7373 0.8392 1 / 0.462))",
  },
  accentLightA8: {
    default: "#012f705e",
    [supports_p3]: "color(display-p3 0 0.1451 0.4 / 0.356)",
  },
  accentDarkA8: {
    default: "#b2d2ff78",
    [supports_p3]: "color(display-p3 0.7373 0.8392 1 / 0.462)",
  },
  blackA8: {
    default: "rgba(0, 0, 0, 0.6)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.6)",
  },
  whiteA8: {
    default: "rgba(255, 255, 255, 0.6)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.6)",
  },
  surface9: {
    default: "light-dark(#7388a5, #586f90)",
    [supports_oklch]: "light-dark(oklch(62.1% 0.0507 257.3), oklch(53.7% 0.0584 256.8))",
  },
  surfaceLight9: {
    default: "#7388a5",
    [supports_oklch]: "oklch(62.1% 0.0507 257.3)",
  },
  surfaceDark9: {
    default: "#586f90",
    [supports_oklch]: "oklch(53.7% 0.0584 256.8)",
  },
  surfaceA9: {
    default: "light-dark(#00275d8a, #98c1fe8c)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1216 0.3255 / 0.524), color(display-p3 0.6471 0.7725 1 / 0.535))",
  },
  surfaceLightA9: {
    default: "#00275d8a",
    [supports_p3]: "color(display-p3 0 0.1216 0.3255 / 0.524)",
  },
  surfaceDarkA9: {
    default: "#98c1fe8c",
    [supports_p3]: "color(display-p3 0.6471 0.7725 1 / 0.535)",
  },
  accent9: {
    default: "light-dark(#45556c, #90a1b9)",
    [supports_oklch]: "light-dark(oklch(44.6% 0.043 257.3), oklch(70.4% 0.04 256.8))",
  },
  accentLight9: {
    default: "#45556c",
    [supports_oklch]: "oklch(44.6% 0.043 257.3)",
  },
  accentDark9: {
    default: "#90a1b9",
    [supports_oklch]: "oklch(70.4% 0.04 256.8)",
  },
  accentA9: {
    default: "light-dark(#001636b9, #c5dcfeb7)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0706 0.1882 / 0.712), color(display-p3 0.8 0.8706 1 / 0.707))",
  },
  accentLightA9: {
    default: "#001636b9",
    [supports_p3]: "color(display-p3 0 0.0706 0.1882 / 0.712)",
  },
  accentDarkA9: {
    default: "#c5dcfeb7",
    [supports_p3]: "color(display-p3 0.8 0.8706 1 / 0.707)",
  },
  blackA9: {
    default: "rgba(0, 0, 0, 0.7)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.7)",
  },
  whiteA9: {
    default: "rgba(255, 255, 255, 0.7)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.7)",
  },
  surface10: {
    default: "light-dark(#697d99, #677d9c)",
    [supports_oklch]: "light-dark(oklch(58.5% 0.0495 257.3), oklch(58.3% 0.0545 256.8))",
  },
  surfaceLight10: {
    default: "#697d99",
    [supports_oklch]: "oklch(58.5% 0.0495 257.3)",
  },
  surfaceDark10: {
    default: "#677d9c",
    [supports_oklch]: "oklch(58.3% 0.0545 256.8)",
  },
  surfaceA10: {
    default: "light-dark(#00235394, #a6cbff98)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1059 0.2941 / 0.564), color(display-p3 0.6941 0.8078 1 / 0.584))",
  },
  surfaceLightA10: {
    default: "#00235394",
    [supports_p3]: "color(display-p3 0 0.1059 0.2941 / 0.564)",
  },
  surfaceDarkA10: {
    default: "#a6cbff98",
    [supports_p3]: "color(display-p3 0.6941 0.8078 1 / 0.584)",
  },
  accent10: {
    default: "light-dark(#37465c, #8596ad)",
    [supports_oklch]: "light-dark(oklch(39.1% 0.043 257.3), oklch(66.7% 0.04 256.8))",
  },
  accentLight10: {
    default: "#37465c",
    [supports_oklch]: "oklch(39.1% 0.043 257.3)",
  },
  accentDark10: {
    default: "#8596ad",
    [supports_oklch]: "oklch(66.7% 0.04 256.8)",
  },
  accentA10: {
    default: "light-dark(#001330c7, #c3dcffaa)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0627 0.1647 / 0.768), color(display-p3 0.7922 0.8706 1 / 0.658))",
  },
  accentLightA10: {
    default: "#001330c7",
    [supports_p3]: "color(display-p3 0 0.0627 0.1647 / 0.768)",
  },
  accentDarkA10: {
    default: "#c3dcffaa",
    [supports_p3]: "color(display-p3 0.7922 0.8706 1 / 0.658)",
  },
  blackA10: {
    default: "rgba(0, 0, 0, 0.8)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.8)",
  },
  whiteA10: {
    default: "rgba(255, 255, 255, 0.8)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.8)",
  },
  surface11: {
    default: "light-dark(#4e5e76, #a4b5cd)",
    [supports_oklch]: "light-dark(oklch(47.9% 0.043 257.3), oklch(76.8% 0.04 256.8))",
  },
  surfaceLight11: {
    default: "#4e5e76",
    [supports_oklch]: "oklch(47.9% 0.043 257.3)",
  },
  surfaceDark11: {
    default: "#a4b5cd",
    [supports_oklch]: "oklch(76.8% 0.04 256.8)",
  },
  surfaceA11: {
    default: "light-dark(#01183bb0, #cce1ffcb)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0745 0.2039 / 0.676), color(display-p3 0.8235 0.8863 1 / 0.788))",
  },
  surfaceLightA11: {
    default: "#01183bb0",
    [supports_p3]: "color(display-p3 0 0.0745 0.2039 / 0.676)",
  },
  surfaceDarkA11: {
    default: "#cce1ffcb",
    [supports_p3]: "color(display-p3 0.8235 0.8863 1 / 0.788)",
  },
  accent11: {
    default: "light-dark(#506178, #a5b7cf)",
    [supports_oklch]: "light-dark(oklch(48.7% 0.043 257.3), oklch(77.4% 0.04 256.8))",
  },
  accentLight11: {
    default: "#506178",
    [supports_oklch]: "oklch(48.7% 0.043 257.3)",
  },
  accentDark11: {
    default: "#a5b7cf",
    [supports_oklch]: "oklch(77.4% 0.04 256.8)",
  },
  accentA11: {
    default: "light-dark(#011a3cae, #cae0fece)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0784 0.2078 / 0.668), color(display-p3 0.8196 0.8863 1 / 0.796))",
  },
  accentLightA11: {
    default: "#011a3cae",
    [supports_p3]: "color(display-p3 0 0.0784 0.2078 / 0.668)",
  },
  accentDarkA11: {
    default: "#cae0fece",
    [supports_p3]: "color(display-p3 0.8196 0.8863 1 / 0.796)",
  },
  blackA11: {
    default: "rgba(0, 0, 0, 0.9)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.9)",
  },
  whiteA11: {
    default: "rgba(255, 255, 255, 0.9)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.9)",
  },
  surface12: {
    default: "light-dark(#16202e, #eaeef5)",
    [supports_oklch]: "light-dark(oklch(24.1% 0.0306 257.3), oklch(94.9% 0.0108 256.8))",
  },
  surfaceLight12: {
    default: "#16202e",
    [supports_oklch]: "oklch(24.1% 0.0306 257.3)",
  },
  surfaceDark12: {
    default: "#eaeef5",
    [supports_oklch]: "oklch(94.9% 0.0108 256.8)",
  },
  surfaceA12: {
    default: "light-dark(#000b1ae9, #f4f8fff5)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0353 0.0902 / 0.904), color(display-p3 0.9647 0.9765 1 / 0.956))",
  },
  surfaceLightA12: {
    default: "#000b1ae9",
    [supports_p3]: "color(display-p3 0 0.0353 0.0902 / 0.904)",
  },
  surfaceDarkA12: {
    default: "#f4f8fff5",
    [supports_p3]: "color(display-p3 0.9647 0.9765 1 / 0.956)",
  },
  accent12: {
    default: "light-dark(#202935, #e2eaf7)",
    [supports_oklch]: "light-dark(oklch(27.7% 0.0255 257.3), oklch(93.5% 0.0188 256.8))",
  },
  accentLight12: {
    default: "#202935",
    [supports_oklch]: "oklch(27.7% 0.0255 257.3)",
  },
  accentDark12: {
    default: "#e2eaf7",
    [supports_oklch]: "oklch(93.5% 0.0188 256.8)",
  },
  accentA12: {
    default: "light-dark(#010c19df, #e9f2fff7)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0314 0.0824 / 0.864), color(display-p3 0.9216 0.9529 1 / 0.964))",
  },
  accentLightA12: {
    default: "#010c19df",
    [supports_p3]: "color(display-p3 0 0.0314 0.0824 / 0.864)",
  },
  accentDarkA12: {
    default: "#e9f2fff7",
    [supports_p3]: "color(display-p3 0.9216 0.9529 1 / 0.964)",
  },
  blackA12: {
    default: "rgba(0, 0, 0, 0.95)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.95)",
  },
  whiteA12: {
    default: "rgba(255, 255, 255, 0.95)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.95)",
  },
});
