/* ============ Dark Mode — System Detection + Toggle + Persist ============ */
(function () {
  'use strict';
  const KEY = 'duls-theme';
  const html = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
  }

  // Init: check localStorage → fallback to system preference
  const stored = localStorage.getItem(KEY);
  if (stored === 'dark' || stored === 'light') {
    applyTheme(stored);
  } else {
    applyTheme(getSystemTheme());
  }

  // Toggle button
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(KEY, next);
    });
  });

  // Listen for system theme changes (real-time)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem(KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
