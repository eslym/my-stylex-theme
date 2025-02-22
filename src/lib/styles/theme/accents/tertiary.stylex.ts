import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentTertiary = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f6f7f8, #06070a)",
    [supports_oklch]: "light-dark(oklch(97.5% 0.0014 256.8), oklch(12.9% 0.0086 261.3))",
  },
  accentLight1: {
    default: "#f6f7f8",
    [supports_oklch]: "oklch(97.5% 0.0014 256.8)",
  },
  accentDark1: {
    default: "#06070a",
    [supports_oklch]: "oklch(12.9% 0.0086 261.3)",
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
  accent2: {
    default: "light-dark(#f2f3f5, #15171b)",
    [supports_oklch]: "light-dark(oklch(96.3% 0.0028 256.8), oklch(20.5% 0.0078 261.3))",
  },
  accentLight2: {
    default: "#f2f3f5",
    [supports_oklch]: "oklch(96.3% 0.0028 256.8)",
  },
  accentDark2: {
    default: "#15171b",
    [supports_oklch]: "oklch(20.5% 0.0078 261.3)",
  },
  accentA2: {
    default: "light-dark(#391b1d08, #f5df4a14)",
    [supports_p3]: "light-dark(color(display-p3 0.1333 0 0.0118 / 0.028), color(display-p3 0.9961 0.9529 0.3608 / 0.072))",
  },
  accentLightA2: {
    default: "#391b1d08",
    [supports_p3]: "color(display-p3 0.1333 0 0.0118 / 0.028)",
  },
  accentDarkA2: {
    default: "#f5df4a14",
    [supports_p3]: "color(display-p3 0.9961 0.9529 0.3608 / 0.072)",
  },
  accent3: {
    default: "light-dark(#e8eaee, #1f2226)",
    [supports_oklch]: "light-dark(oklch(93.7% 0.0061 256.8), oklch(24.9% 0.0094 261.3))",
  },
  accentLight3: {
    default: "#e8eaee",
    [supports_oklch]: "oklch(93.7% 0.0061 256.8)",
  },
  accentDark3: {
    default: "#1f2226",
    [supports_oklch]: "oklch(24.9% 0.0094 261.3)",
  },
  accentA3: {
    default: "light-dark(#080a2a11, #f9f4971e)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.0157 0.1451 / 0.065), color(display-p3 0.9922 0.9725 0.6275 / 0.116))",
  },
  accentLightA3: {
    default: "#080a2a11",
    [supports_p3]: "color(display-p3 0.0078 0.0157 0.1451 / 0.065)",
  },
  accentDarkA3: {
    default: "#f9f4971e",
    [supports_p3]: "color(display-p3 0.9922 0.9725 0.6275 / 0.116)",
  },
  accent4: {
    default: "light-dark(#dee2e8, #26292f)",
    [supports_oklch]: "light-dark(oklch(91.2% 0.0088 256.8), oklch(28.2% 0.0107 261.3))",
  },
  accentLight4: {
    default: "#dee2e8",
    [supports_oklch]: "oklch(91.2% 0.0088 256.8)",
  },
  accentDark4: {
    default: "#26292f",
    [supports_oklch]: "oklch(28.2% 0.0107 261.3)",
  },
  accentA4: {
    default: "light-dark(#0317401b, #fbf8bd25)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.051 0.1725 / 0.101), color(display-p3 1 0.9843 0.7451 / 0.143))",
  },
  accentLightA4: {
    default: "#0317401b",
    [supports_p3]: "color(display-p3 0.0039 0.051 0.1725 / 0.101)",
  },
  accentDarkA4: {
    default: "#fbf8bd25",
    [supports_p3]: "color(display-p3 1 0.9843 0.7451 / 0.143)",
  },
  accent5: {
    default: "light-dark(#d5dae1, #2e3137)",
    [supports_oklch]: "light-dark(oklch(88.6% 0.0114 256.8), oklch(31.3% 0.0107 261.3))",
  },
  accentLight5: {
    default: "#d5dae1",
    [supports_oklch]: "oklch(88.6% 0.0114 256.8)",
  },
  accentDark5: {
    default: "#2e3137",
    [supports_oklch]: "oklch(31.3% 0.0107 261.3)",
  },
  accentA5: {
    default: "light-dark(#01183d24, #fcfacd2d)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.0706 0.1961 / 0.138), color(display-p3 1 0.9882 0.8039 / 0.175))",
  },
  accentLightA5: {
    default: "#01183d24",
    [supports_p3]: "color(display-p3 0.0078 0.0706 0.1961 / 0.138)",
  },
  accentDarkA5: {
    default: "#fcfacd2d",
    [supports_p3]: "color(display-p3 1 0.9882 0.8039 / 0.175)",
  },
  accent6: {
    default: "light-dark(#cad0d9, #373b40)",
    [supports_oklch]: "light-dark(oklch(85.6% 0.0142 256.8), oklch(35% 0.0106 261.3))",
  },
  accentLight6: {
    default: "#cad0d9",
    [supports_oklch]: "oklch(85.6% 0.0142 256.8)",
  },
  accentDark6: {
    default: "#373b40",
    [supports_oklch]: "oklch(35% 0.0106 261.3)",
  },
  accentA6: {
    default: "light-dark(#041b4230, #f8fcd637)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.0745 0.2157 / 0.182), color(display-p3 0.9882 1 0.8627 / 0.213))",
  },
  accentLightA6: {
    default: "#041b4230",
    [supports_p3]: "color(display-p3 0.0039 0.0745 0.2157 / 0.182)",
  },
  accentDarkA6: {
    default: "#f8fcd637",
    [supports_p3]: "color(display-p3 0.9882 1 0.8627 / 0.213)",
  },
  accent7: {
    default: "light-dark(#bbc3ce, #45494e)",
    [supports_oklch]: "light-dark(oklch(81.5% 0.0178 256.8), oklch(40.3% 0.0101 261.3))",
  },
  accentLight7: {
    default: "#bbc3ce",
    [supports_oklch]: "oklch(81.5% 0.0178 256.8)",
  },
  accentDark7: {
    default: "#45494e",
    [supports_oklch]: "oklch(40.3% 0.0101 261.3)",
  },
  accentA7: {
    default: "light-dark(#021c423f, #fafee345)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.0863 0.2275 / 0.242), color(display-p3 0.9882 1 0.902 / 0.27))",
  },
  accentLightA7: {
    default: "#021c423f",
    [supports_p3]: "color(display-p3 0.0039 0.0863 0.2275 / 0.242)",
  },
  accentDarkA7: {
    default: "#fafee345",
    [supports_p3]: "color(display-p3 0.9882 1 0.902 / 0.27)",
  },
  accent8: {
    default: "light-dark(#a4afbe, #5f6166)",
    [supports_oklch]: "light-dark(oklch(75% 0.0243 256.8), oklch(49.3% 0.0081 261.3))",
  },
  accentLight8: {
    default: "#a4afbe",
    [supports_oklch]: "oklch(75% 0.0243 256.8)",
  },
  accentDark8: {
    default: "#5f6166",
    [supports_oklch]: "oklch(49.3% 0.0081 261.3)",
  },
  accentA8: {
    default: "light-dark(#021e4757, #fffded5e)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.0941 0.2392 / 0.331), color(display-p3 1 1 0.9451 / 0.366))",
  },
  accentLightA8: {
    default: "#021e4757",
    [supports_p3]: "color(display-p3 0.0039 0.0941 0.2392 / 0.331)",
  },
  accentDarkA8: {
    default: "#fffded5e",
    [supports_p3]: "color(display-p3 1 1 0.9451 / 0.366)",
  },
  accent9: {
    default: "light-dark(#4b5563, #9ca3af)",
    [supports_oklch]: "light-dark(oklch(44.6% 0.0263 256.8), oklch(71.4% 0.0192 261.3))",
  },
  accentLight9: {
    default: "#4b5563",
    [supports_oklch]: "oklch(44.6% 0.0263 256.8)",
  },
  accentDark9: {
    default: "#9ca3af",
    [supports_oklch]: "oklch(71.4% 0.0192 261.3)",
  },
  accentA9: {
    default: "light-dark(#000e21b2, #ecf5fea8)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0392 0.1137 / 0.69), color(display-p3 0.9373 0.9686 0.9961 / 0.653))",
  },
  accentLightA9: {
    default: "#000e21b2",
    [supports_p3]: "color(display-p3 0 0.0392 0.1137 / 0.69)",
  },
  accentDarkA9: {
    default: "#ecf5fea8",
    [supports_p3]: "color(display-p3 0.9373 0.9686 0.9961 / 0.653)",
  },
  accent10: {
    default: "light-dark(#3c4654, #9198a4)",
    [supports_oklch]: "light-dark(oklch(39.1% 0.0263 256.8), oklch(67.7% 0.0192 261.3))",
  },
  accentLight10: {
    default: "#3c4654",
    [supports_oklch]: "oklch(39.1% 0.0263 256.8)",
  },
  accentDark10: {
    default: "#9198a4",
    [supports_oklch]: "oklch(67.7% 0.0192 261.3)",
  },
  accentA10: {
    default: "light-dark(#010d20c2, #edf7ff9b)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0353 0.1059 / 0.75), color(display-p3 0.9373 0.9686 0.9961 / 0.606))",
  },
  accentLightA10: {
    default: "#010d20c2",
    [supports_p3]: "color(display-p3 0 0.0353 0.1059 / 0.75)",
  },
  accentDarkA10: {
    default: "#edf7ff9b",
    [supports_p3]: "color(display-p3 0.9373 0.9686 0.9961 / 0.606)",
  },
  accent11: {
    default: "light-dark(#55606e, #afb6c2)",
    [supports_oklch]: "light-dark(oklch(48.4% 0.0263 256.8), oklch(77.3% 0.0192 261.3))",
  },
  accentLight11: {
    default: "#55606e",
    [supports_oklch]: "oklch(48.4% 0.0263 256.8)",
  },
  accentDark11: {
    default: "#afb6c2",
    [supports_oklch]: "oklch(77.3% 0.0192 261.3)",
  },
  accentA11: {
    default: "light-dark(#001125a8, #ecf4ffbc)",
    [supports_p3]: "light-dark(color(display-p3 0 0.051 0.1294 / 0.65), color(display-p3 0.9373 0.9608 1 / 0.734))",
  },
  accentLightA11: {
    default: "#001125a8",
    [supports_p3]: "color(display-p3 0 0.051 0.1294 / 0.65)",
  },
  accentDarkA11: {
    default: "#ecf4ffbc",
    [supports_p3]: "color(display-p3 0.9373 0.9608 1 / 0.734)",
  },
  accent12: {
    default: "light-dark(#22282f, #e6ecf7)",
    [supports_oklch]: "light-dark(oklch(27.3% 0.0158 256.8), oklch(94.3% 0.0162 261.3))",
  },
  accentLight12: {
    default: "#22282f",
    [supports_oklch]: "oklch(27.3% 0.0158 256.8)",
  },
  accentDark12: {
    default: "#e6ecf7",
    [supports_oklch]: "oklch(94.3% 0.0162 261.3)",
  },
  accentA12: {
    default: "light-dark(#01080fdd, #edf4fef7)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0235 0.0471 / 0.859), color(display-p3 0.9412 0.9608 1 / 0.962))",
  },
  accentLightA12: {
    default: "#01080fdd",
    [supports_p3]: "color(display-p3 0 0.0235 0.0471 / 0.859)",
  },
  accentDarkA12: {
    default: "#edf4fef7",
    [supports_p3]: "color(display-p3 0.9412 0.9608 1 / 0.962)",
  },
});
