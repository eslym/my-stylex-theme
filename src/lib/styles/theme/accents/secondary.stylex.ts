import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentSecondary = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f7f7f9, #03070f)",
    [supports_oklch]: "light-dark(oklch(97.7% 0.0019 262.9), oklch(12.9% 0.0214 254.6))",
  },
  accentLight1: {
    default: "#f7f7f9",
    [supports_oklch]: "oklch(97.7% 0.0019 262.9)",
  },
  accentDark1: {
    default: "#03070f",
    [supports_oklch]: "oklch(12.9% 0.0214 254.6)",
  },
  accentA1: {
    default: "light-dark(#b93b3d04, #82860002)",
    [supports_p3]: "light-dark(color(display-p3 0.6471 0 0.0118 / 0.012), color(display-p3 0.8 0.8118 0 / 0.005))",
  },
  accentLightA1: {
    default: "#b93b3d04",
    [supports_p3]: "color(display-p3 0.6471 0 0.0118 / 0.012)",
  },
  accentDarkA1: {
    default: "#82860002",
    [supports_p3]: "color(display-p3 0.8 0.8118 0 / 0.005)",
  },
  accent2: {
    default: "light-dark(#f0f3fa, #0e1722)",
    [supports_oklch]: "light-dark(oklch(96.4% 0.0092 262.9), oklch(20.1% 0.0249 254.6))",
  },
  accentLight2: {
    default: "#f0f3fa",
    [supports_oklch]: "oklch(96.4% 0.0092 262.9)",
  },
  accentDark2: {
    default: "#0e1722",
    [supports_oklch]: "oklch(20.1% 0.0249 254.6)",
  },
  accentA2: {
    default: "light-dark(#1634c409, #acf7b312)",
    [supports_p3]: "light-dark(color(display-p3 0.0275 0.0353 0.5843 / 0.029), color(display-p3 0.7529 0.9922 0.7137 / 0.069))",
  },
  accentLightA2: {
    default: "#1634c409",
    [supports_p3]: "color(display-p3 0.0275 0.0353 0.5843 / 0.029)",
  },
  accentDarkA2: {
    default: "#acf7b312",
    [supports_p3]: "color(display-p3 0.7529 0.9922 0.7137 / 0.069)",
  },
  accent3: {
    default: "light-dark(#e5ecf9, #112741)",
    [supports_oklch]: "light-dark(oklch(94.1% 0.0194 262.9), oklch(26.8% 0.0567 254.6))",
  },
  accentLight3: {
    default: "#e5ecf9",
    [supports_oklch]: "oklch(94.1% 0.0194 262.9)",
  },
  accentDark3: {
    default: "#112741",
    [supports_oklch]: "oklch(26.8% 0.0567 254.6)",
  },
  accentA3: {
    default: "light-dark(#0648d614, #54bafb2f)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.2314 0.7765 / 0.073), color(display-p3 0.4353 0.7373 1 / 0.176))",
  },
  accentLightA3: {
    default: "#0648d614",
    [supports_p3]: "color(display-p3 0.0078 0.2314 0.7765 / 0.073)",
  },
  accentDarkA3: {
    default: "#54bafb2f",
    [supports_p3]: "color(display-p3 0.4353 0.7373 1 / 0.176)",
  },
  accent4: {
    default: "light-dark(#d6e3fd, #0f325a)",
    [supports_oklch]: "light-dark(oklch(91.5% 0.038 262.9), oklch(31.5% 0.0826 254.6))",
  },
  accentLight4: {
    default: "#d6e3fd",
    [supports_oklch]: "oklch(91.5% 0.038 262.9)",
  },
  accentDark4: {
    default: "#0f325a",
    [supports_oklch]: "oklch(31.5% 0.0826 254.6)",
  },
  accentA4: {
    default: "light-dark(#92b5ff55, #2f9efe4a)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.2863 0.9608 / 0.13), color(display-p3 0.3216 0.6314 1 / 0.279))",
  },
  accentLightA4: {
    default: "#92b5ff55",
    [supports_p3]: "color(display-p3 0.0078 0.2863 0.9608 / 0.13)",
  },
  accentDarkA4: {
    default: "#2f9efe4a",
    [supports_p3]: "color(display-p3 0.3216 0.6314 1 / 0.279)",
  },
  accent5: {
    default: "light-dark(#c4d9ff, #183e6c)",
    [supports_oklch]: "light-dark(oklch(88.1% 0.0573 262.9), oklch(36.3% 0.0902 254.6))",
  },
  accentLight5: {
    default: "#c4d9ff",
    [supports_oklch]: "oklch(88.1% 0.0573 262.9)",
  },
  accentDark5: {
    default: "#183e6c",
    [supports_oklch]: "oklch(36.3% 0.0902 254.6)",
  },
  accentA5: {
    default: "light-dark(#c4d9ff, #3e9efd5e)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.2902 0.9882 / 0.194), color(display-p3 0.3529 0.6314 1 / 0.357))",
  },
  accentLightA5: {
    default: "#c4d9ff",
    [supports_p3]: "color(display-p3 0.0039 0.2902 0.9882 / 0.194)",
  },
  accentDarkA5: {
    default: "#3e9efd5e",
    [supports_p3]: "color(display-p3 0.3529 0.6314 1 / 0.357)",
  },
  accent6: {
    default: "light-dark(#afcbff, #234c7d)",
    [supports_oklch]: "light-dark(oklch(84% 0.0789 262.9), oklch(41.2% 0.0941 254.6))",
  },
  accentLight6: {
    default: "#afcbff",
    [supports_oklch]: "oklch(84% 0.0789 262.9)",
  },
  accentDark6: {
    default: "#234c7d",
    [supports_oklch]: "oklch(41.2% 0.0941 254.6)",
  },
  accentA6: {
    default: "light-dark(#afcbff, #4da4fd71)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.298 0.9765 / 0.275), color(display-p3 0.4 0.6627 1 / 0.425))",
  },
  accentLightA6: {
    default: "#afcbff",
    [supports_p3]: "color(display-p3 0.0039 0.298 0.9765 / 0.275)",
  },
  accentDarkA6: {
    default: "#4da4fd71",
    [supports_p3]: "color(display-p3 0.4 0.6627 1 / 0.425)",
  },
  accent7: {
    default: "light-dark(#97b8f7, #2f5c92)",
    [supports_oklch]: "light-dark(oklch(78.3% 0.0968 262.9), oklch(46.9% 0.1016 254.6))",
  },
  accentLight7: {
    default: "#97b8f7",
    [supports_oklch]: "oklch(78.3% 0.0968 262.9)",
  },
  accentDark7: {
    default: "#2f5c92",
    [supports_oklch]: "oklch(46.9% 0.1016 254.6)",
  },
  accentA7: {
    default: "light-dark(#0152f064, #57a7fe88)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.2588 0.8784 / 0.363), color(display-p3 0.4314 0.6706 0.9961 / 0.516))",
  },
  accentLightA7: {
    default: "#0152f064",
    [supports_p3]: "color(display-p3 0.0039 0.2588 0.8784 / 0.363)",
  },
  accentDarkA7: {
    default: "#57a7fe88",
    [supports_p3]: "color(display-p3 0.4314 0.6706 0.9961 / 0.516)",
  },
  accent8: {
    default: "light-dark(#759fef, #396eae)",
    [supports_oklch]: "light-dark(oklch(70.5% 0.1273 262.9), oklch(53.2% 0.1169 254.6))",
  },
  accentLight8: {
    default: "#759fef",
    [supports_oklch]: "oklch(70.5% 0.1273 262.9)",
  },
  accentDark8: {
    default: "#396eae",
    [supports_oklch]: "oklch(53.2% 0.1169 254.6)",
  },
  accentA8: {
    default: "light-dark(#004ee387, #56a6ffa6)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.251 0.8392 / 0.492), color(display-p3 0.4314 0.6667 1 / 0.631))",
  },
  accentLightA8: {
    default: "#004ee387",
    [supports_p3]: "color(display-p3 0.0039 0.251 0.8392 / 0.492)",
  },
  accentDarkA8: {
    default: "#56a6ffa6",
    [supports_p3]: "color(display-p3 0.4314 0.6667 1 / 0.631)",
  },
  accent9: {
    default: "light-dark(#2563eb, #60a5fa)",
    [supports_oklch]: "light-dark(oklch(54.6% 0.2152 262.9), oklch(71.4% 0.1434 254.6))",
  },
  accentLight9: {
    default: "#2563eb",
    [supports_oklch]: "oklch(54.6% 0.2152 262.9)",
  },
  accentDark9: {
    default: "#60a5fa",
    [supports_oklch]: "oklch(71.4% 0.1434 254.6)",
  },
  accentA9: {
    default: "light-dark(#0049e8d9, #62a8fffa)",
    [supports_p3]: "light-dark(color(display-p3 0 0.2196 0.8627 / 0.783), color(display-p3 0.4627 0.6745 1 / 0.949))",
  },
  accentLightA9: {
    default: "#0049e8d9",
    [supports_p3]: "color(display-p3 0 0.2196 0.8627 / 0.783)",
  },
  accentDarkA9: {
    default: "#62a8fffa",
    [supports_p3]: "color(display-p3 0.4627 0.6745 1 / 0.949)",
  },
  accent10: {
    default: "light-dark(#2057d1, #5599ed)",
    [supports_oklch]: "light-dark(oklch(50% 0.1972 262.9), oklch(67.7% 0.1434 254.6))",
  },
  accentLight10: {
    default: "#2057d1",
    [supports_oklch]: "oklch(50% 0.1972 262.9)",
  },
  accentDark10: {
    default: "#5599ed",
    [supports_oklch]: "oklch(67.7% 0.1434 254.6)",
  },
  accentA10: {
    default: "light-dark(#0140cadf, #5ca5feec)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1882 0.7451 / 0.811), color(display-p3 0.4431 0.6549 1 / 0.897))",
  },
  accentLightA10: {
    default: "#0140cadf",
    [supports_p3]: "color(display-p3 0 0.1882 0.7451 / 0.811)",
  },
  accentDarkA10: {
    default: "#5ca5feec",
    [supports_p3]: "color(display-p3 0.4431 0.6549 1 / 0.897)",
  },
  accent11: {
    default: "light-dark(#1d55cf, #83b7f9)",
    [supports_oklch]: "light-dark(oklch(49.3% 0.1972 262.9), oklch(77% 0.1101 254.6))",
  },
  accentLight11: {
    default: "#1d55cf",
    [supports_oklch]: "oklch(49.3% 0.1972 262.9)",
  },
  accentDark11: {
    default: "#83b7f9",
    [supports_oklch]: "oklch(77% 0.1101 254.6)",
  },
  accentA11: {
    default: "light-dark(#0140c9e2, #86bbfef9)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1882 0.7373 / 0.819), color(display-p3 0.5843 0.749 1 / 0.953))",
  },
  accentLightA11: {
    default: "#0140c9e2",
    [supports_p3]: "color(display-p3 0 0.1882 0.7373 / 0.819)",
  },
  accentDarkA11: {
    default: "#86bbfef9",
    [supports_p3]: "color(display-p3 0.5843 0.749 1 / 0.953)",
  },
  accent12: {
    default: "light-dark(#152e63, #cfe3fc)",
    [supports_oklch]: "light-dark(oklch(31.4% 0.0984 262.9), oklch(90.8% 0.0407 254.6))",
  },
  accentLight12: {
    default: "#152e63",
    [supports_oklch]: "oklch(31.4% 0.0984 262.9)",
  },
  accentDark12: {
    default: "#cfe3fc",
    [supports_oklch]: "oklch(90.8% 0.0407 254.6)",
  },
  accentA12: {
    default: "light-dark(#011b55ea, #d1e6fffc)",
    [supports_p3]: "light-dark(color(display-p3 0 0.0784 0.302 / 0.892), color(display-p3 0.8471 0.9059 1 / 0.979))",
  },
  accentLightA12: {
    default: "#011b55ea",
    [supports_p3]: "color(display-p3 0 0.0784 0.302 / 0.892)",
  },
  accentDarkA12: {
    default: "#d1e6fffc",
    [supports_p3]: "color(display-p3 0.8471 0.9059 1 / 0.979)",
  },
});
