import { generate_codes } from './generate';

await generate_codes('src/lib/styles/theme', {
    gray: ['#475569', '#94a3b8'],
    surface: ['#f8fafc', '#020617'],
    accents: {
        primary: ['#7c3aed', '#a78bfa'],
        secondary: ['#2563eb', '#60a5fa'],
        tertiary: ['#4b5563', '#9ca3af'],
        positive: ['#059669', '#34d399'],
        negative: ['#e11d48', '#fb7185'],
        warning: ['#ca8a04', '#facc15']
    }
});
