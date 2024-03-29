// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { defineAstro } from 'qgp';

import { common } from './qgp.config.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [react()],
	vite: defineAstro(common, {}),
	server: { port: 3000 },
});
