import stylex from '@stylexjs/stylex';
import { radixColors } from '../radix.stylex';

const supports_p3 = '@supports (color: color(display-p3 1 0 0))';
const supports_oklch = '@supports (color: oklch(1 0 0))';

export const accentPositive = stylex.createTheme(radixColors, {
    accent1: {
        default: 'light-dark(#f5f9f7, #050c08)',
        [supports_oklch]: 'light-dark(oklch(97.8% 0.0049 163.2), oklch(14.5% 0.0141 163.2))'
    },
    accentLight1: {
        default: '#f5f9f7',
        [supports_oklch]: 'oklch(97.8% 0.0049 163.2)'
    },
    accentDark1: {
        default: '#050c08',
        [supports_oklch]: 'oklch(14.5% 0.0141 163.2)'
    },
    accentA1: {
        default: 'light-dark(#26d07b06, #00b40003)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.7373 0.2471 / 0.016), color(display-p3 0 0.9137 0 / 0.009))'
    },
    accentLightA1: {
        default: '#26d07b06',
        [supports_p3]: 'color(display-p3 0 0.7373 0.2471 / 0.016)'
    },
    accentDarkA1: {
        default: '#00b40003',
        [supports_p3]: 'color(display-p3 0 0.9137 0 / 0.009)'
    },
    accent2: {
        default: 'light-dark(#edf5f1, #101a15)',
        [supports_oklch]: 'light-dark(oklch(96.4% 0.0105 163.2), oklch(20.6% 0.0179 163.2))'
    },
    accentLight2: {
        default: '#edf5f1',
        [supports_oklch]: 'oklch(96.4% 0.0105 163.2)'
    },
    accentDark2: {
        default: '#101a15',
        [supports_oklch]: 'oklch(20.6% 0.0179 163.2)'
    },
    accentA2: {
        default: 'light-dark(#0e9f570e, #64faaf11)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.5725 0.2471 / 0.048), color(display-p3 0.5176 0.9922 0.6941 / 0.066))'
    },
    accentLightA2: {
        default: '#0e9f570e',
        [supports_p3]: 'color(display-p3 0 0.5725 0.2471 / 0.048)'
    },
    accentDarkA2: {
        default: '#64faaf11',
        [supports_p3]: 'color(display-p3 0.5176 0.9922 0.6941 / 0.066)'
    },
    accent3: {
        default: 'light-dark(#dcf1e6, #0f2d20)',
        [supports_oklch]: 'light-dark(oklch(94% 0.0263 163.2), oklch(26.8% 0.043 163.2))'
    },
    accentLight3: {
        default: '#dcf1e6',
        [supports_oklch]: 'oklch(94% 0.0263 163.2)'
    },
    accentDark3: {
        default: '#0f2d20',
        [supports_oklch]: 'oklch(26.8% 0.043 163.2)'
    },
    accentA3: {
        default: 'light-dark(#04b0561f, #2cfba125)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.6039 0.2667 / 0.104), color(display-p3 0.4078 1 0.6902 / 0.139))'
    },
    accentLightA3: {
        default: '#04b0561f',
        [supports_p3]: 'color(display-p3 0 0.6039 0.2667 / 0.104)'
    },
    accentDarkA3: {
        default: '#2cfba125',
        [supports_p3]: 'color(display-p3 0.4078 1 0.6902 / 0.139)'
    },
    accent4: {
        default: 'light-dark(#caebda, #083b29)',
        [supports_oklch]: 'light-dark(oklch(91.3% 0.0418 163.2), oklch(31.6% 0.0622 163.2))'
    },
    accentLight4: {
        default: '#caebda',
        [supports_oklch]: 'oklch(91.3% 0.0418 163.2)'
    },
    accentDark4: {
        default: '#083b29',
        [supports_oklch]: 'oklch(31.6% 0.0622 163.2)'
    },
    accentA4: {
        default: 'light-dark(#01ac5431, #00ffa533)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.6078 0.2588 / 0.168), color(display-p3 0.3412 1 0.6824 / 0.196))'
    },
    accentLightA4: {
        default: '#01ac5431',
        [supports_p3]: 'color(display-p3 0 0.6078 0.2588 / 0.168)'
    },
    accentDarkA4: {
        default: '#00ffa533',
        [supports_p3]: 'color(display-p3 0.3412 1 0.6824 / 0.196)'
    },
    accent5: {
        default: 'light-dark(#b6e3cc, #0d4933)',
        [supports_oklch]: 'light-dark(oklch(87.8% 0.057 163.2), oklch(36.3% 0.0712 163.2))'
    },
    accentLight5: {
        default: '#b6e3cc',
        [supports_oklch]: 'oklch(87.8% 0.057 163.2)'
    },
    accentDark5: {
        default: '#0d4933',
        [supports_oklch]: 'oklch(36.3% 0.0712 163.2)'
    },
    accentA5: {
        default: 'light-dark(#03a75346, #16fea942)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.5843 0.2353 / 0.236), color(display-p3 0.3961 1 0.7059 / 0.254))'
    },
    accentLightA5: {
        default: '#03a75346',
        [supports_p3]: 'color(display-p3 0 0.5843 0.2353 / 0.236)'
    },
    accentDarkA5: {
        default: '#16fea942',
        [supports_p3]: 'color(display-p3 0.3961 1 0.7059 / 0.254)'
    },
    accent6: {
        default: 'light-dark(#9cd9bb, #16583f)',
        [supports_oklch]: 'light-dark(oklch(83.5% 0.074 163.2), oklch(41.2% 0.0781 163.2))'
    },
    accentLight6: {
        default: '#9cd9bb',
        [supports_oklch]: 'oklch(83.5% 0.074 163.2)'
    },
    accentDark6: {
        default: '#16583f',
        [supports_oklch]: 'oklch(41.2% 0.0781 163.2)'
    },
    accentA6: {
        default: 'light-dark(#01a35360, #30fdaf52)',
        [supports_p3]:
            'light-dark(color(display-p3 0.0039 0.5569 0.2431 / 0.324), color(display-p3 0.451 1 0.7255 / 0.315))'
    },
    accentLightA6: {
        default: '#01a35360',
        [supports_p3]: 'color(display-p3 0.0039 0.5569 0.2431 / 0.324)'
    },
    accentDarkA6: {
        default: '#30fdaf52',
        [supports_p3]: 'color(display-p3 0.451 1 0.7255 / 0.315)'
    },
    accent7: {
        default: 'light-dark(#79c9a4, #1d694c)',
        [supports_oklch]: 'light-dark(oklch(77.4% 0.0963 163.2), oklch(46.7% 0.0877 163.2))'
    },
    accentLight7: {
        default: '#79c9a4',
        [supports_oklch]: 'oklch(77.4% 0.0963 163.2)'
    },
    accentDark7: {
        default: '#1d694c',
        [supports_oklch]: 'oklch(46.7% 0.0877 163.2)'
    },
    accentA7: {
        default: 'light-dark(#009b5484, #3bffb463)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.5294 0.2353 / 0.44), color(display-p3 0.4863 1 0.7412 / 0.38))'
    },
    accentLightA7: {
        default: '#009b5484',
        [supports_p3]: 'color(display-p3 0 0.5294 0.2353 / 0.44)'
    },
    accentDarkA7: {
        default: '#3bffb463',
        [supports_p3]: 'color(display-p3 0.4863 1 0.7412 / 0.38)'
    },
    accent8: {
        default: 'light-dark(#39b484, #217e5b)',
        [supports_oklch]: 'light-dark(oklch(69% 0.129 163.2), oklch(53% 0.1018 163.2))'
    },
    accentLight8: {
        default: '#39b484',
        [supports_oklch]: 'oklch(69% 0.129 163.2)'
    },
    accentDark8: {
        default: '#217e5b',
        [supports_oklch]: 'oklch(53% 0.1018 163.2)'
    },
    accentA8: {
        default: 'light-dark(#009f61c5, #3bffb579)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.5255 0.2549 / 0.62), color(display-p3 0.4863 1 0.7412 / 0.466))'
    },
    accentLightA8: {
        default: '#009f61c5',
        [supports_p3]: 'color(display-p3 0 0.5255 0.2549 / 0.62)'
    },
    accentDarkA8: {
        default: '#3bffb579',
        [supports_p3]: 'color(display-p3 0.4863 1 0.7412 / 0.466)'
    },
    accent9: {
        default: 'light-dark(#096, #00d492)',
        [supports_oklch]: 'light-dark(oklch(59.6% 0.145 163.2), oklch(76.5% 0.177 163.2))'
    },
    accentLight9: {
        default: '#096',
        [supports_oklch]: 'oklch(59.6% 0.145 163.2)'
    },
    accentDark9: {
        default: '#00d492',
        [supports_oklch]: 'oklch(76.5% 0.177 163.2)'
    },
    accentA9: {
        default: 'light-dark(#009966, #00feaed3)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.451 0.2078 / 0.732), color(display-p3 0.4549 1 0.7176 / 0.813))'
    },
    accentLightA9: {
        default: '#009966',
        [supports_p3]: 'color(display-p3 0 0.451 0.2078 / 0.732)'
    },
    accentDarkA9: {
        default: '#00feaed3',
        [supports_p3]: 'color(display-p3 0.4549 1 0.7176 / 0.813)'
    },
    accent10: {
        default: 'light-dark(#008b5a, #00c987)',
        [supports_oklch]: 'light-dark(oklch(55.3% 0.145 163.2), oklch(73% 0.177 163.2))'
    },
    accentLight10: {
        default: '#008b5a',
        [supports_oklch]: 'oklch(55.3% 0.145 163.2)'
    },
    accentDark10: {
        default: '#00c987',
        [supports_oklch]: 'oklch(73% 0.177 163.2)'
    },
    accentA10: {
        default: 'light-dark(#008b5a, #00ffabc7)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3961 0.1765 / 0.76), color(display-p3 0.4549 1 0.7059 / 0.768))'
    },
    accentLightA10: {
        default: '#008b5a',
        [supports_p3]: 'color(display-p3 0 0.3961 0.1765 / 0.76)'
    },
    accentDarkA10: {
        default: '#00ffabc7',
        [supports_p3]: 'color(display-p3 0.4549 1 0.7059 / 0.768)'
    },
    accent11: {
        default: 'light-dark(#007b4e, #00da97)',
        [supports_oklch]: 'light-dark(oklch(50.6% 0.145 163.2), oklch(78.1% 0.177 163.2))'
    },
    accentLight11: {
        default: '#007b4e',
        [supports_oklch]: 'oklch(50.6% 0.145 163.2)'
    },
    accentDark11: {
        default: '#00da97',
        [supports_oklch]: 'oklch(78.1% 0.177 163.2)'
    },
    accentA11: {
        default: 'light-dark(#007b4e, #00ffb0d9)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.3373 0.1451 / 0.788), color(display-p3 0.4549 1 0.7216 / 0.837))'
    },
    accentLightA11: {
        default: '#007b4e',
        [supports_p3]: 'color(display-p3 0 0.3373 0.1451 / 0.788)'
    },
    accentDarkA11: {
        default: '#00ffb0d9',
        [supports_p3]: 'color(display-p3 0.4549 1 0.7216 / 0.837)'
    },
    accent12: {
        default: 'light-dark(#143c2b, #a8f2cf)',
        [supports_oklch]: 'light-dark(oklch(32.2% 0.0544 163.2), oklch(90.4% 0.0884 163.2))'
    },
    accentLight12: {
        default: '#143c2b',
        [supports_oklch]: 'oklch(32.2% 0.0544 163.2)'
    },
    accentDark12: {
        default: '#a8f2cf',
        [supports_oklch]: 'oklch(90.4% 0.0884 163.2)'
    },
    accentA12: {
        default: 'light-dark(#002b19eb, #b0fed9f2)',
        [supports_p3]:
            'light-dark(color(display-p3 0 0.1255 0.0588 / 0.876), color(display-p3 0.7647 1 0.8706 / 0.939))'
    },
    accentLightA12: {
        default: '#002b19eb',
        [supports_p3]: 'color(display-p3 0 0.1255 0.0588 / 0.876)'
    },
    accentDarkA12: {
        default: '#b0fed9f2',
        [supports_p3]: 'color(display-p3 0.7647 1 0.8706 / 0.939)'
    }
});
