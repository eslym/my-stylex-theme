import * as stylex from '@stylexjs/stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const negativeSurfaceColors = stylex.defineVars({
  light1: {
    "default": "#fff1f1",
    [supports_oklch]: "oklch(97.6% 0.0249 17.59)"
  },
  dark1: {
    "default": "#1d0004",
    [supports_oklch]: "oklch(14.5% 0.06 13.43)"
  },
  lightA1: {
    "default": "#fff1f1",
    [supports_p3]: "color(display-p3 1 0.9216 0.9216 / 0.6)"
  },
  darkA1: {
    "default": "#fd000014",
    [supports_p3]: "color(display-p3 0.9922 0 0 / 0.066)"
  },
  light2: {
    "default": "#ffeaea",
    [supports_oklch]: "oklch(96.6% 0.0462 17.59)"
  },
  dark2: {
    "default": "#2d0a10",
    [supports_oklch]: "oklch(20.9% 0.057 13.43)"
  },
  lightA2: {
    "default": "#ffeaea",
    [supports_p3]: "color(display-p3 1 0.6863 0.6667 / 0.2)"
  },
  darkA2: {
    "default": "#fb0a3325",
    [supports_p3]: "color(display-p3 1 0.102 0.2275 / 0.127)"
  },
  light3: {
    "default": "#ffdcdd",
    [supports_oklch]: "oklch(93.7% 0.086 17.59)"
  },
  dark3: {
    "default": "#3f0d17",
    [supports_oklch]: "oklch(25.2% 0.0772 13.43)"
  },
  lightA3: {
    "default": "#ffdcdd",
    [supports_p3]: "color(display-p3 0.949 0 0.0353 / 0.116)"
  },
  darkA3: {
    "default": "#fc184638",
    [supports_p3]: "color(display-p3 1 0.1843 0.3255 / 0.192)"
  },
  light4: {
    "default": "#ffd0d1",
    [supports_oklch]: "oklch(91.2% 0.1111 17.59)"
  },
  dark4: {
    "default": "#520519",
    [supports_oklch]: "oklch(28.3% 0.107 13.43)"
  },
  lightA4: {
    "default": "#ffd0d1",
    [supports_p3]: "color(display-p3 0.9333 0 0 / 0.16)"
  },
  darkA4: {
    "default": "#ff003d4b",
    [supports_p3]: "color(display-p3 1 0.102 0.2784 / 0.266)"
  },
  light5: {
    "default": "#ffc5c6",
    [supports_oklch]: "oklch(88.8% 0.1456 17.59)"
  },
  dark5: {
    "default": "#61001e",
    [supports_oklch]: "oklch(31.3% 0.1257 13.43)"
  },
  lightA5: {
    "default": "#ffc5c6",
    [supports_p3]: "color(display-p3 0.9059 0 0 / 0.204)"
  },
  darkA5: {
    "default": "#fe00435b",
    [supports_p3]: "color(display-p3 1 0.0784 0.298 / 0.319)"
  },
  light6: {
    "default": "#ffb9bb",
    [supports_oklch]: "oklch(86.4% 0.1645 17.59)"
  },
  dark6: {
    "default": "#710024",
    [supports_oklch]: "oklch(35% 0.1404 13.43)"
  },
  lightA6: {
    "default": "#ffb9bb",
    [supports_p3]: "color(display-p3 0.8863 0 0 / 0.248)"
  },
  darkA6: {
    "default": "#fd00486c",
    [supports_p3]: "color(display-p3 1 0.1137 0.3216 / 0.38)"
  },
  light7: {
    "default": "#ffa7ab",
    [supports_oklch]: "oklch(83% 0.202 17.59)"
  },
  dark7: {
    "default": "#8c002c",
    [supports_oklch]: "oklch(40.1% 0.1704 13.43)"
  },
  lightA7: {
    "default": "#ffa7ab",
    [supports_p3]: "color(display-p3 0.8824 0.0039 0.0275 / 0.316)"
  },
  darkA7: {
    "default": "#fe004a88",
    [supports_p3]: "color(display-p3 1 0.1451 0.3333 / 0.482)"
  },
  light8: {
    "default": "#ff858d",
    [supports_oklch]: "oklch(76.9% 0.2721 17.59)"
  },
  dark8: {
    "default": "#bb003b",
    [supports_oklch]: "oklch(49.2% 0.2222 13.43)"
  },
  lightA8: {
    "default": "#ff858d",
    [supports_p3]: "color(display-p3 0.8863 0 0.0392 / 0.444)"
  },
  darkA8: {
    "default": "#fe004db9",
    [supports_p3]: "color(display-p3 1 0.1882 0.3529 / 0.658)"
  },
  light9: {
    "default": "#fe0046",
    [supports_oklch]: "oklch(62% 0.2655 17.59)"
  },
  dark9: {
    "default": "#d40045",
    [supports_oklch]: "oklch(54% 0.2346 13.43)"
  },
  lightA9: {
    "default": "#ff001acc",
    [supports_p3]: "color(display-p3 0.898 0 0.1255 / 0.796)"
  },
  darkA9: {
    "default": "#fe0051d3",
    [supports_p3]: "color(display-p3 1 0.2039 0.3647 / 0.752)"
  },
  light10: {
    "default": "#ec003f",
    [supports_oklch]: "oklch(58.5% 0.253 17.59)"
  },
  dark10: {
    "default": "#e30a52",
    [supports_oklch]: "oklch(58.6% 0.2309 13.43)"
  },
  lightA10: {
    "default": "#ec003f",
    [supports_p3]: "color(display-p3 0.8157 0 0.1098 / 0.816)"
  },
  darkA10: {
    "default": "#ff0a5be2",
    [supports_p3]: "color(display-p3 1 0.2196 0.4039 / 0.809)"
  },
  light11: {
    "default": "#b6002d",
    [supports_oklch]: "oklch(48% 0.2207 17.59)"
  },
  dark11: {
    "default": "#ff8495",
    [supports_oklch]: "oklch(77% 0.194 13.43)"
  },
  lightA11: {
    "default": "#b6002d",
    [supports_p3]: "color(display-p3 0.6039 0 0.0784 / 0.868)"
  },
  darkA11: {
    "default": "#ff8495",
    [supports_p3]: "color(display-p3 1 0.5804 0.6275 / 0.935)"
  },
  light12: {
    "default": "#490009",
    [supports_oklch]: "oklch(24.4% 0.1822 17.59)"
  },
  dark12: {
    "default": "#ffe5e7",
    [supports_oklch]: "oklch(94.9% 0.0351 13.43)"
  },
  lightA12: {
    "default": "#490009",
    [supports_p3]: "color(display-p3 0.2392 0 0.0196 / 0.972)"
  },
  darkA12: {
    "default": "#ffe5e7",
    [supports_p3]: "color(display-p3 1 0.9176 0.9216 / 0.984)"
  }
});
