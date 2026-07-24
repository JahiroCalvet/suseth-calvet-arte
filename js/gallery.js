/**
 * gallery.js — construye el mosaico de obras a partir de OBRAS
 * (ver obras-data.js) y gestiona el filtro por técnica en obras.html.
 */
(function () {
  const grid = document.querySelector('[data-gallery]');
  if (!grid || typeof OBRAS === 'undefined') return;

  function cardTemplate(obra) {
    const img = obra.imagen
      ? `<img src="${obra.imagen}" alt="${obra.titulo}, ${obra.tecnica}, ${obra.anio}" loading="lazy">`
      : `<div class="placeholder-art" aria-hidden="true">Fotografía<br>pendiente</div>`;

    return `
      <a class="card-work" href="obra.html?id=${obra.id}" data-reveal>
        <div class="card-work__frame">${img}</div>
        <div class="card-work__meta">
          <h3 class="card-work__title">${obra.titulo}</h3>
          <p class="card-work__sub">${obra.tecnica} · ${obra.anio}</p>
        </div>
      </a>
    `;
  }

  function render(list) {
    grid.innerHTML = list.map(cardTemplate).join('');
    // Re-observa los nuevos elementos para el efecto de aparición
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        }),
        { threshold: 0.1 }
      );
      grid.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    } else {
      grid.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
    }
  }

  render(OBRAS);

  const filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      const cat = btn.dataset.filter;
      render(cat === 'todas' ? OBRAS : OBRAS.filter((o) => o.categoria === cat));
    });
  }
})();
