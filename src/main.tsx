import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/**
 * Register the service worker so the app opens without a network.
 *
 * Everything it needs is already local — the content is bundled, progress lives
 * in localStorage and the audio is the device's own voice — so caching the
 * shell is the only thing standing between this and working on a plane.
 *
 * Registration is deliberately after render and failure is non-fatal: an app
 * that will not start because its cache layer errored is worse than one that
 * simply needs a connection.
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
      // No offline support this session; the app still works online.
    });
  });
}
