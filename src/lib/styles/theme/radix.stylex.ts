import stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const radixColors = stylex.defineVars({
  surface1: {
    default: "light-dark(#f5f7f9, #05070c)",
    [supports_oklch]: "light-dark(oklch(97.4% 0.004 257.3), oklch(12.9% 0.0134 256.8))",
  },
  surfaceLight1: {
    default: "#f5f7f9",
    [supports_oklch]: "oklch(97.4% 0.004 257.3)",
  },
  surfaceDark1: {
    default: "#05070c",
    [supports_oklch]: "oklch(12.9% 0.0134 256.8)",
  },
  surfaceA1: {
    default: "light-dark(#393b3d04, #c2460004)",
    [supports_p3]: "light-dark(color(display-p3 0.0706 0.0784 0.0863 / 0.013), color(display-p3 0.9922 0.5137 0 / 0.008))",
  },
  surfaceLightA1: {
    default: "#393b3d04",
    [supports_p3]: "color(display-p3 0.0706 0.0784 0.0863 / 0.013)",
  },
  surfaceDarkA1: {
    default: "#c2460004",
    [supports_p3]: "color(display-p3 0.9922 0.5137 0 / 0.008)",
  },
  accent1: {
    default: "light-dark(#f6f7f8, #060709)",
    [supports_oklch]: "light-dark(oklch(97.5% 0.002 257.3), oklch(12.9% 0.0066 256.8))",
  },
  accentLight1: {
    default: "#f6f7f8",
    [supports_oklch]: "oklch(97.5% 0.002 257.3)",
  },
  accentDark1: {
    default: "#060709",
    [supports_oklch]: "oklch(12.9% 0.0066 256.8)",
  },
  accentA1: {
    default: "light-dark(#93623005, #ce3a0005)",
    [supports_p3]: "light-dark(color(display-p3 0.4863 0.2471 0.0118 / 0.016), color(display-p3 0.9922 0.3529 0 / 0.012))",
  },
  accentLightA1: {
    default: "#93623005",
    [supports_p3]: "color(display-p3 0.4863 0.2471 0.0118 / 0.016)",
  },
  accentDarkA1: {
    default: "#ce3a0005",
    [supports_p3]: "color(display-p3 0.9922 0.3529 0 / 0.012)",
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
    default: "light-dark(#f0f3f9, #13171d)",
    [supports_oklch]: "light-dark(oklch(96.4% 0.0081 257.3), oklch(20.5% 0.0138 256.8))",
  },
  surfaceLight2: {
    default: "#f0f3f9",
    [supports_oklch]: "oklch(96.4% 0.0081 257.3)",
  },
  surfaceDark2: {
    default: "#13171d",
    [supports_oklch]: "oklch(20.5% 0.0138 256.8)",
  },
  surfaceA2: {
    default: "light-dark(#1634a709, #f3f76c12)",
    [supports_p3]: "light-dark(color(display-p3 0.0275 0.0353 0.451 / 0.029), color(display-p3 0.9804 0.9922 0.4275 / 0.069))",
  },
  surfaceLightA2: {
    default: "#1634a709",
    [supports_p3]: "color(display-p3 0.0275 0.0353 0.451 / 0.029)",
  },
  surfaceDarkA2: {
    default: "#f3f76c12",
    [supports_p3]: "color(display-p3 0.9804 0.9922 0.4275 / 0.069)",
  },
  accent2: {
    default: "light-dark(#f1f3f5, #15171a)",
    [supports_oklch]: "light-dark(oklch(96.3% 0.004 257.3), oklch(20.5% 0.0072 256.8))",
  },
  accentLight2: {
    default: "#f1f3f5",
    [supports_oklch]: "oklch(96.3% 0.004 257.3)",
  },
  accentDark2: {
    default: "#15171a",
    [supports_oklch]: "oklch(20.5% 0.0072 256.8)",
  },
  accentA2: {
    default: "light-dark(#191b1d08, #f5df3e14)",
    [supports_p3]: "light-dark(color(display-p3 0.0275 0.0353 0.0431 / 0.029), color(display-p3 0.9961 0.9529 0.3059 / 0.072))",
  },
  accentLightA2: {
    default: "#191b1d08",
    [supports_p3]: "color(display-p3 0.0275 0.0353 0.0431 / 0.029)",
  },
  accentDarkA2: {
    default: "#f5df3e14",
    [supports_p3]: "color(display-p3 0.9961 0.9529 0.3059 / 0.072)",
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
    default: "light-dark(#e5eaf2, #1c222b)",
    [supports_oklch]: "light-dark(oklch(93.6% 0.0122 257.3), oklch(24.9% 0.0193 256.8))",
  },
  surfaceLight3: {
    default: "#e5eaf2",
    [supports_oklch]: "oklch(93.6% 0.0122 257.3)",
  },
  surfaceDark3: {
    default: "#1c222b",
    [supports_oklch]: "oklch(24.9% 0.0193 256.8)",
  },
  surfaceA3: {
    default: "light-dark(#062e7d14, #e7fdc71d)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.1216 0.4 / 0.073), color(display-p3 0.9176 0.9961 0.7804 / 0.113))",
  },
  surfaceLightA3: {
    default: "#062e7d14",
    [supports_p3]: "color(display-p3 0.0078 0.1216 0.4 / 0.073)",
  },
  surfaceDarkA3: {
    default: "#e7fdc71d",
    [supports_p3]: "color(display-p3 0.9176 0.9961 0.7804 / 0.113)",
  },
  accent3: {
    default: "light-dark(#e7ebf0, #1e232a)",
    [supports_oklch]: "light-dark(oklch(93.7% 0.0086 257.3), oklch(25.4% 0.0146 256.8))",
  },
  accentLight3: {
    default: "#e7ebf0",
    [supports_oklch]: "oklch(93.7% 0.0086 257.3)",
  },
  accentDark3: {
    default: "#1e232a",
    [supports_oklch]: "oklch(25.4% 0.0146 256.8)",
  },
  accentA3: {
    default: "light-dark(#08265212, #f0fdb91e)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.0784 0.2039 / 0.065), color(display-p3 0.9529 0.9961 0.7255 / 0.117))",
  },
  accentLightA3: {
    default: "#08265212",
    [supports_p3]: "color(display-p3 0.0078 0.0784 0.2039 / 0.065)",
  },
  accentDarkA3: {
    default: "#f0fdb91e",
    [supports_p3]: "color(display-p3 0.9529 0.9961 0.7255 / 0.117)",
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
    default: "light-dark(#dbe2ed, #212a35)",
    [supports_oklch]: "light-dark(oklch(91% 0.0164 257.3), oklch(28.1% 0.0248 256.8))",
  },
  surfaceLight4: {
    default: "#dbe2ed",
    [supports_oklch]: "oklch(91% 0.0164 257.3)",
  },
  surfaceDark4: {
    default: "#212a35",
    [supports_oklch]: "oklch(28.1% 0.0248 256.8)",
  },
  surfaceA4: {
    default: "light-dark(#022e7d1e, #d8ffe625)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.149 0.4314 / 0.113), color(display-p3 0.8784 1 0.898 / 0.145))",
  },
  surfaceLightA4: {
    default: "#022e7d1e",
    [supports_p3]: "color(display-p3 0.0039 0.149 0.4314 / 0.113)",
  },
  surfaceDarkA4: {
    default: "#d8ffe625",
    [supports_p3]: "color(display-p3 0.8784 1 0.898 / 0.145)",
  },
  accent4: {
    default: "light-dark(#dde2ea, #252c35)",
    [supports_oklch]: "light-dark(oklch(91.2% 0.0125 257.3), oklch(28.9% 0.0203 256.8))",
  },
  accentLight4: {
    default: "#dde2ea",
    [supports_oklch]: "oklch(91.2% 0.0125 257.3)",
  },
  accentDark4: {
    default: "#252c35",
    [supports_oklch]: "oklch(28.9% 0.0203 256.8)",
  },
  accentA4: {
    default: "light-dark(#031f591c, #e7ffdc27)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.0863 0.2784 / 0.105), color(display-p3 0.9098 1 0.8549 / 0.153))",
  },
  accentLightA4: {
    default: "#031f591c",
    [supports_p3]: "color(display-p3 0.0039 0.0863 0.2784 / 0.105)",
  },
  accentDarkA4: {
    default: "#e7ffdc27",
    [supports_p3]: "color(display-p3 0.9098 1 0.8549 / 0.153)",
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
    default: "light-dark(#d2dbe8, #27313f)",
    [supports_oklch]: "light-dark(oklch(88.8% 0.0206 257.3), oklch(31% 0.0279 256.8))",
  },
  surfaceLight5: {
    default: "#d2dbe8",
    [supports_oklch]: "oklch(88.8% 0.0206 257.3)",
  },
  surfaceDark5: {
    default: "#27313f",
    [supports_oklch]: "oklch(31% 0.0279 256.8)",
  },
  surfaceA5: {
    default: "light-dark(#06357d28, #d4fafa2d)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.1451 0.4275 / 0.146), color(display-p3 0.8745 1 0.9961 / 0.173))",
  },
  surfaceLightA5: {
    default: "#06357d28",
    [supports_p3]: "color(display-p3 0.0078 0.1451 0.4275 / 0.146)",
  },
  surfaceDarkA5: {
    default: "#d4fafa2d",
    [supports_p3]: "color(display-p3 0.8745 1 0.9961 / 0.173)",
  },
  accent5: {
    default: "light-dark(#d3dae4, #2c3440)",
    [supports_oklch]: "light-dark(oklch(88.5% 0.0162 257.3), oklch(32.4% 0.0227 256.8))",
  },
  accentLight5: {
    default: "#d3dae4",
    [supports_oklch]: "oklch(88.5% 0.0162 257.3)",
  },
  accentDark5: {
    default: "#2c3440",
    [supports_oklch]: "oklch(32.4% 0.0227 256.8)",
  },
  accentA5: {
    default: "light-dark(#07296027, #e1fbf130)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.1176 0.3176 / 0.146), color(display-p3 0.9255 1 0.9569 / 0.185))",
  },
  accentLightA5: {
    default: "#07296027",
    [supports_p3]: "color(display-p3 0.0078 0.1176 0.3176 / 0.146)",
  },
  accentDarkA5: {
    default: "#e1fbf130",
    [supports_p3]: "color(display-p3 0.9255 1 0.9569 / 0.185)",
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
    default: "light-dark(#c8d3e3, #2e3a4b)",
    [supports_oklch]: "light-dark(oklch(86.4% 0.0249 257.3), oklch(34.5% 0.0335 256.8))",
  },
  surfaceLight6: {
    default: "#c8d3e3",
    [supports_oklch]: "oklch(86.4% 0.0249 257.3)",
  },
  surfaceDark6: {
    default: "#2e3a4b",
    [supports_oklch]: "oklch(34.5% 0.0335 256.8)",
  },
  surfaceA6: {
    default: "light-dark(#04347c32, #c3ebfc3a)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.1569 0.4196 / 0.186), color(display-p3 0.8 0.9333 1 / 0.224))",
  },
  surfaceLightA6: {
    default: "#04347c32",
    [supports_p3]: "color(display-p3 0.0039 0.1569 0.4196 / 0.186)",
  },
  surfaceDarkA6: {
    default: "#c3ebfc3a",
    [supports_p3]: "color(display-p3 0.8 0.9333 1 / 0.224)",
  },
  accent6: {
    default: "light-dark(#c7d0dd, #363f4b)",
    [supports_oklch]: "light-dark(oklch(85.6% 0.0202 257.3), oklch(36.4% 0.0252 256.8))",
  },
  accentLight6: {
    default: "#c7d0dd",
    [supports_oklch]: "oklch(85.6% 0.0202 257.3)",
  },
  accentDark6: {
    default: "#363f4b",
    [supports_oklch]: "oklch(36.4% 0.0252 256.8)",
  },
  accentA6: {
    default: "light-dark(#03286133, #e2fcf83b)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.1098 0.3294 / 0.19), color(display-p3 0.9216 1 0.9804 / 0.229))",
  },
  accentLightA6: {
    default: "#03286133",
    [supports_p3]: "color(display-p3 0.0039 0.1098 0.3294 / 0.19)",
  },
  accentDarkA6: {
    default: "#e2fcf83b",
    [supports_p3]: "color(display-p3 0.9216 1 0.9804 / 0.229)",
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
    default: "light-dark(#bac8dc, #39485d)",
    [supports_oklch]: "light-dark(oklch(82.9% 0.0315 257.3), oklch(39.7% 0.0407 256.8))",
  },
  surfaceLight7: {
    default: "#bac8dc",
    [supports_oklch]: "oklch(82.9% 0.0315 257.3)",
  },
  surfaceDark7: {
    default: "#39485d",
    [supports_oklch]: "oklch(39.7% 0.0407 256.8)",
  },
  surfaceA7: {
    default: "light-dark(#01337d40, #b9e1ff4d)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.1529 0.4314 / 0.238), color(display-p3 0.7647 0.898 1 / 0.297))",
  },
  surfaceLightA7: {
    default: "#01337d40",
    [supports_p3]: "color(display-p3 0.0039 0.1529 0.4314 / 0.238)",
  },
  surfaceDarkA7: {
    default: "#b9e1ff4d",
    [supports_p3]: "color(display-p3 0.7647 0.898 1 / 0.297)",
  },
  accent7: {
    default: "light-dark(#b8c3d3, #434e5d)",
    [supports_oklch]: "light-dark(oklch(81.4% 0.0254 257.3), oklch(41.9% 0.0288 256.8))",
  },
  accentLight7: {
    default: "#b8c3d3",
    [supports_oklch]: "oklch(81.4% 0.0254 257.3)",
  },
  accentDark7: {
    default: "#434e5d",
    [supports_oklch]: "oklch(41.9% 0.0288 256.8)",
  },
  accentA7: {
    default: "light-dark(#01265e42, #daf5ff4d)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1137 0.3137 / 0.25), color(display-p3 0.8745 0.9647 1 / 0.301))",
  },
  accentLightA7: {
    default: "#01265e42",
    [supports_p3]: "color(display-p3 0 0.1137 0.3137 / 0.25)",
  },
  accentDarkA7: {
    default: "#daf5ff4d",
    [supports_p3]: "color(display-p3 0.8745 0.9647 1 / 0.301)",
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
    default: "light-dark(#a3b5d0, #4d627e)",
    [supports_oklch]: "light-dark(oklch(76.8% 0.043 257.3), oklch(49% 0.0527 256.8))",
  },
  surfaceLight8: {
    default: "#a3b5d0",
    [supports_oklch]: "oklch(76.8% 0.043 257.3)",
  },
  surfaceDark8: {
    default: "#4d627e",
    [supports_oklch]: "oklch(49% 0.0527 256.8)",
  },
  surfaceA8: {
    default: "light-dark(#02327d58, #aad4fd72)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.1529 0.4431 / 0.331), color(display-p3 0.7098 0.8392 1 / 0.438))",
  },
  surfaceLightA8: {
    default: "#02327d58",
    [supports_p3]: "color(display-p3 0.0039 0.1529 0.4431 / 0.331)",
  },
  surfaceDarkA8: {
    default: "#aad4fd72",
    [supports_p3]: "color(display-p3 0.7098 0.8392 1 / 0.438)",
  },
  accent8: {
    default: "light-dark(#a0afc3, #59677a)",
    [supports_oklch]: "light-dark(oklch(74.8% 0.0344 257.3), oklch(50.8% 0.0355 256.8))",
  },
  accentLight8: {
    default: "#a0afc3",
    [supports_oklch]: "oklch(74.8% 0.0344 257.3)",
  },
  accentDark8: {
    default: "#59677a",
    [supports_oklch]: "oklch(50.8% 0.0355 256.8)",
  },
  accentA8: {
    default: "light-dark(#02285d5b, #cee9ff6d)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.1255 0.3137 / 0.343), color(display-p3 0.8392 0.9294 1 / 0.421))",
  },
  accentLightA8: {
    default: "#02285d5b",
    [supports_p3]: "color(display-p3 0.0039 0.1255 0.3137 / 0.343)",
  },
  accentDarkA8: {
    default: "#cee9ff6d",
    [supports_p3]: "color(display-p3 0.8392 0.9294 1 / 0.421)",
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
    default: "light-dark(#7587a1, #5b6f8c)",
    [supports_oklch]: "light-dark(oklch(61.9% 0.0442 257.3), oklch(53.7% 0.0513 256.8))",
  },
  surfaceLight9: {
    default: "#7587a1",
    [supports_oklch]: "oklch(61.9% 0.0442 257.3)",
  },
  surfaceDark9: {
    default: "#5b6f8c",
    [supports_oklch]: "oklch(53.7% 0.0513 256.8)",
  },
  surfaceA9: {
    default: "light-dark(#00215087, #b2d6ff81)",
    [supports_p3]: "light-dark(color(display-p3 0 0.102 0.2824 / 0.517), color(display-p3 0.7412 0.851 1 / 0.494))",
  },
  surfaceLightA9: {
    default: "#00215087",
    [supports_p3]: "color(display-p3 0 0.102 0.2824 / 0.517)",
  },
  surfaceDarkA9: {
    default: "#b2d6ff81",
    [supports_p3]: "color(display-p3 0.7412 0.851 1 / 0.494)",
  },
  accent9: {
    default: "light-dark(#475569, #94a3b8)",
    [supports_oklch]: "light-dark(oklch(44.6% 0.0374 257.3), oklch(71.1% 0.0351 256.8))",
  },
  accentLight9: {
    default: "#475569",
    [supports_oklch]: "oklch(44.6% 0.0374 257.3)",
  },
  accentDark9: {
    default: "#94a3b8",
    [supports_oklch]: "oklch(71.1% 0.0351 256.8)",
  },
  accentA9: {
    default: "light-dark(#00122eb6, #d4e8ffb1)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0549 0.1569 / 0.702), color(display-p3 0.8588 0.9216 1 / 0.687))",
  },
  accentLightA9: {
    default: "#00122eb6",
    [supports_p3]: "color(display-p3 0 0.0549 0.1569 / 0.702)",
  },
  accentDarkA9: {
    default: "#d4e8ffb1",
    [supports_p3]: "color(display-p3 0.8588 0.9216 1 / 0.687)",
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
    default: "light-dark(#6b7d95, #697d98)",
    [supports_oklch]: "light-dark(oklch(58.4% 0.0431 257.3), oklch(58.3% 0.0479 256.8))",
  },
  surfaceLight10: {
    default: "#6b7d95",
    [supports_oklch]: "oklch(58.4% 0.0431 257.3)",
  },
  surfaceDark10: {
    default: "#697d98",
    [supports_oklch]: "oklch(58.3% 0.0479 256.8)",
  },
  surfaceA10: {
    default: "light-dark(#001e4791, #bbdbff8e)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0941 0.2471 / 0.557), color(display-p3 0.7686 0.8627 1 / 0.55))",
  },
  surfaceLightA10: {
    default: "#001e4791",
    [supports_p3]: "color(display-p3 0 0.0941 0.2471 / 0.557)",
  },
  surfaceDarkA10: {
    default: "#bbdbff8e",
    [supports_p3]: "color(display-p3 0.7686 0.8627 1 / 0.55)",
  },
  accent10: {
    default: "light-dark(#384659, #8998ac)",
    [supports_oklch]: "light-dark(oklch(39.1% 0.0374 257.3), oklch(67.4% 0.0351 256.8))",
  },
  accentLight10: {
    default: "#384659",
    [supports_oklch]: "oklch(39.1% 0.0374 257.3)",
  },
  accentDark10: {
    default: "#8998ac",
    [supports_oklch]: "oklch(67.4% 0.0351 256.8)",
  },
  accentA10: {
    default: "light-dark(#01122bc6, #d4eaffa4)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0588 0.1412 / 0.763), color(display-p3 0.8588 0.9255 1 / 0.636))",
  },
  accentLightA10: {
    default: "#01122bc6",
    [supports_p3]: "color(display-p3 0 0.0588 0.1412 / 0.763)",
  },
  accentDarkA10: {
    default: "#d4eaffa4",
    [supports_p3]: "color(display-p3 0.8588 0.9255 1 / 0.636)",
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
    default: "light-dark(#505e72, #a6b5ca)",
    [supports_oklch]: "light-dark(oklch(47.8% 0.0374 257.3), oklch(76.8% 0.0351 256.8))",
  },
  surfaceLight11: {
    default: "#505e72",
    [supports_oklch]: "oklch(47.8% 0.0374 257.3)",
  },
  surfaceDark11: {
    default: "#a6b5ca",
    [supports_oklch]: "oklch(76.8% 0.0351 256.8)",
  },
  surfaceA11: {
    default: "light-dark(#001531ad, #d7e9ffc5)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0627 0.1647 / 0.666), color(display-p3 0.8627 0.9255 1 / 0.764))",
  },
  surfaceLightA11: {
    default: "#001531ad",
    [supports_p3]: "color(display-p3 0 0.0627 0.1647 / 0.666)",
  },
  surfaceDarkA11: {
    default: "#d7e9ffc5",
    [supports_p3]: "color(display-p3 0.8627 0.9255 1 / 0.764)",
  },
  accent11: {
    default: "light-dark(#526075, #a7b6cc)",
    [supports_oklch]: "light-dark(oklch(48.5% 0.0374 257.3), oklch(77.3% 0.0351 256.8))",
  },
  accentLight11: {
    default: "#526075",
    [supports_oklch]: "oklch(48.5% 0.0374 257.3)",
  },
  accentDark11: {
    default: "#a7b6cc",
    [supports_oklch]: "oklch(77.3% 0.0351 256.8)",
  },
  accentA11: {
    default: "light-dark(#001533ab, #d6e8ffc7)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0627 0.1725 / 0.658), color(display-p3 0.8588 0.9176 1 / 0.773))",
  },
  accentLightA11: {
    default: "#001533ab",
    [supports_p3]: "color(display-p3 0 0.0627 0.1725 / 0.658)",
  },
  accentDarkA11: {
    default: "#d6e8ffc7",
    [supports_p3]: "color(display-p3 0.8588 0.9176 1 / 0.773)",
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
    default: "light-dark(#17202c, #eaeef5)",
    [supports_oklch]: "light-dark(oklch(24.1% 0.0267 257.3), oklch(94.9% 0.0095 256.8))",
  },
  surfaceLight12: {
    default: "#17202c",
    [supports_oklch]: "oklch(24.1% 0.0267 257.3)",
  },
  surfaceDark12: {
    default: "#eaeef5",
    [supports_oklch]: "oklch(94.9% 0.0095 256.8)",
  },
  surfaceA12: {
    default: "light-dark(#010a17e8, #f4f8fef5)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0314 0.0784 / 0.9), color(display-p3 0.9686 0.9804 1 / 0.953))",
  },
  surfaceLightA12: {
    default: "#010a17e8",
    [supports_p3]: "color(display-p3 0 0.0314 0.0784 / 0.9)",
  },
  surfaceDarkA12: {
    default: "#f4f8fef5",
    [supports_p3]: "color(display-p3 0.9686 0.9804 1 / 0.953)",
  },
  accent12: {
    default: "light-dark(#212833, #e4ebf6)",
    [supports_oklch]: "light-dark(oklch(27.6% 0.0223 257.3), oklch(93.8% 0.0161 256.8))",
  },
  accentLight12: {
    default: "#212833",
    [supports_oklch]: "oklch(27.6% 0.0223 257.3)",
  },
  accentDark12: {
    default: "#e4ebf6",
    [supports_oklch]: "oklch(93.8% 0.0161 256.8)",
  },
  accentA12: {
    default: "light-dark(#010915de, #ecf4fef6)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0275 0.0667 / 0.863), color(display-p3 0.9373 0.9608 1 / 0.958))",
  },
  accentLightA12: {
    default: "#010915de",
    [supports_p3]: "color(display-p3 0 0.0275 0.0667 / 0.863)",
  },
  accentDarkA12: {
    default: "#ecf4fef6",
    [supports_p3]: "color(display-p3 0.9373 0.9608 1 / 0.958)",
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
