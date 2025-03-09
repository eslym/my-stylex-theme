import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const warningAccentColors = stylex.defineVars({
  light1: {
    "default": "#f9f7f5",
    [supports_oklch]: "oklch(97.7% 0.0031 75.83)"
  },
  dark1: {
    "default": "#0c0a04",
    [supports_oklch]: "oklch(14.5% 0.0144 91.94)"
  },
  lightA1: {
    "default": "#d07b2606",
    [supports_p3]: "color(display-p3 0.7843 0.3922 0 / 0.02)"
  },
  darkA1: {
    "default": "#b40a0003",
    [supports_p3]: "color(display-p3 0.9137 0.0392 0 / 0.009)"
  },
  light2: {
    "default": "#fff2e1",
    [supports_oklch]: "oklch(96.7% 0.0262 75.83)"
  },
  dark2: {
    "default": "#1a170c",
    [supports_oklch]: "oklch(20.5% 0.0204 91.94)"
  },
  lightA2: {
    "default": "#fff2e1",
    [supports_p3]: "color(display-p3 1 0.9294 0.8314 / 0.6)"
  },
  darkA2: {
    "default": "#facd2811",
    [supports_p3]: "color(display-p3 0.9882 0.8627 0.2314 / 0.062)"
  },
  light3: {
    "default": "#ffe8b7",
    [supports_oklch]: "oklch(94.8% 0.074 75.83)"
  },
  dark3: {
    "default": "#2b2202",
    [supports_oklch]: "oklch(25.4% 0.0498 91.94)"
  },
  lightA3: {
    "default": "#ffe8b7",
    [supports_p3]: "color(display-p3 1 0.6471 0 / 0.2)"
  },
  darkA3: {
    "default": "#fbb90023",
    [supports_p3]: "color(display-p3 1 0.7608 0 / 0.131)"
  },
  light4: {
    "default": "#ffdc97",
    [supports_oklch]: "oklch(92.1% 0.1168 75.83)"
  },
  dark4: {
    "default": "#3b2a00",
    [supports_oklch]: "oklch(29.4% 0.0811 91.94)"
  },
  lightA4: {
    "default": "#ffdc97",
    [supports_p3]: "color(display-p3 0.9725 0.6667 0 / 0.36)"
  },
  darkA4: {
    "default": "#ffaa0033",
    [supports_p3]: "color(display-p3 1 0.7294 0 / 0.188)"
  },
  light5: {
    "default": "#ffd076",
    [supports_oklch]: "oklch(89.3% 0.1495 75.83)"
  },
  dark5: {
    "default": "#473400",
    [supports_oklch]: "oklch(33.6% 0.0922 91.94)"
  },
  lightA5: {
    "default": "#ffd076",
    [supports_p3]: "color(display-p3 0.9647 0.651 0 / 0.476)"
  },
  darkA5: {
    "default": "#feb20040",
    [supports_p3]: "color(display-p3 1 0.749 0.0706 / 0.237)"
  },
  light6: {
    "default": "#ffc25b",
    [supports_oklch]: "oklch(85.5% 0.1404 75.83)"
  },
  dark6: {
    "default": "#554200",
    [supports_oklch]: "oklch(38.6% 0.0891 91.94)"
  },
  lightA6: {
    "default": "#ffc25b",
    [supports_p3]: "color(display-p3 0.9529 0.6078 0 / 0.568)"
  },
  darkA6: {
    "default": "#fdbf004f",
    [supports_p3]: "color(display-p3 1 0.8 0.1333 / 0.294)"
  },
  light7: {
    "default": "#f1b048",
    [supports_oklch]: "oklch(80% 0.1396 75.83)"
  },
  dark7: {
    "default": "#695400",
    [supports_oklch]: "oklch(45.3% 0.0928 91.94)"
  },
  lightA7: {
    "default": "#ed9200b6",
    [supports_p3]: "color(display-p3 0.8627 0.5451 0 / 0.636)"
  },
  darkA7: {
    "default": "#ffc90063",
    [supports_p3]: "color(display-p3 1 0.8235 0.1765 / 0.376)"
  },
  light8: {
    "default": "#e19700",
    [supports_oklch]: "oklch(73.2% 0.162 75.83)"
  },
  dark8: {
    "default": "#846a00",
    [supports_oklch]: "oklch(53.6% 0.1095 91.94)"
  },
  lightA8: {
    "default": "#e19700",
    [supports_p3]: "color(display-p3 0.8 0.502 0 / 0.788)"
  },
  darkA8: {
    "default": "#ffcb007f",
    [supports_p3]: "color(display-p3 1 0.8314 0.2196 / 0.482)"
  },
  light9: {
    "default": "#d08700",
    [supports_oklch]: "oklch(68.1% 0.162 75.83)"
  },
  dark9: {
    "default": "#fcc800",
    [supports_oklch]: "oklch(85.2% 0.199 91.94)"
  },
  lightA9: {
    "default": "#d08700",
    [supports_p3]: "color(display-p3 0.7294 0.4392 0 / 0.812)"
  },
  darkA9: {
    "default": "#ffca00fc",
    [supports_p3]: "color(display-p3 1 0.8275 0.2784 / 0.956)"
  },
  light10: {
    "default": "#c17c00",
    [supports_oklch]: "oklch(64.3% 0.162 75.83)"
  },
  dark10: {
    "default": "#f0be00",
    [supports_oklch]: "oklch(82% 0.199 91.94)"
  },
  lightA10: {
    "default": "#c17c00",
    [supports_p3]: "color(display-p3 0.6627 0.4 0 / 0.828)"
  },
  darkA10: {
    "default": "#fec900f0",
    [supports_p3]: "color(display-p3 1 0.8275 0.2784 / 0.907)"
  },
  light11: {
    "default": "#9d6300",
    [supports_oklch]: "oklch(55% 0.162 75.83)"
  },
  dark11: {
    "default": "#ffce00",
    [supports_oklch]: "oklch(87.2% 0.199 91.94)"
  },
  lightA11: {
    "default": "#9d6300",
    [supports_p3]: "color(display-p3 0.5255 0.3137 0 / 0.872)"
  },
  darkA11: {
    "default": "#ffce00",
    [supports_p3]: "color(display-p3 1 0.8431 0.2824 / 0.968)"
  },
  light12: {
    "default": "#4d3611",
    [supports_oklch]: "oklch(35.2% 0.0607 75.83)"
  },
  dark12: {
    "default": "#fde9ab",
    [supports_oklch]: "oklch(93.5% 0.0814 91.94)"
  },
  lightA12: {
    "default": "#402800ee",
    [supports_p3]: "color(display-p3 0.2157 0.1333 0 / 0.904)"
  },
  darkA12: {
    "default": "#ffebacfd",
    [supports_p3]: "color(display-p3 1 0.9373 0.7137 / 0.98)"
  }
});
