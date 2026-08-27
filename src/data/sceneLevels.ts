import type { Level } from './types';

/**
 * Which levels have vocabulary scenes written for them.
 *
 * Kept apart from scenes.ts on purpose: the scene bank is the largest single
 * file in the app, and App.tsx only needs to know whether a tab should appear.
 * Importing SCENES for that would pull a quarter of a megabyte into the first
 * paint. A test asserts this list still matches the scenes themselves.
 */
export const SCENE_LEVELS: Level[] = ['A1', 'A2'];
