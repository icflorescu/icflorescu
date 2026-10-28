// Renders resume.html to the PDF the profile links to.
// Usage: bun install && bun run build
import { chromium } from 'playwright';

const html = new URL('./resume.html', import.meta.url).href;
const pdf = new URL('../ionut-cristian-florescu--resume.pdf', import.meta.url).pathname;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: pdf, preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log(pdf);
