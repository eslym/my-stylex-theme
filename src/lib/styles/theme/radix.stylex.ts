import * as stylex from '@stylexjs/stylex';
import { defaultAccentColors } from './colors/accent/default.stylex';
import { defaultSurfaceColors } from './colors/surface/default.stylex';

const supports_p3 = "@supports (color: color(display-p3 1 0 0))";
const supports_oklch = "@supports (color: oklch(1 0 0))";

export const radixAccent = stylex.defineVars({
  color1: `light-dark(${ defaultAccentColors.light1 }, ${ defaultAccentColors.dark1 })`,
  alpha1: `light-dark(${ defaultAccentColors.lightA1 }, ${ defaultAccentColors.darkA1 })`,
  light1: defaultAccentColors.light1,
  lightA1: defaultAccentColors.lightA1,
  dark1: defaultAccentColors.dark1,
  darkA1: defaultAccentColors.darkA1,
  color2: `light-dark(${ defaultAccentColors.light2 }, ${ defaultAccentColors.dark2 })`,
  alpha2: `light-dark(${ defaultAccentColors.lightA2 }, ${ defaultAccentColors.darkA2 })`,
  light2: defaultAccentColors.light2,
  lightA2: defaultAccentColors.lightA2,
  dark2: defaultAccentColors.dark2,
  darkA2: defaultAccentColors.darkA2,
  color3: `light-dark(${ defaultAccentColors.light3 }, ${ defaultAccentColors.dark3 })`,
  alpha3: `light-dark(${ defaultAccentColors.lightA3 }, ${ defaultAccentColors.darkA3 })`,
  light3: defaultAccentColors.light3,
  lightA3: defaultAccentColors.lightA3,
  dark3: defaultAccentColors.dark3,
  darkA3: defaultAccentColors.darkA3,
  color4: `light-dark(${ defaultAccentColors.light4 }, ${ defaultAccentColors.dark4 })`,
  alpha4: `light-dark(${ defaultAccentColors.lightA4 }, ${ defaultAccentColors.darkA4 })`,
  light4: defaultAccentColors.light4,
  lightA4: defaultAccentColors.lightA4,
  dark4: defaultAccentColors.dark4,
  darkA4: defaultAccentColors.darkA4,
  color5: `light-dark(${ defaultAccentColors.light5 }, ${ defaultAccentColors.dark5 })`,
  alpha5: `light-dark(${ defaultAccentColors.lightA5 }, ${ defaultAccentColors.darkA5 })`,
  light5: defaultAccentColors.light5,
  lightA5: defaultAccentColors.lightA5,
  dark5: defaultAccentColors.dark5,
  darkA5: defaultAccentColors.darkA5,
  color6: `light-dark(${ defaultAccentColors.light6 }, ${ defaultAccentColors.dark6 })`,
  alpha6: `light-dark(${ defaultAccentColors.lightA6 }, ${ defaultAccentColors.darkA6 })`,
  light6: defaultAccentColors.light6,
  lightA6: defaultAccentColors.lightA6,
  dark6: defaultAccentColors.dark6,
  darkA6: defaultAccentColors.darkA6,
  color7: `light-dark(${ defaultAccentColors.light7 }, ${ defaultAccentColors.dark7 })`,
  alpha7: `light-dark(${ defaultAccentColors.lightA7 }, ${ defaultAccentColors.darkA7 })`,
  light7: defaultAccentColors.light7,
  lightA7: defaultAccentColors.lightA7,
  dark7: defaultAccentColors.dark7,
  darkA7: defaultAccentColors.darkA7,
  color8: `light-dark(${ defaultAccentColors.light8 }, ${ defaultAccentColors.dark8 })`,
  alpha8: `light-dark(${ defaultAccentColors.lightA8 }, ${ defaultAccentColors.darkA8 })`,
  light8: defaultAccentColors.light8,
  lightA8: defaultAccentColors.lightA8,
  dark8: defaultAccentColors.dark8,
  darkA8: defaultAccentColors.darkA8,
  color9: `light-dark(${ defaultAccentColors.light9 }, ${ defaultAccentColors.dark9 })`,
  alpha9: `light-dark(${ defaultAccentColors.lightA9 }, ${ defaultAccentColors.darkA9 })`,
  light9: defaultAccentColors.light9,
  lightA9: defaultAccentColors.lightA9,
  dark9: defaultAccentColors.dark9,
  darkA9: defaultAccentColors.darkA9,
  color10: `light-dark(${ defaultAccentColors.light10 }, ${ defaultAccentColors.dark10 })`,
  alpha10: `light-dark(${ defaultAccentColors.lightA10 }, ${ defaultAccentColors.darkA10 })`,
  light10: defaultAccentColors.light10,
  lightA10: defaultAccentColors.lightA10,
  dark10: defaultAccentColors.dark10,
  darkA10: defaultAccentColors.darkA10,
  color11: `light-dark(${ defaultAccentColors.light11 }, ${ defaultAccentColors.dark11 })`,
  alpha11: `light-dark(${ defaultAccentColors.lightA11 }, ${ defaultAccentColors.darkA11 })`,
  light11: defaultAccentColors.light11,
  lightA11: defaultAccentColors.lightA11,
  dark11: defaultAccentColors.dark11,
  darkA11: defaultAccentColors.darkA11,
  color12: `light-dark(${ defaultAccentColors.light12 }, ${ defaultAccentColors.dark12 })`,
  alpha12: `light-dark(${ defaultAccentColors.lightA12 }, ${ defaultAccentColors.darkA12 })`,
  light12: defaultAccentColors.light12,
  lightA12: defaultAccentColors.lightA12,
  dark12: defaultAccentColors.dark12,
  darkA12: defaultAccentColors.darkA12
});

export const radixSurface = stylex.defineVars({
  color1: `light-dark(${ defaultSurfaceColors.light1 }, ${ defaultSurfaceColors.dark1 })`,
  alpha1: `light-dark(${ defaultSurfaceColors.lightA1 }, ${ defaultSurfaceColors.darkA1 })`,
  light1: defaultSurfaceColors.light1,
  lightA1: defaultSurfaceColors.lightA1,
  dark1: defaultSurfaceColors.dark1,
  darkA1: defaultSurfaceColors.darkA1,
  color2: `light-dark(${ defaultSurfaceColors.light2 }, ${ defaultSurfaceColors.dark2 })`,
  alpha2: `light-dark(${ defaultSurfaceColors.lightA2 }, ${ defaultSurfaceColors.darkA2 })`,
  light2: defaultSurfaceColors.light2,
  lightA2: defaultSurfaceColors.lightA2,
  dark2: defaultSurfaceColors.dark2,
  darkA2: defaultSurfaceColors.darkA2,
  color3: `light-dark(${ defaultSurfaceColors.light3 }, ${ defaultSurfaceColors.dark3 })`,
  alpha3: `light-dark(${ defaultSurfaceColors.lightA3 }, ${ defaultSurfaceColors.darkA3 })`,
  light3: defaultSurfaceColors.light3,
  lightA3: defaultSurfaceColors.lightA3,
  dark3: defaultSurfaceColors.dark3,
  darkA3: defaultSurfaceColors.darkA3,
  color4: `light-dark(${ defaultSurfaceColors.light4 }, ${ defaultSurfaceColors.dark4 })`,
  alpha4: `light-dark(${ defaultSurfaceColors.lightA4 }, ${ defaultSurfaceColors.darkA4 })`,
  light4: defaultSurfaceColors.light4,
  lightA4: defaultSurfaceColors.lightA4,
  dark4: defaultSurfaceColors.dark4,
  darkA4: defaultSurfaceColors.darkA4,
  color5: `light-dark(${ defaultSurfaceColors.light5 }, ${ defaultSurfaceColors.dark5 })`,
  alpha5: `light-dark(${ defaultSurfaceColors.lightA5 }, ${ defaultSurfaceColors.darkA5 })`,
  light5: defaultSurfaceColors.light5,
  lightA5: defaultSurfaceColors.lightA5,
  dark5: defaultSurfaceColors.dark5,
  darkA5: defaultSurfaceColors.darkA5,
  color6: `light-dark(${ defaultSurfaceColors.light6 }, ${ defaultSurfaceColors.dark6 })`,
  alpha6: `light-dark(${ defaultSurfaceColors.lightA6 }, ${ defaultSurfaceColors.darkA6 })`,
  light6: defaultSurfaceColors.light6,
  lightA6: defaultSurfaceColors.lightA6,
  dark6: defaultSurfaceColors.dark6,
  darkA6: defaultSurfaceColors.darkA6,
  color7: `light-dark(${ defaultSurfaceColors.light7 }, ${ defaultSurfaceColors.dark7 })`,
  alpha7: `light-dark(${ defaultSurfaceColors.lightA7 }, ${ defaultSurfaceColors.darkA7 })`,
  light7: defaultSurfaceColors.light7,
  lightA7: defaultSurfaceColors.lightA7,
  dark7: defaultSurfaceColors.dark7,
  darkA7: defaultSurfaceColors.darkA7,
  color8: `light-dark(${ defaultSurfaceColors.light8 }, ${ defaultSurfaceColors.dark8 })`,
  alpha8: `light-dark(${ defaultSurfaceColors.lightA8 }, ${ defaultSurfaceColors.darkA8 })`,
  light8: defaultSurfaceColors.light8,
  lightA8: defaultSurfaceColors.lightA8,
  dark8: defaultSurfaceColors.dark8,
  darkA8: defaultSurfaceColors.darkA8,
  color9: `light-dark(${ defaultSurfaceColors.light9 }, ${ defaultSurfaceColors.dark9 })`,
  alpha9: `light-dark(${ defaultSurfaceColors.lightA9 }, ${ defaultSurfaceColors.darkA9 })`,
  light9: defaultSurfaceColors.light9,
  lightA9: defaultSurfaceColors.lightA9,
  dark9: defaultSurfaceColors.dark9,
  darkA9: defaultSurfaceColors.darkA9,
  color10: `light-dark(${ defaultSurfaceColors.light10 }, ${ defaultSurfaceColors.dark10 })`,
  alpha10: `light-dark(${ defaultSurfaceColors.lightA10 }, ${ defaultSurfaceColors.darkA10 })`,
  light10: defaultSurfaceColors.light10,
  lightA10: defaultSurfaceColors.lightA10,
  dark10: defaultSurfaceColors.dark10,
  darkA10: defaultSurfaceColors.darkA10,
  color11: `light-dark(${ defaultSurfaceColors.light11 }, ${ defaultSurfaceColors.dark11 })`,
  alpha11: `light-dark(${ defaultSurfaceColors.lightA11 }, ${ defaultSurfaceColors.darkA11 })`,
  light11: defaultSurfaceColors.light11,
  lightA11: defaultSurfaceColors.lightA11,
  dark11: defaultSurfaceColors.dark11,
  darkA11: defaultSurfaceColors.darkA11,
  color12: `light-dark(${ defaultSurfaceColors.light12 }, ${ defaultSurfaceColors.dark12 })`,
  alpha12: `light-dark(${ defaultSurfaceColors.lightA12 }, ${ defaultSurfaceColors.darkA12 })`,
  light12: defaultSurfaceColors.light12,
  lightA12: defaultSurfaceColors.lightA12,
  dark12: defaultSurfaceColors.dark12,
  darkA12: defaultSurfaceColors.darkA12
});

export const radixScale = stylex.defineVars({
  blackA1: {
    "default": "rgba(0, 0, 0, 0.05)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.05)"
  },
  whiteA1: {
    "default": "rgba(255, 255, 255, 0.05)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.05)"
  },
  blackA2: {
    "default": "rgba(0, 0, 0, 0.1)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.1)"
  },
  whiteA2: {
    "default": "rgba(255, 255, 255, 0.1)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.1)"
  },
  blackA3: {
    "default": "rgba(0, 0, 0, 0.15)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.15)"
  },
  whiteA3: {
    "default": "rgba(255, 255, 255, 0.15)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.15)"
  },
  blackA4: {
    "default": "rgba(0, 0, 0, 0.2)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.2)"
  },
  whiteA4: {
    "default": "rgba(255, 255, 255, 0.2)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.2)"
  },
  blackA5: {
    "default": "rgba(0, 0, 0, 0.3)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.3)"
  },
  whiteA5: {
    "default": "rgba(255, 255, 255, 0.3)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.3)"
  },
  blackA6: {
    "default": "rgba(0, 0, 0, 0.4)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.4)"
  },
  whiteA6: {
    "default": "rgba(255, 255, 255, 0.4)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.4)"
  },
  blackA7: {
    "default": "rgba(0, 0, 0, 0.5)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.5)"
  },
  whiteA7: {
    "default": "rgba(255, 255, 255, 0.5)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.5)"
  },
  blackA8: {
    "default": "rgba(0, 0, 0, 0.6)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.6)"
  },
  whiteA8: {
    "default": "rgba(255, 255, 255, 0.6)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.6)"
  },
  blackA9: {
    "default": "rgba(0, 0, 0, 0.7)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.7)"
  },
  whiteA9: {
    "default": "rgba(255, 255, 255, 0.7)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.7)"
  },
  blackA10: {
    "default": "rgba(0, 0, 0, 0.8)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.8)"
  },
  whiteA10: {
    "default": "rgba(255, 255, 255, 0.8)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.8)"
  },
  blackA11: {
    "default": "rgba(0, 0, 0, 0.9)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.9)"
  },
  whiteA11: {
    "default": "rgba(255, 255, 255, 0.9)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.9)"
  },
  blackA12: {
    "default": "rgba(0, 0, 0, 0.95)",
    [supports_p3]: "color(display-p3 0 0 0 / 0.95)"
  },
  whiteA12: {
    "default": "rgba(255, 255, 255, 0.95)",
    [supports_p3]: "color(display-p3 1 1 1 / 0.95)"
  }
});