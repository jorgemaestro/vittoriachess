# Web Vittoria — Fases de construcción

Doce fases, en orden. No se pasa a la siguiente hasta revisar la anterior en el navegador y guardarla (commit). El dominio se toca al final: hasta entonces la web de Wix sigue funcionando.

**Cambio de orden (02/10/2026):** la Fase 6 (contenido y fotos reales) queda en espera hasta tener el material. Mientras, se avanza en este orden: 8 (inglés) → 7 (formulario) → 9 (pulido técnico y SEO) → 10 (publicación provisional). La 6 se hace en cuanto llegue el material y, en todo caso, antes de la 11 (dominio).

## Método en cada paso

1. Pide a Claude Code una sola cosa. Empieza en modo plan para que explique qué va a hacer antes de hacerlo.
2. Revísalo en el navegador en localhost:4321, en desktop y con la ventana estrecha.
3. Corrige con capturas y frases concretas ("el subrayado entra demasiado rápido").
4. Cuando esté bien: "haz commit". Cada commit es un punto al que puedes volver.

## Fase 0 — Preparación (una tarde)

- [ ] Cuenta en GitHub.
- [ ] Cuenta en Cloudflare.
- [ ] Instalar Node.js (versión LTS) y Git.
- [ ] Crear la carpeta vittoria-web, descomprimir dentro este zip y abrir la carpeta en Claude Code.
- [x] Inventario del DNS de Wix (docs/dns-wix.md). Correo: Google Workspace, cobrado por Google.

## Fase 1 — Arranque del proyecto

- CLAUDE.md con las reglas del proyecto.
- Proyecto Astro vacío funcionando en localhost:4321 y primer commit.
- Repositorio privado en GitHub con el código subido.
- Resultado: página en blanco con el fondo de la web, guardada y con historial.

Primer mensaje en Claude Code:

    Vamos a construir la web de Vittoria Chess desde cero con Astro, paso a paso y sin correr. Antes de escribir código: lee docs/definicion.md, docs/fases.md y docs/dns-wix.md, propón el contenido de CLAUDE.md con las reglas del proyecto y explícame el plan de la Fase 1. No instales nada hasta que te lo confirme.

## Fase 2 — Sistema de diseño

- tokens.css: colores (provisionales hasta la paleta de marca), margen de 20 px, curva cubic-bezier(0.23, 1, 0.32, 1), escala tipográfica.
- Fuentes dentro del proyecto: Suisse Int'l (cuando lleguen los .woff2; mientras, Inter Tight) y Cinzel para el logotipo.
- Página interna /sistema que muestra colores, tipos y tamaños.

## Fase 3 — Componentes, uno a uno

Enlace → Nav → MenuIcono → MenuMovil → Footer → Cursor → Carga. Cada uno se prueba en /sistema, se ajusta y se guarda.

## Fase 4 — Home, sección a sección

Vídeo → Manifiesto → Acceso a Las piezas → Acceso a Obras → Acceso a Entrevista → Llamada a contacto. Con fotos y vídeo provisionales.

## Fase 5 — Resto de páginas

Obras (8 en zigzag), Las piezas, El autor (antes Estudio y Entrevista), Contacto y las tres legales.

## Fase 6 — Contenido y fotos reales

Archivos de src/content/ con nombres, tipos y medidas reales; fotos originales en src/assets/. El vídeo se comprime y se sube a Cloudflare R2.

## Fase 7 — Formulario

Conexión con Web3Forms (plan gratuito; sustituye a Formspree, decidido el 02/10/2026) y prueba de envío real.

## Fase 8 — Inglés

Rutas /en/... con direcciones traducidas (/en/works, /en/pieces, /en/author, /en/contact…), selector ES / EN que lleva a la misma página en el otro idioma. Los textos en inglés los redacta Claude a mano, con cuidado, y los aprueba Jorge (decidido el 02/10/2026); nunca con un traductor automático.

## Fase 9 — Pulido técnico

Títulos y descripciones para Google, imagen para redes, mapa del sitio, accesibilidad, velocidad. Plan completo de SEO en docs/seo.md.

Hecho el 05/10/2026: direcciones definitivas, títulos y descripciones, canónicas, idiomas enlazados, etiquetas para redes, datos estructurados, mapa del sitio y robots.txt. Pendiente: velocidad (vídeo, fuentes), accesibilidad, iconos, imagen propia para compartir y medición.

## Fase 10 — Publicación en dirección provisional

GitHub conectado a Cloudflare: cada cambio subido se publica solo en una dirección *.workers.dev. Revisión en móviles reales.

## Fase 11 — Dominio

1. Copiar en Cloudflare todos los registros de docs/dns-wix.md (valores completos desde Wix).
2. Traspasar el dominio de Wix a un registrador intermedio (Wix no permite ir directo a Cloudflare).
3. En cuanto se complete, cambiar los servidores de nombres a los de Cloudflare.
4. Comprobar web, HTTPS, vídeo y correo (enviar y recibir).

## Fase 12 — Cierre

Unos días de comprobación y cancelar el plan de Wix.
