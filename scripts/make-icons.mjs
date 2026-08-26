/**
 * Rasterise public/icons/icon.svg into the PNG sizes installers need.
 *
 * Run once and commit the output — the build itself must not depend on a
 * browser. Regenerating needs Playwright installed:
 *
 *   npm i -D playwright && node scripts/make-icons.mjs
 *
 * iOS in particular will not accept an SVG for the home-screen icon, which is
 * why these exist as PNGs at all.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public/icons/icon.svg'), 'utf8');
const sizes = [
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const { file, size } of sizes) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(
    `<body style="margin:0">${svg.replace(/width="\d+" height="\d+"/, `width="${size}" height="${size}"`)}</body>`,
  );
  await page.locator('svg').screenshot({ path: join(root, 'public/icons', file), omitBackground: true });
  await page.close();
  console.log(`public/icons/${file} — ${size}×${size}`);
}
await browser.close();
