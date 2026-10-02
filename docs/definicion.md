# Web Vittoria Chess — Definición

Especificación acordada el 29–30/09/2026 (revisada el 30/09: tipografía Suisse Int'l). Es la fuente de verdad del diseño. Si algo cambia, se actualiza aquí antes de tocar el código.

Referencia de tono y estructura: wakawaka.aristidebenoist.com/objects (solo referencia; no se copia código, fotos ni textos). Prototipo aprobado: `docs/referencia/vittoria-prototipo.html`.

## Sistema base

- Lienzo de diseño: 1440 px. Las composiciones (posiciones de imágenes, zigzag de Obras, sangrías y el manifiesto) escalan en vw: px / 1440 × 100.
- El margen, los tamaños de texto (salvo el manifiesto) y los grosores de línea van en px fijos, como en el prototipo aprobado (decidido el 30/09/2026).
- Margen único: 20 px.
- Paleta de marca (recibida el 30/09/2026): ONYX #17130F · GRAPHITE #48443F · ASH #989188 · BONE #F2EDE4 · PLASTER #F7F5F1 · BRONZE #B18F5A · BRONZE-D #765A32. Un solo mundo de color, sin modo oscuro que dependa del sistema del visitante. Excepción decidida el 30/09/2026: la página Las piezas va siempre en tono oscuro (colores en la línea "Tono oscuro" de más abajo). El tono oscuro es un bloque de tokens.css que cambia solo los colores de uso. Todos los colores se definen como variables en src/styles/tokens.css para cambiarlos en un solo sitio. Los componentes usan siempre las variables de uso (fondo, tinta…), nunca los nombres de la paleta directamente.
- Colores de la web (decidido el 30/09/2026, opción A: más fría y moderna, sin cremas ni ocres): una paleta neutra propia. Fondo #F5F5F5 · Tinta #1C1C1C · Secundario #707070 (textos pequeños: tipos de la trayectoria, pies de obra, pregunta del acceso a Entrevista) · Provisional #DADADA · Selección #E2E2E2 · Provisional oscuro #1A1A1A (en lugar del vídeo) · Carga #000000 · Claro #FFFFFF. La paleta de marca se conserva en tokens.css como referencia (estuche, impresos, posible acento), pero la interfaz no la usa.
- Tono oscuro (solo Las piezas): Fondo #141414 · Tinta #F5F5F5 · Secundario #8C8C8C · Provisional y selección #3A3A3A.
- Curva de todas las animaciones: cubic-bezier(0.23, 1, 0.32, 1). Única excepción: el golpe del cursor al crecer sobre un enlace (--ease-golpe, con rebote).
- Tipografías: Suisse Int'l (Swiss Typefaces) para todo el texto, pesos Regular (400) y Medium (500); Cinzel 500 solo para el logotipo provisional. Ambas alojadas en el proyecto (src/fonts/), nunca desde un servicio externo.
- Suisse Int'l es una fuente comercial: hace falta la licencia web y los archivos .woff2 (Regular y Medium). Hasta tenerlos, se usa Inter Tight como sustituta con las mismas medidas, y el cambio se hace en una sola línea de tokens.css.

| Estilo | Tamaño / interlineado a 1440 | Uso |
| --- | --- | --- |
| Nav central | 24 / 27,5 px, peso 500 | Enlaces de la barra, títulos de acceso, enlaces grandes |
| Nav lateral | 14 / 17,5 px, peso 500 | ES / EN, palabras bajo las piezas en la home |
| Pie de foto | 10 / 17 px, peso 500 | Pies de obra, línea legal, preguntas de entrevista |
| Manifiesto | 80 / 88 px (5,556 / 6,111 vw), peso 400, -0,02 em | Solo el manifiesto |
| Respuesta entrevista | 24 / 32 px, peso 500 | Entrevista |
| Llamada | 40 / 48 px (móvil 28 / 34), peso 400, -0,02 em | Frase de la llamada a contacto de la home |
| Legal | 14 / 22 px, peso 400 | Texto de las páginas legales |
| Lectura | 16 / 24 px, peso 400 | Texto corrido en columnas (respuestas de la entrevista) |

Todo el texto de interfaz en mayúsculas escritas así, espaciado normal.

## Componentes

**Logotipo (provisional).** Texto "Vittoria Chess" en Cinzel 500, espaciado 0,12 em. 21 px en barra y pie (18 px en tablet y móvil), 44 px en la carga (30 px en móvil). Se sustituirá por el SVG del logotipo del estuche, manteniendo la altura. Firma debajo del logotipo, siempre con él (barra, pie y carga): BY JORGE MAESTRO en Inter Tight 500, 10 / 17 px (estilo pie de foto), mismo color; alineada a la izquierda en barra y pie, centrada en la carga.

**Enlace.** Subrayado de 1 px del color del texto (decidido el 30/09/2026: línea fina y de grosor constante en cualquier pantalla; antes 1,34 px). Al pasar el ratón entra desde la izquierda en 1000 ms; al salir, sale por la derecha en 1200 ms (nunca vuelve por la izquierda). Enlace activo: subrayado fijo, sin reacción.

**Enlace con línea guía** (decidido el 30/09/2026). Para que se note que hay un enlace: una línea de 1 px, a la altura de su subrayado, va desde un borde de la pantalla hasta 16 px antes del enlace. Al entrar en pantalla hace un ciclo completo (decidido el 30/09/2026): crece desde el borde hasta el enlace (1,2 s, var(--ease)), se detiene un instante (0,25 s) y desaparece empezando por su origen, como el subrayado de la barra al salir: el extremo del borde avanza hacia el enlace hasta que la línea se pierde en él, con una aceleración y frenada suaves (1,2 s). Ocurre una sola vez. Lado: VER PIEZAS desde la derecha, VER OBRAS desde la izquierda, LEER ENTREVISTA desde la derecha, CONTACTAR desde la izquierda. En móvil (enlaces a la izquierda) siempre desde la derecha. Sin JavaScript o con movimiento reducido no hay línea (es decoración).

**Barra de navegación.** Fija a 20 px de arriba, izquierda y derecha, sin fondo. Tres bloques en fila (space-between): logotipo · OBRAS · LAS PIEZAS · ESTUDIO · CONTACTO (separados por " · ", decidido el 30/09/2026; antes ", ") · ES / EN. Se oculta al bajar (sube su altura más el margen, unos 64 px con la firma, en 0,6 s) y reaparece al subir. Variante clara (blanco) mientras está sobre el vídeo de la home; oscura en el resto.

**Icono de menú (menos de 810 px).** Dos líneas de 24 px y 1 px de grosor, separadas 7 px, en un área táctil de 40 × 40 px. Al abrir, las líneas se juntan en el centro y después giran ±45° hasta formar una cruz, en dos tiempos encadenados. Al cerrar, el movimiento inverso.

**Menú móvil.** Panel a pantalla completa, fondo PLASTER (el mismo de la web), entra con fundido de 0,4 s. Enlaces apilados a la izquierda a 40 / 48 px, empezando a 120 px de arriba; ES / EN abajo a 14 px. Bloquea el scroll mientras está abierto; tocar un enlace lo cierra. También se cierra con Escape y al pasar a más de 810 px. Mientras está abierto, la barra queda encima en tono oscuro y no se oculta. Sin JavaScript no hay icono ni panel: la barra móvil muestra los enlaces y ES / EN en una fila a 14 px bajo el logotipo.

**Pie.** Dos líneas sin fondo. Línea 1: igual que la barra. Línea 2 (10 / 17 px), 32 px debajo y a 20 px del borde inferior: ©AÑO VITTORIA CHESS (el año en curso, se actualiza solo) · EMAIL · INSTAGRAM · AVISO LEGAL · PRIVACIDAD · COOKIES. 120 px de aire antes del pie. En móvil, la línea 1 queda en el logotipo y la 2 se apila en tres filas: ©AÑO VITTORIA CHESS / EMAIL · INSTAGRAM / AVISO LEGAL · PRIVACIDAD · COOKIES. EMAIL abre el correo a jorge@vittoriachess.com; INSTAGRAM lleva a @vittoria_chess (instagram.com/vittoria_chess) en una pestaña nueva.

**Cursor.** Cuadrado blanco de 16 × 16 px, sin bordes, mix-blend-mode: difference (muestra el negativo de lo que tiene detrás). Sigue al ratón con suavizado (factor 0,25). Sobre enlaces y botones crece a 28 × 28 px en 0,25 s con un golpe: se pasa hasta unos 31 px y se asienta (curva propia --ease-golpe, única excepción a la curva común); al salir vuelve a 16 px en 0,2 s sin rebote (decidido el 02/10/2026; antes 24 px en 0,4 s). Cursor de texto normal dentro de campos de formulario. Oculto en dispositivos táctiles, sin JavaScript y fuera de la ventana; con movimiento reducido sigue al ratón sin suavizado.

**Pantalla de carga.** Solo al entrar por la home. Fondo negro, logotipo en blanco centrado, visible 1,5 s y fundido de 0,8 s. Un clic la salta. Sin bloquear clics mientras se desvanece.

## Páginas

Direcciones (decididas el 30/09/2026): / · /obras · /las-piezas · /estudio · /contacto · /aviso-legal · /privacidad · /cookies. En inglés, las mismas bajo /en/.

### Home (de arriba abajo)

1. Pantalla de carga.
2. Vídeo a pantalla completa (100 % × 100 vh, cover), sin texto, sin sonido, en bucle, reproducción automática. Planos abstractos, muy de cerca, casi misteriosos, de las piezas. Versión vertical aparte para móvil. Póster mientras carga. Con movimiento reducido no arranca solo (queda el póster). Mientras no haya vídeo: bloque en provisional oscuro con el marcador [PENDIENTE: VÍDEO].
3. Manifiesto, 10 vw bajo el vídeo. No es un enlace (decidido el 30/09/2026). Las tres líneas alineadas a la izquierda, sin sangría (decidido el 30/09/2026; antes, tercera línea sangrada 24,65 vw). Las líneas suben desde una máscara al entrar en pantalla, 1,2 s y 80 ms entre líneas (nunca quedan ocultas sin JavaScript):
   El cuadrado, el origen
   La geometría, la ley
   Seis piezas. Seis almas
   Enlace VER PIEZAS (24 px, subrayado animado) a /las-piezas, en la línea de "Seis piezas. Seis almas" y alineado con su base, centrado entre el final del manifiesto y el margen derecho (decidido el 30/09/2026; antes terminaba a 138 px del borde). En móvil, debajo, a la izquierda y a 40 px.
4. [APLAZADO el 30/09/2026: de momento la home pasa del manifiesto a Obras] Acceso a Las piezas: seis imágenes 3:4 en una fila (20 px entre ellas), palabra debajo a 14 px (PEÓN, CABALLO, ALFIL, TORRE, REINA, REY), y VER LAS PIEZAS. Móvil: 2 columnas.
5. Acceso a Obras (redefinido el 30/09/2026): un segundo vídeo igual que el del punto 2 (pantalla completa, sin texto ni sonido, bucle, barra en claro encima), sin título. Al pulsar el vídeo se va a /obras (solo con ratón o dedo; para teclado y lectores de pantalla el enlace es VER OBRAS, sin duplicarlo). Debajo, solo el enlace VER OBRAS a /obras, a la derecha, terminando a 138 px del borde, 40 px bajo el vídeo (en móvil, a la izquierda). Mientras no haya vídeo: bloque provisional oscuro con [PENDIENTE: VÍDEO OBRAS]. (Antes: título OBRAS y las tres primeras obras en zigzag.)
6. Acceso a Entrevista: sin título (quitado el 30/09/2026 por redundante); foto 512 × 683 a 96 px del borde izquierdo; a la derecha, en la columna de 744 px y alineados con la parte de arriba de la foto, una pregunta (10 px: "SI LA REGLA LO DETERMINA TODO, ¿DÓNDE QUEDA EL AUTOR?"), 16 px debajo un fragmento (24 / 32 px, máx. 480 px: "Quizás en el ojo humano. La geometría da la estructura, pero no define."; cambiados el 02/10/2026 con el texto nuevo) y 40 px debajo el enlace LEER ENTREVISTA, que lleva a /estudio (decidido el 30/09/2026; antes LEER LA ENTREVISTA). Móvil: foto a todo el ancho y texto debajo.
7. Llamada a contacto (definida el 30/09/2026): texto "Información sobre obras, ediciones y proyectos por encargo." (40 / 48 px, peso 400, -0,02 em, tal cual en minúscula, en dos líneas equilibradas; móvil 28 / 34 px) y debajo, a 24 px, el enlace CONTACTAR a /contacto. Alineados a la derecha con VER OBRAS (terminan a 138 px del borde). Móvil: a la izquierda. Animación (decidida el 30/09/2026): la frase, partida en sus dos líneas ("Información sobre obras, ediciones" / "y proyectos por encargo."), sube línea a línea desde una máscara como el manifiesto (1,2 s, 80 ms entre líneas), y después CONTACTAR. CONTACTAR lleva línea guía desde la izquierda (ver Enlace con línea guía). Sin JavaScript o con movimiento reducido: todo visible. Es la misma llamada en home, Obras, Las piezas y Estudio.
8. Pie.

240 px de aire entre secciones (160 px en móvil).

### Obras

Catálogo de 8 obras en zigzag, sin enlaces (no hay páginas de detalle por ahora). OBRAS subrayado en la barra. Fotos en blanco y negro; al pasar el ratón por una obra, su foto vuelve a su color original en 0,6 s (var(--ease)). En pantallas táctiles, siempre en color; con movimiento reducido, el cambio es inmediato (decidido el 30/09/2026). Pie de cada obra a 4 px de la imagen, 10 / 17 px, en una sola columna alineada a la izquierda con la foto: nombre / tipo / medidas en cm, uno debajo de otro (decidido el 30/09/2026; antes, tres columnas de 176 y 140 px).

| Obra | Izquierda (px) | Arriba (px) | Imagen (px) | Formato |
| --- | --- | --- | --- | --- |
| 1 | 138 | 201 | 512 × 696 | Vertical 3:4 |
| 2 | 789 | 726 | 592 × 473 | Horizontal 5:4 |
| 3 | 434 | 1386 | 572 × 773 | Vertical 3:4 |
| 4 | 790 | 2361 | 512 × 696 | Vertical |
| 5 | 59 | 2886 | 592 × 473 | Horizontal |
| 6 | 434 | 3546 | 572 × 773 | Vertical |
| 7 | 138 | 4521 | 512 × 696 | Vertical |
| 8 | 789 | 5046 | 592 × 473 | Horizontal |

Llamada a contacto 240 px bajo la obra 8. Móvil: una columna, 64 px entre obras, pie en tres líneas.

### Las piezas

Página en tono oscuro (ver Sistema base). Seis figuras del peón al rey, en este orden: PEÓN, CABALLO, ALFIL, TORRE, REINA, REY (decidido el 30/09/2026; REINA en lugar de DAMA). Alternan derecha e izquierda empezando por la derecha (peón a la derecha, rey a la izquierda). Imágenes 600 × 800 (3:4) con el mismo fondo y encuadre. Pie: solo el nombre de la pieza en estilo Llamada (40 / 48 px, peso 400; móvil 28 / 34), 12 px bajo la imagen. Sin enlaces. Izquierda a 96 px, derecha a 744 px, la primera a 201 px de arriba y 560 px de paso vertical. Llamada a contacto 240 px bajo el rey. Móvil: una columna, 80 px entre piezas.
Solo se llega desde LAS PIEZAS (barra) y VER PIEZAS (home); no lleva manifiesto (decidido el 30/09/2026).

### Estudio

Antes "Entrevista" (renombrada el 30/09/2026). Contiene la entrevista y, al final, la trayectoria (ver más abajo), antes de la llamada a contacto.

Entrevista (texto nuevo recibido el 02/10/2026: 7 preguntas, en src/data/entrevista.ts; sustituye al de 11 preguntas del 30/09). Las preguntas tutean al entrevistado (decidido el 02/10/2026). Una cita dentro de una respuesta va con comillas simples ‘ ’, porque la respuesta entera ya va entre comillas. Composición editorial aprobada el 02/10/2026 (antes: seis bloques alternos iguales de foto y texto): se lee de principio a fin haciendo scroll, sobre la retícula de la web (96 · 434 · 744 · 1044 · 1344 px), con contraste de escala y un bloque distinto por pregunta. El primero empieza a 201 px de arriba; 240 px entre bloques.
- Tamaños: pregunta en estilo Llamada (40 / 48 px) o, las dos más cortas (la 3 y la 7), a tamaño manifiesto (80 / 88 px); primera frase de la respuesta como entradilla (24 / 32 px), entre comillas inglesas “ ” en gris; resto de la respuesta en estilo Lectura (16 / 24 px) en una columna.
- Marca de pregunta: "(p)" en minúscula y entre paréntesis, a 14 px y en gris secundario, delante de cada pregunta y a la altura de su primera línea (decidido el 02/10/2026; antes una "P" al tamaño del texto). Los lectores de pantalla no la leen.
- Fotos: seis (src/assets/entrevista/bloque-01 … bloque-06), de formatos distintos: 3:4 en los bloques 1, 4 y 6; 5:4 en los bloques 2, 5 y 7. El bloque 3 es solo tipografía.
- Composición por bloque: 1 pregunta a lo ancho, foto pequeña y texto en dos columnas · 2 foto apaisada grande a la derecha · 3 solo texto, desplazado a la segunda columna · 4 foto alta a la izquierda · 5 pregunta a lo ancho y foto apaisada junto al texto · 6 foto pequeña a la derecha · 7 cierre, pregunta a tamaño manifiesto y foto apaisada a la izquierda.
- Dos destacados a tamaño manifiesto, con frases literales de la entrevista, 160 px tras su bloque: "Brancusi no esculpía el pájaro, sino el vuelo." (tras el 2) y "Una forma que se adapta al proceso acaba perdiendo su esencia." (tras el 5).
- Animación: preguntas y destacados suben desde una máscara al entrar en pantalla (1,2 s, una vez). Sin JavaScript o con movimiento reducido, todo visible.
- Móvil: todo en una columna (foto, pregunta, entradilla, resto), manteniendo los tres tamaños; 120 px entre bloques.

**Trayectoria** (decidida el 30/09/2026; antes "Exhibitions & Press"). Al final de Estudio, 240 px bajo el último bloque de la entrevista y antes de la llamada a contacto. Título TRAYECTORIA (24 px) a 96 px del borde. Línea temporal: año a 96 px en estilo Llamada (40 / 48 px, regular), fijo en pantalla mientras pasan sus entradas; línea vertical de 1 px a 434 px; entradas a 40 px de la línea, cada una con el tipo (10 / 17 px) y debajo el nombre (24 / 32 px), sin textos descriptivos. 40 px entre entradas y 120 px entre años. Animación: la línea se dibuja con el scroll; el año y cada entrada suben desde una máscara al entrar en pantalla. Sin JavaScript o con movimiento reducido: todo visible y la línea completa. Móvil: año encima de sus entradas y línea a la izquierda, a 20 px.
Entradas: 2026 — PRENSA · EL MUNDO; CAMPAÑA · OTZ Lab; EXPOSICIÓN · COAM, Madrid; PRENSA · Escuela Limón; PERMANENTE · Gambit Café, Madrid. 2025 — COLABORACIÓN · Momoc. (Se quitó la colaboración con Michał Koziołek.)

### Contacto

Redefinida el 30/09/2026. Todo en una columna a 434 px de la izquierda, 572 px de ancho, empezando a 201 px de arriba:
1. Palabra CONTACTO (24 px).
2. 16 px debajo, frase en estilo Llamada (40 / 48 px, regular): "Para consultas, proyectos y colaboraciones." y, 16 px debajo, con menor jerarquía (estilo Lectura, 16 / 24 px, gris secundario): "Cada solicitud se atiende de forma individual." (textos del 02/10/2026; antes "Escríbenos. Te responderemos personalmente.")
3. 80 px debajo, el formulario. Campos sin caja, línea inferior de 1 px que pasa a 1,6 px mientras se escribe en el campo (decidido el 30/09/2026), 40 px entre campos; etiqueta 10 px, texto escrito 24 px. NOMBRE* · APELLIDOS · TELÉFONO · EMAIL* · MENSAJE* (texto largo). Si falta un obligatorio o el email no es válido, aviso a 10 px bajo el campo.
4. 48 px debajo, ENVIAR, igual que el resto de enlaces de acción de la web (24 px, subrayado animado y línea guía desde la izquierda). 16 px debajo, a 10 px y en gris secundario: "AL ENVIAR ACEPTAS LA POLÍTICA DE PRIVACIDAD", con enlace a /privacidad (sustituye a la casilla; a confirmar con los textos legales).
Tras enviar: el formulario da paso a MENSAJE RECIBIDO. Envío a Formspree en la Fase 7; hasta entonces no se manda nada.
Móvil: la columna a todo el ancho, con los márgenes, empezando a 120 px.
Pendiente: email de recepción (Fase 7).

### Legales

Aviso legal (/aviso-legal), privacidad (/privacidad) y cookies (/cookies). Misma composición que Contacto: columna a 434 px, 572 px de ancho, desde 201 px (móvil: a todo el ancho desde 120 px). Título a 24 px; 40 px debajo el texto en estilo Legal (14 / 22 px); apartados con título en mayúsculas (14 px, peso 500) y 32 px entre apartados. Fecha de actualización al final, en gris secundario.
Titular (datos recibidos el 30/09/2026): Jorge Maestro Aguilera, NIF 70417960X, C/ Miguel López de Legazpi 3 Bis, portal 3, 1.º D, 28660 Boadilla del Monte (Madrid). Contacto: jorge@vittoriachess.com.
Privacidad: responsable, datos del formulario de contacto, finalidad (responder), base legal (consentimiento y medidas precontractuales), conservación, encargados (Formspree para el formulario, Cloudflare para el alojamiento, Google Workspace para el correo), transferencias internacionales, derechos y reclamación ante la AEPD.
Cookies: la web no usa cookies propias ni de terceros para analítica o publicidad; solo guarda en el navegador (sessionStorage) una marca técnica para no repetir la pantalla de carga en la misma visita. Por eso no hay banner de cookies.
Textos redactados como borrador: los puntos marcados [REVISAR] los confirma el titular (o un profesional) antes de publicar.

## Fotos y vídeos: nombres de archivo

Decidido el 30/09/2026. Cada foto tiene carpeta y nombre fijos en src/assets/; basta con copiarla con ese nombre para que aparezca en su sitio. Mientras falte, se ve la caja gris provisional. Formatos: .jpg, .png o .webp, con el original a buena resolución (al menos el doble de su tamaño en pantalla; unos 1600 px de lado largo). Astro la recorta a la proporción de su hueco y la optimiza.

| Dónde | Carpeta y nombre |
| --- | --- |
| Obras (8, en el orden de la tabla) | src/assets/obras/obra-01 … obra-08 |
| Las piezas | src/assets/piezas/peon, caballo, alfil, torre, reina, rey |
| Entrevista, acceso de la home | src/assets/entrevista/home |
| Entrevista, bloques de la página | src/assets/entrevista/bloque-01 … bloque-06 |

Vídeos (Cloudflare R2, no van al repositorio): video-principal-horizontal.mp4, video-principal-vertical.mp4, video-principal-poster.jpg; video-obras-horizontal.mp4, video-obras-vertical.mp4, video-obras-poster.jpg.

## Idiomas

ES por defecto; EN en /en/... con textos traducidos a mano.

## Pendientes de contenido

Email del formulario · entradas de la trayectoria anteriores a 2025, si las hay · logotipo en SVG · fotos y vídeo definitivos.
