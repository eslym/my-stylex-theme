import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentWarning = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f9f6f5, #090703)",
    [supports_oklch]: "light-dark(oklch(97.5% 0.0027 41.12), oklch(12.9% 0.0117 84.43))",
  },
  accentLight1: {
    default: "#f9f6f5",
    [supports_oklch]: "oklch(97.5% 0.0027 41.12)",
  },
  accentDark1: {
    default: "#090703",
    [supports_oklch]: "oklch(12.9% 0.0117 84.43)",
  },
  accentA1: {
    default: "light-dark(#ffdfcc25, #e2260008)",
    [supports_p3]: "light-dark(color(display-p3 0.9765 0.4235 0.0118 / 0.028), color(display-p3 0.9922 0.1882 0 / 0.024))",
  },
  accentLightA1: {
    default: "#ffdfcc25",
    [supports_p3]: "color(display-p3 0.9765 0.4235 0.0118 / 0.028)",
  },
  accentDarkA1: {
    default: "#e2260008",
    [supports_p3]: "color(display-p3 0.9922 0.1882 0 / 0.024)",
  },
  accent2: {
    default: "light-dark(#fbf0ec, #1a160e)",
    [supports_oklch]: "light-dark(oklch(96.2% 0.0128 41.12), oklch(20.3% 0.0166 84.43))",
  },
  accentLight2: {
    default: "#fbf0ec",
    [supports_oklch]: "oklch(96.2% 0.0128 41.12)",
  },
  accentDark2: {
    default: "#1a160e",
    [supports_oklch]: "oklch(20.3% 0.0166 84.43)",
  },
  accentA2: {
    default: "light-dark(#ffe3d76e, #f7aa0019)",
    [supports_p3]: "light-dark(color(display-p3 1 0.7098 0.5804 / 0.143), color(display-p3 0.9922 0.7373 0 / 0.088))",
  },
  accentLightA2: {
    default: "#ffe3d76e",
    [supports_p3]: "color(display-p3 1 0.7098 0.5804 / 0.143)",
  },
  accentDarkA2: {
    default: "#f7aa0019",
    [supports_p3]: "color(display-p3 0.9922 0.7373 0 / 0.088)",
  },
  accent3: {
    default: "light-dark(#fee4da, #2b2109)",
    [supports_oklch]: "light-dark(oklch(93.7% 0.0314 41.12), oklch(25.3% 0.0404 84.43))",
  },
  accentLight3: {
    default: "#fee4da",
    [supports_oklch]: "oklch(93.7% 0.0314 41.12)",
  },
  accentDark3: {
    default: "#2b2109",
    [supports_oklch]: "oklch(25.3% 0.0404 84.43)",
  },
  accentA3: {
    default: "light-dark(#ffe1d5db, #fbaa002a)",
    [supports_p3]: "light-dark(color(display-p3 1 0.6941 0.5373 / 0.286), color(display-p3 0.9961 0.7255 0 / 0.151))",
  },
  accentLightA3: {
    default: "#ffe1d5db",
    [supports_p3]: "color(display-p3 1 0.6941 0.5373 / 0.286)",
  },
  accentDarkA3: {
    default: "#fbaa002a",
    [supports_p3]: "color(display-p3 0.9961 0.7255 0 / 0.151)",
  },
  accent4: {
    default: "light-dark(#ffd0bb, #3b2900)",
    [supports_oklch]: "light-dark(oklch(90.1% 0.0699 41.12), oklch(29.4% 0.0661 84.43))",
  },
  accentLight4: {
    default: "#ffd0bb",
    [supports_oklch]: "oklch(90.1% 0.0699 41.12)",
  },
  accentDark4: {
    default: "#3b2900",
    [supports_oklch]: "oklch(29.4% 0.0661 84.43)",
  },
  accentA4: {
    default: "light-dark(#ffd0bb, #fca0003a)",
    [supports_p3]: "light-dark(color(display-p3 0.9725 0.349 0.0039 / 0.247), color(display-p3 1 0.6941 0 / 0.211))",
  },
  accentLightA4: {
    default: "#ffd0bb",
    [supports_p3]: "color(display-p3 0.9725 0.349 0.0039 / 0.247)",
  },
  accentDarkA4: {
    default: "#fca0003a",
    [supports_p3]: "color(display-p3 1 0.6941 0 / 0.211)",
  },
  accent5: {
    default: "light-dark(#ffc0a5, #493300)",
    [supports_oklch]: "light-dark(oklch(86.8% 0.0929 41.12), oklch(33.6% 0.0751 84.43))",
  },
  accentLight5: {
    default: "#ffc0a5",
    [supports_oklch]: "oklch(86.8% 0.0929 41.12)",
  },
  accentDark5: {
    default: "#493300",
    [supports_oklch]: "oklch(33.6% 0.0751 84.43)",
  },
  accentA5: {
    default: "light-dark(#ffc0a5, #fea60048)",
    [supports_p3]: "light-dark(color(display-p3 0.9373 0.3294 0.0039 / 0.33), color(display-p3 1 0.702 0 / 0.266))",
  },
  accentLightA5: {
    default: "#ffc0a5",
    [supports_p3]: "color(display-p3 0.9373 0.3294 0.0039 / 0.33)",
  },
  accentDarkA5: {
    default: "#fea60048",
    [supports_p3]: "color(display-p3 1 0.702 0 / 0.266)",
  },
  accent6: {
    default: "light-dark(#ffb396, #56400c)",
    [supports_oklch]: "light-dark(oklch(83.2% 0.0995 41.12), oklch(38.6% 0.0725 84.43))",
  },
  accentLight6: {
    default: "#ffb396",
    [supports_oklch]: "oklch(83.2% 0.0995 41.12)",
  },
  accentDark6: {
    default: "#56400c",
    [supports_oklch]: "oklch(38.6% 0.0725 84.43)",
  },
  accentA6: {
    default: "light-dark(#ffb396, #ffb40055)",
    [supports_p3]: "light-dark(color(display-p3 0.9294 0.2902 0.0039 / 0.385), color(display-p3 1 0.7529 0.102 / 0.318))",
  },
  accentLightA6: {
    default: "#ffb396",
    [supports_p3]: "color(display-p3 0.9294 0.2902 0.0039 / 0.385)",
  },
  accentDarkA6: {
    default: "#ffb40055",
    [supports_p3]: "color(display-p3 1 0.7529 0.102 / 0.318)",
  },
  accent7: {
    default: "light-dark(#f2a082, #6a521e)",
    [supports_oklch]: "light-dark(oklch(78% 0.1061 41.12), oklch(45.3% 0.0756 84.43))",
  },
  accentLight7: {
    default: "#f2a082",
    [supports_oklch]: "oklch(78% 0.1061 41.12)",
  },
  accentDark7: {
    default: "#6a521e",
    [supports_oklch]: "oklch(45.3% 0.0756 84.43)",
  },
  accentA7: {
    default: "light-dark(#ec41027c, #ffbe2869)",
    [supports_p3]: "light-dark(color(display-p3 0.8196 0.2549 0.0039 / 0.465), color(display-p3 1 0.7922 0.2588 / 0.393))",
  },
  accentLightA7: {
    default: "#ec41027c",
    [supports_p3]: "color(display-p3 0.8196 0.2549 0.0039 / 0.465)",
  },
  accentDarkA7: {
    default: "#ffbe2869",
    [supports_p3]: "color(display-p3 1 0.7922 0.2588 / 0.393)",
  },
  accent8: {
    default: "light-dark(#e78763, #866929)",
    [supports_oklch]: "light-dark(oklch(71.9% 0.1273 41.12), oklch(53.6% 0.0891 84.43))",
  },
  accentLight8: {
    default: "#e78763",
    [supports_oklch]: "oklch(71.9% 0.1273 41.12)",
  },
  accentDark8: {
    default: "#866929",
    [supports_oklch]: "oklch(53.6% 0.0891 84.43)",
  },
  accentA8: {
    default: "light-dark(#dd3d009b, #fec33a86)",
    [supports_p3]: "light-dark(color(display-p3 0.7725 0.2392 0 / 0.58), color(display-p3 0.9961 0.8078 0.3216 / 0.5))",
  },
  accentLightA8: {
    default: "#dd3d009b",
    [supports_p3]: "color(display-p3 0.7725 0.2392 0 / 0.58)",
  },
  accentDarkA8: {
    default: "#fec33a86",
    [supports_p3]: "color(display-p3 0.9961 0.8078 0.3216 / 0.5)",
  },
  accent9: {
    default: "light-dark(#ea580c, #fbbf24)",
    [supports_oklch]: "light-dark(oklch(64.6% 0.1943 41.12), oklch(83.7% 0.1644 84.43))",
  },
  accentLight9: {
    default: "#ea580c",
    [supports_oklch]: "oklch(64.6% 0.1943 41.12)",
  },
  accentDark9: {
    default: "#fbbf24",
    [supports_oklch]: "oklch(83.7% 0.1644 84.43)",
  },
  accentA9: {
    default: "light-dark(#e95000f3, #ffc225fb)",
    [supports_p3]: "light-dark(color(display-p3 0.8275 0.2588 0 / 0.83), color(display-p3 1 0.7961 0.3059 / 0.949))",
  },
  accentLightA9: {
    default: "#e95000f3",
    [supports_p3]: "color(display-p3 0.8275 0.2588 0 / 0.83)",
  },
  accentDarkA9: {
    default: "#ffc225fb",
    [supports_p3]: "color(display-p3 1 0.7961 0.3059 / 0.949)",
  },
  accent10: {
    default: "light-dark(#dc4a00, #f0b505)",
    [supports_oklch]: "light-dark(oklch(60.6% 0.1943 41.12), oklch(80.5% 0.1644 84.43))",
  },
  accentLight10: {
    default: "#dc4a00",
    [supports_oklch]: "oklch(60.6% 0.1943 41.12)",
  },
  accentDark10: {
    default: "#f0b505",
    [supports_oklch]: "oklch(80.5% 0.1644 84.43)",
  },
  accentA10: {
    default: "light-dark(#dc4a00, #ffc004f0)",
    [supports_p3]: "light-dark(color(display-p3 0.7725 0.2275 0 / 0.862), color(display-p3 1 0.7882 0.2627 / 0.905))",
  },
  accentLightA10: {
    default: "#dc4a00",
    [supports_p3]: "color(display-p3 0.7725 0.2275 0 / 0.862)",
  },
  accentDarkA10: {
    default: "#ffc004f0",
    [supports_p3]: "color(display-p3 1 0.7882 0.2627 / 0.905)",
  },
  accent11: {
    default: "light-dark(#c93d00, #ffca3b)",
    [supports_oklch]: "light-dark(oklch(56% 0.1886 41.12), oklch(87.1% 0.1621 84.43))",
  },
  accentLight11: {
    default: "#c93d00",
    [supports_oklch]: "oklch(56% 0.1886 41.12)",
  },
  accentDark11: {
    default: "#ffca3b",
    [supports_oklch]: "oklch(87.1% 0.1621 84.43)",
  },
  accentA11: {
    default: "light-dark(#c93d00, #ffca3b)",
    [supports_p3]: "light-dark(color(display-p3 0.6941 0.1843 0 / 0.877), color(display-p3 1 0.8275 0.3569 / 0.969))",
  },
  accentLightA11: {
    default: "#c93d00",
    [supports_p3]: "color(display-p3 0.6941 0.1843 0 / 0.877)",
  },
  accentDarkA11: {
    default: "#ffca3b",
    [supports_p3]: "color(display-p3 1 0.8275 0.3569 / 0.969)",
  },
  accent12: {
    default: "light-dark(#592c1b, #fee7b8)",
    [supports_oklch]: "light-dark(oklch(34.9% 0.0715 41.12), oklch(93.5% 0.0661 84.43))",
  },
  accentLight12: {
    default: "#592c1b",
    [supports_oklch]: "oklch(34.9% 0.0715 41.12)",
  },
  accentDark12: {
    default: "#fee7b8",
    [supports_oklch]: "oklch(93.5% 0.0661 84.43)",
  },
  accentA12: {
    default: "light-dark(#471400e4, #ffe8b9fe)",
    [supports_p3]: "light-dark(color(display-p3 0.2314 0.0667 0 / 0.877), color(display-p3 1 0.9294 0.7569 / 0.981))",
  },
  accentLightA12: {
    default: "#471400e4",
    [supports_p3]: "color(display-p3 0.2314 0.0667 0 / 0.877)",
  },
  accentDarkA12: {
    default: "#ffe8b9fe",
    [supports_p3]: "color(display-p3 1 0.9294 0.7569 / 0.981)",
  },
});
