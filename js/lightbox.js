/**
 * lightbox.js — abre imágenes con [data-lightbox] en un visor a pantalla
 * completa. Cierra con Escape, clic fuera, o el botón de cierre.
 */
(function () {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const frame = lightbox.querySelector('.lightbox__frame');
  const caption = lightbox.querySelector('.lightbox__caption');
  const closeBtn = lightbox.querySelector('.lightbox__close');

  function open(src, alt, text) {
    frame.innerHTML = src
      ? `<img src="${src}" alt="${alt || ''}" style="width:100%;height:100%;object-fit:contain;">`
      : `<div class="placeholder-art" style="aspect-ratio:4/3;">Fotografía en alta resolución pendiente</div>`;
    caption.textContent = text || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      open(trigger.dataset.lightbox, trigger.dataset.alt, trigger.dataset.caption);
    });
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
