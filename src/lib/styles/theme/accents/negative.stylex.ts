import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = '@supports (color: color(display-p3 1 0 0))';
const supports_oklch = '@supports (color: oklch(1 0 0))';

export const accentNegative = stylex.createTheme(radixColors, {
    accent1: {
        default: 'light-dark(#faf6f6, #100808)',
        [supports_oklch]: 'light-dark(oklch(97.7% 0.0041 17.59), oklch(14.5% 0.0148 13.43))'
    },
    accentLight1: {
        default: '#faf6f6',
        [supports_oklch]: 'oklch(97.7% 0.0041 17.59)'
    },
    accentDark1: {
        default: '#100808',
        [supports_oklch]: 'oklch(14.5% 0.0148 13.43)'
    },
    accentA1: {
        default: 'light-dark(#fb2f2f05, #e5000007)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7373 0 0 / 0.016), color(display-p3 0.9765 0 0 / 0.021))'
    },
    accentLightA1: {
        default: '#fb2f2f05',
        [supports_p3]: 'color(display-p3 0.7373 0 0 / 0.016)'
    },
    accentDarkA1: {
        default: '#e5000007',
        [supports_p3]: 'color(display-p3 0.9765 0 0 / 0.021)'
    },
    accent2: {
        default: 'light-dark(#fbf1f1, #1d1314)',
        [supports_oklch]: 'light-dark(oklch(96.6% 0.0108 17.59), oklch(20% 0.0172 13.43))'
    },
    accentLight2: {
        default: '#fbf1f1',
        [supports_oklch]: 'oklch(96.6% 0.0108 17.59)'
    },
    accentDark2: {
        default: '#1d1314',
        [supports_oklch]: 'oklch(20% 0.0172 13.43)'
    },
    accentA2: {
        default: 'light-dark(#ffcdcd33, #fd7d8a14)',
        [supports_p3]:
            'light-dark(color(display-p3 0.8745 0 0 / 0.036), color(display-p3 0.9922 0.5451 0.6 / 0.07))'
    },
    accentLightA2: {
        default: '#ffcdcd33',
        [supports_p3]: 'color(display-p3 0.8745 0 0 / 0.036)'
    },
    accentDarkA2: {
        default: '#fd7d8a14',
        [supports_p3]: 'color(display-p3 0.9922 0.5451 0.6 / 0.07)'
    },
    accent3: {
        default: 'light-dark(#fce3e3, #3b1218)',
        [supports_oklch]: 'light-dark(oklch(93.6% 0.0283 17.59), oklch(25% 0.0651 13.43))'
    },
    accentLight3: {
        default: '#fce3e3',
        [supports_oklch]: 'oklch(93.6% 0.0283 17.59)'
    },
    accentDark3: {
        default: '#3b1218',
        [supports_oklch]: 'oklch(25% 0.0651 13.43)'
    },
    accentA3: {
        default: 'light-dark(#ffc1c166, #ff325033)',
        [supports_p3]:
            'light-dark(color(display-p3 0.898 0.0431 0 / 0.092), color(display-p3 1 0.2824 0.3686 / 0.18))'
    },
    accentLightA3: {
        default: '#ffc1c166',
        [supports_p3]: 'color(display-p3 0.898 0.0431 0 / 0.092)'
    },
    accentDarkA3: {
        default: '#ff325033',
        [supports_p3]: 'color(display-p3 1 0.2824 0.3686 / 0.18)'
    },
    accent4: {
        default: 'light-dark(#ffd2d3, #500f1d)',
        [supports_oklch]: 'light-dark(oklch(90.8% 0.0563 17.59), oklch(29% 0.0961 13.43))'
    },
    accentLight4: {
        default: '#ffd2d3',
        [supports_oklch]: 'oklch(90.8% 0.0563 17.59)'
    },
    accentDark4: {
        default: '#500f1d',
        [supports_oklch]: 'oklch(29% 0.0961 13.43)'
    },
    accentA4: {
        default: 'light-dark(#ffd2d3, #ff1c4d49)',
        [supports_p3]:
            'light-dark(color(display-p3 0.9294 0 0 / 0.152), color(display-p3 1 0.2078 0.3451 / 0.258))'
    },
    accentLightA4: {
        default: '#ffd2d3',
        [supports_p3]: 'color(display-p3 0.9294 0 0 / 0.152)'
    },
    accentDarkA4: {
        default: '#ff1c4d49',
        [supports_p3]: 'color(display-p3 1 0.2078 0.3451 / 0.258)'
    },
    accent5: {
        default: 'light-dark(#ffc3c4, #611525)',
        [supports_oklch]: 'light-dark(oklch(87.5% 0.0732 17.59), oklch(33.2% 0.1079 13.43))'
    },
    accentLight5: {
        default: '#ffc3c4',
        [supports_oklch]: 'oklch(87.5% 0.0732 17.59)'
    },
    accentDark5: {
        default: '#611525',
        [supports_oklch]: 'oklch(33.2% 0.1079 13.43)'
    },
    accentA5: {
        default: 'light-dark(#ffc3c4, #fe29565b)',
        [supports_p3]:
            'light-dark(color(display-p3 0.9098 0 0 / 0.212), color(display-p3 1 0.2471 0.3804 / 0.323))'
    },
    accentLightA5: {
        default: '#ffc3c4',
        [supports_p3]: 'color(display-p3 0.9098 0 0 / 0.212)'
    },
    accentDarkA5: {
        default: '#fe29565b',
        [supports_p3]: 'color(display-p3 1 0.2471 0.3804 / 0.323)'
    },
    accent6: {
        default: 'light-dark(#fdb2b4, #732131)',
        [supports_oklch]: 'light-dark(oklch(83.6% 0.0881 17.59), oklch(38.1% 0.1136 13.43))'
    },
    accentLight6: {
        default: '#fdb2b4',
        [supports_oklch]: 'oklch(83.6% 0.0881 17.59)'
    },
    accentDark6: {
        default: '#732131',
        [supports_oklch]: 'oklch(38.1% 0.1136 13.43)'
    },
    accentA6: {
        default: 'light-dark(#ff828699, #fd3f646e)',
        [supports_p3]:
            'light-dark(color(display-p3 0.8706 0 0 / 0.276), color(display-p3 1 0.3294 0.4431 / 0.392))'
    },
    accentLightA6: {
        default: '#ff828699',
        [supports_p3]: 'color(display-p3 0.8706 0 0 / 0.276)'
    },
    accentDarkA6: {
        default: '#fd3f646e',
        [supports_p3]: 'color(display-p3 1 0.3294 0.4431 / 0.392)'
    },
    accent7: {
        default: 'light-dark(#f69da0, #8d3040)',
        [supports_oklch]: 'light-dark(oklch(78.6% 0.1061 17.59), oklch(44.8% 0.126 13.43))'
    },
    accentLight7: {
        default: '#f69da0',
        [supports_oklch]: 'oklch(78.6% 0.1061 17.59)'
    },
    accentDark7: {
        default: '#8d3040',
        [supports_oklch]: 'oklch(44.8% 0.126 13.43)'
    },
    accentA7: {
        default: 'light-dark(#f001095f, #fe506e89)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7961 0 0.0118 / 0.356), color(display-p3 1 0.3922 0.4824 / 0.49))'
    },
    accentLightA7: {
        default: '#f001095f',
        [supports_p3]: 'color(display-p3 0.7961 0 0.0118 / 0.356)'
    },
    accentDarkA7: {
        default: '#fe506e89',
        [supports_p3]: 'color(display-p3 1 0.3922 0.4824 / 0.49)'
    },
    accent8: {
        default: 'light-dark(#ee8086, #b83e54)',
        [supports_oklch]: 'light-dark(oklch(72.4% 0.1348 17.59), oklch(54.4% 0.1572 13.43))'
    },
    accentLight8: {
        default: '#ee8086',
        [supports_oklch]: 'oklch(72.4% 0.1348 17.59)'
    },
    accentDark8: {
        default: '#b83e54',
        [supports_oklch]: 'oklch(54.4% 0.1572 13.43)'
    },
    accentA8: {
        default: 'light-dark(#e2020e7d, #fe5372b6)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7529 0 0.0196 / 0.464), color(display-p3 1 0.4078 0.498 / 0.654))'
    },
    accentLightA8: {
        default: '#e2020e7d',
        [supports_p3]: 'color(display-p3 0.7529 0 0.0196 / 0.464)'
    },
    accentDarkA8: {
        default: '#fe5372b6',
        [supports_p3]: 'color(display-p3 1 0.4078 0.498 / 0.654)'
    },
    accent9: {
        default: 'light-dark(#ec003f, #ff637e)',
        [supports_oklch]: 'light-dark(oklch(58.6% 0.253 17.59), oklch(71.2% 0.194 13.43))'
    },
    accentLight9: {
        default: '#ec003f',
        [supports_oklch]: 'oklch(58.6% 0.253 17.59)'
    },
    accentDark9: {
        default: '#ff637e',
        [supports_oklch]: 'oklch(71.2% 0.194 13.43)'
    },
    accentA9: {
        default: 'light-dark(#ec003f, #ff637e)',
        [supports_p3]:
            'light-dark(color(display-p3 0.8157 0 0.1098 / 0.816), color(display-p3 1 0.4588 0.5373 / 0.927))'
    },
    accentLightA9: {
        default: '#ec003f',
        [supports_p3]: 'color(display-p3 0.8157 0 0.1098 / 0.816)'
    },
    accentDarkA9: {
        default: '#ff637e',
        [supports_p3]: 'color(display-p3 1 0.4588 0.5373 / 0.927)'
    },
    accent10: {
        default: 'light-dark(#d60038, #f65773)',
        [supports_oklch]: 'light-dark(oklch(54.2% 0.256 17.59), oklch(67.5% 0.194 13.43))'
    },
    accentLight10: {
        default: '#d60038',
        [supports_oklch]: 'oklch(54.2% 0.256 17.59)'
    },
    accentDark10: {
        default: '#f65773',
        [supports_oklch]: 'oklch(67.5% 0.194 13.43)'
    },
    accentA10: {
        default: 'light-dark(#d60038, #ff5a77f6)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7294 0 0.098 / 0.836), color(display-p3 1 0.4275 0.5098 / 0.89))'
    },
    accentLightA10: {
        default: '#d60038',
        [supports_p3]: 'color(display-p3 0.7294 0 0.098 / 0.836)'
    },
    accentDarkA10: {
        default: '#ff5a77f6',
        [supports_p3]: 'color(display-p3 1 0.4275 0.5098 / 0.89)'
    },
    accent11: {
        default: 'light-dark(#ce0035, #ff8e9d)',
        [supports_oklch]: 'light-dark(oklch(52.8% 0.253 17.59), oklch(78.6% 0.1743 13.43))'
    },
    accentLight11: {
        default: '#ce0035',
        [supports_oklch]: 'oklch(52.8% 0.253 17.59)'
    },
    accentDark11: {
        default: '#ff8e9d',
        [supports_oklch]: 'oklch(78.6% 0.1743 13.43)'
    },
    accentA11: {
        default: 'light-dark(#ce0035, #ff8e9d)',
        [supports_p3]:
            'light-dark(color(display-p3 0.698 0 0.0902 / 0.844), color(display-p3 1 0.6157 0.6549 / 0.939))'
    },
    accentLightA11: {
        default: '#ce0035',
        [supports_p3]: 'color(display-p3 0.698 0 0.0902 / 0.844)'
    },
    accentDarkA11: {
        default: '#ff8e9d',
        [supports_p3]: 'color(display-p3 1 0.6157 0.6549 / 0.939)'
    },
    accent12: {
        default: 'light-dark(#6f001b, #ffd1d5)',
        [supports_oklch]: 'light-dark(oklch(34.1% 0.1416 17.59), oklch(90.5% 0.057 13.43))'
    },
    accentLight12: {
        default: '#6f001b',
        [supports_oklch]: 'oklch(34.1% 0.1416 17.59)'
    },
    accentDark12: {
        default: '#ffd1d5',
        [supports_oklch]: 'oklch(90.5% 0.057 13.43)'
    },
    accentA12: {
        default: 'light-dark(#6f001b, #ffd1d5)',
        [supports_p3]:
            'light-dark(color(display-p3 0.3569 0 0.0588 / 0.936), color(display-p3 1 0.851 0.8627 / 0.972))'
    },
    accentLightA12: {
        default: '#6f001b',
        [supports_p3]: 'color(display-p3 0.3569 0 0.0588 / 0.936)'
    },
    accentDarkA12: {
        default: '#ffd1d5',
        [supports_p3]: 'color(display-p3 1 0.851 0.8627 / 0.972)'
    }
});
