/* Vincent Onotu Bello — site behaviour
 * Original JS. Vanilla, no dependencies.
 */
(() => {
  'use strict';

  // ------- year stamp -------
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ------- theme toggle (persists in localStorage) -------
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('vb-theme');
  if (savedTheme === 'light') root.setAttribute('data-theme', 'light');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.setItem('vb-theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('vb-theme', 'light');
      }
    });
  }

  // ------- nav active state on scroll -------
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach(a => {
            a.classList.toggle('is-active', a.getAttribute('href') === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
  }

  // ------- smooth scroll fallback for older browsers -------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', id);
        }
      }
    });
  });

  // ------- social link placeholders -------
  // Replace these with your real URLs.
  const links = {
    linkedin: 'https://www.linkedin.com/in/vinbello',
    github:   'https://github.com/Oziadaovosi',
  };
  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.getAttribute('data-link');
    if (links[key]) el.setAttribute('href', links[key]);
  });

  // ------- keyboard niceties: press "/" to jump to contact -------
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement === document.body) {
      const c = document.getElementById('contact');
      if (c) { e.preventDefault(); c.scrollIntoView({ behavior: 'smooth' }); }
    }
  });
})();
