# Web Vittoria Chess — Definición

Especificación acordada el 29–30/09/2026 (revisada el 30/09: tipografía Suisse Int'l). Es la fuente de verdad del diseño. Si algo cambia, se actualiza aquí antes de tocar el código.

Referencia de tono y estructura: wakawaka.aristidebenoist.com/objects (solo referencia; no se copia código, fotos ni textos). Prototipo aprobado: `docs/referencia/vittoria-prototipo.html`.

## Sistema base

- Lienzo de diseño: 1440 px. Las composiciones (posiciones de imágenes, zigzag de Obras, sangrías y el manifiesto) escalan en vw: px / 1440 × 100.
- El margen, los tamaños de texto (salvo el manifiesto) y los grosores de línea van en px fijos, como en el prototipo aprobado (decidido el 30/09/2026).
- Margen único: 20 px.
- Paleta de marca (recibida el 30/09/2026): ONYX #17130F · GRAPHITE #48443F · ASH #989188 · BONE #F2EDE4 · PLASTER #F7F5F1 · BRONZE #B18F5A · BRONZE-D #765A32. Un solo mundo de color, sin modo oscuro. Todos los colores se definen como variables en src/styles/tokens.css para cambiarlos en un solo sitio. Los componentes usan siempre las variables de uso (fondo, tinta…), nunca los nombres de la paleta directamente.
- Asignación de usos: Fondo → PLASTER (propuesta; sustituye a #F5F5F5). Pendiente de decidir: tinta, negro de la carga, blanco del cursor y de la nav sobre vídeo, gris provisional de imágenes y color de selección.
- Colores provisionales anteriores, vigentes hasta decidir su sustituto: Tinta #2B2B2B · Negro #000000 · Blanco #FFFFFF · Provisional #D9D9D9 · Selección #E2E2E2.
- Curva de todas las animaciones: cubic-bezier(0.23, 1, 0.32, 1).
- Tipografías: Suisse Int'l (Swiss Typefaces) para todo el texto, pesos Regular (400) y Medium (500); Cinzel 500 solo para el logotipo provisional. Ambas alojadas en el proyecto (src/fonts/), nunca desde un servicio externo.
- Suisse Int'l es una fuente comercial: hace falta la licencia web y los archivos .woff2 (Regular y Medium). Hasta tenerlos, se usa Inter Tight como sustituta con las mismas medidas, y el cambio se hace en una sola línea de tokens.css.

| Estilo | Tamaño / interlineado a 1440 | Uso |
| --- | --- | --- |
| Nav central | 24 / 27,5 px, peso 500 | Enlaces de la barra, títulos de acceso, enlaces grandes |
| Nav lateral | 14 / 17,5 px, peso 500 | ES / EN, palabras bajo las piezas en la home |
| Pie de foto | 10 / 17 px, peso 500 | Pies de obra, línea legal, preguntas de entrevista |
| Manifiesto | 80 / 88 px (5,556 / 6,111 vw), peso 400, -0,02 em | Solo el manifiesto |
| Respuesta entrevista | 24 / 32 px, peso 500 | Entrevista |

Todo el texto de interfaz en mayúsculas escritas así, espaciado normal.

## Componentes

**Logotipo (provisional).** Texto "Vittoria Chess" en Cinzel 500, espaciado 0,12 em. 21 px en barra y pie (18 px en tablet y móvil), 44 px en la carga (30 px en móvil). Se sustituirá por el SVG del logotipo del estuche, manteniendo la altura. Firma debajo del logotipo, siempre con él (barra, pie y carga): BY JORGE MAESTRO en Inter Tight 500, 10 / 17 px (estilo pie de foto), mismo color; alineada a la izquierda en barra y pie, centrada en la carga.

**Enlace.** Subrayado de 1 px del color del texto (decidido el 30/09/2026: línea fina y de grosor constante en cualquier pantalla; antes 1,34 px). Al pasar el ratón entra desde la izquierda en 1000 ms; al salir, sale por la derecha en 1200 ms (nunca vuelve por la izquierda). Enlace activo: subrayado fijo, sin reacción.

**Barra de navegación.** Fija a 20 px de arriba, izquierda y derecha, sin fondo. Tres bloques en fila (space-between): logotipo · OBRAS, LAS PIEZAS, ENTREVISTA, CONTACTO (separados por ", ") · ES / EN. Se oculta al bajar (sube su altura más el margen, unos 64 px con la firma, en 0,6 s) y reaparece al subir. Variante clara (blanco) mientras está sobre el vídeo de la home; oscura en el resto.

**Icono de menú (menos de 810 px).** Dos líneas de 24 px y 1 px de grosor, separadas 7 px, en un área táctil de 40 × 40 px. Al abrir, las líneas se juntan en el centro y después giran ±45° hasta formar una cruz, en dos tiempos encadenados. Al cerrar, el movimiento inverso.

**Menú móvil.** Panel a pantalla completa, fondo PLASTER (el mismo de la web), entra con fundido de 0,4 s. Enlaces apilados a la izquierda a 40 / 48 px, empezando a 120 px de arriba; ES / EN abajo a 14 px. Bloquea el scroll mientras está abierto; tocar un enlace lo cierra. También se cierra con Escape y al pasar a más de 810 px. Mientras está abierto, la barra queda encima en tono oscuro y no se oculta. Sin JavaScript no hay icono ni panel: la barra móvil muestra los enlaces y ES / EN en una fila a 14 px bajo el logotipo.

**Pie.** Dos líneas sin fondo. Línea 1: igual que la barra. Línea 2 (10 / 17 px), 32 px debajo y a 20 px del borde inferior: ©AÑO VITTORIA CHESS (el año en curso, se actualiza solo) · EMAIL · INSTAGRAM · AVISO LEGAL · PRIVACIDAD · COOKIES. 120 px de aire antes del pie. En móvil, la línea 1 queda en el logotipo y la 2 se apila en tres filas: ©AÑO VITTORIA CHESS / EMAIL · INSTAGRAM / AVISO LEGAL · PRIVACIDAD · COOKIES. EMAIL abre el correo a jorge@vittoriachess.com; INSTAGRAM lleva a @vittoria_chess (instagram.com/vittoria_chess) en una pestaña nueva.

**Cursor.** Cuadrado blanco de 16 × 16 px, sin bordes, mix-blend-mode: difference (muestra el negativo de lo que tiene detrás). Sigue al ratón con suavizado (factor 0,25). Sobre enlaces y botones crece a 24 × 24 px en 0,4 s (decidido el 30/09/2026; antes, mismo tamaño siempre). Cursor de texto normal dentro de campos de formulario. Oculto en dispositivos táctiles, sin JavaScript y fuera de la ventana; con movimiento reducido sigue al ratón sin suavizado.

**Pantalla de carga.** Solo al entrar por la home. Fondo negro, logotipo en blanco centrado, visible 1,5 s y fundido de 0,8 s. Un clic la salta. Sin bloquear clics mientras se desvanece.

## Páginas

Direcciones (decididas el 30/09/2026): / · /obras · /las-piezas · /entrevista · /contacto · /aviso-legal · /privacidad · /cookies. En inglés, las mismas bajo /en/.

### Home (de arriba abajo)

1. Pantalla de carga.
2. Vídeo a pantalla completa (100 % × 100 vh, cover), sin texto, sin sonido, en bucle, reproducción automática. Planos abstractos, muy de cerca, casi misteriosos, de las piezas. Versión vertical aparte para móvil. Póster mientras carga.
3. Manifiesto, 10 vw bajo el vídeo, enlazado a Las piezas. Tercera línea sangrada 24,65 vw. Las líneas suben desde una máscara al entrar en pantalla (nunca quedan ocultas sin JavaScript):
   El cuadrado. El origen
   La geometría. La ley
   Seis piezas. Seis almas
4. Acceso a Las piezas: seis imágenes 3:4 en una fila (20 px entre ellas), palabra debajo a 14 px (REY, DAMA, ALFIL, CABALLO, TORRE, PEÓN), y VER LAS PIEZAS. Móvil: 2 columnas.
5. Acceso a Obras: título OBRAS enlazado; las tres primeras obras en zigzag (medidas de la tabla de Obras, relativas al bloque) y VER LAS 8 OBRAS alineado a 434 px.
6. Acceso a Entrevista: título ENTREVISTA; foto 512 × 683 a 96 px del borde izquierdo; a la derecha una pregunta (10 px) y un fragmento (24 / 32 px, máx. 480 px); LEER LA ENTREVISTA.
7. Llamada a contacto alineada a 434 px (texto provisional: CONSULTAS DE COLECCIONISTAS Y GALERÍAS / CONTACTO; pendiente de redefinir).
8. Pie.

240 px de aire entre secciones (160 px en móvil).

### Obras

Catálogo de 8 obras en zigzag, sin enlaces (no hay páginas de detalle por ahora). OBRAS subrayado en la barra. Pie de cada obra a 4 px de la imagen, 10 / 17 px, tres columnas: nombre (176 px) · tipo (140 px) · medidas en cm.

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

Seis figuras del rey al peón, solo izquierda y derecha, imágenes 600 × 800 (3:4) con el mismo fondo y encuadre. Pie: una palabra a 24 / 27,5 px, 12 px bajo la imagen. Sin enlaces. Izquierda a 96 px, derecha a 744 px, 560 px de paso vertical. Móvil: una columna, 80 px entre piezas.
Pendiente: decidir si el manifiesto también abre esta página o queda solo en la home.

### Entrevista

Seis bloques alternos (foto 512 × 683 a un lado, pregunta y respuesta al otro, alineadas arriba), 200 px entre bloques, columnas a 96 px de cada borde. Móvil: foto arriba, texto debajo.
Pendiente: texto, número de preguntas, fotos.

### Contacto

Solo un formulario, a 434 px de la izquierda, 572 px de ancho, 201 px de arriba. Campos sin caja, línea inferior de 1 px, 40 px entre campos; etiqueta 10 px, texto escrito 24 px.
NOMBRE* · EMAIL* · PAÍS · SOY* (COLECCIONISTA, GALERÍA, PRENSA, OTRO) · MENSAJE* · casilla ACEPTO LA POLÍTICA DE PRIVACIDAD* (enlace a /privacidad).
ENVIAR a 24 px con subrayado. Tras enviar: MENSAJE RECIBIDO. Envío a Formspree.
Pendiente: opciones de SOY y email de recepción.

### Legales

Aviso legal, privacidad (debe nombrar a Formspree como encargado del tratamiento) y cookies.

## Idiomas

ES por defecto; EN en /en/... con textos traducidos a mano.

## Pendientes de contenido

Llamada a contacto · entrevista y fragmento de la home · email del formulario · logotipo en SVG · fotos y vídeo definitivos.
