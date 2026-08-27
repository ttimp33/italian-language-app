import { describe, expect, it } from 'vitest';
// @ts-expect-error — a plain .mjs build script, deliberately untyped.
import { assertParses, buildWorkerSource } from '../../scripts/build-sw.mjs';

/**
 * The service worker is generated, not written, so there is nothing to import
 * from the app. The generator exports the string builder, and these tests
 * assert the properties that decide whether the app works offline — each one
 * stands for a failure that is invisible in development, where everything is
 * served from the network anyway.
 */
const sw: string = buildWorkerSource({
  base: '/app/',
  urls: ['/app/', '/app/index.html', '/app/assets/index-abc.js'],
  version: 'deadbeef',
});

describe('the generated service worker', () => {
  it('is valid JavaScript', () => {
    // A worker with a syntax error does not fail loudly: it simply never
    // registers, and offline support disappears without anyone noticing.
    expect(() => assertParses(sw)).not.toThrow();
  });

  it('matches the cache ignoring Vary', () => {
    // A server answering «Vary: Origin» (Vite's preview does, and CDNs often
    // do) breaks a strict match: a module script is requested in CORS mode with
    // an Origin header the precache request never carried, so every asset
    // misses and the app comes up blank offline with a cache that is full.
    expect(sw).toContain('ignoreVary: true');
    for (const call of sw.split(/caches\s*\.?\s*match\(/).slice(1)) {
      expect(call.slice(0, 80), 'caches.match without MATCH').toContain('MATCH');
    }
  });

  it('serves the document network-first and the assets cache-first', () => {
    // Cache-first on the document is how a PWA pins itself to an old version:
    // stale HTML keeps referencing assets the browser already holds.
    const navigate = sw.indexOf("request.mode === 'navigate'");
    expect(navigate).toBeGreaterThan(-1);
    const branch = sw.slice(navigate, navigate + 400);
    expect(branch.indexOf('fetch(request)')).toBeLessThan(branch.indexOf('caches'));
  });

  it('precaches every url it is given, under the base it is given', () => {
    expect(sw).toContain('cache.addAll(PRECACHE)');
    expect(sw).toContain('/app/assets/index-abc.js');
    expect(sw).toContain("const DOC = '/app/'");
    expect(sw).toContain("italiano-quotidiano-deadbeef");
  });

  it('drops caches from earlier versions on activate', () => {
    expect(sw).toMatch(/keys\.filter\(\(k\) => k !== CACHE\)\.map\(\(k\) => caches\.delete\(k\)\)/);
  });
});
