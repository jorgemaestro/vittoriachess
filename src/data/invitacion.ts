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
 * Precios de la exposición, IVA incluido. Primer borrador de Jorge (09/11/2026), con los verticales
 * revisados el 11/11/2026 (precio medio de un vertical: 10.000 €). «Colección de 64»: cada pieza es única y representa un escaque del
 * tablero (D4, F3…); en la galería hay una de cada, y la colección admite encargos.
 */
export const precios: { obra: string; edicion: { es: string; en: string }; precio: number; unidades?: number }[] = [
	// Blanco y negro: añadido el 11/11/2026; se calcula como un vertical medio, 10.000 €.
	{ obra: 'Blanco y negro', edicion: { es: 'Pieza única', en: 'One of a kind' }, precio: 10000 },
	// Vittoria Eterna: dos obras de la colección permanente, a 7.000 € cada una.
	{ obra: 'Vittoria Eterna · Mármol de Namibia', edicion: { es: 'Colección permanente', en: 'Permanent collection' }, precio: 7000 },
	{ obra: 'Vittoria Eterna · Tinos verde', edicion: { es: 'Colección permanente', en: 'Permanent collection' }, precio: 7000 },
	{ obra: 'Vittoria Cerámica azul', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 6500 },
	{ obra: 'Beige vertical', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 12000 },
	{ obra: 'Espejo', edicion: { es: '1/1', en: '1/1' }, precio: 15000 },
	{ obra: 'Solid surface', edicion: { es: 'Edición única', en: 'Single edition' }, precio: 5800 },
	// Six: habrá dos o tres; para la facturación posible se cuentan tres.
	{ obra: 'Six', edicion: { es: '2–3 unidades', en: '2–3 units' }, precio: 1200, unidades: 3 },
	{ obra: 'Mil y una noches', edicion: { es: '1/1', en: '1/1' }, precio: 12000 },
	{ obra: 'Microcemento blanco', edicion: { es: 'Pieza única · colección de 64', en: 'One of a kind · collection of 64' }, precio: 13000 },
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
 * Tabla de rentabilidad (11/11/2026): escalones de facturación con IVA y las obras que suponen,
 * con un precio medio de unos 10.000 € por obra. Neto = facturación sin IVA menos el coste de
 * producción de esas obras (2.500 € cada una; los tres Six, 600 € cada uno). Todo lo expuesto
 * suma unos 110.000 €; el mejor de los casos añade unos 40.000 € de encargos (cuatro obras más).
 */
export const escalones: { facturacion: number; coste: number }[] = [
	{ facturacion: 20000, coste: 5000 },
	{ facturacion: 30000, coste: 7500 },
	{ facturacion: 60000, coste: 15000 },
	{ facturacion: 110000, coste: 26800 },
	{ facturacion: 150000, coste: 36800 },
];
/** Valor estimado de las obras expuestas (suma de precios, redondeada). */
export const facturacionEstimada = 110000;

/** Facturación posible si se vendiera todo lo expuesto (IVA incluido). */
export const facturacionPosible = precios.reduce((suma, p) => suma + p.precio * (p.unidades ?? 1), 0);

/**
 * Dirección secreta de la invitación: /invitacion/<clave> y /en/invitation/<clave>.
 * La clave no se guarda en el repositorio: se lee de la variable INVITACION_CLAVE (archivo
 * .env en local; ajustes del alojamiento al publicar). Sin ella, la página no se genera.
 */
export const claveInvitacion = (import.meta.env.INVITACION_CLAVE ?? '').trim();
