# Vittoria Chess — Web

Web de Vittoria Chess en Astro. Sustituye a la web actual en Wix.

## Fuentes de verdad
- docs/definicion.md: diseño, medidas, componentes y páginas. Si algo cambia, se actualiza
  ahí ANTES de tocar el código. Si el código y el documento no coinciden, manda el documento.
- docs/fases.md: orden de construcción. Se trabaja solo en la fase actual; no se adelantan
  tareas de fases posteriores.
- docs/dns-wix.md: inventario DNS. Solo se usa en la Fase 11.
- docs/referencia/vittoria-prototipo.html: prototipo aprobado. Es referencia visual, no código
  que copiar.

## Forma de trabajar
- Siempre en español.
- Una sola cosa cada vez. Antes de hacerla, explicar qué se va a hacer y esperar confirmación.
- No instalar dependencias, añadir paquetes ni ejecutar comandos que cambien el sistema sin
  confirmación explícita.
- Commits solo cuando el usuario diga "haz commit". Mensajes en español, cortos y descriptivos.
- Cada cambio se comprueba en localhost:4321, en escritorio (1440 px) y con ventana estrecha
  (menos de 810 px), antes de darlo por bueno.
- Si falta un dato (texto, email, foto), no se inventa: se pone un marcador visible
  [PENDIENTE: …] y se avisa.
- El proyecto vive en disco local (C:\Users\jorge\Desktop\vittoria-web), nunca en Google Drive
  ni carpetas sincronizadas. La copia de seguridad es GitHub.

## Técnica
- Astro con salida estática. Sin framework de interfaz: componentes .astro y JavaScript
  sin librerías en <script>.
- CSS propio. Colores, margen, curva y escala tipográfica solo como variables de
  src/styles/tokens.css. Nunca valores de color sueltos en los componentes.
- Lienzo de 1440 px. Las medidas del documento en px se pasan a vw así: px / 1440 × 100
  (20 px = 1,389 vw). Corte principal a 810 px (menú móvil).
- Curva de todas las animaciones: var(--ease) = cubic-bezier(0.23, 1, 0.32, 1).
- Respetar prefers-reduced-motion: si el visitante lo pide, las animaciones se reducen o
  se quitan (el contenido aparece directamente).
- Fuentes alojadas en src/fonts/ (Suisse Int'l, o Inter Tight como sustituta hasta tener
  la licencia; Cinzel solo para el logotipo). Nada cargado desde Google Fonts, CDNs ni otros
  servicios externos. El único servicio externo previsto es Formspree (Fase 7).
- El texto de interfaz se escribe en MAYÚSCULAS en el propio texto, no con text-transform.
- Mejora progresiva: todo el contenido tiene que verse sin JavaScript. Las animaciones de
  entrada nunca dejan texto oculto si el JS falla.
- Contenido en src/content/, imágenes en src/assets/ (optimizadas con <Image> de Astro).
  El vídeo va en Cloudflare R2, no en el repositorio.
- Idiomas: ES en la raíz y EN en /en/..., con los textos traducidos a mano. Nunca traducción
  automática.

## Límites
- No se copia código, fotos ni textos de la web de referencia (wakawaka / Aristide Benoist).
- No se toca el dominio ni el DNS hasta la Fase 11. La web de Wix sigue funcionando hasta
  entonces.
- El correo (Google Workspace: registros MX, SPF, DKIM y DMARC) no debe romperse nunca.
- No se guardan en el repositorio claves, tokens ni archivos .env.

## Documentación de Astro
- Documentación oficial: https://docs.astro.build — consultarla antes de usar una función de
  Astro que no se haya usado aún en el proyecto (rutas, contenido, imágenes, i18n).
