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
| Pie de foto | 10 / 17 px, peso 500 | Pies de obra, línea legal, firma en el acceso a El autor |
| Manifiesto | 80 / 88 px (5,556 / 6,111 vw), peso 400, -0,02 em | Solo el manifiesto |
| Respuesta | 24 / 32 px | Texto de El autor, nombres de la trayectoria y de las piezas, campos del formulario |
| Llamada | 40 / 48 px (móvil 28 / 34), peso 400, -0,02 em | Frase de la llamada a contacto de la home |
| Legal | 14 / 22 px, peso 400 | Texto de las páginas legales |
| Lectura | 16 / 24 px, peso 400 | Texto corrido en columnas (fichas de obra, apunte de contacto) |

Todo el texto de interfaz en mayúsculas escritas así, espaciado normal.

## Componentes

**Logotipo (provisional).** Texto "Vittoria Chess" en Cinzel 500, espaciado 0,12 em. 21 px en barra y pie (18 px en tablet y móvil), 44 px en la carga (30 px en móvil). Se sustituirá por el SVG del logotipo del estuche, manteniendo la altura. Firma debajo del logotipo, siempre con él (barra, pie y carga): BY JORGE MAESTRO en Inter Tight 500, 10 / 17 px (estilo pie de foto), mismo color; alineada a la izquierda en barra y pie, centrada en la carga.

**Enlace.** Subrayado de 1 px del color del texto (decidido el 30/09/2026: línea fina y de grosor constante en cualquier pantalla; antes 1,34 px). Al pasar el ratón entra desde la izquierda en 1000 ms; al salir, sale por la derecha en 1200 ms (nunca vuelve por la izquierda). Enlace activo: subrayado fijo, sin reacción.

**Enlace con línea guía** (decidido el 30/09/2026). Para que se note que hay un enlace: una línea de 1 px, a la altura de su subrayado, va desde un borde de la pantalla hasta 16 px antes del enlace. Al entrar en pantalla hace un ciclo completo (decidido el 30/09/2026): crece desde el borde hasta el enlace (1,2 s, var(--ease)), se detiene un instante (0,25 s) y desaparece empezando por su origen, como el subrayado de la barra al salir: el extremo del borde avanza hacia el enlace hasta que la línea se pierde en él, con una aceleración y frenada suaves (1,2 s). Ocurre una sola vez. Lado: VER PIEZAS desde la derecha, VER OBRAS desde la izquierda, LEER ENTREVISTA desde la derecha, CONTACTAR desde la izquierda. En móvil (enlaces a la izquierda) siempre desde la derecha. Sin JavaScript o con movimiento reducido no hay línea (es decoración).

**Barra de navegación.** Fija a 20 px de arriba, izquierda y derecha, sin fondo. Se pinta en negativo sobre lo que tiene debajo (mix-blend-mode: difference, como el cursor; decidido el 02/10/2026): sobre el fondo claro se ve en el color de tinta, y sobre una foto o zona oscura se aclara sola, de modo que nunca se pierde. Para ello usa el color --color-negativo (#D9D9D9, que sobre el fondo #F5F5F5 da exactamente la tinta #1C1C1C). Tres bloques en fila (space-between): logotipo · OBRAS · LAS PIEZAS · ESTUDIO · CONTACTO (separados por " · ", decidido el 30/09/2026; antes ", ") · ES / EN. Se oculta al bajar (sube su altura más el margen, unos 64 px con la firma, en 0,6 s) y reaparece al subir. Variante clara (blanco) mientras está sobre el vídeo de la home; oscura en el resto. Nombres de la barra (simplificados el 05/10/2026): OBRAS · PIEZAS · AUTOR · CONTACTO; en inglés, WORKS · PIECES · AUTHOR · CONTACT. Antes LAS PIEZAS y EL AUTOR (y, antes, ESTUDIO). Las direcciones se igualaron a la barra ese mismo día: /piezas y /autor (/en/pieces, /en/author).

**Icono de menú (menos de 810 px).** Dos líneas de 24 px y 1 px de grosor, separadas 7 px, en un área táctil de 40 × 40 px. Al abrir, las líneas se juntan en el centro y después giran ±45° hasta formar una cruz, en dos tiempos encadenados. Al cerrar, el movimiento inverso.

**Menú móvil.** Panel a pantalla completa, fondo PLASTER (el mismo de la web), entra con fundido de 0,4 s. Enlaces apilados a la izquierda a 40 / 48 px, empezando a 120 px de arriba; ES / EN abajo a 14 px. Bloquea el scroll mientras está abierto; tocar un enlace lo cierra. Si el panel no cabe en pantallas muy bajas (móvil en horizontal), se desplaza por dentro. También se cierra con Escape y al pasar a más de 810 px. Mientras está abierto, la barra queda encima en tono oscuro y no se oculta. Sin JavaScript no hay icono ni panel: la barra móvil muestra los enlaces y ES / EN en una fila a 14 px bajo el logotipo.

**Pie.** Dos líneas sin fondo. Línea 1: igual que la barra. Línea 2 (10 / 17 px), 32 px debajo y a 20 px del borde inferior: ©AÑO VITTORIA CHESS (el año en curso, se actualiza solo) · EMAIL · INSTAGRAM · AVISO LEGAL · PRIVACIDAD · COOKIES. 120 px de aire antes del pie. En móvil, la línea 1 queda en el logotipo y la 2 se apila en tres filas: ©AÑO VITTORIA CHESS / EMAIL · INSTAGRAM / AVISO LEGAL · PRIVACIDAD · COOKIES. EMAIL abre el correo a jorge@vittoriachess.com; INSTAGRAM lleva a @vittoria_chess (instagram.com/vittoria_chess) en una pestaña nueva.

**Cursor.** Cuadrado blanco de 16 × 16 px, sin bordes, mix-blend-mode: difference (muestra el negativo de lo que tiene detrás). Sigue al ratón con suavizado (factor 0,25). Sobre enlaces y botones crece a 28 × 28 px en 0,25 s con un golpe: se pasa hasta unos 31 px y se asienta (curva propia --ease-golpe, única excepción a la curva común); al salir vuelve a 16 px en 0,2 s sin rebote (decidido el 02/10/2026; antes 24 px en 0,4 s). Cursor de texto normal dentro de campos de formulario. Oculto en dispositivos táctiles, sin JavaScript y fuera de la ventana; con movimiento reducido sigue al ratón sin suavizado. Se activa al cargar si el dispositivo tiene ratón, o en cuanto se mueve uno (vista de móvil en un ordenador, portátiles táctiles): así nunca conviven el cuadrado y la mano del sistema (ajustado el 05/10/2026; el icono de menú ya no fuerza la mano).

**Pantalla de carga.** Solo al entrar por la home. Fondo negro, logotipo en blanco centrado, visible 1,5 s y fundido de 0,8 s. Un clic la salta. Sin bloquear clics mientras se desvanece.

## Páginas

Direcciones (decididas el 30/09/2026): / · /obras · /piezas · /autor · /contacto · /aviso-legal · /privacidad · /cookies. En inglés, bajo /en/ y traducidas (ver Idiomas).

### Home (de arriba abajo)

Título principal para Google y lectores de pantalla (no visible): "Vittoria Chess".

1. Pantalla de carga.
2. Vídeo a pantalla completa (100 % × 100 vh, cover), sin texto, sin sonido, en bucle, reproducción automática. Planos abstractos, muy de cerca, casi misteriosos, de las piezas. Versión vertical aparte para móvil. Póster mientras carga. Con movimiento reducido no arranca solo (queda el póster). Mientras no haya vídeo: bloque en provisional oscuro con el marcador [PENDIENTE: VÍDEO].
3. Manifiesto, 10 vw bajo el vídeo. No es un enlace (decidido el 30/09/2026). Las tres líneas alineadas a la izquierda, sin sangría (decidido el 30/09/2026; antes, tercera línea sangrada 24,65 vw). Las líneas suben desde una máscara al entrar en pantalla, 1,2 s y 80 ms entre líneas (nunca quedan ocultas sin JavaScript):
   El cuadrado, el origen
   La geometría, la ley
   Seis piezas. Seis almas
   A la derecha, un cuadro (en prueba desde el 06/10/2026; antes solo estaban el texto y el enlace): imagen o vídeo cuadrado de 434 × 434 px, de 868 a 1302 px (termina a 138 px del borde derecho, como VER OBRAS y CONTACTAR), con su borde de arriba a la altura exacta de las mayúsculas de la primera línea del manifiesto (decidido el 06/10/2026; para ello el cuadro baja 0,18 del tamaño de letra, valor de Inter Tight que hay que revisar al cambiar de fuente; en la primera prueba compartían base). Es el vídeo public/video/video-piezas.mp4 si existe (sin sonido, en bucle); si no, la foto src/assets/home/piezas; y mientras no haya ninguna, provisionalmente, la foto del rey recortada. El cuadro también lleva a /piezas.
   Enlace VER PIEZAS (24 px, subrayado animado, línea guía desde la derecha) a /piezas, 24 px bajo el cuadro y alineado con su lado derecho (antes, en la línea de "Seis piezas. Seis almas" y centrado entre el manifiesto y el margen). En móvil: manifiesto, cuadro a todo el ancho 40 px debajo y enlace a la izquierda, 24 px bajo el cuadro.
4. [APLAZADO el 30/09/2026: de momento la home pasa del manifiesto a Obras] Acceso a Las piezas: seis imágenes 3:4 en una fila (20 px entre ellas), palabra debajo a 14 px (PEÓN, CABALLO, ALFIL, TORRE, REINA, REY), y VER LAS PIEZAS. Móvil: 2 columnas.
5. Acceso a Obras (redefinido el 30/09/2026): un segundo vídeo igual que el del punto 2 (pantalla completa, sin texto ni sonido, bucle, barra en claro encima), sin título. Al pulsar el vídeo se va a /obras (solo con ratón o dedo; para teclado y lectores de pantalla el enlace es VER OBRAS, sin duplicarlo). Debajo, solo el enlace VER OBRAS a /obras, a la derecha, terminando a 138 px del borde, 40 px bajo el vídeo (en móvil, a la izquierda). Mientras no haya vídeo: bloque provisional oscuro con [PENDIENTE: VÍDEO OBRAS]. (Antes: título OBRAS y las tres primeras obras en zigzag.)
6. Acceso a Autor (redefinido el 05/10/2026; antes "Acceso a Entrevista", con una pregunta y un fragmento de la entrevista): sin título; foto 512 × 683 a 96 px del borde izquierdo (src/assets/autor/home); a la derecha, en la columna de 744 px y alineados con la parte de arriba de la foto, la firma (10 px, gris: "JORGE MAESTRO · ARQUITECTO Y ARTISTA") y, 24 px debajo, el enlace SABER MÁS (24 px, con línea guía desde la derecha), que lleva a /autor. Sin frase resumen (quitada el 05/10/2026: más sobrio). Móvil: foto a todo el ancho y texto debajo.
7. Llamada a contacto (definida el 30/09/2026): texto "Información sobre obras, ediciones y proyectos por encargo." (40 / 48 px, peso 400, -0,02 em, tal cual en minúscula, en dos líneas equilibradas; móvil 28 / 34 px) y debajo, a 24 px, el enlace CONTACTAR a /contacto. Alineados a la derecha con VER OBRAS (terminan a 138 px del borde). Móvil: a la izquierda. Animación (decidida el 30/09/2026): la frase, partida en sus dos líneas ("Información sobre obras, ediciones" / "y proyectos por encargo."), sube línea a línea desde una máscara como el manifiesto (1,2 s, 80 ms entre líneas), y después CONTACTAR. CONTACTAR lleva línea guía desde la izquierda (ver Enlace con línea guía). Sin JavaScript o con movimiento reducido: todo visible. Es la misma llamada en home, Obras, Las piezas y Estudio.
8. Pie.

240 px de aire entre secciones (160 px en móvil).

### Obras

Catálogo de obras en zigzag; cada obra enlaza a su página (ver más abajo). Las obras salen de las fichas de src/content/obras/ (ver "Fichas de las obras"), ordenadas por su campo orden; cada una ocupa el hueco de la tabla que le toca por posición, y el formato de la foto principal (vertical u horizontal) lo marca el hueco. La tabla define 8 huecos; si hay más obras, el patrón de los 6 primeros se repite 4320 px más abajo. OBRAS subrayado en la barra. Fotos en blanco y negro; al pasar el ratón por una obra, su foto vuelve a su color original en 0,6 s (var(--ease)). En pantallas táctiles, siempre en color; con movimiento reducido, el cambio es inmediato (decidido el 30/09/2026). Pie de cada obra a 4 px de la imagen, 10 / 17 px, en una sola columna alineada a la izquierda con la foto: nombre / tipo / medidas en cm, uno debajo de otro (decidido el 30/09/2026; antes, tres columnas de 176 y 140 px).

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

Llamada a contacto 240 px bajo la última obra. Móvil: una columna, 64 px entre obras, pie en tres líneas.

**Página de cada obra** (decidida el 02/10/2026; antes no había páginas de detalle). Dirección /obras/<identificador> y /en/works/<identificador>, donde el identificador es el nombre del archivo de su ficha (obra-01 … obra-08 hasta tener los nombres reales). En el catálogo, cada obra (foto y pie) es un enlace a su página.
- Composición sobre la retícula, desde 201 px: a la izquierda, de 96 a 1020 px, las fotos de la obra una debajo de otra (40 px entre ellas), a su proporción natural; a la derecha, en la columna de 1044 a 1344 px, la ficha, que se queda fija mientras pasan las fotos.
- Ficha: nombre (estilo Llamada, 40 / 48 px); debajo, cuatro datos con su etiqueta a 10 px en gris y el valor en Lectura (16 / 24 px): TIPO, MEDIDAS, EDICIÓN, AÑO; una descripción breve en Lectura; si la obra los tiene, 40 px bajo la descripción, los DETALLES (etiqueta a 10 px en gris y, debajo, una línea por característica en Lectura); y el enlace CONSULTAR DISPONIBILIDAD (24 px, con línea guía), que lleva a Contacto con el nombre de la obra ya escrito en el mensaje.
- Fotos: 2–3 por obra, en una carpeta con el mismo nombre que su ficha: src/assets/obras/<identificador>/01, 02, 03… La 01 es la principal (la del catálogo) y el número marca el orden en la página. Mientras no haya ninguna, tres cajas grises. En ordenador, en blanco y negro y en color al pasar el ratón, como en el catálogo; en pantallas táctiles, siempre en color.
- Al final: ANTERIOR · TODAS LAS OBRAS · SIGUIENTE.
- Hasta 1100 px de ancho (tabletas y móvil): primero la ficha y después las fotos, en una columna. La ficha solo se queda fija si la pantalla tiene al menos 700 px de alto; si no, se desplaza con la página para que el enlace siempre se alcance (revisión del 02/10/2026).
- Datos de cada obra en su ficha; lo que falte (campo vacío), con marcador [PENDIENTE].

**Fichas de las obras** (decidido el 04/10/2026). Un archivo por obra en src/content/obras/<identificador>.md, que se edita como un formulario con el Bloc de notas (instrucciones en el LEEME de esa carpeta). Se leen con un lector propio y tolerante (src/content.config.ts): cada línea "campo: valor" es un dato, sin importar la sangría ni las comillas, y la descripción es todo lo que sigue a "descripcion:" hasta el siguiente campo. El nombre del archivo (minúsculas, sin tildes ni espacios) es la dirección de su página y el nombre de su carpeta de fotos. Campos: orden (número, obligatorio: posición en el catálogo), anio, medidas (comunes a los dos idiomas) y, dentro de es y de en, nombre, tipo, edicion, descripcion (uno o varios párrafos) y detalles (opcional, añadido el 04/10/2026: otras características de la obra, una por línea, como la altura del rey, el peso del tablero, el número de piezas o si lleva estuche). Un campo vacío muestra su marcador [PENDIENTE], salvo detalles, que si está vacío no se muestra. Añadir una obra es crear una ficha y su carpeta de fotos; quitarla, borrar la ficha. El inglés lo redacta Claude y lo aprueba Jorge.

### Las piezas

Página con el fondo claro del resto de la web (en prueba desde el 02/10/2026; antes en tono oscuro, que sigue definido en Sistema base por si se recupera). Seis figuras del peón al rey, en este orden: PEÓN, CABALLO, ALFIL, TORRE, REINA, REY (decidido el 30/09/2026; REINA en lugar de DAMA). Composición orgánica (en prueba desde el 02/10/2026; antes, seis figuras iguales de 600 × 800 alternando a 96 y 744 px con 560 px de paso): imágenes 3:4 de anchos distintos, en posiciones irregulares como el catálogo de Obras, y dos de ellas llegan al borde de la pantalla (ver tabla). Mismo fondo y encuadre en todas. Pie: solo el nombre de la pieza a 24 / 32 px, peso 400 (reducido el 02/10/2026; antes en estilo Llamada, 40 / 48 px), 12 px bajo la imagen, también en móvil. En la imagen pegada al borde izquierdo, el nombre se separa 20 px del borde (el margen). Sin enlaces. Llamada a contacto 240 px bajo el rey. Móvil: una columna, 80 px entre piezas.

| Pieza | Izquierda (px) | Arriba (px) | Imagen (px) | Nota |
| --- | --- | --- | --- | --- |
| Peón | 868 | 201 | 572 × 763 | Llega al borde derecho |
| Caballo | 138 | 640 | 420 × 560 | |
| Alfil | 494 | 1440 | 512 × 683 | |
| Torre | 0 | 2300 | 480 × 640 | Llega al borde izquierdo |
| Reina | 790 | 2620 | 512 × 683 | |
| Rey | 290 | 3560 | 620 × 827 | |
Solo se llega desde PIEZAS (barra) y VER PIEZAS (home); no lleva manifiesto (decidido el 30/09/2026).

### El autor

Antes "Estudio" y, antes, "Entrevista" (renombrada el 05/10/2026). En la barra, AUTOR (en inglés, AUTHOR). Dirección /autor (/en/author). Sustituye a la entrevista de siete preguntas por un texto breve (recibido el 05/10/2026 en primera persona y pasado ese mismo día a tercera persona, singular y presente), seguido de la llamada a contacto. La trayectoria queda oculta de momento (ver más abajo). Una foto (retrato o estudio).

Texto, en minúscula (mayúscula solo inicial), en src/i18n/ (autor):
- "Jorge Maestro sueña con crear las seis piezas del ajedrez con la geometría como única ley." (el texto empieza por el nombre; la línea de firma "Jorge Maestro · Arquitecto y artista" se quitó el 05/10/2026)
- "Todo empieza en el cuadrado. El origen del juego. La única forma que sobrevive al paso de los siglos."
- "Les da vida; movimiento."
- Destacado: "Contar lo máximo / con lo mínimo."
- "Piedra, madera y resina. Materiales que exigen sacrificios en la forma. Aparece el metal."
- "Nacen seis esculturas vivas: el peón, el caballo, el alfil, la torre, la reina y el rey."
- "Y con ellas, Vittoria Chess. Su obra. Donde explora la forma, el material y la perspectiva."
- "El ajedrez vertical. Una nueva mirada."
- Destacado: "Un juego creado / para ser contemplado."

Composición, sobre la retícula de la web y desde 201 px:
- Texto corrido en la columna de 434 px, 572 px de ancho, a 24 / 32 px y peso 400, con una línea en blanco (32 px) entre párrafos.
- Las dos frases destacadas son frases literales del texto, que no se repiten: salen de su párrafo y se muestran en estilo Destacado (64 / 72 px a 1440, es decir 4,444 / 5 vw; móvil 30 / 36; reducido el 05/10/2026 desde el tamaño manifiesto, 80 / 88), desde 96 px del borde, con 160 px de aire arriba y abajo (96 px en móvil). La segunda cierra el texto.
- Foto (src/assets/autor/retrato, 3:4): 300 × 400 px en la columna derecha (1044 → 1344 px), junto al primer bloque de texto y empezando 64 px por debajo de su primera línea, de modo que baja hasta el aire de la primera frase destacada, sin tocarla (subida ahí el 05/10/2026; antes junto al segundo bloque). Hasta 1100 px de ancho pasa a ir en la columna del texto, tras el primer bloque y antes de la frase destacada (en móvil, a todo el ancho). Caja gris mientras no esté.
- Animación: cada línea de una frase destacada sube desde una máscara al entrar en pantalla (1,2 s, var(--ease), 80 ms entre líneas), como el manifiesto de la home. El texto corrido no se anima. Sin JavaScript o con movimiento reducido, todo visible.
- Entre 810 y 1100 px, la columna de texto se ensancha hasta 96 px del borde derecho. Móvil: todo en una columna con los márgenes, empezando a 120 px.

**Trayectoria** — OCULTA desde el 05/10/2026: se reserva para más adelante. El componente (src/components/Trayectoria.astro), sus datos y sus textos se conservan; para recuperarla basta con volver a ponerla en la página El autor, entre el texto y la llamada a contacto. Definición: (decidida el 30/09/2026; antes "Exhibitions & Press"). Al final de El autor, 240 px bajo la última frase destacada y antes de la llamada a contacto. Título TRAYECTORIA (24 px) a 96 px del borde. Línea temporal: año a 96 px en estilo Llamada (40 / 48 px, regular), fijo en pantalla mientras pasan sus entradas; línea vertical de 1 px a 434 px; entradas a 40 px de la línea, cada una con el tipo (10 / 17 px) y debajo el nombre (24 / 32 px), sin textos descriptivos. 40 px entre entradas y 120 px entre años. Animación: la línea se dibuja con el scroll; el año y cada entrada suben desde una máscara al entrar en pantalla. Sin JavaScript o con movimiento reducido: todo visible y la línea completa. Móvil: año encima de sus entradas y línea a la izquierda, a 20 px.
Entradas: 2026 — PRENSA · EL MUNDO; CAMPAÑA · OTZ Lab; EXPOSICIÓN · COAM, Madrid; PRENSA · Escuela Limón; PERMANENTE · Gambit Café, Madrid. 2025 — COLABORACIÓN · Momoc. (Se quitó la colaboración con Michał Koziołek.)

### Contacto

Redefinida el 30/09/2026. Todo en una columna a 434 px de la izquierda, 572 px de ancho, empezando a 201 px de arriba:
1. Palabra CONTACTO (24 px).
2. 16 px debajo, frase en estilo Llamada (40 / 48 px, regular): "Para consultas, proyectos y colaboraciones." y, 16 px debajo, con menor jerarquía (estilo Lectura, 16 / 24 px, gris secundario): "Cada solicitud se atiende de forma individual." (textos del 02/10/2026; antes "Escríbenos. Te responderemos personalmente.")
3. 80 px debajo, el formulario. Campos sin caja, línea inferior de 1 px que pasa a 1,6 px mientras se escribe en el campo (decidido el 30/09/2026), 40 px entre campos; etiqueta 10 px, texto escrito 24 px. NOMBRE* · APELLIDOS · TELÉFONO · EMAIL* · MENSAJE* (texto largo). Si falta un obligatorio o el email no es válido, aviso a 10 px bajo el campo.
4. 48 px debajo, ENVIAR, igual que el resto de enlaces de acción de la web (24 px, subrayado animado y línea guía desde la izquierda). 16 px debajo, a 10 px y en gris secundario: "AL ENVIAR ACEPTAS LA POLÍTICA DE PRIVACIDAD", con enlace a /privacidad (sustituye a la casilla; a confirmar con los textos legales).
Tras enviar (redefinido el 02/10/2026): la página se queda vacía. Desaparecen la palabra CONTACTO, las dos frases y el formulario, y en el mismo sitio (columna a 434 px, desde 201 px) queda solo "Muchas gracias." en estilo Llamada (40 / 48 px) y, 16 px debajo, "Mensaje recibido." en el estilo de la segunda frase (Lectura, 16 / 24 px, gris secundario). 48 px debajo, VOLVER AL INICIO (24 px, con línea guía desde la izquierda, como ENVIAR; mismo texto que en la página no encontrada). La barra y el pie se mantienen; la zona ocupa al menos el alto de la pantalla para que el pie no suba. En inglés: "Thank you." / "Message received." / BACK TO HOME.
Envío (Fase 7, decidido el 02/10/2026): Web3Forms, plan gratuito (250 mensajes al mes), en lugar de Formspree. Al pulsar ENVIAR la página manda los datos a https://api.web3forms.com/submit sin salir de la web. La clave de acceso del formulario es pública por diseño y está en src/data/titular.ts. Mientras se envía, ENVIAR queda desactivado. Si el envío falla, el formulario no desaparece ni se borra lo escrito: bajo ENVIAR aparece, a 10 px, "NO SE HA PODIDO ENVIAR. INTÉNTALO DE NUEVO O ESCRIBE A" y el email. El correo llega con el asunto "Vittoria Chess — mensaje de <nombre>" y se responde directamente al visitante. Antispam: campo trampa invisible (botcheck); sin hCaptcha ni nada cargado de terceros. Sin JavaScript: el formulario se envía igualmente y el visitante ve la página de confirmación de Web3Forms; al publicar (Fase 10) se cambia por una página propia.
Móvil: la columna a todo el ancho, con los márgenes, empezando a 120 px.
Pendiente (Fase 10): página propia de confirmación para el envío sin JavaScript.

### Página no encontrada (404)

Con la barra y el pie de la web. Misma columna que Contacto (434 px, desde 201 px): PÁGINA NO ENCONTRADA (24 px), frase en estilo Llamada "Esta página no existe o ha cambiado de dirección." y el enlace VOLVER AL INICIO con línea guía. Fuera de Google. (Añadida en la revisión del 02/10/2026; hasta la Fase 8 es donde lleva el enlace EN.)

### Legales

Aviso legal (/aviso-legal), privacidad (/privacidad) y cookies (/cookies). Misma composición que Contacto: columna a 434 px, 572 px de ancho, desde 201 px (móvil: a todo el ancho desde 120 px). Título a 24 px; 40 px debajo el texto en estilo Legal (14 / 22 px); apartados con título en mayúsculas (14 px, peso 500) y 32 px entre apartados. Fecha de actualización al final, en gris secundario.
Titular (datos recibidos el 30/09/2026): Jorge Maestro Aguilera, NIF 70417960X, C/ Miguel López de Legazpi 3 Bis, portal 3, 1.º D, 28660 Boadilla del Monte (Madrid). Contacto: jorge@vittoriachess.com.
Privacidad: responsable, datos del formulario de contacto, finalidad (responder), base legal (consentimiento y medidas precontractuales), conservación, encargados (Web3Forms para el formulario, Cloudflare para el alojamiento, Google Workspace para el correo), transferencias internacionales, derechos y reclamación ante la AEPD.
Cookies: la web no usa cookies propias ni de terceros para analítica o publicidad; solo guarda en el navegador (sessionStorage) una marca técnica para no repetir la pantalla de carga en la misma visita. Por eso no hay banner de cookies.
Textos redactados como borrador: los puntos marcados [REVISAR] los confirma el titular (o un profesional) antes de publicar.

## Fotos y vídeos: nombres de archivo

Decidido el 30/09/2026. Cada foto tiene carpeta y nombre fijos en src/assets/; basta con copiarla con ese nombre para que aparezca en su sitio. Mientras falte, se ve la caja gris provisional. Formatos: .jpg, .png o .webp, con el original a buena resolución (al menos el doble de su tamaño en pantalla; unos 1600 px de lado largo). Astro la recorta a la proporción de su hueco y la optimiza.

| Dónde | Carpeta y nombre |
| --- | --- |
| Obras | src/assets/obras/<identificador de la ficha>/01 (foto principal), 02, 03… (más fotos para su página) |
| Las piezas | src/assets/piezas/peon, caballo, alfil, torre, reina, rey |
| Home, cuadro junto al manifiesto (cuadrada) | src/assets/home/piezas |
| El autor, acceso de la home | src/assets/autor/home |
| El autor, foto de la página | src/assets/autor/retrato |

Vídeos (no van al repositorio; hasta publicar se copian en public/video/, excluida de GitHub, y al publicar pasan a Cloudflare R2; el vertical y el póster son opcionales): video-principal-horizontal.mp4, video-principal-vertical.mp4, video-principal-poster.jpg; video-obras-horizontal.mp4, video-obras-vertical.mp4, video-obras-poster.jpg.

## Idiomas

ES por defecto, en la raíz; EN bajo /en/. Decidido el 02/10/2026:
- Se traduce todo: interfaz, manifiesto, texto de El autor, trayectoria, contacto, páginas de obra, legales y página no encontrada.
- Los textos en inglés los redacta Claude a mano (inglés correcto, depurado y legible para cualquiera) y los aprueba Jorge. Nunca traducción automática.
- Direcciones traducidas:

| Página | Español | Inglés |
| --- | --- | --- |
| Home | / | /en/ |
| Obras | /obras | /en/works |
| Página de obra | /obras/<obra> | /en/works/<obra> |
| Piezas | /piezas | /en/pieces |
| Autor | /autor | /en/author |
| Contacto | /contacto | /en/contact |
| Aviso legal | /aviso-legal | /en/legal-notice |
| Privacidad | /privacidad | /en/privacy |
| Cookies | /cookies | /en/cookies |

- El selector ES / EN de la barra, el menú móvil y el pie lleva a la misma página en el otro idioma; el idioma actual queda subrayado.
- Todos los textos de cada idioma están en un único archivo (src/i18n/es.ts y src/i18n/en.ts): se corrigen ahí y en ningún otro sitio.
- La firma del logotipo, BY JORGE MAESTRO, es igual en los dos idiomas. Los nombres de las piezas en inglés: PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING.

## Pendientes de contenido

Email del formulario · entradas de la trayectoria anteriores a 2025, si las hay · logotipo en SVG · fotos y vídeo definitivos.

## SEO y cabecera de las páginas

Decidido el 05/10/2026 (Fase 9). El detalle, las búsquedas elegidas y las direcciones antiguas de Wix están en docs/seo.md.
- Dirección definitiva: https://www.vittoriachess.com, con www (es la que Google tiene indexada desde Wix). Direcciones sin barra final (/obras), y cada página se genera como archivo suelto (obras.html).
- Cada página lleva: título (unos 60 caracteres) y descripción (unos 155) propios, en los dos idiomas (src/i18n/, seo); dirección canónica; la misma página en español, en inglés y por defecto (x-default: inglés, porque el mercado prioritario es el internacional); y las etiquetas para compartir en redes con una imagen de 1200 × 630 (la foto principal en las obras; la del rey en el resto, provisional).
- Obras: título "Nombre — Tipo | Vittoria Chess" y, como descripción, el inicio de la suya. Una obra sin nombre en su ficha no se indexa ni sale en el mapa del sitio.
- Datos estructurados (schema.org, src/data/estructurados.ts): la marca y la web en la home, el autor en Autor, y cada obra como obra de arte (VisualArtwork) con su autor, tipo, año, medidas y descripción, más su ruta de navegación. Solo se declaran datos reales, nunca un [PENDIENTE].
- Mapa del sitio (sitemap-index.xml, generado con @astrojs/sitemap) y robots.txt. Fuera de Google: /sistema y la página no encontrada.
