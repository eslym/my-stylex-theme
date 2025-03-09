import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const tertiarySurfaceColors = stylex.defineVars({
  light1: {
    "default": "#f5f7f9",
    [supports_oklch]: "oklch(97.5% 0.0032 256.8)"
  },
  dark1: {
    "default": "#080a0e",
    [supports_oklch]: "oklch(14.5% 0.0084 261.3)"
  },
  lightA1: {
    "default": "#267bd006",
    [supports_p3]: "color(display-p3 0 0.3922 0.7843 / 0.02)"
  },
  darkA1: {
    "default": "#000bd705",
    [supports_p3]: "color(display-p3 0 0.0392 0.9647 / 0.017)"
  },
  light2: {
    "default": "#f1f4f8",
    [supports_oklch]: "oklch(96.5% 0.0065 256.8)"
  },
  dark2: {
    "default": "#16181c",
    [supports_oklch]: "oklch(20.8% 0.0086 261.3)"
  },
  lightA2: {
    "default": "#1561c70a",
    [supports_p3]: "color(display-p3 0 0.2471 0.7373 / 0.032)"
  },
  darkA2: {
    "default": "#acc6fc13",
    [supports_p3]: "color(display-p3 0.6784 0.7843 0.9961 / 0.074)"
  },
  light3: {
    "default": "#e6ebf1",
    [supports_oklch]: "oklch(93.7% 0.0098 256.8)"
  },
  dark3: {
    "default": "#1f2228",
    [supports_oklch]: "oklch(25.1% 0.0121 261.3)"
  },
  lightA3: {
    "default": "#08448d15",
    [supports_p3]: "color(display-p3 0 0.2078 0.4667 / 0.076)"
  },
  darkA3: {
    "default": "#b2cafa20",
    [supports_p3]: "color(display-p3 0.7647 0.8314 0.9961 / 0.119)"
  },
  light4: {
    "default": "#dce2eb",
    [supports_oklch]: "oklch(91.2% 0.0131 256.8)"
  },
  dark4: {
    "default": "#252931",
    [supports_oklch]: "oklch(28.1% 0.0155 261.3)"
  },
  lightA4: {
    "default": "#04357f1f",
    [supports_p3]: "color(display-p3 0 0.1725 0.4431 / 0.116)"
  },
  darkA4: {
    "default": "#b2cbfd29",
    [supports_p3]: "color(display-p3 0.7451 0.8196 0.9961 / 0.156)"
  },
  light5: {
    "default": "#d4dbe6",
    [supports_oklch]: "oklch(88.9% 0.0165 256.8)"
  },
  dark5: {
    "default": "#2c313a",
    [supports_oklch]: "oklch(31.1% 0.0175 261.3)"
  },
  lightA5: {
    "default": "#02307827",
    [supports_p3]: "color(display-p3 0 0.1608 0.4275 / 0.148)"
  },
  darkA5: {
    "default": "#b8d1ff32",
    [supports_p3]: "color(display-p3 0.7569 0.8392 1 / 0.192)"
  },
  light6: {
    "default": "#cbd4e0",
    [supports_oklch]: "oklch(86.5% 0.0199 256.8)"
  },
  dark6: {
    "default": "#333a45",
    [supports_oklch]: "oklch(34.6% 0.021 261.3)"
  },
  lightA6: {
    "default": "#01317030",
    [supports_p3]: "color(display-p3 0 0.1529 0.3922 / 0.18)"
  },
  darkA6: {
    "default": "#b2cffc3e",
    [supports_p3]: "color(display-p3 0.7333 0.8353 1 / 0.237)"
  },
  light7: {
    "default": "#bdc8d8",
    [supports_oklch]: "oklch(83% 0.0252 256.8)"
  },
  dark7: {
    "default": "#3f4755",
    [supports_oklch]: "oklch(39.8% 0.0255 261.3)"
  },
  lightA7: {
    "default": "#0430713f",
    [supports_p3]: "color(display-p3 0 0.1529 0.3843 / 0.236)"
  },
  darkA7: {
    "default": "#b6cffd4f",
    [supports_p3]: "color(display-p3 0.7529 0.8314 1 / 0.303)"
  },
  light8: {
    "default": "#a6b5ca",
    [supports_oklch]: "oklch(77% 0.0344 256.8)"
  },
  dark8: {
    "default": "#566174",
    [supports_oklch]: "oklch(49% 0.033 261.3)"
  },
  lightA8: {
    "default": "#012d6c56",
    [supports_p3]: "color(display-p3 0.0039 0.149 0.3765 / 0.324)"
  },
  darkA8: {
    "default": "#b8d2fd6f",
    [supports_p3]: "color(display-p3 0.7608 0.8431 1 / 0.425)"
  },
  light9: {
    "default": "#79889c",
    [supports_oklch]: "oklch(62.1% 0.0354 256.8)"
  },
  dark9: {
    "default": "#636e81",
    [supports_oklch]: "oklch(53.7% 0.0321 261.3)"
  },
  lightA9: {
    "default": "#001d4484",
    [supports_p3]: "color(display-p3 0 0.0941 0.2353 / 0.504)"
  },
  darkA9: {
    "default": "#c2d8ff7c",
    [supports_p3]: "color(display-p3 0.7882 0.8627 1 / 0.478)"
  },
  light10: {
    "default": "#6f7d91",
    [supports_oklch]: "oklch(58.5% 0.0346 256.8)"
  },
  dark10: {
    "default": "#717c8d",
    [supports_oklch]: "oklch(58.3% 0.03 261.3)"
  },
  lightA10: {
    "default": "#001a3d8e",
    [supports_p3]: "color(display-p3 0 0.0824 0.2118 / 0.544)"
  },
  darkA10: {
    "default": "#c9defe89",
    [supports_p3]: "color(display-p3 0.8196 0.8863 1 / 0.527)"
  },
  light11: {
    "default": "#535e6f",
    [supports_oklch]: "oklch(47.9% 0.03 256.8)"
  },
  dark11: {
    "default": "#acb4c2",
    [supports_oklch]: "oklch(76.8% 0.022 261.3)"
  },
  lightA11: {
    "default": "#01122bab",
    [supports_p3]: "color(display-p3 0 0.0549 0.1451 / 0.66)"
  },
  darkA11: {
    "default": "#e2ecffc0",
    [supports_p3]: "color(display-p3 0.8941 0.9294 1 / 0.747)"
  },
  light12: {
    "default": "#19202a",
    [supports_oklch]: "oklch(24.1% 0.0214 256.8)"
  },
  dark12: {
    "default": "#eceef2",
    [supports_oklch]: "oklch(94.9% 0.0059 261.3)"
  },
  lightA12: {
    "default": "#000813e6",
    [supports_p3]: "color(display-p3 0 0.0275 0.0667 / 0.896)"
  },
  darkA12: {
    "default": "#f8fafef2",
    [supports_p3]: "color(display-p3 0.9725 0.9804 1 / 0.947)"
  }
});
