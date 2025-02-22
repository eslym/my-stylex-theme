import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import stylexPlugin from '@stylexjs/rollup-plugin';
import { join } from 'path';

export default defineConfig({
    plugins: [sveltekit(), stylexPlugin({
		fileName: './.svelte-kit/generated/stylex.css',
		aliases: {
			"$lib/*": [join(import.meta.dirname, './src/lib/*')],
		},
		useCSSLayers: true,
		debug: process.env.NODE_ENV === 'development',
		//test: process.env.NODE_ENV === 'development',
		dev: false,
	})]
});
