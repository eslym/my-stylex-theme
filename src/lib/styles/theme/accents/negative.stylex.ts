import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const accentNegative = stylex.createTheme(radixColors, {
  accent1: {
    default: "light-dark(#faf6f6, #0c0506)",
    [supports_oklch]: "light-dark(oklch(97.7% 0.0036 17.58), oklch(12.9% 0.0128 13.43))",
  },
  accentLight1: {
    default: "#faf6f6",
    [supports_oklch]: "oklch(97.7% 0.0036 17.58)",
  },
  accentDark1: {
    default: "#0c0506",
    [supports_oklch]: "oklch(12.9% 0.0128 13.43)",
  },
  accentA1: {
    default: "light-dark(#ffede849, #ea00000b)",
    [supports_p3]: "light-dark(color(display-p3 1 0.8745 0.8275 / 0.143), color(display-p3 0.9922 0 0 / 0.032))",
  },
  accentLightA1: {
    default: "#ffede849",
    [supports_p3]: "color(display-p3 1 0.8745 0.8275 / 0.143)",
  },
  accentDarkA1: {
    default: "#ea00000b",
    [supports_p3]: "color(display-p3 0.9922 0 0 / 0.032)",
  },
  accent2: {
    default: "light-dark(#faf1f1, #1c1313)",
    [supports_oklch]: "light-dark(oklch(96.5% 0.0095 17.58), oklch(19.8% 0.0153 13.43))",
  },
  accentLight2: {
    default: "#faf1f1",
    [supports_oklch]: "oklch(96.5% 0.0095 17.58)",
  },
  accentDark2: {
    default: "#1c1313",
    [supports_oklch]: "oklch(19.8% 0.0153 13.43)",
  },
  accentA2: {
    default: "light-dark(#ffdbd649, #f881001b)",
    [supports_p3]: "light-dark(color(display-p3 0.9765 0.1804 0.0118 / 0.044), color(display-p3 0.9922 0.5569 0 / 0.096))",
  },
  accentLightA2: {
    default: "#ffdbd649",
    [supports_p3]: "color(display-p3 0.9765 0.1804 0.0118 / 0.044)",
  },
  accentDarkA2: {
    default: "#f881001b",
    [supports_p3]: "color(display-p3 0.9922 0.5569 0 / 0.096)",
  },
  accent3: {
    default: "light-dark(#fae3e3, #381419)",
    [supports_oklch]: "light-dark(oklch(93.5% 0.0248 17.58), oklch(24.9% 0.057 13.43))",
  },
  accentLight3: {
    default: "#fae3e3",
    [supports_oklch]: "oklch(93.5% 0.0248 17.58)",
  },
  accentDark3: {
    default: "#381419",
    [supports_oklch]: "oklch(24.9% 0.057 13.43)",
  },
  accentA3: {
    default: "light-dark(#ffaaa549, #fc472137)",
    [supports_p3]: "light-dark(color(display-p3 0.8941 0.1176 0.0078 / 0.1), color(display-p3 1 0.349 0.1686 / 0.195))",
  },
  accentLightA3: {
    default: "#ffaaa549",
    [supports_p3]: "color(display-p3 0.8941 0.1176 0.0078 / 0.1)",
  },
  accentDarkA3: {
    default: "#fc472137",
    [supports_p3]: "color(display-p3 1 0.349 0.1686 / 0.195)",
  },
  accent4: {
    default: "light-dark(#ffd4d4, #4c141f)",
    [supports_oklch]: "light-dark(oklch(90.7% 0.0497 17.58), oklch(28.9% 0.0841 13.43))",
  },
  accentLight4: {
    default: "#ffd4d4",
    [supports_oklch]: "oklch(90.7% 0.0497 17.58)",
  },
  accentDark4: {
    default: "#4c141f",
    [supports_oklch]: "oklch(28.9% 0.0841 13.43)",
  },
  accentA4: {
    default: "light-dark(#ffd4d4, #fe36334b)",
    [supports_p3]: "light-dark(color(display-p3 0.9725 0.0706 0.0039 / 0.155), color(display-p3 1 0.2902 0.2353 / 0.266))",
  },
  accentLightA4: {
    default: "#ffd4d4",
    [supports_p3]: "color(display-p3 0.9725 0.0706 0.0039 / 0.155)",
  },
  accentDarkA4: {
    default: "#fe36334b",
    [supports_p3]: "color(display-p3 1 0.2902 0.2353 / 0.266)",
  },
  accent5: {
    default: "light-dark(#fdc5c6, #5c1c27)",
    [supports_oklch]: "light-dark(oklch(87.4% 0.0647 17.58), oklch(33.1% 0.0944 13.43))",
  },
  accentLight5: {
    default: "#fdc5c6",
    [supports_oklch]: "oklch(87.4% 0.0647 17.58)",
  },
  accentDark5: {
    default: "#5c1c27",
    [supports_oklch]: "oklch(33.1% 0.0944 13.43)",
  },
  accentA5: {
    default: "light-dark(#ffb1b1b7, #ff44445b)",
    [supports_p3]: "light-dark(color(display-p3 0.898 0.0353 0.0039 / 0.211), color(display-p3 1 0.3373 0.3059 / 0.326))",
  },
  accentLightA5: {
    default: "#ffb1b1b7",
    [supports_p3]: "color(display-p3 0.898 0.0353 0.0039 / 0.211)",
  },
  accentDarkA5: {
    default: "#ff44445b",
    [supports_p3]: "color(display-p3 1 0.3373 0.3059 / 0.326)",
  },
  accent6: {
    default: "light-dark(#f7b5b6, #6d2833)",
    [supports_oklch]: "light-dark(oklch(83.4% 0.0778 17.58), oklch(38.1% 0.0993 13.43))",
  },
  accentLight6: {
    default: "#f7b5b6",
    [supports_oklch]: "oklch(83.4% 0.0778 17.58)",
  },
  accentDark6: {
    default: "#6d2833",
    [supports_oklch]: "oklch(38.1% 0.0993 13.43)",
  },
  accentA6: {
    default: "light-dark(#f5030147, #ff575a6c)",
    [supports_p3]: "light-dark(color(display-p3 0.8157 0.0353 0.0039 / 0.274), color(display-p3 1 0.4078 0.3922 / 0.389))",
  },
  accentLightA6: {
    default: "#f5030147",
    [supports_p3]: "color(display-p3 0.8157 0.0353 0.0039 / 0.274)",
  },
  accentDarkA6: {
    default: "#ff575a6c",
    [supports_p3]: "color(display-p3 1 0.4078 0.3922 / 0.389)",
  },
  accent7: {
    default: "light-dark(#efa0a3, #873643)",
    [supports_oklch]: "light-dark(oklch(78.5% 0.0937 17.58), oklch(44.8% 0.1101 13.43))",
  },
  accentLight7: {
    default: "#efa0a3",
    [supports_oklch]: "oklch(78.5% 0.0937 17.58)",
  },
  accentDark7: {
    default: "#873643",
    [supports_oklch]: "oklch(44.8% 0.1101 13.43)",
  },
  accentA7: {
    default: "light-dark(#df01065c, #fe616a87)",
    [supports_p3]: "light-dark(color(display-p3 0.749 0.0039 0.0039 / 0.35), color(display-p3 0.9961 0.4549 0.4588 / 0.485))",
  },
  accentLightA7: {
    default: "#df01065c",
    [supports_p3]: "color(display-p3 0.749 0.0039 0.0039 / 0.35)",
  },
  accentDarkA7: {
    default: "#fe616a87",
    [supports_p3]: "color(display-p3 0.9961 0.4549 0.4588 / 0.485)",
  },
  accent8: {
    default: "light-dark(#e68589, #b14858)",
    [supports_oklch]: "light-dark(oklch(72.2% 0.1189 17.58), oklch(54.4% 0.1371 13.43))",
  },
  accentLight8: {
    default: "#e68589",
    [supports_oklch]: "oklch(72.2% 0.1189 17.58)",
  },
  accentDark8: {
    default: "#b14858",
    [supports_oklch]: "oklch(54.4% 0.1371 13.43)",
  },
  accentA8: {
    default: "light-dark(#d2020878, #fe6575b1)",
    [supports_p3]: "light-dark(color(display-p3 0.702 0.0039 0.0039 / 0.449), color(display-p3 1 0.4745 0.498 / 0.639))",
  },
  accentLightA8: {
    default: "#d2020878",
    [supports_p3]: "color(display-p3 0.702 0.0039 0.0039 / 0.449)",
  },
  accentDarkA8: {
    default: "#fe6575b1",
    [supports_p3]: "color(display-p3 1 0.4745 0.498 / 0.639)",
  },
  accent9: {
    default: "light-dark(#e11d48, #fb7185)",
    [supports_oklch]: "light-dark(oklch(58.6% 0.222 17.58), oklch(71.9% 0.169 13.43))",
  },
  accentLight9: {
    default: "#e11d48",
    [supports_oklch]: "oklch(58.6% 0.222 17.58)",
  },
  accentDark9: {
    default: "#fb7185",
    [supports_oklch]: "oklch(71.9% 0.169 13.43)",
  },
  accentA9: {
    default: "light-dark(#de0131e2, #ff7387fb)",
    [supports_p3]: "light-dark(color(display-p3 0.7647 0 0.1098 / 0.784), color(display-p3 1 0.5176 0.5686 / 0.917))",
  },
  accentLightA9: {
    default: "#de0131e2",
    [supports_p3]: "color(display-p3 0.7647 0 0.1098 / 0.784)",
  },
  accentDarkA9: {
    default: "#ff7387fb",
    [supports_p3]: "color(display-p3 1 0.5176 0.5686 / 0.917)",
  },
  accent10: {
    default: "light-dark(#d2003b, #ee657a)",
    [supports_oklch]: "light-dark(oklch(54.2% 0.2247 17.58), oklch(68.3% 0.169 13.43))",
  },
  accentLight10: {
    default: "#d2003b",
    [supports_oklch]: "oklch(54.2% 0.2247 17.58)",
  },
  accentDark10: {
    default: "#ee657a",
    [supports_oklch]: "oklch(68.3% 0.169 13.43)",
  },
  accentA10: {
    default: "light-dark(#d2003b, #ff6c81ee)",
    [supports_p3]: "light-dark(color(display-p3 0.7098 0 0.1137 / 0.84), color(display-p3 1 0.4902 0.549 / 0.866))",
  },
  accentLightA10: {
    default: "#d2003b",
    [supports_p3]: "color(display-p3 0.7098 0 0.1137 / 0.84)",
  },
  accentDarkA10: {
    default: "#ff6c81ee",
    [supports_p3]: "color(display-p3 1 0.4902 0.549 / 0.866)",
  },
  accent11: {
    default: "light-dark(#cb0037, #ff8e9d)",
    [supports_oklch]: "light-dark(oklch(52.7% 0.222 17.58), oklch(78.6% 0.152 13.43))",
  },
  accentLight11: {
    default: "#cb0037",
    [supports_oklch]: "oklch(52.7% 0.222 17.58)",
  },
  accentDark11: {
    default: "#ff8e9d",
    [supports_oklch]: "oklch(78.6% 0.152 13.43)",
  },
  accentA11: {
    default: "light-dark(#cb0037, #ff8e9d)",
    [supports_p3]: "light-dark(color(display-p3 0.6863 0 0.102 / 0.848), color(display-p3 1 0.6157 0.6549 / 0.941))",
  },
  accentLightA11: {
    default: "#cb0037",
    [supports_p3]: "color(display-p3 0.6863 0 0.102 / 0.848)",
  },
  accentDarkA11: {
    default: "#ff8e9d",
    [supports_p3]: "color(display-p3 1 0.6157 0.6549 / 0.941)",
  },
  accent12: {
    default: "light-dark(#6a0d1f, #ffd3d6)",
    [supports_oklch]: "light-dark(oklch(34.1% 0.1243 17.58), oklch(90.5% 0.0496 13.43))",
  },
  accentLight12: {
    default: "#6a0d1f",
    [supports_oklch]: "oklch(34.1% 0.1243 17.58)",
  },
  accentDark12: {
    default: "#ffd3d6",
    [supports_oklch]: "oklch(90.5% 0.0496 13.43)",
  },
  accentA12: {
    default: "light-dark(#620013f2, #ffd3d6)",
    [supports_p3]: "light-dark(color(display-p3 0.3216 0 0.0431 / 0.908), color(display-p3 1 0.8588 0.8627 / 0.973))",
  },
  accentLightA12: {
    default: "#620013f2",
    [supports_p3]: "color(display-p3 0.3216 0 0.0431 / 0.908)",
  },
  accentDarkA12: {
    default: "#ffd3d6",
    [supports_p3]: "color(display-p3 1 0.8588 0.8627 / 0.973)",
  },
});
