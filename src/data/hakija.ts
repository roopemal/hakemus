// Kaikki henkilökohtaiset tiedot yhdessä paikassa.

export const hakija = {
	nimi: 'Roope Malmberg',
	etunimi: 'Roope',
	titteli: 'Sales Account Representative & Digital Marketing Coordinator',
	paikkakunta: 'Helsinki',
	// Sähköposti ja puhelin tallennetaan koodattuina (käännetty + base64), jotta ne eivät
	// näy selväkielisinä lähdekoodissa eivätkä sivulla. Sivun skripti avaa ne selaimessa.
	emailKoodattu: 'bW9jLmxpYW1nQGVwb29yZ3JlYm1sYW0=',
	puhelinKoodattu: 'MDk1NSA3MDMgMDUgODUzKw==',
	linkedin: 'https://www.linkedin.com/in/roope-malmberg',
	github: 'https://github.com/Roopemal',
	// Julkaistun sivun osoite Vercelissä
	sivunOsoite: 'https://hakemus-roope.vercel.app',
};

// Esittelyssä saa olla pientä HTML-merkintää (esim. hehkuvat sanat).
export const esittely = [
	'Vuoden 2024 vuosikertatradenomi, joka aloitti verkkokaupan digimarkkinoinnista ja jatkoi jokaisen lapsen unelmatyöhön, Lego-myyjäksi. Legoista harpattiin Zoner Oy:lle myymään hostingpalveluita yrityksille ja kuluttajille. Tunnustan: myin <span class="sith">WordPress</span>-hostingia. Nyt olen siirtynyt <span class="jedi">valoisammalle puolelle</span>.',
	'Zonerilla tajusin, että B2B-asiakas ei osta tuotetta vaan ratkaisun. Vuonna 2025 siirryin ESG-alalle Planmark Oy:lle. Kun esihenkilöni huomasivat markkinointitaustani, asiat lähtivät rullaamaan: ensin Google Ads, sitten GA4 ja lopulta nettisivujen tekstit.',
	'Nyt Planmarkin sivut pyörivät Astrolla eivätkä kaipaa juuri muuta kuin uusia tekstejä ja julkaisuja, joten keskityn tällä hetkellä Suomen myyntiin, ja hyvällä menestyksellä. Seuraavaksi haluan tehdä päätyökseni sitä, mistä olen innostunut eniten: verkkosivuja, hakunäkyvyyttä ja järjestelmiä, joissa data kulkee eikä katoa.',
];

// Esimerkkitapaukset: näytetään esittelyn jälkeen rinnakkain
export const tapaukset = [
	{
		nimi: 'ar-autotallit',
		paikka: 'Zoner Oy · B2B',
		yritys: 'Zoner Oy: suomalainen webhotelli- ja verkkotunnuspalvelu. Myin pääasiassa pienyrittäjille, kaupat 100–2 500 €.',
		rivit: [
			['Ongelma', 'Asiakas myi autotalleja AR-sivustolla, jonka avulla hänen asiakkaansa näkivät tallin omalla pihallaan. Sivusto kuitenkin kärsi suorituskykyongelmista.'],
			['Ratkaisu', 'Ehdotin, että raskaat AR-tiedostot siirretään omalle VPS-palvelimelle ja sivustolta vain linkitetään niihin.'],
			['Tulos', 'Sivuston ei tarvinnut kantaa painavaa lastia itse.'],
		],
	},
	{
		nimi: 'eu-markkinat',
		paikka: 'Planmark Oy · ESG',
		yritys: 'Planmark Oy: ESG-raportoinnin ohjelmistoalusta. Kohteena yritykset, joiden liikevaihto on yli 100 miljoonaa euroa.',
		rivit: [
			['Ehdotus', 'Aloitin myynnistä, mutta ehdotin pian, että tähtäämme myös muille EU-markkinoille.'],
			['Toteutus', 'Sain EU-markkinat vastuulleni ja lähestyin yritysjohtoa Pohjoismaissa ja Hollannissa LinkedInissä, puhelimitse ja sähköpostikampanjoilla.'],
			['Tulos', '15–20 buukattua tapaamista ja demoa.'],
		],
	},
];

export const osaaminen = [
	{
		otsikko: 'Verkkosivut ja laskeutumissivut',
		teksti: 'Vastaan Planmarkin verkkosivujen kehityksestä WordPressissä ja Astrossa ja teen kampanjoille kohdennettuja laskeutumissivuja. HTML ja CSS sujuvat.',
	},
	{
		otsikko: 'SEO, myös AI-haku',
		teksti: 'Kirjoitan tekstit niin, että ne löytyvät sekä Googlesta että tekoälyhauista. Tälläkin sivulla on rakenteinen data ja llms.txt, jotta ChatGPT:kin ymmärtää, kuka olen.',
	},
	{
		otsikko: 'Markkinoinnin järjestelmät',
		teksti: 'HubSpot CRM, GA4 ja Google Ads ovat arkityökalujani. Ymmärrän, miten lomake, CRM ja mainonta puhuvat keskenään, ja korjaan, kun ne eivät puhu.',
	},
	{
		otsikko: 'Luotettava neuvonantaja',
		teksti: 'Nettisivu-uudistuksen keskellä ehdotin, että aiemmin tekemäni lomake valjastetaan myös inbound-liidien keräämiseen. Yksi työ, kaksi hyötyä.',
	},
];

export const projektit = [
	{
		nimi: 'Google Ads luuli jokaista kävijää liidiksi',
		paikka: 'Planmark Oy',
		kuvaus: 'Planmark Oy:n vanhalla WordPress-sivulla Google Ads laski konversioksi jokaisen sivulatauksen. Raportit näyttivät hyviltä, mutta ne mittasivat kävijöitä, eivät liidejä.',
		tein: 'Rakensin seurannan uusiksi: liidilomakkeet kulkevat HubSpotiin, ja vain oikeasti lähetetty lomake kirjautuu Google Adsiin konversioksi. Toteutin sen itse, Claude apunani.',
		tulos: 'Jokainen konversio on nyt oikea yhteydenotto. Mainonnan tuloksiin voi luottaa, ja budjetti ohjautuu sinne, mistä liidit oikeasti tulevat.',
		tagit: ['HubSpot', 'Google Ads', 'Claude'],
		linkki: '',
		linkkiTeksti: '',
	},
	{
		nimi: 'Planmark Oy:n nettisivujen tekstit',
		paikka: 'Planmark Oy',
		kuvaus: 'Planmark tekee ESG-raportoinnin alustaa, ja aihe on täynnä lyhenteitä (CSRD, ESRS, GHG). Uusille nettisivuille tarvittiin tekstit, jotka asiantuntija ymmärtää ja aloittelijakin.',
		tein: 'Kirjoitin tai paransin lähes kaikki sivuston tekstit, kollega toteutti sivuston. Ohjenuorana keep it simple: tarpeeksi tarkkaa asiantuntijalle, tarpeeksi selkeää aloittelijalle.',
		tulos: 'Selkeämmät sivut ja kollegoilta kehuja lopputuloksesta.',
		tagit: ['Copywriting', 'ESG', 'B2B'],
		linkki: 'https://planmark.io/for-consultants/',
		linkkiTeksti: 'Lue tuorein kirjoittamani sivu',
	},
	{
		nimi: 'Tämä hakemussivu',
		paikka: 'Oma projekti',
		kuvaus: 'Hakemus, joka on itsessään näyte: nopea, saavutettava, turvallinen ja hakukoneiden (ja tekoälyjen) ymmärtämä verkkosivu.',
		tein: 'Rakensin sivun Astrolla Claude Coden kanssa, versionhallinta GitHubissa ja julkaisu Vercelissä. Laitoin myös tietoturvan kuntoon: HTTP-tietoturvaotsikot, Content Security Policy, jonka skriptitiivisteet lasketaan joka buildissa automaattisesti, sekä yhteystiedot piiloon roskapostibotilta.',
		tulos: '0 pluginia, 0 tietokantaa, tietoturvaotsikot kunnossa ja alle 5 kt JavaScriptiä, josta suurin osa kuluu WordPressin tuhoamiseen.',
		tagit: ['Astro', 'Claude Code', 'GitHub', 'Vercel', 'CSP'],
		linkki: 'https://github.com/roopemal/hakemus',
		linkkiTeksti: 'Katso koodi GitHubissa',
	},
];

// Miksi Julkee x Lempee -perustelut
export const syyt = [
	{
		otsikko: 'Koska WordPress on minullekin jo nähty',
		teksti: 'Olen nähnyt WordPressin kahdelta puolelta: myin sitä Zonerilla ja päivitin sen plugineja Planmarkilla. Tiedän siis tarkalleen, mistä asiakkaat haluavat eroon, ja osaan perustella, miksi. Teillä siitä on jo päästy.',
	},
	{
		otsikko: 'Koska työkalut saa valita itse',
		teksti: 'Kokeilen mieluummin kuin ihmettelen. Planmarkilla otin LinkedIn-myynnin tueksi käyttöön Dripifyn automatisoidut viestikampanjat ja markkinatutkimuksen apuriksi Geminin.',
	},
	{
		otsikko: 'Koska mokista ei rangaista, viestimättömyydestä kyllä',
		teksti: 'Virheistä oppii usein enemmän kuin onnistumisista, kunhan niistä kertoo heti. Penisilliinikin syntyi mokasta, ja onneksi Fleming kertoi siitä muille.',
	},
	{
		otsikko: 'Koska 8 tuntia kuussa oppimiseen',
		teksti: 'Ensimmäiset tunnit menisivät GEO:hon eli siihen, miten sivut saadaan näkymään ChatGPT:n ja Googlen tekoälyvastauksissa. Sitten markkinoinnin automaatioihin. Opit jaan tiimille, ettei kenenkään tarvitse keksiä pyörää uudestaan.',
	},
];

// Ura aikajanana
export const polku = [
	{ vuosi: '2024', otsikko: 'Double Effect Oy', teksti: 'Vaate- ja asustekauppa Turussa. Google Ads, GA4, Tag Manager, Merchant Center ja Shopify-sivut etänä Helsingistä.' },
	{ vuosi: '2024', otsikko: 'Tradenomi', teksti: 'Markkinoinnin tradenomiksi.' },
	{ vuosi: '2024', otsikko: 'Verkkokauppa.com', teksti: 'Lego-myyjä.' },
	{ vuosi: '2025', otsikko: 'Zoner Oy', teksti: 'Webhotellit ja verkkotunnukset. Myyntiä pienyrittäjille, kaupat 100–2 500 €. Myös WordPress-hostingia.' },
	{ vuosi: '2025–', otsikko: 'Planmark Oy', teksti: 'ESG-raportoinnin ohjelmistoalusta isoille yrityksille. Myynnistä EU-markkinoihin, Google Adsiin, GA4:ään ja nettisivujen teksteihin.' },
	{ vuosi: 'Seuraavaksi', otsikko: 'Julkee x Lempee', teksti: 'Oman median asiantuntija?' },
];
