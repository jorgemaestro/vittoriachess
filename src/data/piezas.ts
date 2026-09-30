// Las seis piezas — ver docs/definicion.md (Páginas: Las piezas).
// La foto de cada una es src/assets/piezas/<archivo> (ver src/assets/LEEME.md).

export interface Pieza {
	nombre: string;
	archivo: string;
}

// Orden de la página: del peón al rey.
export const piezas: Pieza[] = [
	{ nombre: 'PEÓN', archivo: 'peon' },
	{ nombre: 'CABALLO', archivo: 'caballo' },
	{ nombre: 'ALFIL', archivo: 'alfil' },
	{ nombre: 'TORRE', archivo: 'torre' },
	{ nombre: 'REINA', archivo: 'reina' },
	{ nombre: 'REY', archivo: 'rey' },
];
