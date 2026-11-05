// Luo jakoesikatselukuvan (Open Graph, 1200×630) tiedostoon public/og-kuva.png.
// Aja: node scripts/og-kuva.mjs
import sharp from 'sharp';

const kerma = '#f2ede4';
const muste = '#121212';
const punainen = '#d7261e';
const sans = "Helvetica Neue, Helvetica, Arial, sans-serif";
const mono = "Menlo, Monaco, Courier New, monospace";
const serif = "Iowan Old Style, Palatino, Georgia, serif";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="${kerma}"/>
	<text x="72" y="96" font-family="${mono}" font-size="22" letter-spacing="2" fill="${muste}">
		<tspan fill="${punainen}">●</tspan> HAKEMUS · OMAN MEDIAN ASIANTUNTIJA @ JULKEE X LEMPEE
	</text>
	<text x="64" y="300" font-family="${sans}" font-weight="900" font-size="190" letter-spacing="-4" fill="${muste}">ROOPE</text>
	<text x="68" y="418" font-family="${sans}" font-weight="900" font-size="112" letter-spacing="4" fill="${muste}">MALMBERG<tspan fill="${punainen}">.</tspan></text>
	<line x1="72" y1="468" x2="1128" y2="468" stroke="${muste}" stroke-width="2"/>
	<text x="72" y="540" font-family="${sans}" font-weight="700" font-size="42" fill="${muste}">Verkkosivut, jotka löytyvät,
		<tspan font-family="${serif}" font-style="italic" font-weight="400">toimivat</tspan> ja myyvät.</text>
	<text x="72" y="590" font-family="${mono}" font-size="20" fill="#6b665e">hakemus-roope.vercel.app</text>
</svg>`;

// Pieni kallistettu valokuvakortti oikeaan yläkulmaan (rajattu golfkuvasta)
const kuva = await sharp('src/assets/golf.jpg')
	.extract({ left: 420, top: 760, width: 680, height: 760 })
	.resize(250, 280)
	.extend({ top: 12, bottom: 44, left: 12, right: 12, background: '#ffffff' })
	.png()
	.toBuffer();
const kortti = await sharp(kuva).rotate(5, { background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
// Pehmeä varjo: puoliläpinäkyvä suorakulmio kortin kokoisena, käännetty ja sumennettu
const { width: kw, height: kh } = await sharp(kuva).metadata();
const varjo = await sharp({ create: { width: kw + 60, height: kh + 60, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
	.composite([{ input: { create: { width: kw, height: kh, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0.22 } } }, left: 30, top: 30 }])
	.png()
	.toBuffer();
const varjoValmis = await sharp(varjo).rotate(5, { background: { r: 0, g: 0, b: 0, alpha: 0 } }).blur(12).png().toBuffer();

await sharp(Buffer.from(svg))
	.composite([
		{ input: varjoValmis, left: 842, top: 118 },
		{ input: kortti, left: 860, top: 126 },
	])
	.png({ compressionLevel: 9 })
	.toFile('public/og-kuva.png');
console.log('public/og-kuva.png valmis');
