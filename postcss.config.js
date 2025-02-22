export default {
    plugins: {
        '@stylexjs/postcss-plugin': {
            include: [
                './src/**/*.{js,jsx,ts,tsx}' // <-- babel does not understand svelte
                // any other files that should be included
                // this should include NPM dependencies that use StyleX
            ],
            useCSSLayers: true,
        }
    }
};
