import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const warningSurfaceColors = stylex.defineVars({
  light1: {
    "default": "#fff6eb",
    [supports_oklch]: "oklch(97.7% 0.0175 75.83)"
  },
  dark1: {
    "default": "#110900",
    [supports_oklch]: "oklch(14.5% 0.0493 91.94)"
  },
  lightA1: {
    "default": "#fff6eb",
    [supports_p3]: "color(display-p3 1 0.9569 0.8902 / 0.6)"
  },
  darkA1: {
    "default": "#ea000008",
    [supports_p3]: "color(display-p3 0.9804 0 0 / 0.025)"
  },
  light2: {
    "default": "#fdf2e2",
    [supports_oklch]: "oklch(96.5% 0.0233 75.83)"
  },
  dark2: {
    "default": "#1f1700",
    [supports_oklch]: "oklch(20.8% 0.0472 91.94)"
  },
  lightA2: {
    "default": "#ffedd299",
    [supports_p3]: "color(display-p3 1 0.8235 0.549 / 0.2)"
  },
  darkA2: {
    "default": "#fea10016",
    [supports_p3]: "color(display-p3 0.9961 0.6627 0 / 0.082)"
  },
  light3: {
    "default": "#f8e7d0",
    [supports_oklch]: "oklch(93.7% 0.0356 75.83)"
  },
  dark3: {
    "default": "#2d2000",
    [supports_oklch]: "oklch(25% 0.0677 91.94)"
  },
  lightA3: {
    "default": "#ef8a012b",
    [supports_p3]: "color(display-p3 0.8549 0.5294 0 / 0.156)"
  },
  darkA3: {
    "default": "#fba10025",
    [supports_p3]: "color(display-p3 1 0.7098 0 / 0.135)"
  },
  light4: {
    "default": "#f7debb",
    [supports_oklch]: "oklch(91.2% 0.0534 75.83)"
  },
  dark4: {
    "default": "#372700",
    [supports_oklch]: "oklch(28.1% 0.0774 91.94)"
  },
  lightA4: {
    "default": "#ef8d0341",
    [supports_p3]: "color(display-p3 0.8667 0.5333 0 / 0.236)"
  },
  darkA4: {
    "default": "#ffa8002f",
    [supports_p3]: "color(display-p3 1 0.7098 0 / 0.176)"
  },
  light5: {
    "default": "#f2d6ae",
    [supports_oklch]: "oklch(88.9% 0.0604 75.83)"
  },
  dark5: {
    "default": "#402e00",
    [supports_oklch]: "oklch(31.2% 0.0968 91.94)"
  },
  lightA5: {
    "default": "#df84014e",
    [supports_p3]: "color(display-p3 0.8039 0.498 0 / 0.284)"
  },
  darkA5: {
    "default": "#fcac0039",
    [supports_p3]: "color(display-p3 1 0.7373 0.0235 / 0.209)"
  },
  light6: {
    "default": "#f0cc98",
    [supports_oklch]: "oklch(86.3% 0.0785 75.83)"
  },
  dark6: {
    "default": "#4b3700",
    [supports_oklch]: "oklch(34.9% 0.1252 91.94)"
  },
  lightA6: {
    "default": "#e1850164",
    [supports_p3]: "color(display-p3 0.8118 0.498 0 / 0.364)"
  },
  darkA6: {
    "default": "#feb30044",
    [supports_p3]: "color(display-p3 1 0.7529 0.0863 / 0.254)"
  },
  light7: {
    "default": "#ecbf7d",
    [supports_oklch]: "oklch(82.9% 0.0979 75.83)"
  },
  dark7: {
    "default": "#5b4500",
    [supports_oklch]: "oklch(40.1% 0.1531 91.94)"
  },
  lightA7: {
    "default": "#de840080",
    [supports_p3]: "color(display-p3 0.8039 0.502 0 / 0.464)"
  },
  darkA7: {
    "default": "#fdbb0055",
    [supports_p3]: "color(display-p3 1 0.7804 0.1412 / 0.319)"
  },
  light8: {
    "default": "#e3a748",
    [supports_oklch]: "oklch(76.8% 0.1309 75.83)"
  },
  dark8: {
    "default": "#795d00",
    [supports_oklch]: "oklch(49% 0.207 91.94)"
  },
  lightA8: {
    "default": "#d98500b6",
    [supports_p3]: "color(display-p3 0.7882 0.4863 0 / 0.644)"
  },
  darkA8: {
    "default": "#ffc10074",
    [supports_p3]: "color(display-p3 1 0.7922 0.1922 / 0.437)"
  },
  light9: {
    "default": "#b77500",
    [supports_oklch]: "oklch(61.7% 0.162 75.83)"
  },
  dark9: {
    "default": "#886900",
    [supports_oklch]: "oklch(53.5% 0.2388 91.94)"
  },
  lightA9: {
    "default": "#b77500",
    [supports_p3]: "color(display-p3 0.6275 0.3725 0 / 0.84)"
  },
  darkA9: {
    "default": "#fec20084",
    [supports_p3]: "color(display-p3 1 0.8039 0.2157 / 0.494)"
  },
  light10: {
    "default": "#a96c00",
    [supports_oklch]: "oklch(58.1% 0.1512 75.83)"
  },
  dark10: {
    "default": "#987600",
    [supports_oklch]: "oklch(58.1% 0.234 91.94)"
  },
  lightA10: {
    "default": "#a96c00",
    [supports_p3]: "color(display-p3 0.5686 0.3451 0 / 0.856)"
  },
  darkA10: {
    "default": "#ffc50094",
    [supports_p3]: "color(display-p3 1 0.8039 0.2314 / 0.56)"
  },
  light11: {
    "default": "#815000",
    [supports_oklch]: "oklch(47.4% 0.1243 75.83)"
  },
  dark11: {
    "default": "#dbad00",
    [supports_oklch]: "oklch(76.7% 0.199 91.94)"
  },
  lightA11: {
    "default": "#815000",
    [supports_p3]: "color(display-p3 0.4235 0.2471 0 / 0.9)"
  },
  darkA11: {
    "default": "#ffc900da",
    [supports_p3]: "color(display-p3 1 0.8235 0.2667 / 0.825)"
  },
  light12: {
    "default": "#321900",
    [supports_oklch]: "oklch(24.3% 0.1252 75.83)"
  },
  dark12: {
    "default": "#fceec3",
    [supports_oklch]: "oklch(94.8% 0.0569 91.94)"
  },
  lightA12: {
    "default": "#321900",
    [supports_p3]: "color(display-p3 0.1725 0.0863 0 / 0.984)"
  },
  darkA12: {
    "default": "#fff1c5fc",
    [supports_p3]: "color(display-p3 1 0.9529 0.8 / 0.98)"
  }
});
