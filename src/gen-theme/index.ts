import { generate_codes } from './generate';

await generate_codes('src/lib/styles/theme', {
    gray: ['oklch(0.446 0.043 257.281)', 'oklch(0.704 0.04 256.788)'],
    surface: ['oklch(0.985 0 0)', 'oklch(0.145 0 0)'],
    accents: {
        primary: ['oklch(0.541 0.281 293.009)', 'oklch(0.702 0.183 293.541)'],
        secondary: ['oklch(0.546 0.245 262.881)', 'oklch(0.707 0.165 254.624)'],
        tertiary: ['oklch(0.446 0.03 256.802)', 'oklch(0.707 0.022 261.325)'],
        positive: ['oklch(0.596 0.145 163.225)', 'oklch(0.765 0.177 163.223)'],
        negative: ['oklch(0.586 0.253 17.585)', 'oklch(0.712 0.194 13.428)'],
        warning: ['oklch(0.681 0.162 75.834)', 'oklch(0.852 0.199 91.936)']
    }
});
