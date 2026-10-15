/* Shared interactions for the main portfolio, career page, and 404 page. */
(() => {
  'use strict';
  const menu = document.getElementById('menu');
  const navigation = document.getElementById('primary-navigation');
  const themeSelector = document.getElementById('theme-switcher');
  function closeNavigation(restoreFocus = false) {
    navigation?.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menu?.focus({ preventScroll: true });
  }
  menu?.addEventListener('click', () => {
    const open = navigation?.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(Boolean(open)));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (open && themeSelector) themeSelector.open = false;
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeNavigation()));
  document.addEventListener('click', event => {
    if (!navigation?.contains(event.target) && !menu?.contains(event.target)) closeNavigation();
  });
  document.addEventListener('focusin', event => {
    if (!navigation?.contains(event.target) && !menu?.contains(event.target)) closeNavigation();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation?.classList.contains('is-open')) closeNavigation(true);
  });
  const desktop = window.matchMedia?.('(min-width: 921px)');
  desktop?.addEventListener('change', event => { if (event.matches) closeNavigation(); });

  const backToTop = document.getElementById('scroll-top');
  const updateScrollButton = () => { if (backToTop) backToTop.hidden = window.scrollY < 650; };
  updateScrollButton();
  window.addEventListener('scroll', updateScrollButton, { passive: true });
  document.querySelectorAll('[data-year]').forEach(element => { element.textContent = String(new Date().getFullYear()); });

  // Native anchors preserve browser navigation and reduced-motion preferences.
  // Scroll spy only marks links for sections that exist on this page.
  const sectionLinks = Array.from(navigation?.querySelectorAll('a[href^="#"]') || []);
  if ('IntersectionObserver' in window && sectionLinks.length) {
    const sections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const active = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      sectionLinks.forEach(link => {
        if (link.getAttribute('href') === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.1, 0.4] });
    sections.forEach(section => observer.observe(section));
  }

  const form = document.getElementById('contact-form');
  if (form) {
    const prepare = document.getElementById('prepare-email');
    const draft = document.getElementById('email-draft');
    const status = document.getElementById('form-status');
    prepare.disabled = false;
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const subject = String(data.get('subject') || '').trim();
      const message = String(data.get('message') || '').trim();
      if (!name || !email || !subject || !message) {
        status.textContent = 'Please complete all fields before preparing your draft.';
        return;
      }
      const body = `${message}\n\nFrom: ${name}\nReply email: ${email}`;
      draft.href = `mailto:sirajsf5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      draft.hidden = false;
      status.textContent = 'Your draft is ready. Open it in your email app to review and send.';
      draft.focus({ preventScroll: true });
    });
    form.addEventListener('input', () => {
      if (draft.hidden) return;
      draft.hidden = true;
      draft.href = 'mailto:sirajsf5@gmail.com';
      status.textContent = 'Message updated. Prepare the draft again to include your changes.';
    });
  }

  const copy = document.querySelector('[data-copy-email]');
  if (copy && navigator.clipboard?.writeText && window.isSecureContext) {
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      const status = document.getElementById('copy-status');
      try {
        await navigator.clipboard.writeText('sirajsf5@gmail.com');
        status.textContent = 'Email address copied.';
      } catch {
        status.textContent = 'Please use the email link or select and copy the address.';
      }
    });
  }
})();
