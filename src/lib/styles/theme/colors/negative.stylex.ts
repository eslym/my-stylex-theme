import * as stylex from '@stylexjs/stylex';

const supports_p3 = '@supports (color: color(display-p3 1 0 0))';
const supports_oklch = '@supports (color: oklch(1 0 0))';

export const negativeColors = stylex.defineVars({
    light1: {
        default: '#faf6f6',
        [supports_oklch]: 'oklch(97.7% 0.0041 17.59)'
    },
    dark1: {
        default: '#100808',
        [supports_oklch]: 'oklch(14.5% 0.0148 13.43)'
    },
    lightA1: {
        default: '#fb2f2f05',
        [supports_p3]: 'color(display-p3 0.7373 0 0 / 0.016)'
    },
    darkA1: {
        default: '#e5000007',
        [supports_p3]: 'color(display-p3 0.9765 0 0 / 0.021)'
    },
    light2: {
        default: '#fbf1f1',
        [supports_oklch]: 'oklch(96.6% 0.0108 17.59)'
    },
    dark2: {
        default: '#1d1314',
        [supports_oklch]: 'oklch(20% 0.0172 13.43)'
    },
    lightA2: {
        default: '#ffcdcd33',
        [supports_p3]: 'color(display-p3 0.8745 0 0 / 0.036)'
    },
    darkA2: {
        default: '#fd7d8a14',
        [supports_p3]: 'color(display-p3 0.9922 0.5451 0.6 / 0.07)'
    },
    light3: {
        default: '#fce3e3',
        [supports_oklch]: 'oklch(93.6% 0.0283 17.59)'
    },
    dark3: {
        default: '#3b1218',
        [supports_oklch]: 'oklch(25% 0.0651 13.43)'
    },
    lightA3: {
        default: '#ffc1c166',
        [supports_p3]: 'color(display-p3 0.898 0.0431 0 / 0.092)'
    },
    darkA3: {
        default: '#ff325033',
        [supports_p3]: 'color(display-p3 1 0.2824 0.3686 / 0.18)'
    },
    light4: {
        default: '#ffd2d3',
        [supports_oklch]: 'oklch(90.8% 0.0563 17.59)'
    },
    dark4: {
        default: '#500f1d',
        [supports_oklch]: 'oklch(29% 0.0961 13.43)'
    },
    lightA4: {
        default: '#ffd2d3',
        [supports_p3]: 'color(display-p3 0.9294 0 0 / 0.152)'
    },
    darkA4: {
        default: '#ff1c4d49',
        [supports_p3]: 'color(display-p3 1 0.2078 0.3451 / 0.258)'
    },
    light5: {
        default: '#ffc3c4',
        [supports_oklch]: 'oklch(87.5% 0.0732 17.59)'
    },
    dark5: {
        default: '#611525',
        [supports_oklch]: 'oklch(33.2% 0.1079 13.43)'
    },
    lightA5: {
        default: '#ffc3c4',
        [supports_p3]: 'color(display-p3 0.9098 0 0 / 0.212)'
    },
    darkA5: {
        default: '#fe29565b',
        [supports_p3]: 'color(display-p3 1 0.2471 0.3804 / 0.323)'
    },
    light6: {
        default: '#fdb2b4',
        [supports_oklch]: 'oklch(83.6% 0.0881 17.59)'
    },
    dark6: {
        default: '#732131',
        [supports_oklch]: 'oklch(38.1% 0.1136 13.43)'
    },
    lightA6: {
        default: '#ff828699',
        [supports_p3]: 'color(display-p3 0.8706 0 0 / 0.276)'
    },
    darkA6: {
        default: '#fd3f646e',
        [supports_p3]: 'color(display-p3 1 0.3294 0.4431 / 0.392)'
    },
    light7: {
        default: '#f69da0',
        [supports_oklch]: 'oklch(78.6% 0.1061 17.59)'
    },
    dark7: {
        default: '#8d3040',
        [supports_oklch]: 'oklch(44.8% 0.126 13.43)'
    },
    lightA7: {
        default: '#f001095f',
        [supports_p3]: 'color(display-p3 0.7961 0 0.0118 / 0.356)'
    },
    darkA7: {
        default: '#fe506e89',
        [supports_p3]: 'color(display-p3 1 0.3922 0.4824 / 0.49)'
    },
    light8: {
        default: '#ee8086',
        [supports_oklch]: 'oklch(72.4% 0.1348 17.59)'
    },
    dark8: {
        default: '#b83e54',
        [supports_oklch]: 'oklch(54.4% 0.1572 13.43)'
    },
    lightA8: {
        default: '#e2020e7d',
        [supports_p3]: 'color(display-p3 0.7529 0 0.0196 / 0.464)'
    },
    darkA8: {
        default: '#fe5372b6',
        [supports_p3]: 'color(display-p3 1 0.4078 0.498 / 0.654)'
    },
    light9: {
        default: '#ec003f',
        [supports_oklch]: 'oklch(58.6% 0.253 17.59)'
    },
    dark9: {
        default: '#ff637e',
        [supports_oklch]: 'oklch(71.2% 0.194 13.43)'
    },
    lightA9: {
        default: '#ec003f',
        [supports_p3]: 'color(display-p3 0.8157 0 0.1098 / 0.816)'
    },
    darkA9: {
        default: '#ff637e',
        [supports_p3]: 'color(display-p3 1 0.4588 0.5373 / 0.927)'
    },
    light10: {
        default: '#d60038',
        [supports_oklch]: 'oklch(54.2% 0.256 17.59)'
    },
    dark10: {
        default: '#f65773',
        [supports_oklch]: 'oklch(67.5% 0.194 13.43)'
    },
    lightA10: {
        default: '#d60038',
        [supports_p3]: 'color(display-p3 0.7294 0 0.098 / 0.836)'
    },
    darkA10: {
        default: '#ff5a77f6',
        [supports_p3]: 'color(display-p3 1 0.4275 0.5098 / 0.89)'
    },
    light11: {
        default: '#ce0035',
        [supports_oklch]: 'oklch(52.8% 0.253 17.59)'
    },
    dark11: {
        default: '#ff8e9d',
        [supports_oklch]: 'oklch(78.6% 0.1743 13.43)'
    },
    lightA11: {
        default: '#ce0035',
        [supports_p3]: 'color(display-p3 0.698 0 0.0902 / 0.844)'
    },
    darkA11: {
        default: '#ff8e9d',
        [supports_p3]: 'color(display-p3 1 0.6157 0.6549 / 0.939)'
    },
    light12: {
        default: '#6f001b',
        [supports_oklch]: 'oklch(34.1% 0.1416 17.59)'
    },
    dark12: {
        default: '#ffd1d5',
        [supports_oklch]: 'oklch(90.5% 0.057 13.43)'
    },
    lightA12: {
        default: '#6f001b',
        [supports_p3]: 'color(display-p3 0.3569 0 0.0588 / 0.936)'
    },
    darkA12: {
        default: '#ffd1d5',
        [supports_p3]: 'color(display-p3 1 0.851 0.8627 / 0.972)'
    }
});
