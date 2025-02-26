import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentPrimary = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f7f6fa, #0b0717)",
    [supports_oklch]: "light-dark(oklch(97.6% 0.0046 293), oklch(14.5% 0.035 293.5))",
  },
  accentLight1: {
    default: "#f7f6fa",
    [supports_oklch]: "oklch(97.6% 0.0046 293)",
  },
  accentDark1: {
    default: "#0b0717",
    [supports_oklch]: "oklch(14.5% 0.035 293.5)",
  },
  accentA1: {
    default: "light-dark(#622ffb05, #1d00f70e)",
    [supports_p3]: "light-dark(color(display-p3 0.2471 0 0.9804 / 0.016), color(display-p3 0.0392 0 1 / 0.049))",
  },
  accentLightA1: {
    default: "#622ffb05",
    [supports_p3]: "color(display-p3 0.2471 0 0.9804 / 0.016)",
  },
  accentDarkA1: {
    default: "#1d00f70e",
    [supports_p3]: "color(display-p3 0.0392 0 1 / 0.049)",
  },
  accent2: {
    default: "light-dark(#f4f2fd, #181328)",
    [supports_oklch]: "light-dark(oklch(96.5% 0.0141 293), oklch(20.4% 0.0422 293.5))",
  },
  accentLight2: {
    default: "#f4f2fd",
    [supports_oklch]: "oklch(96.5% 0.0141 293)",
  },
  accentDark2: {
    default: "#181328",
    [supports_oklch]: "oklch(20.4% 0.0422 293.5)",
  },
  accentA2: {
    default: "light-dark(#f0edff99, #7a52fa20)",
    [supports_p3]: "light-dark(color(display-p3 0.9216 0.902 1 / 0.4), color(display-p3 0.4706 0.3373 0.9961 / 0.119))",
  },
  accentLightA2: {
    default: "#f0edff99",
    [supports_p3]: "color(display-p3 0.9216 0.902 1 / 0.4)",
  },
  accentDarkA2: {
    default: "#7a52fa20",
    [supports_p3]: "color(display-p3 0.4706 0.3373 0.9961 / 0.119)",
  },
  accent3: {
    default: "light-dark(#ede9ff, #291a4c)",
    [supports_oklch]: "light-dark(oklch(94.3% 0.031 293), oklch(26.7% 0.089 293.5))",
  },
  accentLight3: {
    default: "#ede9ff",
    [supports_oklch]: "oklch(94.3% 0.031 293)",
  },
  accentDark3: {
    default: "#291a4c",
    [supports_oklch]: "oklch(26.7% 0.089 293.5)",
  },
  accentA3: {
    default: "light-dark(#ede9ff, #7d46fe45)",
    [supports_p3]: "light-dark(color(display-p3 0.8902 0.8706 1 / 0.6), color(display-p3 0.4824 0.298 1 / 0.258))",
  },
  accentLightA3: {
    default: "#ede9ff",
    [supports_p3]: "color(display-p3 0.8902 0.8706 1 / 0.6)",
  },
  accentDarkA3: {
    default: "#7d46fe45",
    [supports_p3]: "color(display-p3 0.4824 0.298 1 / 0.258)",
  },
  accent4: {
    default: "light-dark(#e3dcff, #361c68)",
    [supports_oklch]: "light-dark(oklch(91.4% 0.0612 293), oklch(31% 0.1244 293.5))",
  },
  accentLight4: {
    default: "#e3dcff",
    [supports_oklch]: "oklch(91.4% 0.0612 293)",
  },
  accentDark4: {
    default: "#361c68",
    [supports_oklch]: "oklch(31% 0.1244 293.5)",
  },
  accentA4: {
    default: "light-dark(#e3dcff, #7d39ff62)",
    [supports_p3]: "light-dark(color(display-p3 0.7451 0.6863 1 / 0.4), color(display-p3 0.4667 0.2431 1 / 0.368))",
  },
  accentLightA4: {
    default: "#e3dcff",
    [supports_p3]: "color(display-p3 0.7451 0.6863 1 / 0.4)",
  },
  accentDarkA4: {
    default: "#7d39ff62",
    [supports_p3]: "color(display-p3 0.4667 0.2431 1 / 0.368)",
  },
  accent5: {
    default: "light-dark(#daceff, #402576)",
    [supports_oklch]: "light-dark(oklch(88.2% 0.0882 293), oklch(34.7% 0.1322 293.5))",
  },
  accentLight5: {
    default: "#daceff",
    [supports_oklch]: "oklch(88.2% 0.0882 293)",
  },
  accentDark5: {
    default: "#402576",
    [supports_oklch]: "oklch(34.7% 0.1322 293.5)",
  },
  accentA5: {
    default: "light-dark(#daceff, #8447fd71)",
    [supports_p3]: "light-dark(color(display-p3 0.3137 0.1176 1 / 0.2), color(display-p3 0.502 0.298 1 / 0.425))",
  },
  accentLightA5: {
    default: "#daceff",
    [supports_p3]: "color(display-p3 0.3137 0.1176 1 / 0.2)",
  },
  accentDarkA5: {
    default: "#8447fd71",
    [supports_p3]: "color(display-p3 0.502 0.298 1 / 0.425)",
  },
  accent6: {
    default: "light-dark(#cdbdff, #4b3085)",
    [supports_oklch]: "light-dark(oklch(84.1% 0.1128 293), oklch(38.9% 0.1368 293.5))",
  },
  accentLight6: {
    default: "#cdbdff",
    [supports_oklch]: "oklch(84.1% 0.1128 293)",
  },
  accentDark6: {
    default: "#4b3085",
    [supports_oklch]: "oklch(38.9% 0.1368 293.5)",
  },
  accentA6: {
    default: "light-dark(#cdbdff, #8b55fe81)",
    [supports_p3]: "light-dark(color(display-p3 0.1961 0 0.9804 / 0.24), color(display-p3 0.5373 0.3569 1 / 0.482))",
  },
  accentLightA6: {
    default: "#cdbdff",
    [supports_p3]: "color(display-p3 0.1961 0 0.9804 / 0.24)",
  },
  accentDarkA6: {
    default: "#8b55fe81",
    [supports_p3]: "color(display-p3 0.5373 0.3569 1 / 0.482)",
  },
  accent7: {
    default: "light-dark(#bca6ff, #5a3d9c)",
    [supports_oklch]: "light-dark(oklch(78.3% 0.1419 293), oklch(44.4% 0.1487 293.5))",
  },
  accentLight7: {
    default: "#bca6ff",
    [supports_oklch]: "oklch(78.3% 0.1419 293)",
  },
  accentDark7: {
    default: "#5a3d9c",
    [supports_oklch]: "oklch(44.4% 0.1487 293.5)",
  },
  accentA7: {
    default: "light-dark(#bca6ff, #9160ff98)",
    [supports_p3]: "light-dark(color(display-p3 0.2039 0.0039 0.9686 / 0.332), color(display-p3 0.5569 0.3961 1 / 0.576))",
  },
  accentLightA7: {
    default: "#bca6ff",
    [supports_p3]: "color(display-p3 0.2039 0.0039 0.9686 / 0.332)",
  },
  accentDarkA7: {
    default: "#9160ff98",
    [supports_p3]: "color(display-p3 0.5569 0.3961 1 / 0.576)",
  },
  accent8: {
    default: "light-dark(#a784ff, #704cc1)",
    [supports_oklch]: "light-dark(oklch(70.6% 0.1873 293), oklch(51.6% 0.175 293.5))",
  },
  accentLight8: {
    default: "#a784ff",
    [supports_oklch]: "oklch(70.6% 0.1873 293)",
  },
  accentDark8: {
    default: "#704cc1",
    [supports_oklch]: "oklch(51.6% 0.175 293.5)",
  },
  accentA8: {
    default: "light-dark(#a784ff, #9262febf)",
    [supports_p3]: "light-dark(color(display-p3 0.2353 0 0.9569 / 0.468), color(display-p3 0.5686 0.4118 1 / 0.719))",
  },
  accentLightA8: {
    default: "#a784ff",
    [supports_p3]: "color(display-p3 0.2353 0 0.9569 / 0.468)",
  },
  accentDarkA8: {
    default: "#9262febf",
    [supports_p3]: "color(display-p3 0.5686 0.4118 1 / 0.719)",
  },
  accent9: {
    default: "light-dark(#7f22fe, #a684ff)",
    [supports_oklch]: "light-dark(oklch(54.1% 0.281 293), oklch(70.2% 0.183 293.5))",
  },
  accentLight9: {
    default: "#7f22fe",
    [supports_oklch]: "oklch(54.1% 0.281 293)",
  },
  accentDark9: {
    default: "#a684ff",
    [supports_oklch]: "oklch(70.2% 0.183 293.5)",
  },
  accentA9: {
    default: "light-dark(#6100ffcc, #a684ff)",
    [supports_p3]: "light-dark(color(display-p3 0.3569 0 0.9529 / 0.836), color(display-p3 0.651 0.5373 1 / 0.968))",
  },
  accentLightA9: {
    default: "#6100ffcc",
    [supports_p3]: "color(display-p3 0.3569 0 0.9529 / 0.836)",
  },
  accentDarkA9: {
    default: "#a684ff",
    [supports_p3]: "color(display-p3 0.651 0.5373 1 / 0.968)",
  },
  accent10: {
    default: "light-dark(#7020e0, #9b78f7)",
    [supports_oklch]: "light-dark(oklch(49.4% 0.253 293), oklch(66.5% 0.183 293.5))",
  },
  accentLight10: {
    default: "#7020e0",
    [supports_oklch]: "oklch(49.4% 0.253 293)",
  },
  accentDark10: {
    default: "#9b78f7",
    [supports_oklch]: "oklch(66.5% 0.183 293.5)",
  },
  accentA10: {
    default: "light-dark(#5d01dddf, #a07cfff7)",
    [supports_p3]: "light-dark(color(display-p3 0.302 0 0.8196 / 0.848), color(display-p3 0.6235 0.502 1 / 0.935))",
  },
  accentLightA10: {
    default: "#5d01dddf",
    [supports_p3]: "color(display-p3 0.302 0 0.8196 / 0.848)",
  },
  accentDarkA10: {
    default: "#a07cfff7",
    [supports_p3]: "color(display-p3 0.6235 0.502 1 / 0.935)",
  },
  accent11: {
    default: "light-dark(#6e1cdd, #bca3ff)",
    [supports_oklch]: "light-dark(oklch(48.6% 0.253 293), oklch(77.8% 0.183 293.5))",
  },
  accentLight11: {
    default: "#6e1cdd",
    [supports_oklch]: "oklch(48.6% 0.253 293)",
  },
  accentDark11: {
    default: "#bca3ff",
    [supports_oklch]: "oklch(77.8% 0.183 293.5)",
  },
  accentA11: {
    default: "light-dark(#5d01dae3, #bca3ff)",
    [supports_p3]: "light-dark(color(display-p3 0.302 0 0.8078 / 0.86), color(display-p3 0.7412 0.6588 1 / 0.976))",
  },
  accentLightA11: {
    default: "#5d01dae3",
    [supports_p3]: "color(display-p3 0.302 0 0.8078 / 0.86)",
  },
  accentDarkA11: {
    default: "#bca3ff",
    [supports_p3]: "color(display-p3 0.7412 0.6588 1 / 0.976)",
  },
  accent12: {
    default: "light-dark(#391077, #e3dbff)",
    [supports_oklch]: "light-dark(oklch(31.4% 0.1559 293), oklch(91.2% 0.0606 293.5))",
  },
  accentLight12: {
    default: "#391077",
    [supports_oklch]: "oklch(31.4% 0.1559 293)",
  },
  accentDark12: {
    default: "#e3dbff",
    [supports_oklch]: "oklch(91.2% 0.0606 293.5)",
  },
  accentA12: {
    default: "light-dark(#2c006eef, #e3dbff)",
    [supports_p3]: "light-dark(color(display-p3 0.1412 0 0.4039 / 0.924), color(display-p3 0.898 0.8706 1 / 0.988))",
  },
  accentLightA12: {
    default: "#2c006eef",
    [supports_p3]: "color(display-p3 0.1412 0 0.4039 / 0.924)",
  },
  accentDarkA12: {
    default: "#e3dbff",
    [supports_p3]: "color(display-p3 0.898 0.8706 1 / 0.988)",
  },
});
