import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentPrimary = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#f7f6f9, #080512)",
    [supports_oklch]: "light-dark(oklch(97.5% 0.0041 293), oklch(12.9% 0.0302 293.5))",
  },
  accentLight1: {
    default: "#f7f6f9",
    [supports_oklch]: "oklch(97.5% 0.0041 293)",
  },
  accentDark1: {
    default: "#080512",
    [supports_oklch]: "oklch(12.9% 0.0302 293.5)",
  },
  accentA1: {
    default: "light-dark(#c62f6305, #dd000007)",
    [supports_p3]: "light-dark(color(display-p3 0.7294 0 0.2549 / 0.016), color(display-p3 0.9922 0 0 / 0.016))",
  },
  accentLightA1: {
    default: "#c62f6305",
    [supports_p3]: "color(display-p3 0.7294 0 0.2549 / 0.016)",
  },
  accentDarkA1: {
    default: "#dd000007",
    [supports_p3]: "color(display-p3 0.9922 0 0 / 0.016)",
  },
  accent2: {
    default: "light-dark(#f3f2fb, #171325)",
    [supports_oklch]: "light-dark(oklch(96.4% 0.0124 293), oklch(20.1% 0.0366 293.5))",
  },
  accentLight2: {
    default: "#f3f2fb",
    [supports_oklch]: "oklch(96.4% 0.0124 293)",
  },
  accentDark2: {
    default: "#171325",
    [supports_oklch]: "oklch(20.1% 0.0366 293.5)",
  },
  accentA2: {
    default: "light-dark(#6b18e009, #f69dba16)",
    [supports_p3]: "light-dark(color(display-p3 0.3608 0 0.7451 / 0.032), color(display-p3 0.9961 0.6941 0.8118 / 0.076))",
  },
  accentLightA2: {
    default: "#6b18e009",
    [supports_p3]: "color(display-p3 0.3608 0 0.7451 / 0.032)",
  },
  accentDarkA2: {
    default: "#f69dba16",
    [supports_p3]: "color(display-p3 0.9961 0.6941 0.8118 / 0.076)",
  },
  accent3: {
    default: "light-dark(#ece9fd, #281c47)",
    [supports_oklch]: "light-dark(oklch(94.2% 0.0272 293), oklch(26.6% 0.0776 293.5))",
  },
  accentLight3: {
    default: "#ece9fd",
    [supports_oklch]: "oklch(94.2% 0.0272 293)",
  },
  accentDark3: {
    default: "#281c47",
    [supports_oklch]: "oklch(26.6% 0.0776 293.5)",
  },
  accentA3: {
    default: "light-dark(#d4c7ff55, #b970fe35)",
    [supports_p3]: "light-dark(color(display-p3 0.2235 0.0039 0.9333 / 0.068), color(display-p3 0.7059 0.4627 1 / 0.198))",
  },
  accentLightA3: {
    default: "#d4c7ff55",
    [supports_p3]: "color(display-p3 0.2235 0.0039 0.9333 / 0.068)",
  },
  accentDarkA3: {
    default: "#b970fe35",
    [supports_p3]: "color(display-p3 0.7059 0.4627 1 / 0.198)",
  },
  accent4: {
    default: "light-dark(#e3dcff, #352061)",
    [supports_oklch]: "light-dark(oklch(91.3% 0.0537 293), oklch(31% 0.109 293.5))",
  },
  accentLight4: {
    default: "#e3dcff",
    [supports_oklch]: "oklch(91.3% 0.0537 293)",
  },
  accentDark4: {
    default: "#352061",
    [supports_oklch]: "oklch(31% 0.109 293.5)",
  },
  accentA4: {
    default: "light-dark(#e3dcff, #a157fd52)",
    [supports_p3]: "light-dark(color(display-p3 0.2549 0 0.9922 / 0.12), color(display-p3 0.6196 0.3725 1 / 0.305))",
  },
  accentLightA4: {
    default: "#e3dcff",
    [supports_p3]: "color(display-p3 0.2549 0 0.9922 / 0.12)",
  },
  accentDarkA4: {
    default: "#a157fd52",
    [supports_p3]: "color(display-p3 0.6196 0.3725 1 / 0.305)",
  },
  accent5: {
    default: "light-dark(#d9cfff, #3e296f)",
    [supports_oklch]: "light-dark(oklch(88.1% 0.0774 293), oklch(34.8% 0.1158 293.5))",
  },
  accentLight5: {
    default: "#d9cfff",
    [supports_oklch]: "oklch(88.1% 0.0774 293)",
  },
  accentDark5: {
    default: "#3e296f",
    [supports_oklch]: "oklch(34.8% 0.1158 293.5)",
  },
  accentA5: {
    default: "light-dark(#d9cfff, #a062ff61)",
    [supports_p3]: "light-dark(color(display-p3 0.2235 0 0.9686 / 0.172), color(display-p3 0.6157 0.4118 1 / 0.365))",
  },
  accentLightA5: {
    default: "#d9cfff",
    [supports_p3]: "color(display-p3 0.2235 0 0.9686 / 0.172)",
  },
  accentDarkA5: {
    default: "#a062ff61",
    [supports_p3]: "color(display-p3 0.6157 0.4118 1 / 0.365)",
  },
  accent6: {
    default: "light-dark(#ccbfff, #4a347e)",
    [supports_oklch]: "light-dark(oklch(84% 0.099 293), oklch(38.9% 0.1198 293.5))",
  },
  accentLight6: {
    default: "#ccbfff",
    [supports_oklch]: "oklch(84% 0.099 293)",
  },
  accentDark6: {
    default: "#4a347e",
    [supports_oklch]: "oklch(38.9% 0.1198 293.5)",
  },
  accentA6: {
    default: "light-dark(#ccbfff, #a46dfd72)",
    [supports_p3]: "light-dark(color(display-p3 0.2118 0 0.9529 / 0.236), color(display-p3 0.6314 0.4549 0.9961 / 0.43))",
  },
  accentLightA6: {
    default: "#ccbfff",
    [supports_p3]: "color(display-p3 0.2118 0 0.9529 / 0.236)",
  },
  accentDarkA6: {
    default: "#a46dfd72",
    [supports_p3]: "color(display-p3 0.6314 0.4549 0.9961 / 0.43)",
  },
  accent7: {
    default: "light-dark(#bba8ff, #594194)",
    [supports_oklch]: "light-dark(oklch(78.1% 0.1245 293), oklch(44.4% 0.1302 293.5))",
  },
  accentLight7: {
    default: "#bba8ff",
    [supports_oklch]: "oklch(78.1% 0.1245 293)",
  },
  accentDark7: {
    default: "#594194",
    [supports_oklch]: "oklch(44.4% 0.1302 293.5)",
  },
  accentA7: {
    default: "light-dark(#bba8ff, #a373fe8a)",
    [supports_p3]: "light-dark(color(display-p3 0.1961 0.0039 0.9529 / 0.324), color(display-p3 0.6314 0.4784 0.9961 / 0.52))",
  },
  accentLightA7: {
    default: "#bba8ff",
    [supports_p3]: "color(display-p3 0.1961 0.0039 0.9529 / 0.324)",
  },
  accentDarkA7: {
    default: "#a373fe8a",
    [supports_p3]: "color(display-p3 0.6314 0.4784 0.9961 / 0.52)",
  },
  accent8: {
    default: "light-dark(#a589fc, #6e51b6)",
    [supports_oklch]: "light-dark(oklch(70.4% 0.1644 293), oklch(51.6% 0.1531 293.5))",
  },
  accentLight8: {
    default: "#a589fc",
    [supports_oklch]: "oklch(70.4% 0.1644 293)",
  },
  accentDark8: {
    default: "#6e51b6",
    [supports_oklch]: "oklch(51.6% 0.1531 293.5)",
  },
  accentA8: {
    default: "light-dark(#4202fc74, #9f73ffaf)",
    [supports_p3]: "light-dark(color(display-p3 0.2039 0 0.9294 / 0.448), color(display-p3 0.6235 0.4745 1 / 0.661))",
  },
  accentLightA8: {
    default: "#4202fc74",
    [supports_p3]: "color(display-p3 0.2039 0 0.9294 / 0.448)",
  },
  accentDarkA8: {
    default: "#9f73ffaf",
    [supports_p3]: "color(display-p3 0.6235 0.4745 1 / 0.661)",
  },
  accent9: {
    default: "light-dark(#7c3aed, #a78bfa)",
    [supports_oklch]: "light-dark(oklch(54.1% 0.2466 293), oklch(70.9% 0.1592 293.5))",
  },
  accentLight9: {
    default: "#7c3aed",
    [supports_oklch]: "oklch(54.1% 0.2466 293)",
  },
  accentDark9: {
    default: "#a78bfa",
    [supports_oklch]: "oklch(70.9% 0.1592 293.5)",
  },
  accentA9: {
    default: "light-dark(#5700e9c4, #aa8efffa)",
    [supports_p3]: "light-dark(color(display-p3 0.2824 0 0.8667 / 0.752), color(display-p3 0.6706 0.5804 1 / 0.949))",
  },
  accentLightA9: {
    default: "#5700e9c4",
    [supports_p3]: "color(display-p3 0.2824 0 0.8667 / 0.752)",
  },
  accentDarkA9: {
    default: "#aa8efffa",
    [supports_p3]: "color(display-p3 0.6706 0.5804 1 / 0.949)",
  },
  accent10: {
    default: "light-dark(#6d34d1, #9c7fed)",
    [supports_oklch]: "light-dark(oklch(49.5% 0.222 293), oklch(67.2% 0.1592 293.5))",
  },
  accentLight10: {
    default: "#6d34d1",
    [supports_oklch]: "oklch(49.5% 0.222 293)",
  },
  accentDark10: {
    default: "#9c7fed",
    [supports_oklch]: "oklch(67.2% 0.1592 293.5)",
  },
  accentA10: {
    default: "light-dark(#4800c6ca, #a989feec)",
    [supports_p3]: "light-dark(color(display-p3 0.2353 0 0.7333 / 0.78), color(display-p3 0.6627 0.5569 1 / 0.893))",
  },
  accentLightA10: {
    default: "#4800c6ca",
    [supports_p3]: "color(display-p3 0.2353 0 0.7333 / 0.78)",
  },
  accentDarkA10: {
    default: "#a989feec",
    [supports_p3]: "color(display-p3 0.6627 0.5569 1 / 0.893)",
  },
  accent11: {
    default: "light-dark(#6a30cd, #bca3ff)",
    [supports_oklch]: "light-dark(oklch(48.5% 0.222 293), oklch(77.8% 0.1592 293.5))",
  },
  accentLight11: {
    default: "#6a30cd",
    [supports_oklch]: "oklch(48.5% 0.222 293)",
  },
  accentDark11: {
    default: "#bca3ff",
    [supports_oklch]: "oklch(77.8% 0.1592 293.5)",
  },
  accentA11: {
    default: "light-dark(#4901c3cf, #bca3ff)",
    [supports_p3]: "light-dark(color(display-p3 0.2353 0 0.7176 / 0.796), color(display-p3 0.7412 0.6588 0.9961 / 0.975))",
  },
  accentLightA11: {
    default: "#4901c3cf",
    [supports_p3]: "color(display-p3 0.2353 0 0.7176 / 0.796)",
  },
  accentDarkA11: {
    default: "#bca3ff",
    [supports_p3]: "color(display-p3 0.7412 0.6588 0.9961 / 0.975)",
  },
  accent12: {
    default: "light-dark(#37196e, #e3dcff)",
    [supports_oklch]: "light-dark(oklch(31.4% 0.1368 293), oklch(91.2% 0.0526 293.5))",
  },
  accentLight12: {
    default: "#37196e",
    [supports_oklch]: "oklch(31.4% 0.1368 293)",
  },
  accentDark12: {
    default: "#e3dcff",
    [supports_oklch]: "oklch(91.2% 0.0526 293.5)",
  },
  accentA12: {
    default: "light-dark(#22005ee6, #e3dcff)",
    [supports_p3]: "light-dark(color(display-p3 0.1059 0 0.349 / 0.892), color(display-p3 0.898 0.8745 1 / 0.988))",
  },
  accentLightA12: {
    default: "#22005ee6",
    [supports_p3]: "color(display-p3 0.1059 0 0.349 / 0.892)",
  },
  accentDarkA12: {
    default: "#e3dcff",
    [supports_p3]: "color(display-p3 0.898 0.8745 1 / 0.988)",
  },
});
