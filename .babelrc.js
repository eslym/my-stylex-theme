import { join } from 'path';

export default {
    presets: ['@babel/preset-typescript'],
    plugins: [
        [
            '@stylexjs/babel-plugin',
            {
                aliases: {
                    '$lib/*': [join(import.meta.dirname, './src/lib/*')]
                },
                dev: process.env.NODE_ENV === 'development',
                test: process.env.NODE_ENV === 'test',
                runtimeInjection: false,
                genConditionalClasses: true,
                treeshakeCompensation: true,
                unstable_moduleResolution: {
                    type: 'commonJS'
                }
            }
        ]
    ]
};
