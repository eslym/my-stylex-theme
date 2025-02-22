import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentPositive = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f5f8f7, #040906)",
    [supports_oklch]: "light-dark(oklch(97.7% 0.0043 163.2), oklch(12.9% 0.0131 163.2))",
  },
  accentLight1: {
    default: "#f5f8f7",
    [supports_oklch]: "oklch(97.7% 0.0043 163.2)",
  },
  accentDark1: {
    default: "#040906",
    [supports_oklch]: "oklch(12.9% 0.0131 163.2)",
  },
  accentA1: {
    default: "light-dark(#79a52806, #82c60004)",
    [supports_p3]: "light-dark(color(display-p3 0.5843 0.5882 0.0078 / 0.02), color(display-p3 0.6157 0.9294 0 / 0.013))",
  },
  accentLightA1: {
    default: "#79a52806",
    [supports_p3]: "color(display-p3 0.5843 0.5882 0.0078 / 0.02)",
  },
  accentDarkA1: {
    default: "#82c60004",
    [supports_p3]: "color(display-p3 0.6157 0.9294 0 / 0.013)",
  },
  accent2: {
    default: "light-dark(#edf5f1, #101a15)",
    [supports_oklch]: "light-dark(oklch(96.3% 0.0094 163.2), oklch(20.5% 0.0168 163.2))",
  },
  accentLight2: {
    default: "#edf5f1",
    [supports_oklch]: "oklch(96.3% 0.0094 163.2)",
  },
  accentDark2: {
    default: "#101a15",
    [supports_oklch]: "oklch(20.5% 0.0168 163.2)",
  },
  accentA2: {
    default: "light-dark(#0f90130c, #acf80015)",
    [supports_p3]: "light-dark(color(display-p3 0.0824 0.5373 0.0118 / 0.044), color(display-p3 0.7412 0.9922 0.0392 / 0.081))",
  },
  accentLightA2: {
    default: "#0f90130c",
    [supports_p3]: "color(display-p3 0.0824 0.5373 0.0118 / 0.044)",
  },
  accentDarkA2: {
    default: "#acf80015",
    [supports_p3]: "color(display-p3 0.7412 0.9922 0.0392 / 0.081)",
  },
  accent3: {
    default: "light-dark(#def0e6, #112c20)",
    [supports_oklch]: "light-dark(oklch(93.9% 0.0235 163.2), oklch(26.7% 0.0398 163.2))",
  },
  accentLight3: {
    default: "#def0e6",
    [supports_oklch]: "oklch(93.9% 0.0235 163.2)",
  },
  accentDark3: {
    default: "#112c20",
    [supports_oklch]: "oklch(26.7% 0.0398 163.2)",
  },
  accentA3: {
    default: "light-dark(#039b2d1b, #65ff5227)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.5176 0.102 / 0.093), color(display-p3 0.5647 1 0.3765 / 0.149))",
  },
  accentLightA3: {
    default: "#039b2d1b",
    [supports_p3]: "color(display-p3 0.0039 0.5176 0.102 / 0.093)",
  },
  accentDarkA3: {
    default: "#65ff5227",
    [supports_p3]: "color(display-p3 0.5647 1 0.3765 / 0.149)",
  },
  accent4: {
    default: "light-dark(#cdeadb, #103a29)",
    [supports_oklch]: "light-dark(oklch(91.2% 0.0372 163.2), oklch(31.4% 0.0555 163.2))",
  },
  accentLight4: {
    default: "#cdeadb",
    [supports_oklch]: "oklch(91.2% 0.0372 163.2)",
  },
  accentDark4: {
    default: "#103a29",
    [supports_oklch]: "oklch(31.4% 0.0555 163.2)",
  },
  accentA4: {
    default: "light-dark(#05a0412d, #44fc6c36)",
    [supports_p3]: "light-dark(color(display-p3 0.0078 0.5333 0.1529 / 0.15), color(display-p3 0.4902 1 0.4706 / 0.205))",
  },
  accentLightA4: {
    default: "#05a0412d",
    [supports_p3]: "color(display-p3 0.0078 0.5333 0.1529 / 0.15)",
  },
  accentDarkA4: {
    default: "#44fc6c36",
    [supports_p3]: "color(display-p3 0.4902 1 0.4706 / 0.205)",
  },
  accent5: {
    default: "light-dark(#b9e2cd, #174834)",
    [supports_oklch]: "light-dark(oklch(87.8% 0.0506 163.2), oklch(36.1% 0.0626 163.2))",
  },
  accentLight5: {
    default: "#b9e2cd",
    [supports_oklch]: "oklch(87.8% 0.0506 163.2)",
  },
  accentDark5: {
    default: "#174834",
    [supports_oklch]: "oklch(36.1% 0.0626 163.2)",
  },
  accentA5: {
    default: "light-dark(#019c4441, #51fe8444)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.5373 0.1765 / 0.222), color(display-p3 0.5216 1 0.5529 / 0.262))",
  },
  accentLightA5: {
    default: "#019c4441",
    [supports_p3]: "color(display-p3 0.0039 0.5373 0.1765 / 0.222)",
  },
  accentDarkA5: {
    default: "#51fe8444",
    [supports_p3]: "color(display-p3 0.5216 1 0.5529 / 0.262)",
  },
  accent6: {
    default: "light-dark(#a2d7bd, #225640)",
    [supports_oklch]: "light-dark(oklch(83.4% 0.0656 163.2), oklch(41.1% 0.0674 163.2))",
  },
  accentLight6: {
    default: "#a2d7bd",
    [supports_oklch]: "oklch(83.4% 0.0656 163.2)",
  },
  accentDark6: {
    default: "#225640",
    [supports_oklch]: "oklch(41.1% 0.0674 163.2)",
  },
  accentA6: {
    default: "light-dark(#02964859, #66ff9652)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.5176 0.2 / 0.303), color(display-p3 0.5686 1 0.6314 / 0.318))",
  },
  accentLightA6: {
    default: "#02964859",
    [supports_p3]: "color(display-p3 0.0039 0.5176 0.2 / 0.303)",
  },
  accentDarkA6: {
    default: "#66ff9652",
    [supports_p3]: "color(display-p3 0.5686 1 0.6314 / 0.318)",
  },
  accent7: {
    default: "light-dark(#81c7a6, #2c674e)",
    [supports_oklch]: "light-dark(oklch(77.4% 0.0853 163.2), oklch(46.8% 0.0748 163.2))",
  },
  accentLight7: {
    default: "#81c7a6",
    [supports_oklch]: "oklch(77.4% 0.0853 163.2)",
  },
  accentDark7: {
    default: "#2c674e",
    [supports_oklch]: "oklch(46.8% 0.0748 163.2)",
  },
  accentA7: {
    default: "light-dark(#02914a7b, #6efda464)",
    [supports_p3]: "light-dark(color(display-p3 0.0039 0.4824 0.2 / 0.416), color(display-p3 0.5922 1 0.6745 / 0.386))",
  },
  accentLightA7: {
    default: "#02914a7b",
    [supports_p3]: "color(display-p3 0.0039 0.4824 0.2 / 0.416)",
  },
  accentDarkA7: {
    default: "#6efda464",
    [supports_p3]: "color(display-p3 0.5922 1 0.6745 / 0.386)",
  },
  accent8: {
    default: "light-dark(#4cb187, #357d5e)",
    [supports_oklch]: "light-dark(oklch(69% 0.1141 163.2), oklch(53.4% 0.0871 163.2))",
  },
  accentLight8: {
    default: "#4cb187",
    [supports_oklch]: "oklch(69% 0.1141 163.2)",
  },
  accentDark8: {
    default: "#357d5e",
    [supports_oklch]: "oklch(53.4% 0.0871 163.2)",
  },
  accentA8: {
    default: "light-dark(#009154b1, #6dffac7a)",
    [supports_p3]: "light-dark(color(display-p3 0 0.4745 0.2157 / 0.581), color(display-p3 0.5843 1 0.702 / 0.47))",
  },
  accentLightA8: {
    default: "#009154b1",
    [supports_p3]: "color(display-p3 0 0.4745 0.2157 / 0.581)",
  },
  accentDarkA8: {
    default: "#6dffac7a",
    [supports_p3]: "color(display-p3 0.5843 1 0.702 / 0.47)",
  },
  accent9: {
    default: "light-dark(#059669, #34d399)",
    [supports_oklch]: "light-dark(oklch(59.6% 0.1274 163.2), oklch(77.3% 0.1535 163.2))",
  },
  accentLight9: {
    default: "#059669",
    [supports_oklch]: "oklch(59.6% 0.1274 163.2)",
  },
  accentDark9: {
    default: "#34d399",
    [supports_oklch]: "oklch(77.3% 0.1535 163.2)",
  },
  accentA9: {
    default: "light-dark(#009466fa, #3fffb5d2)",
    [supports_p3]: "light-dark(color(display-p3 0 0.4314 0.2157 / 0.73), color(display-p3 0.5059 1 0.7412 / 0.812))",
  },
  accentLightA9: {
    default: "#009466fa",
    [supports_p3]: "color(display-p3 0 0.4314 0.2157 / 0.73)",
  },
  accentDarkA9: {
    default: "#3fffb5d2",
    [supports_p3]: "color(display-p3 0.5059 1 0.7412 / 0.812)",
  },
  accent10: {
    default: "light-dark(#00895d, #1fc88e)",
    [supports_oklch]: "light-dark(oklch(55.3% 0.1274 163.2), oklch(73.9% 0.1535 163.2))",
  },
  accentLight10: {
    default: "#00895d",
    [supports_oklch]: "oklch(55.3% 0.1274 163.2)",
  },
  accentDark10: {
    default: "#1fc88e",
    [supports_oklch]: "oklch(73.9% 0.1535 163.2)",
  },
  accentA10: {
    default: "light-dark(#00895d, #28ffb0c7)",
    [supports_p3]: "light-dark(color(display-p3 0 0.3922 0.1843 / 0.763), color(display-p3 0.4824 1 0.7216 / 0.768))",
  },
  accentLightA10: {
    default: "#00895d",
    [supports_p3]: "color(display-p3 0 0.3922 0.1843 / 0.763)",
  },
  accentDarkA10: {
    default: "#28ffb0c7",
    [supports_p3]: "color(display-p3 0.4824 1 0.7216 / 0.768)",
  },
  accent11: {
    default: "light-dark(#007a4f, #39d79c)",
    [supports_oklch]: "light-dark(oklch(50.4% 0.1274 163.2), oklch(78.4% 0.1535 163.2))",
  },
  accentLight11: {
    default: "#007a4f",
    [supports_oklch]: "oklch(50.4% 0.1274 163.2)",
  },
  accentDark11: {
    default: "#39d79c",
    [supports_oklch]: "oklch(78.4% 0.1535 163.2)",
  },
  accentA11: {
    default: "light-dark(#007a4f, #44feb4d7)",
    [supports_p3]: "light-dark(color(display-p3 0 0.3373 0.1451 / 0.791), color(display-p3 0.5137 1 0.7412 / 0.828))",
  },
  accentLightA11: {
    default: "#007a4f",
    [supports_p3]: "color(display-p3 0 0.3373 0.1451 / 0.791)",
  },
  accentDarkA11: {
    default: "#44feb4d7",
    [supports_p3]: "color(display-p3 0.5137 1 0.7412 / 0.828)",
  },
  accent12: {
    default: "light-dark(#193b2c, #b1f0d1)",
    [supports_oklch]: "light-dark(oklch(32.2% 0.0479 163.2), oklch(90.3% 0.0765 163.2))",
  },
  accentLight12: {
    default: "#193b2c",
    [supports_oklch]: "oklch(32.2% 0.0479 163.2)",
  },
  accentDark12: {
    default: "#b1f0d1",
    [supports_oklch]: "oklch(90.3% 0.0765 163.2)",
  },
  accentA12: {
    default: "light-dark(#012615e6, #bcffddf0)",
    [supports_p3]: "light-dark(color(display-p3 0 0.1098 0.0471 / 0.863), color(display-p3 0.8 1 0.8824 / 0.932))",
  },
  accentLightA12: {
    default: "#012615e6",
    [supports_p3]: "color(display-p3 0 0.1098 0.0471 / 0.863)",
  },
  accentDarkA12: {
    default: "#bcffddf0",
    [supports_p3]: "color(display-p3 0.8 1 0.8824 / 0.932)",
  },
});
