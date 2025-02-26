import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentWarning = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f8f7f5, #090703)",
    [supports_oklch]: "light-dark(oklch(97.6% 0.0027 75.83), oklch(12.9% 0.0126 91.94))",
  },
  accentLight1: {
    default: "#f8f7f5",
    [supports_oklch]: "oklch(97.6% 0.0027 75.83)",
  },
  accentDark1: {
    default: "#090703",
    [supports_oklch]: "oklch(12.9% 0.0126 91.94)",
  },
  accentA1: {
    default: "light-dark(#f99b1d08, #e2260008)",
    [supports_p3]: "light-dark(color(display-p3 0.9765 0.5608 0.0118 / 0.028), color(display-p3 0.9922 0.1882 0 / 0.024))",
  },
  accentLightA1: {
    default: "#f99b1d08",
    [supports_p3]: "color(display-p3 0.9765 0.5608 0.0118 / 0.028)",
  },
  accentDarkA1: {
    default: "#e2260008",
    [supports_p3]: "color(display-p3 0.9922 0.1882 0 / 0.024)",
  },
  accent2: {
    default: "light-dark(#fcf2e4, #19160d)",
    [supports_oklch]: "light-dark(oklch(96.6% 0.022 75.83), oklch(20.2% 0.0177 91.94))",
  },
  accentLight2: {
    default: "#fcf2e4",
    [supports_oklch]: "oklch(96.6% 0.022 75.83)",
  },
  accentDark2: {
    default: "#19160d",
    [supports_oklch]: "oklch(20.2% 0.0177 91.94)",
  },
  accentA2: {
    default: "light-dark(#ffedd392, #f7b00018)",
    [supports_p3]: "light-dark(color(display-p3 1 0.8745 0.6745 / 0.286), color(display-p3 0.9922 0.7725 0 / 0.084))",
  },
  accentLightA2: {
    default: "#ffedd392",
    [supports_p3]: "color(display-p3 1 0.8745 0.6745 / 0.286)",
  },
  accentDarkA2: {
    default: "#f7b00018",
    [supports_p3]: "color(display-p3 0.9922 0.7725 0 / 0.084)",
  },
  accent3: {
    default: "light-dark(#ffe8c0, #2a2206)",
    [supports_oklch]: "light-dark(oklch(94.6% 0.0614 75.83), oklch(25.3% 0.0438 91.94))",
  },
  accentLight3: {
    default: "#ffe8c0",
    [supports_oklch]: "oklch(94.6% 0.0614 75.83)",
  },
  accentDark3: {
    default: "#2a2206",
    [supports_oklch]: "oklch(25.3% 0.0438 91.94)",
  },
  accentA3: {
    default: "light-dark(#ffe8c0, #fbb50029)",
    [supports_p3]: "light-dark(color(display-p3 1 0.8275 0.4863 / 0.429), color(display-p3 0.9961 0.7529 0 / 0.151))",
  },
  accentLightA3: {
    default: "#ffe8c0",
    [supports_p3]: "color(display-p3 1 0.8275 0.4863 / 0.429)",
  },
  accentDarkA3: {
    default: "#fbb50029",
    [supports_p3]: "color(display-p3 0.9961 0.7529 0 / 0.151)",
  },
  accent4: {
    default: "light-dark(#ffdb97, #392a00)",
    [supports_oklch]: "light-dark(oklch(91.7% 0.1003 75.83), oklch(29.3% 0.0706 91.94))",
  },
  accentLight4: {
    default: "#ffdb97",
    [supports_oklch]: "oklch(91.7% 0.1003 75.83)",
  },
  accentDark4: {
    default: "#392a00",
    [supports_oklch]: "oklch(29.3% 0.0706 91.94)",
  },
  accentA4: {
    default: "light-dark(#ffdb97, #fcaa0038)",
    [supports_p3]: "light-dark(color(display-p3 1 0.1608 0 / 0.143), color(display-p3 1 0.7255 0 / 0.207))",
  },
  accentLightA4: {
    default: "#ffdb97",
    [supports_p3]: "color(display-p3 1 0.1608 0 / 0.143)",
  },
  accentDarkA4: {
    default: "#fcaa0038",
    [supports_p3]: "color(display-p3 1 0.7255 0 / 0.207)",
  },
  accent5: {
    default: "light-dark(#ffce73, #463400)",
    [supports_oklch]: "light-dark(oklch(88.8% 0.1284 75.83), oklch(33.5% 0.0803 91.94))",
  },
  accentLight5: {
    default: "#ffce73",
    [supports_oklch]: "oklch(88.8% 0.1284 75.83)",
  },
  accentDark5: {
    default: "#463400",
    [supports_oklch]: "oklch(33.5% 0.0803 91.94)",
  },
  accentA5: {
    default: "light-dark(#ffce73, #feb10045)",
    [supports_p3]: "light-dark(color(display-p3 0.9647 0.6431 0.0039 / 0.489), color(display-p3 1 0.7529 0 / 0.254))",
  },
  accentLightA5: {
    default: "#ffce73",
    [supports_p3]: "color(display-p3 0.9647 0.6431 0.0039 / 0.489)",
  },
  accentDarkA5: {
    default: "#feb10045",
    [supports_p3]: "color(display-p3 1 0.7529 0 / 0.254)",
  },
  accent6: {
    default: "light-dark(#fcc36d, #534202)",
    [supports_oklch]: "light-dark(oklch(85.1% 0.122 75.83), oklch(38.6% 0.0776 91.94))",
  },
  accentLight6: {
    default: "#fcc36d",
    [supports_oklch]: "oklch(85.1% 0.122 75.83)",
  },
  accentDark6: {
    default: "#534202",
    [supports_oklch]: "oklch(38.6% 0.0776 91.94)",
  },
  accentA6: {
    default: "light-dark(#ff9a0392, #fec10052)",
    [supports_p3]: "light-dark(color(display-p3 0.9373 0.5804 0 / 0.516), color(display-p3 1 0.8078 0.0353 / 0.306))",
  },
  accentLightA6: {
    default: "#ff9a0392",
    [supports_p3]: "color(display-p3 0.9373 0.5804 0 / 0.516)",
  },
  accentDarkA6: {
    default: "#fec10052",
    [supports_p3]: "color(display-p3 1 0.8078 0.0353 / 0.306)",
  },
  accent7: {
    default: "light-dark(#eab15c, #665417)",
    [supports_oklch]: "light-dark(oklch(79.6% 0.122 75.83), oklch(45.3% 0.081 91.94))",
  },
  accentLight7: {
    default: "#eab15c",
    [supports_oklch]: "oklch(79.6% 0.122 75.83)",
  },
  accentDark7: {
    default: "#665417",
    [supports_oklch]: "oklch(45.3% 0.081 91.94)",
  },
  accentA7: {
    default: "light-dark(#e28800a2, #ffcb1765)",
    [supports_p3]: "light-dark(color(display-p3 0.8196 0.502 0 / 0.58), color(display-p3 1 0.8353 0.2196 / 0.381))",
  },
  accentLightA7: {
    default: "#e28800a2",
    [supports_p3]: "color(display-p3 0.8196 0.502 0 / 0.58)",
  },
  accentDarkA7: {
    default: "#ffcb1765",
    [supports_p3]: "color(display-p3 1 0.8353 0.2196 / 0.381)",
  },
  accent8: {
    default: "light-dark(#da9927, #816b20)",
    [supports_oklch]: "light-dark(oklch(72.9% 0.1423 75.83), oklch(53.6% 0.0955 91.94))",
  },
  accentLight8: {
    default: "#da9927",
    [supports_oklch]: "oklch(72.9% 0.1423 75.83)",
  },
  accentDark8: {
    default: "#816b20",
    [supports_oklch]: "oklch(53.6% 0.0955 91.94)",
  },
  accentA8: {
    default: "light-dark(#d58800d8, #fece2981)",
    [supports_p3]: "light-dark(color(display-p3 0.7608 0.4863 0 / 0.743), color(display-p3 0.9961 0.851 0.2824 / 0.485))",
  },
  accentLightA8: {
    default: "#d58800d8",
    [supports_p3]: "color(display-p3 0.7608 0.4863 0 / 0.743)",
  },
  accentDarkA8: {
    default: "#fece2981",
    [supports_p3]: "color(display-p3 0.9961 0.851 0.2824 / 0.485)",
  },
  accent9: {
    default: "light-dark(#ca8a04, #facc15)",
    [supports_oklch]: "light-dark(oklch(68.1% 0.1423 75.83), oklch(86.1% 0.1731 91.94))",
  },
  accentLight9: {
    default: "#ca8a04",
    [supports_oklch]: "oklch(68.1% 0.1423 75.83)",
  },
  accentDark9: {
    default: "#facc15",
    [supports_oklch]: "oklch(86.1% 0.1731 91.94)",
  },
  accentA9: {
    default: "light-dark(#c98800fb, #ffd015fa)",
    [supports_p3]: "light-dark(color(display-p3 0.7059 0.4549 0 / 0.81), color(display-p3 1 0.8471 0.298 / 0.953))",
  },
  accentLightA9: {
    default: "#c98800fb",
    [supports_p3]: "color(display-p3 0.7059 0.4549 0 / 0.81)",
  },
  accentDarkA9: {
    default: "#ffd015fa",
    [supports_p3]: "color(display-p3 1 0.8471 0.298 / 0.953)",
  },
  accent10: {
    default: "light-dark(#bd7e00, #f0c200)",
    [supports_oklch]: "light-dark(oklch(64.2% 0.1423 75.83), oklch(82.9% 0.1731 91.94))",
  },
  accentLight10: {
    default: "#bd7e00",
    [supports_oklch]: "oklch(64.2% 0.1423 75.83)",
  },
  accentDark10: {
    default: "#f0c200",
    [supports_oklch]: "oklch(82.9% 0.1731 91.94)",
  },
  accentA10: {
    default: "light-dark(#bd7e00, #ffce00f0)",
    [supports_p3]: "light-dark(color(display-p3 0.651 0.4078 0 / 0.83), color(display-p3 1 0.8392 0.2745 / 0.913))",
  },
  accentLightA10: {
    default: "#bd7e00",
    [supports_p3]: "color(display-p3 0.651 0.4078 0 / 0.83)",
  },
  accentDarkA10: {
    default: "#ffce00f0",
    [supports_p3]: "color(display-p3 1 0.8392 0.2745 / 0.913)",
  },
  accent11: {
    default: "light-dark(#9e6400, #ffd121)",
    [supports_oklch]: "light-dark(oklch(55.1% 0.1423 75.83), oklch(87.5% 0.1731 91.94))",
  },
  accentLight11: {
    default: "#9e6400",
    [supports_oklch]: "oklch(55.1% 0.1423 75.83)",
  },
  accentDark11: {
    default: "#ffd121",
    [supports_oklch]: "oklch(87.5% 0.1731 91.94)",
  },
  accentA11: {
    default: "light-dark(#9e6400, #ffd121)",
    [supports_p3]: "light-dark(color(display-p3 0.5333 0.3176 0 / 0.87), color(display-p3 1 0.851 0.3098 / 0.973))",
  },
  accentLightA11: {
    default: "#9e6400",
    [supports_p3]: "color(display-p3 0.5333 0.3176 0 / 0.87)",
  },
  accentDarkA11: {
    default: "#ffd121",
    [supports_p3]: "color(display-p3 1 0.851 0.3098 / 0.973)",
  },
  accent12: {
    default: "light-dark(#4c3616, #fbe9b3)",
    [supports_oklch]: "light-dark(oklch(35.1% 0.0564 75.83), oklch(93.6% 0.0715 91.94))",
  },
  accentLight12: {
    default: "#4c3616",
    [supports_oklch]: "oklch(35.1% 0.0564 75.83)",
  },
  accentDark12: {
    default: "#fbe9b3",
    [supports_oklch]: "oklch(93.6% 0.0715 91.94)",
  },
  accentA12: {
    default: "light-dark(#3c2300e9, #ffedb6fb)",
    [supports_p3]: "light-dark(color(display-p3 0.2039 0.1216 0 / 0.893), color(display-p3 1 0.9451 0.7412 / 0.973))",
  },
  accentLightA12: {
    default: "#3c2300e9",
    [supports_p3]: "color(display-p3 0.2039 0.1216 0 / 0.893)",
  },
  accentDarkA12: {
    default: "#ffedb6fb",
    [supports_p3]: "color(display-p3 1 0.9451 0.7412 / 0.973)",
  },
});
