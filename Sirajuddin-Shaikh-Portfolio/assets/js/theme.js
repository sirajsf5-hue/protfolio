/* Loaded before CSS so a saved appearance is applied before first paint. */
(() => {
  'use strict';
  const names = Object.freeze({
    'neon-dark': 'Neon Dark',
    'neon-light': 'Neon Light',
    dark: 'Dark',
    light: 'Light'
  });
  const backgrounds = { 'neon-dark': '#090b10', 'neon-light': '#f7f9fc', dark: '#121212', light: '#f5f7fa' };
  const storageKey = 'sirajuddin-portfolio-theme';
  const root = document.documentElement;
  const allowed = value => Object.hasOwn(names, value);

  function savedTheme() {
    try {
      const value = localStorage.getItem(storageKey);
      return allowed(value) ? value : 'dark';
    } catch {
      return 'dark';
    }
  }

  function apply(value, persist = false, announce = false) {
    const theme = allowed(value) ? value : 'dark';
    root.dataset.theme = theme;
    root.style.colorScheme = theme === 'light' || theme === 'neon-light' ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', backgrounds[theme]);
    document.querySelectorAll('[data-current-theme]').forEach(label => { label.textContent = names[theme]; });
    document.querySelectorAll('[data-set-theme]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.setTheme === theme));
    });
    document.querySelector('#theme-switcher > summary')?.setAttribute('aria-label', `Appearance. Current theme: ${names[theme]}`);
    let remembered = true;
    if (persist) {
      try { localStorage.setItem(storageKey, theme); }
      catch { remembered = false; }
    }
    const status = document.getElementById('theme-status');
    if (announce && status) {
      status.textContent = `${names[theme]} theme selected.${remembered ? '' : ' Your browser cannot save this preference.'}`;
    }
    return theme;
  }

  root.classList.add('js');
  apply(savedTheme());
  window.PortfolioTheme = Object.freeze({ apply, names, storageKey });

  function bindSelector() {
    apply(root.dataset.theme);
    const selector = document.getElementById('theme-switcher');
    if (!selector) return;
    const summary = selector.querySelector('summary');
    const buttons = Array.from(selector.querySelectorAll('[data-set-theme]'));
    const close = (restoreFocus = false) => {
      selector.open = false;
      if (restoreFocus) summary.focus({ preventScroll: true });
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      apply(button.dataset.setTheme, true, true);
      close(true);
    }));
    selector.addEventListener('keydown', event => {
      if (event.key === 'Escape' && selector.open) {
        event.preventDefault();
        close(true);
        return;
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      if (!selector.open && event.target !== summary) return;
      event.preventDefault();
      selector.open = true;
      const index = buttons.indexOf(document.activeElement);
      let next;
      if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      else if (index === -1) next = event.key === 'ArrowUp' ? buttons.length - 1 : 0;
      else next = (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus({ preventScroll: true });
    });
    document.addEventListener('click', event => { if (!selector.contains(event.target)) close(); });
    document.addEventListener('focusin', event => { if (!selector.contains(event.target)) close(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindSelector, { once: true });
  else bindSelector();
  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) apply(savedTheme());
  });
})();
