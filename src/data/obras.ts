// Las 8 obras — ver docs/definicion.md (Páginas: Obras).
// Posición y tamaño en px del lienzo de 1440 (el catálogo los pasa a vw). La foto de cada
// obra es src/assets/obras/<slug> (ver src/assets/LEEME.md) y su página, /obras/<slug>
// (/en/works/<slug> en inglés). Nombre, tipo, medidas, edición, año y descripción llegan
// en la Fase 6, en los dos idiomas; hasta entonces se usan los marcadores de src/i18n/
// (obras.sinDatos).

export interface Obra {
	numero: number;
	/** Identificador en la dirección de su página y en el nombre de sus fotos. */
	slug: string;
	izquierda: number;
	arriba: number;
	ancho: number;
	alto: number;
}

const lienzo = [
	{ numero: 1, izquierda: 138, arriba: 201, ancho: 512, alto: 696 },
	{ numero: 2, izquierda: 789, arriba: 726, ancho: 592, alto: 473 },
	{ numero: 3, izquierda: 434, arriba: 1386, ancho: 572, alto: 773 },
	{ numero: 4, izquierda: 790, arriba: 2361, ancho: 512, alto: 696 },
	{ numero: 5, izquierda: 59, arriba: 2886, ancho: 592, alto: 473 },
	{ numero: 6, izquierda: 434, arriba: 3546, ancho: 572, alto: 773 },
	{ numero: 7, izquierda: 138, arriba: 4521, ancho: 512, alto: 696 },
	{ numero: 8, izquierda: 789, arriba: 5046, ancho: 592, alto: 473 },
];

export const obras: Obra[] = lienzo.map((o) => ({
	...o,
	slug: `obra-${String(o.numero).padStart(2, '0')}`,
}));
