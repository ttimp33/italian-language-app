import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * The service worker is generated, not written, so there is nothing to import.
 * These tests read the generator and assert the properties that decide whether
 * the app works offline — each one stands for a failure that is invisible in
 * development, because everything is served from the network there anyway.
 */
const source = readFileSync(join(__dirname, '../../scripts/build-sw.mjs'), 'utf8');

describe('the generated service worker', () => {
  it('matches the cache ignoring Vary', () => {
    // A server answering «Vary: Origin» (Vite's preview does, and CDNs often
    // do) breaks a strict match: a module script is requested in CORS mode with
    // an Origin header the precache request never carried, so every asset
    // misses and the app is blank offline while its cache is full.
    const matches = source.match(/caches\s*\.?\s*match\(/g) ?? [];
    expect(matches.length).toBeGreaterThan(0);
    for (const call of source.split(/caches\s*\.?\s*match\(/).slice(1)) {
      expect(call.slice(0, 80), 'caches.match without MATCH').toContain('MATCH');
    }
    expect(source).toContain('ignoreVary: true');
  });

  it('serves the document network-first and the assets cache-first', () => {
    // Cache-first on the document is how a PWA pins itself to an old version:
    // stale HTML keeps referencing assets the browser already holds.
    const navigate = source.indexOf("request.mode === 'navigate'");
    expect(navigate).toBeGreaterThan(-1);
    const branch = source.slice(navigate, navigate + 400);
    expect(branch.indexOf('fetch(request)')).toBeLessThan(branch.indexOf('caches'));
  });

  it('precaches every emitted file and the base URL itself', () => {
    expect(source).toContain('cache.addAll(PRECACHE)');
    // A navigation resolves to the base, which is not a file on disk.
    expect(source).toContain('urls.unshift(base)');
  });

  it('drops caches from earlier versions on activate', () => {
    expect(source).toMatch(/keys\.filter\(\(k\) => k !== CACHE\)\.map\(\(k\) => caches\.delete\(k\)\)/);
  });
});
