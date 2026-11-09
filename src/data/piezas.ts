// Las seis piezas — ver docs/definicion.md (Páginas: Las piezas).
// Orden de la página: del peón al rey. Cada clave es también el nombre de su foto
// (src/assets/piezas/<clave>, ver src/assets/LEEME.md). El nombre en cada idioma está en
// src/i18n/ (piezas.nombres).

export type Pieza = 'peon' | 'caballo' | 'alfil' | 'torre' | 'reina' | 'rey';

export const piezas: Pieza[] = ['peon', 'caballo', 'alfil', 'torre', 'reina', 'rey'];

// Composición en px del lienzo de 1440 (la página los pasa a vw). Todas las imágenes son
// 3:4; el alto sale del ancho. El peón llega al borde derecho y la torre al izquierdo.
export const composicion: Record<Pieza, { izquierda: number; arriba: number; ancho: number }> = {
	peon: { izquierda: 740, arriba: 201, ancho: 700 },
	caballo: { izquierda: 96, arriba: 760, ancho: 560 },
	alfil: { izquierda: 400, arriba: 1680, ancho: 640 },
	torre: { izquierda: 0, arriba: 2740, ancho: 620 },
	reina: { izquierda: 704, arriba: 3100, ancho: 640 },
	rey: { izquierda: 330, arriba: 4160, ancho: 780 },
};
