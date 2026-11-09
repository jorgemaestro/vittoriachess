# Estilo Vittoria — guía para aplicarlo a otro proyecto

Este documento describe el estilo visual de la web de Vittoria Chess para trasladarlo a la
aplicación interna de gestión (CRM, COGS / inventario, estrategia y dashboard). Está escrito
para que lo lea una sesión de Claude que no conoce la web: es autosuficiente.

**Cómo usarlo.** Antes de cambiar nada en la aplicación: (1) lee su código y haz inventario
de sus componentes; (2) propón a Jorge un plan y una sola pantalla de ejemplo; (3) aplica el
resto cuando la apruebe. Adapta los ejemplos de CSS a la tecnología que use la aplicación
(variables CSS, Tailwind, tema de una librería de componentes…): lo que hay que respetar son
los valores y las reglas, no la sintaxis. No cambies el funcionamiento de la aplicación, solo
su aspecto.

Origen de los valores: `C:\Users\jorge\Desktop\vittoria-web\src\styles\tokens.css`.
Las partes marcadas **[PROPUESTA]** no existen en la web (una web pública no tiene tablas ni
estados de error): son criterio para la aplicación y Jorge debe aprobarlas.

---

## 1. El carácter, en pocas líneas

Sobrio, editorial y arquitectónico. La página es papel gris muy claro con tinta casi negra.
La jerarquía se consigue con **tamaño, posición y aire**, nunca con negrita, color, cajas o
sombras. Las líneas de 1 px hacen el trabajo que en otras interfaces hacen los fondos y los
bordes redondeados. Poco color, mucha tipografía, nada decorativo.

Si dudas ante una decisión, elige la opción que quite algo.

## 2. Valores (tokens)

```css
:root {
  /* Color: paleta neutra y fría. Sin cremas ni ocres. */
  --color-fondo: #F5F5F5;        /* fondo de toda la aplicación */
  --color-tinta: #1C1C1C;        /* texto y líneas principales */
  --color-secundario: #707070;   /* etiquetas, textos pequeños, datos de apoyo */
  --color-linea: #DADADA;        /* líneas divisorias suaves y cajas vacías */
  --color-seleccion: #E2E2E2;    /* texto seleccionado, fila activa */
  --color-claro: #FFFFFF;        /* solo sobre fondos oscuros */

  /* Medidas */
  --margen: 20px;                /* margen lateral de la página */
  --linea: 1px;                  /* grosor de todas las líneas */
  --linea-foco: 1.6px;           /* línea de un campo mientras se escribe en él */

  /* Movimiento: una sola curva para todo */
  --ease: cubic-bezier(0.23, 1, 0.32, 1);

  /* Tipografía */
  --fuente: "Inter Tight", "Helvetica Neue", Arial, sans-serif;
  --fuente-logo: "Cinzel", Georgia, serif;   /* solo el logotipo VITTORIA CHESS */
  --peso-regular: 400;
  --peso-medio: 500;             /* no existe la negrita */
}
```

Tono oscuro (la web lo tiene definido como alternativa; úsalo solo si Jorge lo pide):
fondo `#141414`, tinta `#F5F5F5`, secundario `#8C8C8C`, línea `#3A3A3A`.

**Escala tipográfica** (tamaño / interlineado). No inventes tamaños intermedios.

| Nombre | Tamaño | Uso en la web | Uso en la aplicación |
| --- | --- | --- | --- |
| Etiqueta | 10 / 17 px | Pies de foto, etiquetas de campos | Cabeceras de tabla, nombres de campo, etiquetas, unidades |
| Menor | 14 / 17,5 px | Selector de idioma, textos legales (14 / 22) | Celdas de tabla, texto denso, datos secundarios de una tarjeta |
| Lectura | 16 / 24 px | Texto corrido | Texto normal, descripciones |
| Título | 24 / 32 px | Enlaces de acción, nombres | Título de tarjeta o de sección, valor escrito en un campo, acciones |
| Llamada | 40 / 48 px | Frases de cabecera | Título de página, cifra principal de una tarjeta |
| Destacado | 64 / 72 px | Frases destacadas | Cifras grandes del dashboard |
| Manifiesto | 80 / 88 px | Manifiesto de la home | Una única cifra protagonista por pantalla, como mucho |

Los tamaños de 40 px en adelante llevan `letter-spacing: -0.02em`.

**Fuentes.** Inter Tight (pesos 400 y 500) y Cinzel 500, ambas libres (SIL Open Font
License). Los archivos `.woff2` y sus licencias están en
`C:\Users\jorge\Desktop\vittoria-web\src\fonts\`: cópialos al proyecto y cárgalos desde él.
No se carga nada desde Google Fonts ni desde otros servicios externos.

## 3. Reglas

1. **Sin negrita.** Solo pesos 400 y 500. El 500 es el peso normal de la interfaz; el 400,
   el de los textos grandes (40 px o más) y la lectura.
2. **Texto de interfaz en MAYÚSCULAS** (menús, botones, etiquetas, cabeceras de tabla),
   escritas así en el propio texto, no con `text-transform`. El contenido (nombres, notas,
   descripciones) va en minúscula normal.
3. **Líneas, no cajas.** Nada de sombras, degradados, fondos de color ni esquinas
   redondeadas (`border-radius: 0` en todo). Para separar o agrupar: una línea de 1 px o
   espacio en blanco.
4. **Las líneas se dibujan como borde** (`border-top: 1px solid`), no como un elemento con
   `height: 1px`: así miden lo mismo en cualquier pantalla y escala de Windows.
5. **Color solo de la paleta.** Nunca un valor de color suelto en un componente.
6. **Aire.** Más espacio del que parece necesario. Espaciados habituales: 4, 12, 16, 24,
   40, 48, 80 px. Entre bloques grandes de una página, 80 px o más.
7. **Alineación a la izquierda** sobre una retícula; nada centrado por defecto.
8. **Una sola curva de animación**, `var(--ease)`. Sin rebotes ni efectos llamativos.
9. **Sin iconos decorativos.** Si una palabra lo explica, se usa la palabra. Los iconos que
   hagan falta, de trazo fino (1 px) y sin relleno.
10. **Datos que faltan**: marcador visible `[PENDIENTE: …]`, nunca un dato inventado.
11. **Respetar `prefers-reduced-motion`**: si el usuario lo pide, sin animaciones.
12. **Foco visible** siempre para quien usa teclado.

## 4. Patrones ya resueltos en la web

### Enlace o acción con subrayado animado

Es el único tipo de "botón" de la web: texto en mayúsculas, sin caja. Al pasar el ratón, una
línea de 1 px entra por la izquierda; al salir, se va por la derecha.

```html
<a class="enlace" href="#">VER OBRAS<span class="subrayado" aria-hidden="true"></span></a>
```

```css
.enlace { position: relative; display: inline-block; color: inherit; text-decoration: none; }
button.enlace { margin: 0; padding: 0; border: 0; background: none; font: inherit; }

.subrayado {
  position: absolute; left: 0; right: 0; bottom: 0;
  height: calc(var(--linea) + 2px); overflow: hidden; pointer-events: none;
}
.subrayado::before, .subrayado::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  border-top: var(--linea) solid currentColor;
}
.subrayado::before { transform: translateX(-101%); }
.subrayado::after  { transform: translateX(101%); transition: transform 1200ms var(--ease); }

.enlace:hover .subrayado::before,
.enlace:focus-visible .subrayado::before { transform: translateX(0); transition: transform 1000ms var(--ease); }
.enlace:hover .subrayado::after,
.enlace:focus-visible .subrayado::after  { transform: translateX(0); opacity: 0; transition: none; }

/* Opción activa (página o pestaña actual): subrayado fijo */
.enlace[aria-current] .subrayado::before { transform: translateX(0); transition: none; }
.enlace[aria-current] .subrayado::after  { display: none; }
```

En la aplicación, usa las duraciones largas (1000 / 1200 ms) solo en la navegación
principal. En acciones que se repiten muchas veces al día, redúcelas a 300 / 400 ms.

### Campo de formulario

Sin caja: etiqueta pequeña encima y una línea inferior de 1 px que engrosa a 1,6 px mientras
se escribe. El relleno inferior se reduce lo mismo para que el texto no se mueva.

```css
label { display: block; color: var(--color-secundario); font-size: 10px; line-height: 17px; }
.campo:focus-within label { color: var(--color-tinta); }

input, textarea, select {
  display: block; width: 100%; box-sizing: border-box;
  margin: 4px 0 0; padding: 0 0 6px;
  border: 0; border-bottom: var(--linea) solid currentColor; border-radius: 0;
  background: none; color: inherit; font: inherit; font-size: 24px; line-height: 32px; outline: none;
}
input:focus, textarea:focus, select:focus {
  border-bottom-width: var(--linea-foco);
  padding-bottom: calc(6px - (var(--linea-foco) - var(--linea)));
}
```

Etiquetas en mayúsculas; los campos obligatorios se marcan con un asterisco (`NOMBRE*`).
Los avisos de error van debajo del campo, a 10 px, en mayúsculas y en el color de tinta
("FALTA EL NOMBRE"), sin rojo. 40 px entre campos. En formularios densos de la aplicación,
el texto del campo puede bajar a 16 / 24 px y la separación a 24 px.

### Navegación

Barra superior sin fondo, fija a 20 px de los bordes: logotipo a la izquierda (Cinzel, con
"BY JORGE MAESTRO" debajo a 10 px), secciones en el centro separadas por " · "
(`OBRAS · PIEZAS · AUTOR · CONTACTO`, 24 px) y opciones secundarias a la derecha (14 px).
La sección actual lleva el subrayado fijo.

### Pie de dato

Debajo de una imagen o junto a un elemento: una columna de líneas cortas a 10 / 17 px en gris
secundario (nombre / tipo / medidas). Es el modelo para cualquier "ficha" pequeña.

### Ficha de datos (etiqueta y valor)

Etiqueta a 10 px en gris y, debajo, el valor a 16 / 24 px en tinta. 16 px entre un dato y el
siguiente. Sin tablas ni líneas.

## 5. Cómo llevarlo a la aplicación [PROPUESTA]

La aplicación tiene cuatro partes: CRM (tarjetas de leads, filtros, etiquetas, fases), COGS /
inventario (tablas, tarjetas, gráficos circulares), estrategia (tarjetas con objetivos y
porcentajes) y dashboard (cifras grandes y gráficos). Criterio para cada tipo de elemento:

### Tarjetas (leads, objetivos, resúmenes)

- Sin fondo, sin sombra, sin esquinas redondeadas. La tarjeta es un bloque delimitado por una
  línea superior de 1 px en tinta (`border-top`) y aire; si hace falta cerrarla, línea
  completa de 1 px en `--color-linea`.
- Dentro: etiqueta a 10 px en gris (FASE, ORIGEN…), título a 24 / 32 px, datos de apoyo a
  14 px. Relleno interior 16 px; 24 px entre tarjetas.
- Al pasar el ratón: ningún cambio de fondo. Como mucho, la línea superior pasa de
  `--color-linea` a tinta en 300 ms.
- Tarjeta seleccionada o arrastrándose: fondo `--color-seleccion`.

### Fases del CRM (columnas)

- Cabecera de columna: nombre de la fase en mayúsculas a 14 px y, al lado, el número de
  leads en gris. Debajo, una línea de 1 px en tinta de todo el ancho de la columna.
- Las columnas se separan con espacio (24 a 40 px), no con fondos alternos.

### Etiquetas y filtros

- Etiqueta: texto en mayúsculas a 10 px, sin píldora de color. Varias etiquetas seguidas se
  separan con " · ". Si necesitan contorno, borde de 1 px en tinta, sin redondear, con
  relleno de 2 × 6 px.
- Filtro: palabra en mayúsculas; el activo lleva el subrayado fijo, igual que la sección
  actual de la navegación. Nada de botones rellenos.
- Si la aplicación distingue etiquetas por color, sustituye el color por el texto. Si el
  color es imprescindible para trabajar, un cuadrado de 6 × 6 px delante del texto.

### Tablas (COGS, inventario)

- Cabeceras a 10 px, mayúsculas, gris secundario. Celdas a 14 px en tinta.
- Solo líneas horizontales: 1 px en tinta bajo la cabecera y 1 px en `--color-linea` entre
  filas. Sin líneas verticales, sin filas alternas de color, sin borde exterior.
- Números alineados a la derecha y con cifras de ancho fijo:
  `font-variant-numeric: tabular-nums`.
- Altura de fila generosa (relleno vertical de 12 px). Fila bajo el ratón: fondo
  `--color-seleccion`, sin animación.
- Totales: misma tipografía, con una línea de 1 px en tinta por encima. Sin negrita.

### Cifras grandes (dashboard, estrategia)

- La cifra a 40, 64 u 80 px, peso 400, `letter-spacing: -0.02em`, `tabular-nums`. Encima,
  su etiqueta a 10 px en gris. La unidad (€, %, uds.) al mismo tamaño que la cifra o como
  etiqueta pequeña, pero siempre igual en toda la aplicación.
- Una sola cifra protagonista por pantalla a 80 px; el resto, a 40 px.
- Variación respecto al periodo anterior: a 14 px en gris, con signo (+12 % / −3 %). Sin
  flechas de colores.

### Porcentajes y progreso (objetivos)

- Barra de progreso: una línea de 1 px en `--color-linea` de todo el ancho y, encima, una
  línea de 1 px en tinta hasta el porcentaje. Sin barras gruesas ni redondeadas. Para más
  presencia, 2 px como máximo.
- El porcentaje, como cifra (24 o 40 px) junto al nombre del objetivo.

### Gráficos

- Paleta de grises: `#1C1C1C`, `#707070`, `#A8A8A8`, `#DADADA`. Si una serie debe
  destacar, es la de tinta y las demás van en gris.
- Si hace falta un único color de acento, el bronce de la marca: `#B18F5A`. Úsalo en un solo
  elemento por gráfico y no lo extiendas al resto de la interfaz. **Consultar a Jorge antes
  de introducirlo.**
- Gráficos circulares: anillo fino (grosor del 8 al 12 % del diámetro), sin separación ni
  sombras entre porciones, con la cifra principal en el centro. Las leyendas, como lista de
  texto a 10 px al lado, no dentro del gráfico.
- Ejes y rejilla: líneas de 1 px en `--color-linea`; textos de los ejes a 10 px en gris.
  Líneas de datos de 1 px (1,6 px la destacada). Sin áreas rellenas ni degradados.
- Sin animaciones de entrada llamativas; como mucho, un trazado de 600 ms con `var(--ease)`.

### Estados (correcto, aviso, error)

La web no usa colores de estado y resuelve los avisos con texto. En la aplicación:

- Primera opción: el estado se dice con palabras, en mayúsculas a 10 px (PAGADO, PENDIENTE,
  SIN STOCK).
- Si se necesita color para leer una tabla de un vistazo, tonos apagados y solo en el texto
  o en un cuadrado de 6 px, nunca como fondo: correcto `#4F6B52`, aviso `#8A6A2F`,
  error `#8C3B32`. **Consultar a Jorge antes de introducirlos.**

### Botones de acción

- Acción normal: el enlace con subrayado animado (GUARDAR, AÑADIR LEAD, EXPORTAR).
- Acción principal de una pantalla, si necesita más peso: texto en mayúsculas dentro de un
  borde de 1 px en tinta, sin redondear, relleno de 12 × 20 px; al pasar el ratón se invierte
  (fondo tinta, texto fondo) en 300 ms.
- Acción destructiva (BORRAR): igual que una normal, con confirmación en texto. Sin rojo.

### Ventanas emergentes y menús

- Fondo `--color-fondo`, borde de 1 px en tinta, sin sombra ni redondeo. El velo de detrás,
  el propio fondo al 80 % de opacidad.
- Menús desplegables: lista de texto a 14 px, la opción bajo el ratón con fondo
  `--color-seleccion`.

### Densidad

Una herramienta de trabajo necesita más información por pantalla que una web de marca. El
aire se mantiene entre bloques (40 a 80 px), pero dentro de tablas y tarjetas se puede
trabajar con 14 px de texto y espaciados de 12 a 16 px. La escala y las reglas no cambian.

### Móvil

Corte principal a 810 px: por debajo, una columna, márgenes de 20 px, y la navegación pasa a
un icono de dos rayas finas (1 px) que abre un menú a pantalla completa con las secciones a
40 / 48 px. Las tablas anchas se desplazan en horizontal dentro de su bloque; la página no.

## 6. Lo que NO se traslada

Son recursos de la web pública que en una herramienta de uso diario estorban:

- El cursor propio (cuadrado en negativo). En la aplicación, el cursor normal del sistema.
- La pantalla de carga con el logotipo.
- Las animaciones de entrada del texto (líneas que suben desde una máscara) y las líneas guía
  animadas que cruzan la pantalla hacia un enlace.
- La barra de navegación que se esconde al bajar y se pinta en negativo.
- Los tamaños en `vw` de los textos gigantes: en la aplicación, tamaños fijos en px.
- Las fotos en blanco y negro que recuperan el color al pasar el ratón.

## 7. Comprobación antes de dar una pantalla por buena

- [ ] No hay ninguna negrita, sombra, degradado ni esquina redondeada.
- [ ] Todos los colores salen de la paleta.
- [ ] Todos los tamaños de texto son de la escala.
- [ ] El texto de interfaz está en mayúsculas; el contenido, en minúscula.
- [ ] Las separaciones son líneas de 1 px o espacio, no fondos.
- [ ] Los números de tablas y cifras usan `tabular-nums` y se alinean a la derecha.
- [ ] Se ve bien a 1440 px y por debajo de 810 px, sin desplazamiento horizontal de página.
- [ ] Se puede usar con teclado y el foco se ve.
- [ ] La aplicación hace exactamente lo mismo que antes.
