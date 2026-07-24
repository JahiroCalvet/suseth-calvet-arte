# Sitio web — Suseth Inge Miranda Calvet

Sitio estático (HTML5 + CSS3 puro + JavaScript ES6, sin frameworks) para la
artista plástica boliviana Suseth Inge Miranda Calvet. Diseñado con
inspiración editorial de museo/galería internacional: mucho blanco, obras
como protagonistas, tipografía serif para voz de autor y sans para
orientación.

## ⚠️ Aviso importante sobre el contenido

No se encontró información pública verificable sobre "Suseth Inge Miranda
Calvet" en internet al momento de construir este sitio. Por lo tanto:

- La **biografía**, la **declaración artística**, las **exposiciones**, los
  **años de la línea de tiempo** y las **fichas de obra** son texto de
  ejemplo (placeholder), escrito en un tono inspirado pero **inventado como
  punto de partida editorial**. Debes revisarlo y reemplazarlo con datos
  reales antes de publicar.
- Todas las imágenes son marcadores visuales (`placeholder-art`, un patrón
  diagonal discreto) — no hay fotografías reales de obras todavía.
- Cualquier texto marcado como "pendiente" o con nota de "reemplazar" debe
  completarse antes de que el sitio sea público de forma definitiva.

## Estructura del proyecto

```
index.html              Inicio
artista.html             La Artista (biografía, formación, declaración)
obras.html                Catálogo con filtro por técnica
obra.html                  Ficha de obra individual (?id=obra-01)
exposiciones.html        Individuales y colectivas
historia.html              Línea de tiempo
acuarelas.html             (misma estructura que obras — a poblar)
esculturas.html
colaboraciones.html
curaduria.html
proyectos-sociales.html
analisis.html
publicaciones.html
agenda.html
contacto.html

css/
  reset.css · variables.css · typography.css · layout.css
  components.css · gallery.css · animations.css · responsive.css

js/
  app.js · menu.js · gallery.js · lightbox.js · scroll.js
  obras-data.js   ← fuente única de datos de las obras (editar aquí)

images/            ← colocar aquí las fotografías reales
```

## Cómo añadir una obra real

Editar `js/obras-data.js` y agregar un objeto al arreglo `OBRAS`:

```js
{
  id: 'obra-07',
  categoria: 'pintura', // 'pintura' | 'acuarela' | 'escultura'
  titulo: 'Nombre real de la obra',
  anio: '2025',
  tecnica: 'Óleo sobre lienzo',
  dimensiones: '100 × 80 cm',
  coleccion: 'Colección privada',
  imagen: 'images/obras/obra-07.jpg', // subir la foto a /images/obras/
  descripcion: 'Texto curatorial real de la obra.'
}
```

La tarjeta en `index.html`, `obras.html` y la ficha en `obra.html?id=obra-07`
se generan automáticamente — no hace falta tocar HTML.

## Cómo publicar gratis en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `suseth-calvet-art`).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio:
   ```bash
   cd suseth-calvet
   git init
   git add .
   git commit -m "Sitio inicial de Suseth Inge Miranda Calvet"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/suseth-calvet-art.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source → Deploy from a branch**, elige
   `main` y carpeta `/ (root)`. Guardar.
4. En 1–2 minutos el sitio queda disponible en:
   `https://TU-USUARIO.github.io/suseth-calvet-art/`
5. Cuando compres el dominio propio: **Settings → Pages → Custom domain**,
   escribe el dominio y sigue la guía de GitHub para los registros DNS
   (A/ALIAS o CNAME). El propio panel te genera el archivo `CNAME`
   automáticamente.

No se requiere build ni Node — es HTML/CSS/JS puro, GitHub Pages lo sirve
tal cual.

## Preparado para migrar a Django

- No hay lógica de servidor: cada página es autocontenida.
- `obras-data.js` puede sustituirse por un `fetch()` a una API/Django REST
  Framework sin tocar el resto del front (misma forma de objeto).
- El formulario de `contacto.html` usa `mailto:` como marcador — al migrar,
  apuntar su `action` a la vista de Django correspondiente.

## Pendiente de contenido real (checklist)

- [ ] Biografía verificada, formación completa y fechas
- [ ] Fotografía profesional de la artista
- [ ] Fotografías de obra en alta resolución (pintura, acuarela, escultura)
- [ ] Fichas técnicas reales de cada obra
- [ ] Exposiciones individuales y colectivas (fechas, galerías, catálogos PDF)
- [ ] Línea de tiempo con años reales
- [ ] Publicaciones y prensa (PDFs)
- [ ] Redes sociales, WhatsApp y mapa de contacto
- [ ] CV en PDF para descarga
