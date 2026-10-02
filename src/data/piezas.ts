// Las seis piezas — ver docs/definicion.md (Páginas: Las piezas).
// Orden de la página: del peón al rey. Cada clave es también el nombre de su foto
// (src/assets/piezas/<clave>, ver src/assets/LEEME.md). El nombre en cada idioma está en
// src/i18n/ (piezas.nombres).

export type Pieza = 'peon' | 'caballo' | 'alfil' | 'torre' | 'reina' | 'rey';

export const piezas: Pieza[] = ['peon', 'caballo', 'alfil', 'torre', 'reina', 'rey'];

// Composición en px del lienzo de 1440 (la página los pasa a vw). Todas las imágenes son
// 3:4; el alto sale del ancho. El peón llega al borde derecho y la torre al izquierdo.
export const composicion: Record<Pieza, { izquierda: number; arriba: number; ancho: number }> = {
	peon: { izquierda: 868, arriba: 201, ancho: 572 },
	caballo: { izquierda: 138, arriba: 640, ancho: 420 },
	alfil: { izquierda: 494, arriba: 1440, ancho: 512 },
	torre: { izquierda: 0, arriba: 2300, ancho: 480 },
	reina: { izquierda: 790, arriba: 2620, ancho: 512 },
	rey: { izquierda: 290, arriba: 3560, ancho: 620 },
};
