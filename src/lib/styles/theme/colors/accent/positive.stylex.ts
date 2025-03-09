import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const positiveAccentColors = stylex.defineVars({
  light1: {
    "default": "#f5f9f7",
    [supports_oklch]: "oklch(97.8% 0.0049 163.2)"
  },
  dark1: {
    "default": "#050c08",
    [supports_oklch]: "oklch(14.5% 0.0141 163.2)"
  },
  lightA1: {
    "default": "#26d07b06",
    [supports_p3]: "color(display-p3 0 0.7373 0.2471 / 0.016)"
  },
  darkA1: {
    "default": "#00b40003",
    [supports_p3]: "color(display-p3 0 0.9137 0 / 0.009)"
  },
  light2: {
    "default": "#edf5f1",
    [supports_oklch]: "oklch(96.4% 0.0105 163.2)"
  },
  dark2: {
    "default": "#101a15",
    [supports_oklch]: "oklch(20.6% 0.0179 163.2)"
  },
  lightA2: {
    "default": "#0e9f570e",
    [supports_p3]: "color(display-p3 0 0.5725 0.2471 / 0.048)"
  },
  darkA2: {
    "default": "#64faaf11",
    [supports_p3]: "color(display-p3 0.5176 0.9922 0.6941 / 0.066)"
  },
  light3: {
    "default": "#dcf1e6",
    [supports_oklch]: "oklch(94% 0.0263 163.2)"
  },
  dark3: {
    "default": "#0f2d20",
    [supports_oklch]: "oklch(26.8% 0.043 163.2)"
  },
  lightA3: {
    "default": "#04b0561f",
    [supports_p3]: "color(display-p3 0 0.6039 0.2667 / 0.104)"
  },
  darkA3: {
    "default": "#2cfba125",
    [supports_p3]: "color(display-p3 0.4078 1 0.6902 / 0.139)"
  },
  light4: {
    "default": "#caebda",
    [supports_oklch]: "oklch(91.3% 0.0418 163.2)"
  },
  dark4: {
    "default": "#083b29",
    [supports_oklch]: "oklch(31.6% 0.0622 163.2)"
  },
  lightA4: {
    "default": "#01ac5431",
    [supports_p3]: "color(display-p3 0 0.6078 0.2588 / 0.168)"
  },
  darkA4: {
    "default": "#00ffa533",
    [supports_p3]: "color(display-p3 0.3412 1 0.6824 / 0.196)"
  },
  light5: {
    "default": "#b6e3cc",
    [supports_oklch]: "oklch(87.8% 0.057 163.2)"
  },
  dark5: {
    "default": "#0d4933",
    [supports_oklch]: "oklch(36.3% 0.0712 163.2)"
  },
  lightA5: {
    "default": "#03a75346",
    [supports_p3]: "color(display-p3 0 0.5843 0.2353 / 0.236)"
  },
  darkA5: {
    "default": "#16fea942",
    [supports_p3]: "color(display-p3 0.3961 1 0.7059 / 0.254)"
  },
  light6: {
    "default": "#9cd9bb",
    [supports_oklch]: "oklch(83.5% 0.074 163.2)"
  },
  dark6: {
    "default": "#16583f",
    [supports_oklch]: "oklch(41.2% 0.0781 163.2)"
  },
  lightA6: {
    "default": "#01a35360",
    [supports_p3]: "color(display-p3 0.0039 0.5569 0.2431 / 0.324)"
  },
  darkA6: {
    "default": "#30fdaf52",
    [supports_p3]: "color(display-p3 0.451 1 0.7255 / 0.315)"
  },
  light7: {
    "default": "#79c9a4",
    [supports_oklch]: "oklch(77.4% 0.0963 163.2)"
  },
  dark7: {
    "default": "#1d694c",
    [supports_oklch]: "oklch(46.7% 0.0877 163.2)"
  },
  lightA7: {
    "default": "#009b5484",
    [supports_p3]: "color(display-p3 0 0.5294 0.2353 / 0.44)"
  },
  darkA7: {
    "default": "#3bffb463",
    [supports_p3]: "color(display-p3 0.4863 1 0.7412 / 0.38)"
  },
  light8: {
    "default": "#39b484",
    [supports_oklch]: "oklch(69% 0.129 163.2)"
  },
  dark8: {
    "default": "#217e5b",
    [supports_oklch]: "oklch(53% 0.1018 163.2)"
  },
  lightA8: {
    "default": "#009f61c5",
    [supports_p3]: "color(display-p3 0 0.5255 0.2549 / 0.62)"
  },
  darkA8: {
    "default": "#3bffb579",
    [supports_p3]: "color(display-p3 0.4863 1 0.7412 / 0.466)"
  },
  light9: {
    "default": "#096",
    [supports_oklch]: "oklch(59.6% 0.145 163.2)"
  },
  dark9: {
    "default": "#00d492",
    [supports_oklch]: "oklch(76.5% 0.177 163.2)"
  },
  lightA9: {
    "default": "#009966",
    [supports_p3]: "color(display-p3 0 0.451 0.2078 / 0.732)"
  },
  darkA9: {
    "default": "#00feaed3",
    [supports_p3]: "color(display-p3 0.4549 1 0.7176 / 0.813)"
  },
  light10: {
    "default": "#008b5a",
    [supports_oklch]: "oklch(55.3% 0.145 163.2)"
  },
  dark10: {
    "default": "#00c987",
    [supports_oklch]: "oklch(73% 0.177 163.2)"
  },
  lightA10: {
    "default": "#008b5a",
    [supports_p3]: "color(display-p3 0 0.3961 0.1765 / 0.76)"
  },
  darkA10: {
    "default": "#00ffabc7",
    [supports_p3]: "color(display-p3 0.4549 1 0.7059 / 0.768)"
  },
  light11: {
    "default": "#007b4e",
    [supports_oklch]: "oklch(50.6% 0.145 163.2)"
  },
  dark11: {
    "default": "#00da97",
    [supports_oklch]: "oklch(78.1% 0.177 163.2)"
  },
  lightA11: {
    "default": "#007b4e",
    [supports_p3]: "color(display-p3 0 0.3373 0.1451 / 0.788)"
  },
  darkA11: {
    "default": "#00ffb0d9",
    [supports_p3]: "color(display-p3 0.4549 1 0.7216 / 0.837)"
  },
  light12: {
    "default": "#143c2b",
    [supports_oklch]: "oklch(32.2% 0.0544 163.2)"
  },
  dark12: {
    "default": "#a8f2cf",
    [supports_oklch]: "oklch(90.4% 0.0884 163.2)"
  },
  lightA12: {
    "default": "#002b19eb",
    [supports_p3]: "color(display-p3 0 0.1255 0.0588 / 0.876)"
  },
  darkA12: {
    "default": "#b0fed9f2",
    [supports_p3]: "color(display-p3 0.7647 1 0.8706 / 0.939)"
  }
});
