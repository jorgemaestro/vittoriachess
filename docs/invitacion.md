# Invitación privada de la inauguración

Página creada el 09/11/2026 a partir del documento «Instrucciones maestras para la página
privada de la inauguración» (PDF de Jorge). Está dentro de esta misma web, con su identidad,
y no se enlaza desde ninguna página pública.

## Dirección y privacidad

- Dirección: `/invitacion/<clave>` (español) y `/en/invitation/<clave>` (inglés), con selector
  ES / EN arriba a la derecha.
- La clave es una cadena aleatoria de 24 caracteres. **No está en el repositorio**: se guarda en
  el archivo `.env` (variable `INVITACION_CLAVE`, excluido de GitHub) y, al publicar, habrá que
  ponerla en los ajustes del alojamiento. Sin clave, la página no se genera. Para invalidar el
  enlace, se cambia la clave y se vuelve a publicar.
- `noindex, nofollow`, fuera del mapa del sitio, sin datos estructurados ni dirección canónica,
  y `referrer: no-referrer` (la dirección secreta no se envía a los sitios que se abran desde
  ella).
- Sin menú ni pie de la web pública: marca, selector de idioma, «IR A LA WEB» y la invitación.
- «IR A LA WEB» lleva a la home de su idioma **reemplazando el historial**: el botón Atrás no
  vuelve a la invitación. Desde la home no hay ningún enlace de vuelta.
- Límite honesto: es una dirección secreta, no un control de acceso. Quien reciba el enlace
  puede reenviarlo. Para enlaces individuales revocables haría falta una protección en el
  alojamiento (Cloudflare Access o una función que valide cada clave).

## Contenido (en este orden)

1. Portada: imagen (src/assets/invitacion/portada, 16:9; caja gris mientras no esté), «Una
   invitación personal», «El comienzo de Vittoria Chess», fechas, lugar y DESCUBRIR LA
   INVITACIÓN.
2. Carta: texto íntegro de Jorge, con firma. El énfasis va en peso medio (la web no usa negrita).
3. El objetivo: 8.000 €, lo recibido y verificado, porcentaje, pendiente y fecha de
   actualización (src/data/invitacion.ts). Nunca promesas.
4. Cómo funciona: aportar, recuperar el capital, compartir el excedente 20/80; riesgo y
   definición de «ingresos netos disponibles».
5–7. Ejemplo de 1.000 € con dos desplegables: la tabla de rentabilidad y el escenario
   extraordinario (80.000–100.000 € facturados).
8. Preguntas frecuentes (desplegables).
9. Transparencia y calendario.
10. Cómo participar: **inactivo** («PENDIENTE DE ACTIVAR»), sin titular ni IBAN, hasta revisar
    el acuerdo. Solo RESOLVER UNA DUDA (correo).
11. Un gesto de gratitud: las seis piezas en bronce en 2027 (src/assets/invitacion/regalo, 4:5;
    caja gris mientras no esté).

## Segunda capa (addendum 02, aplicado el 09/11/2026)

Mejoras incrementales sin tocar la carta, las cifras, las fórmulas, la privacidad ni el regalo:
- **Por qué este momento** (tras la carta): «El comienzo de una nueva etapa.», con la foto de la
  primera obra real que tenga foto y nombre.
- **Una aportación con destino concreto** (desplegable bajo el objetivo): las cinco categorías
  de gasto, sin importes: «Desglose disponible cuando esté cerrado el presupuesto.»
- **La ventana comercial** (tras «Cómo funciona»): dos hitos, 10–13 de diciembre · Exposición /
  Hasta el 31 de diciembre · Ventas y encargos elegibles, sin cronómetro, y la aclaración de que
  lo pendiente de cobro se liquida al cobrarse.
- **Obras concebidas para perdurar**: hasta tres obras reales del catálogo (las que tienen foto
  y nombre en su ficha, en el idioma de la página), con su nombre exacto. Sin precios.
- **Formar parte de este comienzo** (antes de «Cómo participar»): solo el texto; los beneficios
  relacionales no se enumeran hasta que Jorge los apruebe.
- **Confianza** en las preguntas: quién gestiona (Jorge, como autónomo; sin sociedad ni fondo),
  ventas firmadas no cobradas, qué se comunica, y que no hay deducciones fiscales («mecenas» no
  es una calificación fiscal).

## Ajustes del 09/11/2026 (tras la primera revisión de Jorge)

- Textos sintetizados en los dos idiomas (sin tocar la carta ni el regalo).
- Desplegables: a la derecha dicen VER ↓ / CERRAR ↑ (SEE / CLOSE), el título se subraya al pasar
  el ratón y el cursor crece sobre ellos.
- Portada: inauguración el jueves 10 a las 20:00; prensa, a las 19:00.
- «Por qué este momento»: nota de que, por privacidad, aún no se nombran invitados ni medios,
  pero se prevé una exposición de alta consideración.
- Precios de la exposición (primer borrador de Jorge, IVA incluido) en una tabla bajo las obras
  (src/data/invitacion.ts, `precios`). «Colección de 64»: cada pieza es única y representa un
  escaque; en la galería hay una de cada y la colección admite encargos. Pendiente: edición de
  Solid surface y precios definitivos.

## Cambios de Jorge (09/11/2026, tercera revisión)

- Sin «Descubrir la invitación»: en la portada, PARTICIPAR (lleva a «Cómo participar») y la
  línea del regalo.
- Carta acortada por decisión de Jorge (seis párrafos), con la idea de que las primeras ventas
  devuelven el mecenazgo y que se prevé que una sola venta cubra el coste.
- Recaudado y verificado: 1.800 € (a 09/11/2026).
- En lugar de la tabla de precios: los nombres de las obras expuestas y la facturación posible
  total, calculada en src/data/invitacion.ts (Vittoria Eterna son dos obras de 7.000 €; Six cuenta
  tres unidades).
- Regalo de las seis piezas en bronce: solo para aportaciones superiores a 500 €; sube justo
  después de la carta y se anuncia en la portada.
- «¿Puedo perder dinero?»: si en 2026 no se cierra ninguna venta, la devolución se haría con las
  ventas previstas para 2027 (siempre que se produzcan). **Amplía lo que dice el modelo original
  (ventas elegibles hasta el 31/12/2026): debe figurar en el acuerdo.**
- Participación ACTIVADA por decisión de Jorge: tres pasos (transferir con el concepto MECENAS a
  la cuenta mostrada, enviar el justificante por correo, recibir la documentación en el mismo
  hilo). La revisión jurídica y fiscal sigue recomendada.

## Cambios de Jorge (09/11/2026, cuarta revisión)

- Título «Mecenas», subtítulo «Nace Vittoria Chess, por Jorge Maestro». La galería no se nombra:
  «una galería muy especial en pleno Malasaña, entre obras del siglo XVII».
- Portada: QUIERO PARTICIPAR (lleva a los pasos) y el regalo en bronce para aportaciones de más
  de 500 €. Foto de portada (src/assets/invitacion/portada.jpg, 1277 × 732), mostrada entera.
- Carta reescrita por Jorge (objetivo «mínimo» de 8.000 €), terminada en «Muchas gracias».
- Oculto «El comienzo de una nueva etapa»; su nota sobre invitados y medios pasa a las obras.
- RESTANTE en lugar de PENDIENTE; «En qué se emplean los 8.000 €» pasa a las preguntas.
- Paso 2 en negrita: una sola venta cubriría la inauguración; lo no usado se devuelve la semana
  siguiente al evento.
- Paso 3, «Se reparte el margen»: 20 % del beneficio de Vittoria Chess hasta fin de 2026 (decidido
  por Jorge: beneficio, no facturación), coherente con las tablas y la función de cálculo.
- Preguntas: uso del dinero con informe la semana siguiente; devolución sujeta a alguna venta;
  80 % «para el proyecto»; una gestoría llevará contratos y modelos; sin la pregunta de deducción.
- Calendario: recaudación hasta el 1 de diciembre.
- Objetivo mínimo (no máximo): lo que pase de 8.000 € se usará, si hace falta, en más medios o en
  invitar a algún artista o creador de contenido. Al alcanzarlo, las aportaciones siguen abiertas.
  Debe figurar en el acuerdo.

## Revisión con opiniones de varias personas (10/11/2026)

- Carta más corta y directa, sin «como seguramente sepas» ni «lejos de pedirte ayuda»; la intro,
  a 40 px. Subtítulo «Vittoria, por Jorge Maestro». La palabra «mecenas» desaparece del texto.
- Concepto de la transferencia y asunto del correo: VITTORIA 2026 (antes MECENAS).
- Pasos reescritos: aportas lo que quieras (objetivo mínimo 8.000 €); «con dos o tres ventas se
  devuelven todas las aportaciones» (sustituye a «con una sola venta», que no cuadraba con los
  costes); el 20 % del beneficio se reparte en proporción a lo aportado, con ejemplo del 10 %.
- Regalo: aparte de la devolución y del beneficio.
- «Qué puedes recibir»: tabla visible por obras vendidas (1, 2, 3, 5 ajedreces y todo lo
  expuesto), con costes de producción de Jorge (2.500 € por ajedrez, 600 € por Six) y sin
  comisión de galería. Sustituye a las tablas de «neto disponible» y al escenario extraordinario.
- Títulos de sección a 40 px en la columna; QUIERO PARTICIPAR en una caja de 1 px que se invierte
  al pasar el ratón (portada y bajo la tabla).

## Revisión del 10/11/2026 (segunda tanda)

- Portada: gancho del regalo sin la cifra de 500 € (la condición sigue en la sección del regalo);
  botón INVERTIR.
- Carta: debajo de «La cuenta atrás ha comenzado», la cuenta atrás a 64 px hasta las 20:00 del
  jueves 10 (como en Obras).
- Save the date: jueves 10 a las 20:00, con AÑADIR A GOOGLE CALENDAR (enlace de plantilla de
  Google, sin cuentas ni servicios añadidos) y OTROS CALENDARIOS (archivo .ics para Apple y
  Outlook). Lugar: «Malasaña, Madrid», sin la galería.
- Regalo: empieza por «Recibirás un regalo muy especial».
- Pasos: «Inviertes», «Recuperas tu inversión» (lo no gastado se devuelve la semana siguiente, en
  proporción; con dos o tres ventas o encargos hasta el 31/12 se recupera la inversión),
  «Compartimos el beneficio». «Participantes» pasa a «inversores». Fuera el párrafo de riesgo y
  la letra pequeña de esta sección (el riesgo sigue en «¿Puedo perder dinero?»).
- Ventana: la cuenta final se hace el 31 de diciembre con todo lo cerrado hasta fin de año.
- Obras: 85.000 € estimados; margen medio del 60 al 80 % por obra.
- Tabla escalonada por facturación (15.000, 25.000, 50.000, 85.000 y 120.000 € con encargos), con
  el margen prudente del 60 % sobre el precio sin IVA.
- Calendario: «Ronda de financiación», «Informe de ingresos y gastos»; termina en enero de 2027.

## Ajuste del 10/11/2026

- Paso 2: lo no utilizado se devuelve proporcionalmente; «se estima que con dos o tres ventas
  cerradas se recupera la inversión». Paso 3: «el 20 % del margen directo de las ventas hasta el
  31 de diciembre se reparte entre los inversores» (margen directo = precio sin IVA menos coste de
  producción; es lo que calculan las tablas).

## Ajuste del 10/11/2026 (2)

- Objetivo estimado: 10.000 € (antes 8.000 €). La tabla de rentabilidad usa ahora el objetivo.
- «¿En qué se usará mi dinero?» incluye «el material necesario» y «producción» (Jorge podrá
  dedicar parte a producir obras): **debe figurar así en el acuerdo**.
- «¿Cuánto podría ganar?» en porcentajes, sacados de la tabla.

## Ajustes del 11/11/2026

- Arriba, en la cabecera y en la portada: «Invitación privada · Información confidencial».
- Portada: jueves 10, inauguración privada a las 20:00; viernes 11 a domingo 13, entrada abierta.
  Gancho del regalo: «Por tu confianza: seis piezas…».
- Carta: «el comienzo de un camino que, por fin, puedo compartir»; «me hace especial ilusión contar
  contigo. Y la cuenta atrás… ha comenzado».
- Regalo: «la confianza que has depositado en este proyecto». Devoluciones en futuro.
- Compartir (junto al save the date): WhatsApp, menú del móvil (incluye Instagram, que no permite
  compartir desde la web) y copiar enlace. Siempre comparten la página pública de Obras, nunca la
  invitación.
- Obras: añadida «Blanco y negro» (calculada como un vertical medio de 10.000 €). Precios nuevos:
  Beige vertical 12.000, Espejo 15.000, Mil y una noches 12.000, Microcemento blanco 13.000.
  Valor estimado de lo expuesto: 110.000 €.
- Tabla de rentabilidad: neto = facturación sin IVA menos coste de producción real (2.500 € por
  obra), con escalones de 2, 3 y 6 obras, toda la exposición y el mejor de los casos con encargos.

## Cálculos

Una sola función, `src/data/participacion.ts`, con las fórmulas del documento (q, D, K, E, B, T,
P, ROI). Las tablas de la página salen de ella. `node scripts/comprobar-participacion.ts`
comprueba las cifras del documento, el capital no utilizado, la financiación parcial, el
redondeo a céntimos y los datos imposibles.

## Datos de la transferencia (09/11/2026)

Jorge ha dado el titular, el IBAN (comprobado: el dígito de control es correcto) y el concepto
MECENAS. El titular y el IBAN están en `.env` (`INVITACION_TITULAR`, `INVITACION_IBAN`), fuera de
GitHub, y al publicar habrá que ponerlos también en los ajustes del alojamiento, como la clave.
El paso final es enviar el justificante por correo a jorge@vittoriachess.com; Jorge responde en
el mismo hilo con el resto de la información. Todo se muestra solo con `aportacionesAbiertas: true`.

## Cómo actualizar

- Importe recibido y fecha: `src/data/invitacion.ts` (`recibido`, `actualizado`).
- Abrir las aportaciones (solo tras la revisión jurídica y fiscal): `aportacionesAbiertas: true`
  con `titular` e `iban` reales. Aparecen entonces el titular, el IBAN con COPIAR IBAN y el
  correo de confirmación (asunto MECENAS, con nombre, importe y referencia editables).
- Textos: `src/i18n/es.ts` y `en.ts`, apartado `invitacion`.

## Pendiente antes de enviar el enlace

- Revisión jurídica y fiscal del modelo 20/80 y del obsequio (el propio documento lo exige).
- Acuerdo definitivo, presupuesto definitivo, régimen fiscal, fecha límite de liquidaciones.
- Fotografía de la portada y de las seis piezas en bronce.
- Costes y logística del regalo de 2027.
- Publicar la web (Fase 10) y poner la clave en los ajustes del alojamiento.
- Confirmar si se nombra la galería (hoy: «calle Divino Pastor, Malasaña») y si hay derechos
  para mostrar el espacio.
- Presupuesto real por categorías de los 8.000 € (para el desglose).
- Catálogo verificado y precios aprobados de las obras expuestas (hoy no se muestran precios).
- Qué beneficios relacionales se ofrecen de verdad (invitación a la inauguración, conversación
  con el artista, noticias anticipadas…); hoy no se enumeran.
- Hitos de trayectoria, colaboraciones y prensa publicables, con autorización.
- Inglés de las fichas de las obras 02 a 04: hasta tenerlo, en la invitación inglesa solo sale D4.
