/**
 * app.js — utilidades generales de la aplicación.
 */
(function () {
  // Año dinámico en el footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Modo claro / oscuro con persistencia
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  const saved = localStorage.getItem('suseth-theme');
  if (saved) root.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if (next === 'dark') root.setAttribute('data-theme', 'dark');
      else root.removeAttribute('data-theme');
      localStorage.setItem('suseth-theme', next);
    });
  }
})();
