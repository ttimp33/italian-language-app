import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves a project site from /<repo>/, so the deploy workflow
// passes BASE_PATH. Local dev, preview and the standalone single-file build all
// stay at the root, where an absolute /assets/ path is correct.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  server: { port: 5173 },
});
