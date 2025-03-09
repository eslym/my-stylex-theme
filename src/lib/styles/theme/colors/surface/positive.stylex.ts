import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const positiveSurfaceColors = stylex.defineVars({
  light1: {
    "default": "#edfcf4",
    [supports_oklch]: "oklch(97.7% 0.0189 163.2)"
  },
  dark1: {
    "default": "#001004",
    [supports_oklch]: "oklch(14.5% 0.0593 163.2)"
  },
  lightA1: {
    "default": "#daffeb66",
    [supports_p3]: "color(display-p3 0.8824 1 0.9216 / 0.4)"
  },
  darkA1: {
    "default": "#00e50007",
    [supports_p3]: "color(display-p3 0 0.9804 0 / 0.025)"
  },
  light2: {
    "default": "#dcfdec",
    [supports_oklch]: "oklch(96.5% 0.0414 163.2)"
  },
  dark2: {
    "default": "#001f10",
    [supports_oklch]: "oklch(20.6% 0.0569 163.2)"
  },
  lightA2: {
    "default": "#c8ffe399",
    [supports_p3]: "color(display-p3 0.7451 1 0.8549 / 0.4)"
  },
  darkA2: {
    "default": "#00fe5016",
    [supports_p3]: "color(display-p3 0 0.9961 0.3765 / 0.082)"
  },
  light3: {
    "default": "#d0f4e2",
    [supports_oklch]: "oklch(93.7% 0.0454 163.2)"
  },
  dark3: {
    "default": "#002b17",
    [supports_oklch]: "oklch(24.9% 0.0705 163.2)"
  },
  lightA3: {
    "default": "#01d76c2b",
    [supports_p3]: "color(display-p3 0 0.7843 0.3373 / 0.14)"
  },
  darkA3: {
    "default": "#00fb6923",
    [supports_p3]: "color(display-p3 0.1608 1 0.4902 / 0.131)"
  },
  light4: {
    "default": "#c4edd8",
    [supports_oklch]: "oklch(91.2% 0.052 163.2)"
  },
  dark4: {
    "default": "#00341d",
    [supports_oklch]: "oklch(27.9% 0.0777 163.2)"
  },
  lightA4: {
    "default": "#05bf6038",
    [supports_p3]: "color(display-p3 0 0.6824 0.2784 / 0.184)"
  },
  darkA4: {
    "default": "#00fe792c",
    [supports_p3]: "color(display-p3 0.2275 1 0.5294 / 0.168)"
  },
  light5: {
    "default": "#b9e7d0",
    [supports_oklch]: "oklch(88.8% 0.0563 163.2)"
  },
  dark5: {
    "default": "#003d22",
    [supports_oklch]: "oklch(30.9% 0.0909 163.2)"
  },
  lightA5: {
    "default": "#03b25b43",
    [supports_p3]: "color(display-p3 0 0.6314 0.2627 / 0.224)"
  },
  darkA5: {
    "default": "#00fb7c36",
    [supports_p3]: "color(display-p3 0.2706 0.9961 0.5373 / 0.205)"
  },
  light6: {
    "default": "#a9e1c5",
    [supports_oklch]: "oklch(86.3% 0.0694 163.2)"
  },
  dark6: {
    "default": "#00482a",
    [supports_oklch]: "oklch(34.6% 0.106 163.2)"
  },
  lightA6: {
    "default": "#01ad5753",
    [supports_p3]: "color(display-p3 0 0.6 0.2588 / 0.276)"
  },
  darkA6: {
    "default": "#00fe8841",
    [supports_p3]: "color(display-p3 0.3216 1 0.5882 / 0.249)"
  },
  light7: {
    "default": "#9dd6ba",
    [supports_oklch]: "oklch(82.8% 0.0701 163.2)"
  },
  dark7: {
    "default": "#005936",
    [supports_oklch]: "oklch(39.8% 0.1337 163.2)"
  },
  lightA7: {
    "default": "#019a4f5f",
    [supports_p3]: "color(display-p3 0.0039 0.5216 0.2314 / 0.324)"
  },
  darkA7: {
    "default": "#00fd9153",
    [supports_p3]: "color(display-p3 0.3608 1 0.6196 / 0.319)"
  },
  light8: {
    "default": "#7dc6a4",
    [supports_oklch]: "oklch(76.8% 0.0886 163.2)"
  },
  dark8: {
    "default": "#00754a",
    [supports_oklch]: "oklch(48.8% 0.1715 163.2)"
  },
  lightA8: {
    "default": "#00924e80",
    [supports_p3]: "color(display-p3 0 0.4902 0.2196 / 0.432)"
  },
  darkA8: {
    "default": "#00fd9b70",
    [supports_p3]: "color(display-p3 0.4039 1 0.6588 / 0.429)"
  },
  light9: {
    "default": "#009f6c",
    [supports_oklch]: "oklch(61.6% 0.143 163.2)"
  },
  dark9: {
    "default": "#008555",
    [supports_oklch]: "oklch(53.5% 0.2442 163.2)"
  },
  lightA9: {
    "default": "#009f6c",
    [supports_p3]: "color(display-p3 0 0.4745 0.2314 / 0.72)"
  },
  darkA9: {
    "default": "#00fe9f81",
    [supports_p3]: "color(display-p3 0.4235 1 0.6667 / 0.494)"
  },
  light10: {
    "default": "#009461",
    [supports_oklch]: "oklch(58.1% 0.145 163.2)"
  },
  dark10: {
    "default": "#009561",
    [supports_oklch]: "oklch(58.1% 0.2264 163.2)"
  },
  lightA10: {
    "default": "#009461",
    [supports_p3]: "color(display-p3 0 0.4314 0.1922 / 0.74)"
  },
  darkA10: {
    "default": "#00ffa391",
    [supports_p3]: "color(display-p3 0.4275 1 0.6784 / 0.56)"
  },
  light11: {
    "default": "#007248",
    [supports_oklch]: "oklch(47.7% 0.1382 163.2)"
  },
  dark11: {
    "default": "#00d592",
    [supports_oklch]: "oklch(76.6% 0.177 163.2)"
  },
  lightA11: {
    "default": "#007248",
    [supports_p3]: "color(display-p3 0 0.3098 0.1333 / 0.808)"
  },
  darkA11: {
    "default": "#00feadd4",
    [supports_p3]: "color(display-p3 0.451 1 0.7137 / 0.817)"
  },
  light12: {
    "default": "#002a15",
    [supports_oklch]: "oklch(24.2% 0.1393 163.2)"
  },
  dark12: {
    "default": "#d2f8e5",
    [supports_oklch]: "oklch(94.7% 0.0465 163.2)"
  },
  lightA12: {
    "default": "#002a15",
    [supports_p3]: "color(display-p3 0 0.1176 0.0431 / 0.948)"
  },
  darkA12: {
    "default": "#d8ffebf8",
    [supports_p3]: "color(display-p3 0.8784 1 0.9333 / 0.968)"
  }
});
