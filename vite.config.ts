import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import {
	transformerDirectives,
	transformerCompileClass,
	transformerVariantGroup,
	presetWind4
} from 'unocss';

export default defineConfig({
	plugins: [
		sveltekit(),
		unocss({
			presets: [
				presetWind4({
					reset: true,
					dark: 'class'
				})
			],
			transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()]
		})
	]
});
