// Exposición de diciembre de 2026 — ver docs/definicion.md (Páginas: Obras, "Antes de la
// exposición"). Mientras `reservada` sea true, OBRAS muestra una pantalla de espera con la
// cuenta atrás en lugar del catálogo, y las páginas de cada obra no se publican. Al terminar
// la exposición basta con poner `reservada: false` y volver a publicar.

export const exposicion = {
	reservada: true,
	/** Apertura al público el jueves 10 (cuenta atrás hasta aquí). Hora de Madrid. La prensa, a las 19:00. */
	inicio: '2026-12-10T20:00:00+01:00',
	/** Cierre de la exposición: a partir de aquí la cuenta atrás da paso a "ha terminado". */
	fin: '2026-12-13T21:00:00+01:00',
};
