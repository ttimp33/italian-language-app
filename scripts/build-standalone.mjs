/**
 * Inline the Vite build into a single self-contained HTML file.
 *
 * Produces `dist/standalone.html`, which carries its own CSS and JS and makes no
 * network requests — so it can be opened from a file:// URL, emailed, or hosted
 * anywhere that serves a single page (including strict CSP sandboxes that block
 * external assets).
 *
 * The output is a document *fragment* — title, style, root, script — with no
 * <html>/<head>/<body> wrapper, so hosts that supply their own skeleton can
 * embed it as-is. Browsers infer the missing wrapper, so it also opens directly.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const html = await readFile(join(dist, 'index.html'), 'utf8');

const cssHref = html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/)?.[1];
const jsSrc = html.match(/<script[^>]+src="([^"]+)"/)?.[1];
if (!cssHref || !jsSrc) throw new Error('Could not find built CSS/JS in dist/index.html — run `vite build` first.');

const css = await readFile(join(dist, cssHref.replace(/^\//, '')), 'utf8');
const js = await readFile(join(dist, jsSrc.replace(/^\//, '')), 'utf8');

// The product name alone. Hosts that list pages by title show this next to many
// others, so it stays a name rather than the app's longer descriptive tab title.
const title = 'Italiano Quotidiano';
const favicon = html.match(/<link\s+rel="icon"[^>]*>/s)?.[0] ?? '';

// A closing-tag sequence inside the bundle would terminate the inline <script>
// early; the standard escape keeps the JS semantics identical.
const safeJs = js.replace(/<\/script>/gi, '<\\/script>');

const out = `<title>${title}</title>
${favicon}
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${safeJs}
</script>
`;

await writeFile(join(dist, 'standalone.html'), out, 'utf8');
console.log(`dist/standalone.html — ${(Buffer.byteLength(out) / 1024).toFixed(0)} kB`);
