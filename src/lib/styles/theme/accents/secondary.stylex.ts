import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = '@supports (color: color(display-p3 1 0 0))';
const supports_oklch = '@supports (color: oklch(1 0 0))';

export const accentSecondary = stylex.createTheme(radixColors, {
    accent1: {
        default: 'light-dark(#f7f8f9, #040a14)',
        [supports_oklch]: 'light-dark(oklch(97.8% 0.0021 262.9), oklch(14.5% 0.0249 254.6))'
    },
    accentLight1: {
        default: '#f7f8f9',
        [supports_oklch]: 'oklch(97.8% 0.0021 262.9)'
    },
    accentDark1: {
        default: '#040a14',
        [supports_oklch]: 'oklch(14.5% 0.0249 254.6)'
    },
    accentA1: {
        default: 'light-dark(#3b7bbb04, #000bf20b)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3294 0.6549 / 0.012), color(display-p3 0 0.0431 0.9961 / 0.037))'
    },
    accentLightA1: {
        default: '#3b7bbb04',
        [supports_p3]: 'color(display-p3 0 0.3294 0.6549 / 0.012)'
    },
    accentDarkA1: {
        default: '#000bf20b',
        [supports_p3]: 'color(display-p3 0 0.0431 0.9961 / 0.037)'
    },
    accent2: {
        default: 'light-dark(#f0f4fb, #0e1824)',
        [supports_oklch]: 'light-dark(oklch(96.5% 0.0104 262.9), oklch(20.5% 0.0287 254.6))'
    },
    accentLight2: {
        default: '#f0f4fb',
        [supports_oklch]: 'oklch(96.5% 0.0104 262.9)'
    },
    accentDark2: {
        default: '#0e1824',
        [supports_oklch]: 'oklch(20.5% 0.0287 254.6)'
    },
    accentA2: {
        default: 'light-dark(#c8dcff33, #2f8af71c)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3294 0.9843 / 0.036), color(display-p3 0.2706 0.5725 0.9922 / 0.103))'
    },
    accentLightA2: {
        default: '#c8dcff33',
        [supports_p3]: 'color(display-p3 0 0.3294 0.9843 / 0.036)'
    },
    accentDarkA2: {
        default: '#2f8af71c',
        [supports_p3]: 'color(display-p3 0.2706 0.5725 0.9922 / 0.103)'
    },
    accent3: {
        default: 'light-dark(#e4ecfb, #0d2745)',
        [supports_oklch]: 'light-dark(oklch(94.2% 0.0221 262.9), oklch(27% 0.0652 254.6))'
    },
    accentLight3: {
        default: '#e4ecfb',
        [supports_oklch]: 'oklch(94.2% 0.0221 262.9)'
    },
    accentDark3: {
        default: '#0d2745',
        [supports_oklch]: 'oklch(27% 0.0652 254.6)'
    },
    accentA3: {
        default: 'light-dark(#8cb4ff33, #1681fc3e)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3294 0.9804 / 0.084), color(display-p3 0.2078 0.5098 1 / 0.233))'
    },
    accentLightA3: {
        default: '#8cb4ff33',
        [supports_p3]: 'color(display-p3 0 0.3294 0.9804 / 0.084)'
    },
    accentDarkA3: {
        default: '#1681fc3e',
        [supports_p3]: 'color(display-p3 0.2078 0.5098 1 / 0.233)'
    },
    accent4: {
        default: 'light-dark(#d4e4ff, #053161)',
        [supports_oklch]: 'light-dark(oklch(91.6% 0.0433 262.9), oklch(31.5% 0.0963 254.6))'
    },
    accentLight4: {
        default: '#d4e4ff',
        [supports_oklch]: 'oklch(91.6% 0.0433 262.9)'
    },
    accentDark4: {
        default: '#053161',
        [supports_oklch]: 'oklch(31.5% 0.0963 254.6)'
    },
    accentA4: {
        default: 'light-dark(#d4e4ff, #0078fe5b)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7529 0.8314 1 / 0.6), color(display-p3 0.1412 0.4706 1 / 0.343))'
    },
    accentLightA4: {
        default: '#d4e4ff',
        [supports_p3]: 'color(display-p3 0.7529 0.8314 1 / 0.6)'
    },
    accentDarkA4: {
        default: '#0078fe5b',
        [supports_p3]: 'color(display-p3 0.1412 0.4706 1 / 0.343)'
    },
    accent5: {
        default: 'light-dark(#c2d9ff, #0e3e73)',
        [supports_oklch]: 'light-dark(oklch(88.2% 0.0653 262.9), oklch(36.3% 0.1046 254.6))'
    },
    accentLight5: {
        default: '#c2d9ff',
        [supports_oklch]: 'oklch(88.2% 0.0653 262.9)'
    },
    accentDark5: {
        default: '#0e3e73',
        [supports_oklch]: 'oklch(36.3% 0.1046 254.6)'
    },
    accentA5: {
        default: 'light-dark(#c2d9ff, #1382fd6e)',
        [supports_p3]:
            'light-dark(color(display-p3 0.4706 0.6471 1 / 0.4), color(display-p3 0.2196 0.5255 1 / 0.413))'
    },
    accentLightA5: {
        default: '#c2d9ff',
        [supports_p3]: 'color(display-p3 0.4706 0.6471 1 / 0.4)'
    },
    accentDarkA5: {
        default: '#1382fd6e',
        [supports_p3]: 'color(display-p3 0.2196 0.5255 1 / 0.413)'
    },
    accent6: {
        default: 'light-dark(#accbff, #1b4c85)',
        [supports_oklch]: 'light-dark(oklch(84.1% 0.0902 262.9), oklch(41.4% 0.1088 254.6))'
    },
    accentLight6: {
        default: '#accbff',
        [supports_oklch]: 'oklch(84.1% 0.0902 262.9)'
    },
    accentDark6: {
        default: '#1b4c85',
        [supports_oklch]: 'oklch(41.4% 0.1088 254.6)'
    },
    accentA6: {
        default: 'light-dark(#accbff, #2c8dfe81)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.0392 1 / 0.2), color(display-p3 0.2902 0.5647 1 / 0.486))'
    },
    accentLightA6: {
        default: '#accbff',
        [supports_p3]: 'color(display-p3 0 0.0392 1 / 0.2)'
    },
    accentDarkA6: {
        default: '#2c8dfe81',
        [supports_p3]: 'color(display-p3 0.2902 0.5647 1 / 0.486)'
    },
    accent7: {
        default: 'light-dark(#93b8ff, #265c9b)',
        [supports_oklch]: 'light-dark(oklch(78.4% 0.1105 262.9), oklch(47.2% 0.1174 254.6))'
    },
    accentLight7: {
        default: '#93b8ff',
        [supports_oklch]: 'oklch(78.4% 0.1105 262.9)'
    },
    accentDark7: {
        default: '#265c9b',
        [supports_oklch]: 'oklch(47.2% 0.1174 254.6)'
    },
    accentA7: {
        default: 'light-dark(#93b8ff, #3a95ff97)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.298 0.9725 / 0.384), color(display-p3 0.3294 0.5961 1 / 0.572))'
    },
    accentLightA7: {
        default: '#93b8ff',
        [supports_p3]: 'color(display-p3 0 0.298 0.9725 / 0.384)'
    },
    accentDarkA7: {
        default: '#3a95ff97',
        [supports_p3]: 'color(display-p3 0.3294 0.5961 1 / 0.572)'
    },
    accent8: {
        default: 'light-dark(#6f9efa, #2f6eba)',
        [supports_oklch]: 'light-dark(oklch(70.6% 0.1449 262.9), oklch(53.7% 0.1352 254.6))'
    },
    accentLight8: {
        default: '#6f9efa',
        [supports_oklch]: 'oklch(70.6% 0.1449 262.9)'
    },
    accentDark8: {
        default: '#2f6eba',
        [supports_oklch]: 'oklch(53.7% 0.1352 254.6)'
    },
    accentA8: {
        default: 'light-dark(#0055fa8e, #3d94feb8)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.2745 0.9294 / 0.516), color(display-p3 0.3451 0.6 1 / 0.694))'
    },
    accentLightA8: {
        default: '#0055fa8e',
        [supports_p3]: 'color(display-p3 0 0.2745 0.9294 / 0.516)'
    },
    accentDarkA8: {
        default: '#3d94feb8',
        [supports_p3]: 'color(display-p3 0.3451 0.6 1 / 0.694)'
    },
    accent9: {
        default: 'light-dark(#155dfc, #51a2ff)',
        [supports_oklch]: 'light-dark(oklch(54.6% 0.245 262.9), oklch(70.7% 0.165 254.6))'
    },
    accentLight9: {
        default: '#155dfc',
        [supports_oklch]: 'oklch(54.6% 0.245 262.9)'
    },
    accentDark9: {
        default: '#51a2ff',
        [supports_oklch]: 'oklch(70.7% 0.165 254.6)'
    },
    accentA9: {
        default: 'light-dark(#0000ff66, #51a2ff)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.2275 0.949 / 0.824), color(display-p3 0.4118 0.6471 1 / 0.972))'
    },
    accentLightA9: {
        default: '#0000ff66',
        [supports_p3]: 'color(display-p3 0 0.2275 0.949 / 0.824)'
    },
    accentDarkA9: {
        default: '#51a2ff',
        [supports_p3]: 'color(display-p3 0.4118 0.6471 1 / 0.972)'
    },
    accent10: {
        default: 'light-dark(#1252df, #4496f7)',
        [supports_oklch]: 'light-dark(oklch(50% 0.2236 262.9), oklch(67% 0.165 254.6))'
    },
    accentLight10: {
        default: '#1252df',
        [supports_oklch]: 'oklch(50% 0.2236 262.9)'
    },
    accentDark10: {
        default: '#4496f7',
        [supports_oklch]: 'oklch(67% 0.165 254.6)'
    },
    accentA10: {
        default: 'light-dark(#0045dded, #469bfff7)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.1961 0.8196 / 0.844), color(display-p3 0.3725 0.6157 1 / 0.939))'
    },
    accentLightA10: {
        default: '#0045dded',
        [supports_p3]: 'color(display-p3 0 0.1961 0.8196 / 0.844)'
    },
    accentDarkA10: {
        default: '#469bfff7',
        [supports_p3]: 'color(display-p3 0.3725 0.6157 1 / 0.939)'
    },
    accent11: {
        default: 'light-dark(#0f4fdd, #79b7ff)',
        [supports_oklch]: 'light-dark(oklch(49.2% 0.2236 262.9), oklch(76.9% 0.1289 254.6))'
    },
    accentLight11: {
        default: '#0f4fdd',
        [supports_oklch]: 'oklch(49.2% 0.2236 262.9)'
    },
    accentDark11: {
        default: '#79b7ff',
        [supports_oklch]: 'oklch(76.9% 0.1289 254.6)'
    },
    accentA11: {
        default: 'light-dark(#0044dbf0, #79b7ff)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.1922 0.8118 / 0.856), color(display-p3 0.5412 0.7255 1 / 0.976))'
    },
    accentLightA11: {
        default: '#0044dbf0',
        [supports_p3]: 'color(display-p3 0 0.1922 0.8118 / 0.856)'
    },
    accentDarkA11: {
        default: '#79b7ff',
        [supports_p3]: 'color(display-p3 0.5412 0.7255 1 / 0.976)'
    },
    accent12: {
        default: 'light-dark(#102c69, #cbe3ff)',
        [supports_oklch]: 'light-dark(oklch(31.4% 0.1114 262.9), oklch(90.8% 0.0483 254.6))'
    },
    accentLight12: {
        default: '#102c69',
        [supports_oklch]: 'oklch(31.4% 0.1114 262.9)'
    },
    accentDark12: {
        default: '#cbe3ff',
        [supports_oklch]: 'oklch(90.8% 0.0483 254.6)'
    },
    accentA12: {
        default: 'light-dark(#001e5fef, #cbe3ff)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.0863 0.3373 / 0.908), color(display-p3 0.8275 0.898 1 / 0.988))'
    },
    accentLightA12: {
        default: '#001e5fef',
        [supports_p3]: 'color(display-p3 0 0.0863 0.3373 / 0.908)'
    },
    accentDarkA12: {
        default: '#cbe3ff',
        [supports_p3]: 'color(display-p3 0.8275 0.898 1 / 0.988)'
    }
});
