// Enlaces principales de la web — ver docs/definicion.md (Páginas: Direcciones).
// Los usan la barra, el menú móvil y el pie: se cambian aquí y en ningún otro sitio.

export type Pagina = 'obras' | 'las-piezas' | 'estudio' | 'contacto';

export const enlaces: [Pagina, string][] = [
	['obras', 'OBRAS'],
	['las-piezas', 'LAS PIEZAS'],
	['estudio', 'ESTUDIO'],
	['contacto', 'CONTACTO'],
];
