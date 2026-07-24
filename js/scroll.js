/**
 * scroll.js — revela elementos [data-reveal] y crece las líneas [.horizon]
 * al entrar en el viewport. Respeta prefers-reduced-motion vía CSS.
 */
(function () {
  const targets = document.querySelectorAll('[data-reveal], .horizon');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el) => io.observe(el));

  // Asigna índice para escalonar reveals dentro de un mismo grupo
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });
})();
