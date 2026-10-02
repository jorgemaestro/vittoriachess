// Las seis piezas — ver docs/definicion.md (Páginas: Las piezas).
// Orden de la página: del peón al rey. Cada clave es también el nombre de su foto
// (src/assets/piezas/<clave>, ver src/assets/LEEME.md). El nombre en cada idioma está en
// src/i18n/ (piezas.nombres).

export type Pieza = 'peon' | 'caballo' | 'alfil' | 'torre' | 'reina' | 'rey';

export const piezas: Pieza[] = ['peon', 'caballo', 'alfil', 'torre', 'reina', 'rey'];
