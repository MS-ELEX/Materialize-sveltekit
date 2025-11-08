import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			scss: true,
			pug: true
		}),
		vitePreprocess(),
		mdsvex()
	],
	kit: {
		target: '#svelte',
		adapter: adapter({
			fallback: 'index.html',
		}),
		ssr: false,
	},
	extensions: ['.svelte', '.svx']
};

export default config;
