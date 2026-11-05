# Hakemus: Oman median asiantuntija @ Julkee x Lempee

Työhakemus, joka on itsessään verkkosivu: **[hakemus-roope.vercel.app](https://hakemus-roope.vercel.app)**

Tehty Astrolla ja Claude Codella, versionhallinta GitHubissa, julkaisu Vercelissä. Ei WordPressiä, ei pluginia, ei tietokantaa.

## Mitä sivulla on

- **WordPress-intro:** musta ruutu ja päivitysilmoitus, jonka voi särkeä kuin lasin (`src/components/WpIntro.astro`).
- **Yksi sivu, kuusi "arkkia":** pinoutuvat osiot, aikajana, case-kortit, repäistävät projektiliput ja holografinen keräilykortti (`src/pages/index.astro`).
- **Sisältö yhdessä paikassa:** tekstit ja tiedot tiedostossa `src/data/hakija.ts`.
- **Hakunäkyvyys:** title ja description, schema.org-rakenteinen data, sivukartta ja `llms.txt` tekoälyhakuja varten.
- **Tietoturva:** HTTP-tietoturvaotsikot (`vercel.json`) ja Content Security Policy, jonka skriptitiivisteet lasketaan joka buildissa automaattisesti (`integrations/csp.mjs`).
- **Saavutettavuus:** semanttinen HTML, näppäimistötuki ja `prefers-reduced-motion`-tuki.
- **Tulostus:** siisti mustavalkoinen versio (Ctrl+P / PDF).
- **Kevyt:** alle 5 kt JavaScriptiä pakattuna.

## Ajaminen omalla koneella

```sh
npm install
npm run dev      # kehityspalvelin: http://localhost:4321
npm run build    # tuotantoversio kansioon dist/
npm run preview  # tuotantoversion esikatselu (CSP on päällä vain tässä)
```

Yhteystiedot on tallennettu koodattuina, jotta botit eivät poimi niitä lähdekoodista.
