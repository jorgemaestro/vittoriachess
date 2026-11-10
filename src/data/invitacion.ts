// Invitación privada de la inauguración — ver docs/invitacion.md.
// Estado de la financiación: SOLO cantidades efectivamente recibidas y verificadas en la
// cuenta. Se actualiza a mano (importe y fecha) y se vuelve a publicar. Nunca promesas.

export const invitacion = {
	/** Objetivo y máximo de la campaña inicial, en euros. */
	objetivo: 10000,
	/** Recibido y verificado, en euros. */
	recibido: 1800,
	/** Fecha de la última comprobación (AAAA-MM-DD). */
	actualizado: '2026-11-09',
	/**
	 * false mientras el acuerdo no esté revisado jurídica y fiscalmente: la sección de
	 * transferencia se muestra como pendiente, sin titular ni IBAN.
	 */
	aportacionesAbiertas: true,
	/**
	 * Titular e IBAN reales (dados por Jorge el 09/11/2026). No están en el repositorio: se leen
	 * de INVITACION_TITULAR e INVITACION_IBAN (archivo .env; ajustes del alojamiento al publicar).
	 * Solo se muestran cuando aportacionesAbiertas sea true.
	 */
	titular: (import.meta.env.INVITACION_TITULAR ?? '').trim(),
	iban: (import.meta.env.INVITACION_IBAN ?? '').trim(),
	/** Concepto de la transferencia y asunto del correo con el justificante. */
	concepto: 'VITTORIA 2026',
	correo: 'jorge@vittoriachess.com',
	asuntoParticipar: 'VITTORIA 2026',
};

/**
 * Precios de la exposición, IVA incluido. Primer borrador de Jorge (09/11/2026), pendiente de
 * confirmar los definitivos. «Colección de 64»: cada pieza es única y representa un escaque del
 * tablero (D4, F3…); en la galería hay una de cada, y la colección admite encargos.
 */
export const precios: { obra: string; edicion: { es: string; en: string }; precio: number; unidades?: number }[] = [
	// Vittoria Eterna: dos obras de la colección permanente, a 7.000 € cada una.
	{ obra: 'Vittoria Eterna · Mármol de Namibia', edicion: { es: 'Colección permanente', en: 'Permanent collection' }, precio: 7000 },
	{ obra: 'Vittoria Eterna · Tinos verde', edicion: { es: 'Colección permanente', en: 'Permanent collection' }, precio: 7000 },
	{ obra: 'Vittoria Cerámica azul', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 6500 },
	{ obra: 'Beige vertical', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 9000 },
	{ obra: 'Espejo', edicion: { es: '1/1', en: '1/1' }, precio: 9000 },
	{ obra: 'Solid surface', edicion: { es: 'Edición única', en: 'Single edition' }, precio: 5800 },
	// Six: habrá dos o tres; para la facturación posible se cuentan tres.
	{ obra: 'Six', edicion: { es: '2–3 unidades', en: '2–3 units' }, precio: 1200, unidades: 3 },
	{ obra: 'Mil y una noches', edicion: { es: '1/1', en: '1/1' }, precio: 8200 },
	{ obra: 'Microcemento blanco', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 8500 },
	// Colaboración con Manufacturas Anframa: se presenta como sorpresa, sin nombrarla.
	{ obra: 'Colaboración sorpresa', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 18000 },
];

/**
 * Coste de producción aproximado por pieza (dato de Jorge, 10/11/2026): 2.500 € cada ajedrez,
 * tablero o vertical; 600 € cada Six. La colaboración se calcula como un ajedrez más.
 * La galería no cobra comisión (solo el alquiler, incluido en los gastos del evento).
 */
const IVA = 1.21;
const coste = (p: { obra: string }) => (p.obra === 'Six' ? 600 : 2500);
/** Lo que deja limpia una venta: precio sin IVA menos coste de producción. */
export const netoVenta = (p: { obra: string; precio: number }) => p.precio / IVA - coste(p);

/**
 * Facturación estimada de la exposición y margen medio por obra (datos de Jorge, 10/11/2026):
 * 85.000 € estimados; margen del 60 al 80 % por obra. La tabla de rentabilidad usa el 60 %, el
 * extremo prudente, sobre el precio sin IVA.
 */
export const facturacionEstimada = 85000;
export const margenTabla = 0.6;
/** Escalones de facturación de la tabla (IVA incluido) y obras aproximadas que suponen. */
export const escalones = [15000, 25000, 50000, 85000, 120000];

/** Facturación posible si se vendiera todo lo expuesto (IVA incluido). */
export const facturacionPosible = precios.reduce((suma, p) => suma + p.precio * (p.unidades ?? 1), 0);

/**
 * Dirección secreta de la invitación: /invitacion/<clave> y /en/invitation/<clave>.
 * La clave no se guarda en el repositorio: se lee de la variable INVITACION_CLAVE (archivo
 * .env en local; ajustes del alojamiento al publicar). Sin ella, la página no se genera.
 */
export const claveInvitacion = (import.meta.env.INVITACION_CLAVE ?? '').trim();
