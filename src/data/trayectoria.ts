// Trayectoria de la página Estudio — ver docs/definicion.md (Páginas: Estudio).
// Solo tipo y nombre de cada entrada. Años del más reciente al más antiguo.

export interface Entrada {
	tipo: string;
	nombre: string;
}

export const trayectoria: { anio: number; entradas: Entrada[] }[] = [
	{
		anio: 2026,
		entradas: [
			{ tipo: 'PRENSA', nombre: 'EL MUNDO' },
			{ tipo: 'CAMPAÑA', nombre: 'OTZ Lab' },
			{ tipo: 'EXPOSICIÓN', nombre: 'COAM, Madrid' },
			{ tipo: 'PRENSA', nombre: 'Escuela Limón' },
			{ tipo: 'PERMANENTE', nombre: 'Gambit Café, Madrid' },
		],
	},
	{
		anio: 2025,
		entradas: [{ tipo: 'COLABORACIÓN', nombre: 'Momoc' }],
	},
];
