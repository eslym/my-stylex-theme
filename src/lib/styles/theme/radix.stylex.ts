import * as stylex from '@stylexjs/stylex';
import { defaultColors } from './colors/default.stylex';

const supports_p3 = '@supports (color: color(display-p3 1 0 0))';
const supports_oklch = '@supports (color: oklch(1 0 0))';

export const radixColors = stylex.defineVars({
    surface1: {
        default: 'light-dark(#f5f7fa, #060a10)',
        [supports_oklch]: 'light-dark(oklch(97.5% 0.0046 257.3), oklch(14.5% 0.0153 256.8))'
    },
    surfaceLight1: {
        default: '#f5f7fa',
        [supports_oklch]: 'oklch(97.5% 0.0046 257.3)'
    },
    surfaceDark1: {
        default: '#060a10',
        [supports_oklch]: 'oklch(14.5% 0.0153 256.8)'
    },
    surfaceA1: {
        default: 'light-dark(#267bfa06, #000be507)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3922 0.9804 / 0.02), color(display-p3 0 0.0431 0.9765 / 0.021))'
    },
    surfaceLightA1: {
        default: '#267bfa06',
        [supports_p3]: 'color(display-p3 0 0.3922 0.9804 / 0.02)'
    },
    surfaceDarkA1: {
        default: '#000be507',
        [supports_p3]: 'color(display-p3 0 0.0431 0.9765 / 0.021)'
    },
    accent1: `light-dark(${defaultColors.light1}, ${defaultColors.dark1})`,
    accentLight1: defaultColors.light1,
    accentDark1: defaultColors.dark1,
    accentA1: `light-dark(${defaultColors.lightA1}, ${defaultColors.darkA1})`,
    accentLightA1: defaultColors.lightA1,
    accentDarkA1: defaultColors.darkA1,
    blackA1: {
        default: 'rgba(0, 0, 0, 0.05)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.05)'
    },
    whiteA1: {
        default: 'rgba(255, 255, 255, 0.05)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.05)'
    },
    surface2: {
        default: 'light-dark(#f0f4fa, #13181f)',
        [supports_oklch]: 'light-dark(oklch(96.5% 0.0093 257.3), oklch(20.8% 0.0157 256.8))'
    },
    surfaceLight2: {
        default: '#f0f4fa',
        [supports_oklch]: 'oklch(96.5% 0.0093 257.3)'
    },
    surfaceDark2: {
        default: '#13181f',
        [supports_oklch]: 'oklch(20.8% 0.0157 256.8)'
    },
    surfaceA2: {
        default: 'light-dark(#136ffa0b, #73adfe16)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3294 0.8745 / 0.036), color(display-p3 0.5176 0.7098 0.9961 / 0.082))'
    },
    surfaceLightA2: {
        default: '#136ffa0b',
        [supports_p3]: 'color(display-p3 0 0.3294 0.8745 / 0.036)'
    },
    surfaceDarkA2: {
        default: '#73adfe16',
        [supports_p3]: 'color(display-p3 0.5176 0.7098 0.9961 / 0.082)'
    },
    accent2: `light-dark(${defaultColors.light2}, ${defaultColors.dark2})`,
    accentLight2: defaultColors.light2,
    accentDark2: defaultColors.dark2,
    accentA2: `light-dark(${defaultColors.lightA2}, ${defaultColors.darkA2})`,
    accentLightA2: defaultColors.lightA2,
    accentDarkA2: defaultColors.darkA2,
    blackA2: {
        default: 'rgba(0, 0, 0, 0.1)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.1)'
    },
    whiteA2: {
        default: 'rgba(255, 255, 255, 0.1)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.1)'
    },
    surface3: {
        default: 'light-dark(#e4ebf4, #1b222c)',
        [supports_oklch]: 'light-dark(oklch(93.7% 0.014 257.3), oklch(25.1% 0.022 256.8))'
    },
    surfaceLight3: {
        default: '#e4ebf4',
        [supports_oklch]: 'oklch(93.7% 0.014 257.3)'
    },
    surfaceDark3: {
        default: '#1b222c',
        [supports_oklch]: 'oklch(25.1% 0.022 256.8)'
    },
    surfaceA3: {
        default: 'light-dark(#0754b817, #83b4fb24)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.2824 0.6549 / 0.084), color(display-p3 0.5647 0.7373 1 / 0.135))'
    },
    surfaceLightA3: {
        default: '#0754b817',
        [supports_p3]: 'color(display-p3 0 0.2824 0.6549 / 0.084)'
    },
    surfaceDarkA3: {
        default: '#83b4fb24',
        [supports_p3]: 'color(display-p3 0.5647 0.7373 1 / 0.135)'
    },
    accent3: `light-dark(${defaultColors.light3}, ${defaultColors.dark3})`,
    accentLight3: defaultColors.light3,
    accentDark3: defaultColors.dark3,
    accentA3: `light-dark(${defaultColors.lightA3}, ${defaultColors.darkA3})`,
    accentLightA3: defaultColors.lightA3,
    accentDarkA3: defaultColors.darkA3,
    blackA3: {
        default: 'rgba(0, 0, 0, 0.15)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.15)'
    },
    whiteA3: {
        default: 'rgba(255, 255, 255, 0.15)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.15)'
    },
    surface4: {
        default: 'light-dark(#dae3ef, #202a37)',
        [supports_oklch]: 'light-dark(oklch(91.2% 0.0188 257.3), oklch(28.1% 0.0282 256.8))'
    },
    surfaceLight4: {
        default: '#dae3ef',
        [supports_oklch]: 'oklch(91.2% 0.0188 257.3)'
    },
    surfaceDark4: {
        default: '#202a37',
        [supports_oklch]: 'oklch(28.1% 0.0282 256.8)'
    },
    surfaceA4: {
        default: 'light-dark(#0349a521, #82b8ff2f)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.2314 0.5882 / 0.12), color(display-p3 0.5647 0.7373 1 / 0.18))'
    },
    surfaceLightA4: {
        default: '#0349a521',
        [supports_p3]: 'color(display-p3 0 0.2314 0.5882 / 0.12)'
    },
    surfaceDarkA4: {
        default: '#82b8ff2f',
        [supports_p3]: 'color(display-p3 0.5647 0.7373 1 / 0.18)'
    },
    accent4: `light-dark(${defaultColors.light4}, ${defaultColors.dark4})`,
    accentLight4: defaultColors.light4,
    accentDark4: defaultColors.dark4,
    accentA4: `light-dark(${defaultColors.lightA4}, ${defaultColors.darkA4})`,
    accentLightA4: defaultColors.lightA4,
    accentDarkA4: defaultColors.darkA4,
    blackA4: {
        default: 'rgba(0, 0, 0, 0.2)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.2)'
    },
    whiteA4: {
        default: 'rgba(255, 255, 255, 0.2)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.2)'
    },
    surface5: {
        default: 'light-dark(#d1dbea, #263141)',
        [supports_oklch]: 'light-dark(oklch(88.9% 0.0236 257.3), oklch(31.1% 0.0317 256.8))'
    },
    surfaceLight5: {
        default: '#d1dbea',
        [supports_oklch]: 'oklch(88.9% 0.0236 257.3)'
    },
    surfaceDark5: {
        default: '#263141',
        [supports_oklch]: 'oklch(31.1% 0.0317 256.8)'
    },
    surfaceA5: {
        default: 'light-dark(#023e992a, #86b6fc3a)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.2039 0.5569 / 0.156), color(display-p3 0.5725 0.7333 1 / 0.221))'
    },
    surfaceLightA5: {
        default: '#023e992a',
        [supports_p3]: 'color(display-p3 0 0.2039 0.5569 / 0.156)'
    },
    surfaceDarkA5: {
        default: '#86b6fc3a',
        [supports_p3]: 'color(display-p3 0.5725 0.7333 1 / 0.221)'
    },
    accent5: `light-dark(${defaultColors.light5}, ${defaultColors.dark5})`,
    accentLight5: defaultColors.light5,
    accentDark5: defaultColors.dark5,
    accentA5: `light-dark(${defaultColors.lightA5}, ${defaultColors.darkA5})`,
    accentLightA5: defaultColors.lightA5,
    accentDarkA5: defaultColors.darkA5,
    blackA5: {
        default: 'rgba(0, 0, 0, 0.3)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.3)'
    },
    whiteA5: {
        default: 'rgba(255, 255, 255, 0.3)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.3)'
    },
    surface6: {
        default: 'light-dark(#c7d4e6, #2d3a4d)',
        [supports_oklch]: 'light-dark(oklch(86.5% 0.0286 257.3), oklch(34.6% 0.0382 256.8))'
    },
    surfaceLight6: {
        default: '#c7d4e6',
        [supports_oklch]: 'oklch(86.5% 0.0286 257.3)'
    },
    surfaceDark6: {
        default: '#2d3a4d',
        [supports_oklch]: 'oklch(34.6% 0.0382 256.8)'
    },
    surfaceA6: {
        default: 'light-dark(#05449a35, #8ab9ff46)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.2235 0.5412 / 0.196), color(display-p3 0.6 0.749 1 / 0.266))'
    },
    surfaceLightA6: {
        default: '#05449a35',
        [supports_p3]: 'color(display-p3 0 0.2235 0.5412 / 0.196)'
    },
    surfaceDarkA6: {
        default: '#8ab9ff46',
        [supports_p3]: 'color(display-p3 0.6 0.749 1 / 0.266)'
    },
    accent6: `light-dark(${defaultColors.light6}, ${defaultColors.dark6})`,
    accentLight6: defaultColors.light6,
    accentDark6: defaultColors.dark6,
    accentA6: `light-dark(${defaultColors.lightA6}, ${defaultColors.darkA6})`,
    accentLightA6: defaultColors.lightA6,
    accentDarkA6: defaultColors.darkA6,
    blackA6: {
        default: 'rgba(0, 0, 0, 0.4)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.4)'
    },
    whiteA6: {
        default: 'rgba(255, 255, 255, 0.4)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.4)'
    },
    surface7: {
        default: 'light-dark(#b9c9df, #374860)',
        [supports_oklch]: 'light-dark(oklch(83% 0.0361 257.3), oklch(39.8% 0.0464 256.8))'
    },
    surfaceLight7: {
        default: '#b9c9df',
        [supports_oklch]: 'oklch(83% 0.0361 257.3)'
    },
    surfaceDark7: {
        default: '#374860',
        [supports_oklch]: 'oklch(39.8% 0.0464 256.8)'
    },
    surfaceA7: {
        default: 'light-dark(#03409443, #8abafe5a)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.1922 0.5255 / 0.248), color(display-p3 0.5882 0.7451 1 / 0.343))'
    },
    surfaceLightA7: {
        default: '#03409443',
        [supports_p3]: 'color(display-p3 0 0.1922 0.5255 / 0.248)'
    },
    surfaceDarkA7: {
        default: '#8abafe5a',
        [supports_p3]: 'color(display-p3 0.5882 0.7451 1 / 0.343)'
    },
    accent7: `light-dark(${defaultColors.light7}, ${defaultColors.dark7})`,
    accentLight7: defaultColors.light7,
    accentDark7: defaultColors.dark7,
    accentA7: `light-dark(${defaultColors.lightA7}, ${defaultColors.darkA7})`,
    accentLightA7: defaultColors.lightA7,
    accentDarkA7: defaultColors.darkA7,
    blackA7: {
        default: 'rgba(0, 0, 0, 0.5)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.5)'
    },
    whiteA7: {
        default: 'rgba(255, 255, 255, 0.5)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.5)'
    },
    surface8: {
        default: 'light-dark(#a1b6d4, #4a6282)',
        [supports_oklch]: 'light-dark(oklch(77% 0.0494 257.3), oklch(49% 0.06 256.8))'
    },
    surfaceLight8: {
        default: '#a1b6d4',
        [supports_oklch]: 'oklch(77% 0.0494 257.3)'
    },
    surfaceDark8: {
        default: '#4a6282',
        [supports_oklch]: 'oklch(49% 0.06 256.8)'
    },
    surfaceA8: {
        default: 'light-dark(#013c905b, #8dbeff7d)',
        [supports_p3]:
            'light-dark(color(display-p3 0.0039 0.1882 0.5098 / 0.34), color(display-p3 0.6078 0.7569 1 / 0.478))'
    },
    surfaceLightA8: {
        default: '#013c905b',
        [supports_p3]: 'color(display-p3 0.0039 0.1882 0.5098 / 0.34)'
    },
    surfaceDarkA8: {
        default: '#8dbeff7d',
        [supports_p3]: 'color(display-p3 0.6078 0.7569 1 / 0.478)'
    },
    accent8: `light-dark(${defaultColors.light8}, ${defaultColors.dark8})`,
    accentLight8: defaultColors.light8,
    accentDark8: defaultColors.dark8,
    accentA8: `light-dark(${defaultColors.lightA8}, ${defaultColors.darkA8})`,
    accentLightA8: defaultColors.lightA8,
    accentDarkA8: defaultColors.darkA8,
    blackA8: {
        default: 'rgba(0, 0, 0, 0.6)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.6)'
    },
    whiteA8: {
        default: 'rgba(255, 255, 255, 0.6)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.6)'
    },
    surface9: {
        default: 'light-dark(#7388a5, #586f90)',
        [supports_oklch]: 'light-dark(oklch(62.1% 0.0507 257.3), oklch(53.7% 0.0584 256.8))'
    },
    surfaceLight9: {
        default: '#7388a5',
        [supports_oklch]: 'oklch(62.1% 0.0507 257.3)'
    },
    surfaceDark9: {
        default: '#586f90',
        [supports_oklch]: 'oklch(53.7% 0.0584 256.8)'
    },
    surfaceA9: {
        default: 'light-dark(#00275d8a, #98c1fe8c)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.1216 0.3255 / 0.524), color(display-p3 0.6471 0.7725 1 / 0.535))'
    },
    surfaceLightA9: {
        default: '#00275d8a',
        [supports_p3]: 'color(display-p3 0 0.1216 0.3255 / 0.524)'
    },
    surfaceDarkA9: {
        default: '#98c1fe8c',
        [supports_p3]: 'color(display-p3 0.6471 0.7725 1 / 0.535)'
    },
    accent9: `light-dark(${defaultColors.light9}, ${defaultColors.dark9})`,
    accentLight9: defaultColors.light9,
    accentDark9: defaultColors.dark9,
    accentA9: `light-dark(${defaultColors.lightA9}, ${defaultColors.darkA9})`,
    accentLightA9: defaultColors.lightA9,
    accentDarkA9: defaultColors.darkA9,
    blackA9: {
        default: 'rgba(0, 0, 0, 0.7)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.7)'
    },
    whiteA9: {
        default: 'rgba(255, 255, 255, 0.7)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.7)'
    },
    surface10: {
        default: 'light-dark(#697d99, #677d9c)',
        [supports_oklch]: 'light-dark(oklch(58.5% 0.0495 257.3), oklch(58.3% 0.0545 256.8))'
    },
    surfaceLight10: {
        default: '#697d99',
        [supports_oklch]: 'oklch(58.5% 0.0495 257.3)'
    },
    surfaceDark10: {
        default: '#677d9c',
        [supports_oklch]: 'oklch(58.3% 0.0545 256.8)'
    },
    surfaceA10: {
        default: 'light-dark(#00235394, #a6cbff98)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.1059 0.2941 / 0.564), color(display-p3 0.6941 0.8078 1 / 0.584))'
    },
    surfaceLightA10: {
        default: '#00235394',
        [supports_p3]: 'color(display-p3 0 0.1059 0.2941 / 0.564)'
    },
    surfaceDarkA10: {
        default: '#a6cbff98',
        [supports_p3]: 'color(display-p3 0.6941 0.8078 1 / 0.584)'
    },
    accent10: `light-dark(${defaultColors.light10}, ${defaultColors.dark10})`,
    accentLight10: defaultColors.light10,
    accentDark10: defaultColors.dark10,
    accentA10: `light-dark(${defaultColors.lightA10}, ${defaultColors.darkA10})`,
    accentLightA10: defaultColors.lightA10,
    accentDarkA10: defaultColors.darkA10,
    blackA10: {
        default: 'rgba(0, 0, 0, 0.8)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.8)'
    },
    whiteA10: {
        default: 'rgba(255, 255, 255, 0.8)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.8)'
    },
    surface11: {
        default: 'light-dark(#4e5e76, #a4b5cd)',
        [supports_oklch]: 'light-dark(oklch(47.9% 0.043 257.3), oklch(76.8% 0.04 256.8))'
    },
    surfaceLight11: {
        default: '#4e5e76',
        [supports_oklch]: 'oklch(47.9% 0.043 257.3)'
    },
    surfaceDark11: {
        default: '#a4b5cd',
        [supports_oklch]: 'oklch(76.8% 0.04 256.8)'
    },
    surfaceA11: {
        default: 'light-dark(#01183bb0, #cce1ffcb)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.0745 0.2039 / 0.676), color(display-p3 0.8235 0.8863 1 / 0.788))'
    },
    surfaceLightA11: {
        default: '#01183bb0',
        [supports_p3]: 'color(display-p3 0 0.0745 0.2039 / 0.676)'
    },
    surfaceDarkA11: {
        default: '#cce1ffcb',
        [supports_p3]: 'color(display-p3 0.8235 0.8863 1 / 0.788)'
    },
    accent11: `light-dark(${defaultColors.light11}, ${defaultColors.dark11})`,
    accentLight11: defaultColors.light11,
    accentDark11: defaultColors.dark11,
    accentA11: `light-dark(${defaultColors.lightA11}, ${defaultColors.darkA11})`,
    accentLightA11: defaultColors.lightA11,
    accentDarkA11: defaultColors.darkA11,
    blackA11: {
        default: 'rgba(0, 0, 0, 0.9)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.9)'
    },
    whiteA11: {
        default: 'rgba(255, 255, 255, 0.9)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.9)'
    },
    surface12: {
        default: 'light-dark(#16202e, #eaeef5)',
        [supports_oklch]: 'light-dark(oklch(24.1% 0.0306 257.3), oklch(94.9% 0.0108 256.8))'
    },
    surfaceLight12: {
        default: '#16202e',
        [supports_oklch]: 'oklch(24.1% 0.0306 257.3)'
    },
    surfaceDark12: {
        default: '#eaeef5',
        [supports_oklch]: 'oklch(94.9% 0.0108 256.8)'
    },
    surfaceA12: {
        default: 'light-dark(#000b1ae9, #f4f8fff5)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.0353 0.0902 / 0.904), color(display-p3 0.9647 0.9765 1 / 0.956))'
    },
    surfaceLightA12: {
        default: '#000b1ae9',
        [supports_p3]: 'color(display-p3 0 0.0353 0.0902 / 0.904)'
    },
    surfaceDarkA12: {
        default: '#f4f8fff5',
        [supports_p3]: 'color(display-p3 0.9647 0.9765 1 / 0.956)'
    },
    accent12: `light-dark(${defaultColors.light12}, ${defaultColors.dark12})`,
    accentLight12: defaultColors.light12,
    accentDark12: defaultColors.dark12,
    accentA12: `light-dark(${defaultColors.lightA12}, ${defaultColors.darkA12})`,
    accentLightA12: defaultColors.lightA12,
    accentDarkA12: defaultColors.darkA12,
    blackA12: {
        default: 'rgba(0, 0, 0, 0.95)',
        [supports_p3]: 'color(display-p3 0 0 0 / 0.95)'
    },
    whiteA12: {
        default: 'rgba(255, 255, 255, 0.95)',
        [supports_p3]: 'color(display-p3 1 1 1 / 0.95)'
    }
});
