// Las 8 obras — ver docs/definicion.md (Páginas: Obras).
// Posición y tamaño en px del lienzo de 1440 (la página los pasa a vw). La foto de cada
// obra es src/assets/obras/obra-NN (ver src/assets/LEEME.md). Cada obra tiene su página en
// /obras/<slug>. En la Fase 6 los datos pasan a src/content/ con los valores reales
// (y el slug, al nombre real de la obra).

export interface Obra {
	numero: number;
	/** Identificador en la dirección de su página y en el nombre de sus fotos. */
	slug: string;
	izquierda: number;
	arriba: number;
	ancho: number;
	alto: number;
	nombre: string;
	tipo: string;
	medidas: string;
	edicion: string;
	anio: string;
	descripcion: string;
}

const pendiente = {
	nombre: '[PENDIENTE: NOMBRE]',
	tipo: '[PENDIENTE: TIPO]',
	medidas: '[PENDIENTE: MEDIDAS]',
	edicion: '[PENDIENTE: EDICIÓN]',
	anio: '[PENDIENTE: AÑO]',
	descripcion: '[PENDIENTE: descripción breve de la obra]',
};

const lienzo = [
	{ numero: 1, izquierda: 138, arriba: 201, ancho: 512, alto: 696, ...pendiente },
	{ numero: 2, izquierda: 789, arriba: 726, ancho: 592, alto: 473, ...pendiente },
	{ numero: 3, izquierda: 434, arriba: 1386, ancho: 572, alto: 773, ...pendiente },
	{ numero: 4, izquierda: 790, arriba: 2361, ancho: 512, alto: 696, ...pendiente },
	{ numero: 5, izquierda: 59, arriba: 2886, ancho: 592, alto: 473, ...pendiente },
	{ numero: 6, izquierda: 434, arriba: 3546, ancho: 572, alto: 773, ...pendiente },
	{ numero: 7, izquierda: 138, arriba: 4521, ancho: 512, alto: 696, ...pendiente },
	{ numero: 8, izquierda: 789, arriba: 5046, ancho: 592, alto: 473, ...pendiente },
];

export const obras: Obra[] = lienzo.map((o) => ({
	...o,
	slug: `obra-${String(o.numero).padStart(2, '0')}`,
}));
