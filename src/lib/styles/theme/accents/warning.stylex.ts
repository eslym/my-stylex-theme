import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = '@supports (color: color(display-p3 1 0 0))';
const supports_oklch = '@supports (color: oklch(1 0 0))';

export const accentWarning = stylex.createTheme(radixColors, {
    accent1: {
        default: 'light-dark(#f9f7f5, #0c0a04)',
        [supports_oklch]: 'light-dark(oklch(97.7% 0.0031 75.83), oklch(14.5% 0.0144 91.94))'
    },
    accentLight1: {
        default: '#f9f7f5',
        [supports_oklch]: 'oklch(97.7% 0.0031 75.83)'
    },
    accentDark1: {
        default: '#0c0a04',
        [supports_oklch]: 'oklch(14.5% 0.0144 91.94)'
    },
    accentA1: {
        default: 'light-dark(#d07b2606, #b40a0003)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7843 0.3922 0 / 0.02), color(display-p3 0.9137 0.0392 0 / 0.009))'
    },
    accentLightA1: {
        default: '#d07b2606',
        [supports_p3]: 'color(display-p3 0.7843 0.3922 0 / 0.02)'
    },
    accentDarkA1: {
        default: '#b40a0003',
        [supports_p3]: 'color(display-p3 0.9137 0.0392 0 / 0.009)'
    },
    accent2: {
        default: 'light-dark(#fff2e1, #1a170c)',
        [supports_oklch]: 'light-dark(oklch(96.7% 0.0262 75.83), oklch(20.5% 0.0204 91.94))'
    },
    accentLight2: {
        default: '#fff2e1',
        [supports_oklch]: 'oklch(96.7% 0.0262 75.83)'
    },
    accentDark2: {
        default: '#1a170c',
        [supports_oklch]: 'oklch(20.5% 0.0204 91.94)'
    },
    accentA2: {
        default: 'light-dark(#fff2e1, #facd2811)',
        [supports_p3]:
            'light-dark(color(display-p3 1 0.9294 0.8314 / 0.6), color(display-p3 0.9882 0.8627 0.2314 / 0.062))'
    },
    accentLightA2: {
        default: '#fff2e1',
        [supports_p3]: 'color(display-p3 1 0.9294 0.8314 / 0.6)'
    },
    accentDarkA2: {
        default: '#facd2811',
        [supports_p3]: 'color(display-p3 0.9882 0.8627 0.2314 / 0.062)'
    },
    accent3: {
        default: 'light-dark(#ffe8b7, #2b2202)',
        [supports_oklch]: 'light-dark(oklch(94.8% 0.074 75.83), oklch(25.4% 0.0498 91.94))'
    },
    accentLight3: {
        default: '#ffe8b7',
        [supports_oklch]: 'oklch(94.8% 0.074 75.83)'
    },
    accentDark3: {
        default: '#2b2202',
        [supports_oklch]: 'oklch(25.4% 0.0498 91.94)'
    },
    accentA3: {
        default: 'light-dark(#ffe8b7, #fbb90023)',
        [supports_p3]:
            'light-dark(color(display-p3 1 0.6471 0 / 0.2), color(display-p3 1 0.7608 0 / 0.131))'
    },
    accentLightA3: {
        default: '#ffe8b7',
        [supports_p3]: 'color(display-p3 1 0.6471 0 / 0.2)'
    },
    accentDarkA3: {
        default: '#fbb90023',
        [supports_p3]: 'color(display-p3 1 0.7608 0 / 0.131)'
    },
    accent4: {
        default: 'light-dark(#ffdc97, #3b2a00)',
        [supports_oklch]: 'light-dark(oklch(92.1% 0.1168 75.83), oklch(29.4% 0.0811 91.94))'
    },
    accentLight4: {
        default: '#ffdc97',
        [supports_oklch]: 'oklch(92.1% 0.1168 75.83)'
    },
    accentDark4: {
        default: '#3b2a00',
        [supports_oklch]: 'oklch(29.4% 0.0811 91.94)'
    },
    accentA4: {
        default: 'light-dark(#ffdc97, #ffaa0033)',
        [supports_p3]:
            'light-dark(color(display-p3 0.9725 0.6667 0 / 0.36), color(display-p3 1 0.7294 0 / 0.188))'
    },
    accentLightA4: {
        default: '#ffdc97',
        [supports_p3]: 'color(display-p3 0.9725 0.6667 0 / 0.36)'
    },
    accentDarkA4: {
        default: '#ffaa0033',
        [supports_p3]: 'color(display-p3 1 0.7294 0 / 0.188)'
    },
    accent5: {
        default: 'light-dark(#ffd076, #473400)',
        [supports_oklch]: 'light-dark(oklch(89.3% 0.1495 75.83), oklch(33.6% 0.0922 91.94))'
    },
    accentLight5: {
        default: '#ffd076',
        [supports_oklch]: 'oklch(89.3% 0.1495 75.83)'
    },
    accentDark5: {
        default: '#473400',
        [supports_oklch]: 'oklch(33.6% 0.0922 91.94)'
    },
    accentA5: {
        default: 'light-dark(#ffd076, #feb20040)',
        [supports_p3]:
            'light-dark(color(display-p3 0.9647 0.651 0 / 0.476), color(display-p3 1 0.749 0.0706 / 0.237))'
    },
    accentLightA5: {
        default: '#ffd076',
        [supports_p3]: 'color(display-p3 0.9647 0.651 0 / 0.476)'
    },
    accentDarkA5: {
        default: '#feb20040',
        [supports_p3]: 'color(display-p3 1 0.749 0.0706 / 0.237)'
    },
    accent6: {
        default: 'light-dark(#ffc25b, #554200)',
        [supports_oklch]: 'light-dark(oklch(85.5% 0.1404 75.83), oklch(38.6% 0.0891 91.94))'
    },
    accentLight6: {
        default: '#ffc25b',
        [supports_oklch]: 'oklch(85.5% 0.1404 75.83)'
    },
    accentDark6: {
        default: '#554200',
        [supports_oklch]: 'oklch(38.6% 0.0891 91.94)'
    },
    accentA6: {
        default: 'light-dark(#ffc25b, #fdbf004f)',
        [supports_p3]:
            'light-dark(color(display-p3 0.9529 0.6078 0 / 0.568), color(display-p3 1 0.8 0.1333 / 0.294))'
    },
    accentLightA6: {
        default: '#ffc25b',
        [supports_p3]: 'color(display-p3 0.9529 0.6078 0 / 0.568)'
    },
    accentDarkA6: {
        default: '#fdbf004f',
        [supports_p3]: 'color(display-p3 1 0.8 0.1333 / 0.294)'
    },
    accent7: {
        default: 'light-dark(#f1b048, #695400)',
        [supports_oklch]: 'light-dark(oklch(80% 0.1396 75.83), oklch(45.3% 0.0928 91.94))'
    },
    accentLight7: {
        default: '#f1b048',
        [supports_oklch]: 'oklch(80% 0.1396 75.83)'
    },
    accentDark7: {
        default: '#695400',
        [supports_oklch]: 'oklch(45.3% 0.0928 91.94)'
    },
    accentA7: {
        default: 'light-dark(#ed9200b6, #ffc90063)',
        [supports_p3]:
            'light-dark(color(display-p3 0.8627 0.5451 0 / 0.636), color(display-p3 1 0.8235 0.1765 / 0.376))'
    },
    accentLightA7: {
        default: '#ed9200b6',
        [supports_p3]: 'color(display-p3 0.8627 0.5451 0 / 0.636)'
    },
    accentDarkA7: {
        default: '#ffc90063',
        [supports_p3]: 'color(display-p3 1 0.8235 0.1765 / 0.376)'
    },
    accent8: {
        default: 'light-dark(#e19700, #846a00)',
        [supports_oklch]: 'light-dark(oklch(73.2% 0.162 75.83), oklch(53.6% 0.1095 91.94))'
    },
    accentLight8: {
        default: '#e19700',
        [supports_oklch]: 'oklch(73.2% 0.162 75.83)'
    },
    accentDark8: {
        default: '#846a00',
        [supports_oklch]: 'oklch(53.6% 0.1095 91.94)'
    },
    accentA8: {
        default: 'light-dark(#e19700, #ffcb007f)',
        [supports_p3]:
            'light-dark(color(display-p3 0.8 0.502 0 / 0.788), color(display-p3 1 0.8314 0.2196 / 0.482))'
    },
    accentLightA8: {
        default: '#e19700',
        [supports_p3]: 'color(display-p3 0.8 0.502 0 / 0.788)'
    },
    accentDarkA8: {
        default: '#ffcb007f',
        [supports_p3]: 'color(display-p3 1 0.8314 0.2196 / 0.482)'
    },
    accent9: {
        default: 'light-dark(#d08700, #fcc800)',
        [supports_oklch]: 'light-dark(oklch(68.1% 0.162 75.83), oklch(85.2% 0.199 91.94))'
    },
    accentLight9: {
        default: '#d08700',
        [supports_oklch]: 'oklch(68.1% 0.162 75.83)'
    },
    accentDark9: {
        default: '#fcc800',
        [supports_oklch]: 'oklch(85.2% 0.199 91.94)'
    },
    accentA9: {
        default: 'light-dark(#d08700, #ffca00fc)',
        [supports_p3]:
            'light-dark(color(display-p3 0.7294 0.4392 0 / 0.812), color(display-p3 1 0.8275 0.2784 / 0.956))'
    },
    accentLightA9: {
        default: '#d08700',
        [supports_p3]: 'color(display-p3 0.7294 0.4392 0 / 0.812)'
    },
    accentDarkA9: {
        default: '#ffca00fc',
        [supports_p3]: 'color(display-p3 1 0.8275 0.2784 / 0.956)'
    },
    accent10: {
        default: 'light-dark(#c17c00, #f0be00)',
        [supports_oklch]: 'light-dark(oklch(64.3% 0.162 75.83), oklch(82% 0.199 91.94))'
    },
    accentLight10: {
        default: '#c17c00',
        [supports_oklch]: 'oklch(64.3% 0.162 75.83)'
    },
    accentDark10: {
        default: '#f0be00',
        [supports_oklch]: 'oklch(82% 0.199 91.94)'
    },
    accentA10: {
        default: 'light-dark(#c17c00, #fec900f0)',
        [supports_p3]:
            'light-dark(color(display-p3 0.6627 0.4 0 / 0.828), color(display-p3 1 0.8275 0.2784 / 0.907))'
    },
    accentLightA10: {
        default: '#c17c00',
        [supports_p3]: 'color(display-p3 0.6627 0.4 0 / 0.828)'
    },
    accentDarkA10: {
        default: '#fec900f0',
        [supports_p3]: 'color(display-p3 1 0.8275 0.2784 / 0.907)'
    },
    accent11: {
        default: 'light-dark(#9d6300, #ffce00)',
        [supports_oklch]: 'light-dark(oklch(55% 0.162 75.83), oklch(87.2% 0.199 91.94))'
    },
    accentLight11: {
        default: '#9d6300',
        [supports_oklch]: 'oklch(55% 0.162 75.83)'
    },
    accentDark11: {
        default: '#ffce00',
        [supports_oklch]: 'oklch(87.2% 0.199 91.94)'
    },
    accentA11: {
        default: 'light-dark(#9d6300, #ffce00)',
        [supports_p3]:
            'light-dark(color(display-p3 0.5255 0.3137 0 / 0.872), color(display-p3 1 0.8431 0.2824 / 0.968))'
    },
    accentLightA11: {
        default: '#9d6300',
        [supports_p3]: 'color(display-p3 0.5255 0.3137 0 / 0.872)'
    },
    accentDarkA11: {
        default: '#ffce00',
        [supports_p3]: 'color(display-p3 1 0.8431 0.2824 / 0.968)'
    },
    accent12: {
        default: 'light-dark(#4d3611, #fde9ab)',
        [supports_oklch]: 'light-dark(oklch(35.2% 0.0607 75.83), oklch(93.5% 0.0814 91.94))'
    },
    accentLight12: {
        default: '#4d3611',
        [supports_oklch]: 'oklch(35.2% 0.0607 75.83)'
    },
    accentDark12: {
        default: '#fde9ab',
        [supports_oklch]: 'oklch(93.5% 0.0814 91.94)'
    },
    accentA12: {
        default: 'light-dark(#402800ee, #ffebacfd)',
        [supports_p3]:
            'light-dark(color(display-p3 0.2157 0.1333 0 / 0.904), color(display-p3 1 0.9373 0.7137 / 0.98))'
    },
    accentLightA12: {
        default: '#402800ee',
        [supports_p3]: 'color(display-p3 0.2157 0.1333 0 / 0.904)'
    },
    accentDarkA12: {
        default: '#ffebacfd',
        [supports_p3]: 'color(display-p3 1 0.9373 0.7137 / 0.98)'
    }
});
