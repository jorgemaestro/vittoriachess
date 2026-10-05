# SEO — Vittoria Chess

Plan de posicionamiento (Fase 9, iniciado el 05/10/2026). La definición técnica resumida está
en docs/definicion.md ("SEO y cabecera de las páginas"); aquí van el criterio, las búsquedas
y lo que queda por hacer.

## Objetivo

Mercado prioritario: internacional (inglés). España, en segundo lugar. Se busca al
coleccionista, interiorista o comprador de regalo de alto nivel que busca un ajedrez como
objeto de arte y diseño, no un tablero de juego corriente.

## Búsquedas elegidas

Criterio cualitativo (revisión de resultados de Google del 05/10/2026 y de cómo se describe
el sector); no hay todavía datos de volumen. Se afinará con Google Search Console cuando la
web lleve unas semanas publicada.

| Idea | Inglés | Español |
| --- | --- | --- |
| Lo que es (la más propia) | sculptural chess set, chess as art, art chess set | ajedrez escultórico, ajedrez de autor |
| Categoría con más búsquedas | luxury chess set, designer chess set, modern chess set | ajedrez de lujo, ajedrez de diseño |
| Lo que lo distingue | vertical chess set, wall-mounted chess, unique chess set | ajedrez vertical, ajedrez de pared, pieza única |
| Cómo está hecho | handcrafted, cast metal, marble chess board | hecho a mano, metal fundido, tablero de mármol |
| Quién lo firma | Jorge Maestro, architect and artist | Jorge Maestro, arquitecto y artista |
| Cómo se vende | unique piece, edition, commission | pieza única, edición, proyecto por encargo |

Notas:
- "Luxury chess set" lo ocupan marcas de moda y casas históricas (Hermès, Baccarat, Jaques of
  London…): se usa, pero no se compite de frente. El terreno propio es "sculptural" + autor +
  "vertical".
- "Vertical / wall-mounted chess" es un nicho con poca competencia de gama alta: conviene que
  la obra D4 y las que sigan tengan una descripción cuidada con esas palabras.
- La web de Wix ya se titula "Sculptural Chess, Reimagined as Art": se mantiene esa idea en
  el título inglés de la home para no perder lo ganado.

## Dónde se usan

- Títulos y descripciones de cada página: src/i18n/es.ts y en.ts, apartado `seo`.
- Obras: salen de su ficha (src/content/obras/). Para posicionar, cada ficha debería decir
  en su descripción qué es la obra, de qué está hecha y qué la hace única, con palabras que
  alguien buscaría (ajedrez, tablero, mármol, metal, vertical, pieza única…).
- Texto alternativo de las fotos: hoy es el nombre de la obra o de la pieza.

## Hecho

- Dirección definitiva con www y direcciones sin barra final.
- Título, descripción, canónica, idiomas enlazados (es / en / x-default) y etiquetas para
  redes en todas las páginas.
- Datos estructurados: marca y web (home), autor (Autor), obra de arte y ruta (cada obra).
- Mapa del sitio y robots.txt; páginas internas y obras sin nombre, fuera de Google.

## Pendiente

- Velocidad: comprimir el vídeo principal, su imagen fija y su versión vertical; revisar la
  carga de las fuentes.
- Accesibilidad: contraste, teclado, orden de títulos, textos alternativos descriptivos.
- Imagen propia para compartir (1200 × 630) en lugar de la foto del rey; iconos para móvil.
- Medir con Lighthouse antes y después.
- Al publicar (Fases 10 y 11): alta en Google Search Console y envío del mapa del sitio;
  redirecciones desde las direcciones de Wix (lista abajo); enlazar la web nueva desde
  Instagram y otras fichas.
- Mientras la web esté en una dirección provisional, todas las páginas deben llevar
  "noindex" para que Google no la indexe por duplicado.

## Direcciones de la web de Wix (para las redirecciones de la Fase 11)

Tomadas de su mapa del sitio el 05/10/2026. Todas bajo https://www.vittoriachess.com.
El destino de cada una se decide en la Fase 11, cuando las obras tengan su nombre definitivo.

Páginas: / · /about · /antique-gold · /book-online · /ceramic-black · /ceramic-blue ·
/chess-boards · /classic-wenge · /collection · /contact · /copia-de-el-origen-esp ·
/copia-de-exhibitions · /copy-of-privacy-policy · /dune-of-gold · /eterna · /exhibitions ·
/gallery · /laila · /monochrome · /ocultos · /portfolio · /shipping-returns-refunds · /shop ·
/shop-1 · /six · /six-bbg · /six-bmb · /six-mmm · /six-wsg · /terms-conditions ·
/tinos-green · /unique · /vertical-chess · /vittoriart · /white-namib

Tienda: /product-page/art-reservation · /product-page/bisel-black · /product-page/bisel-white ·
/product-page/green-indian-marble-edition · /product-page/test-1 ·
/product-page/the-white-namib-edition

Primera correspondencia evidente: /about → /en/author · /contact → /en/contact ·
/collection, /portfolio, /gallery, /shop → /en/works · /six… → /en/pieces ·
/vertical-chess → la obra D4 · /exhibitions → /en/author (trayectoria, hoy oculta).
