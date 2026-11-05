// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import csp from './integrations/csp.mjs';

// https://astro.build/config
export default defineConfig({
	// Julkaistun sivun osoite: käytetään canonical-linkissä, sivukartassa ja rakenteisessa datassa.
	site: 'https://hakemus-roope.vercel.app',
	integrations: [sitemap(), csp()],
});
