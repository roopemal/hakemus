// Content Security Policy rakennusvaiheessa.
// Astro ei hashaa sivun omia `is:inline`-skriptejä, joten tämä laskee jokaisen
// valmiin HTML-sivun inline-skriptien ja -tyylien SHA-256-tiivisteet ja lisää
// ne <meta>-elementtiin. Näin vain sivun omat skriptit saavat ajaa.
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const tiiviste = (sisalto) => `'sha256-${createHash('sha256').update(sisalto).digest('base64')}'`;

async function* htmlTiedostot(kansio) {
	for (const e of await readdir(kansio, { withFileTypes: true })) {
		const polku = join(kansio, e.name);
		if (e.isDirectory()) yield* htmlTiedostot(polku);
		else if (e.name.endsWith('.html')) yield polku;
	}
}

export default function csp() {
	return {
		name: 'csp',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				for await (const tiedosto of htmlTiedostot(fileURLToPath(dir))) {
					let html = await readFile(tiedosto, 'utf8');
					// Ajettavat inline-skriptit (ei src-attribuuttia, ei JSON-LD-dataa)
					const skriptit = [...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)];
					const tyylit = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
					const politiikka = [
						"default-src 'self'",
						`script-src 'self' ${skriptit.map((m) => tiiviste(m[1])).join(' ')}`,
						`style-src 'self' ${tyylit.map((m) => tiiviste(m[1])).join(' ')}`,
						// Sivu käyttää style-attribuutteja vain CSS-muuttujiin (esim. --i, --arvo)
						"style-src-attr 'unsafe-inline'",
						"img-src 'self' data:",
						"font-src 'self'",
						"connect-src 'self'",
						"object-src 'none'",
						"base-uri 'self'",
						"form-action 'self'",
						'upgrade-insecure-requests',
					].join('; ');
					const meta = `<meta http-equiv="content-security-policy" content="${politiikka}">`;
					html = html.replace('<head>', `<head>${meta}`);
					await writeFile(tiedosto, html);
					logger.info(`${tiedosto.split('/dist/').pop()}: ${skriptit.length} skriptiä, ${tyylit.length} tyyliä hashattu`);
				}
			},
		},
	};
}
