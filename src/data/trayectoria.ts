// Trayectoria de la página Estudio — ver docs/definicion.md (Páginas: Estudio).
// Solo tipo y nombre de cada entrada. Años del más reciente al más antiguo. El texto de
// cada tipo, en cada idioma, está en src/i18n/ (estudio.trayectoria.tipos).

export type Tipo = 'prensa' | 'campana' | 'exposicion' | 'permanente' | 'colaboracion';

export interface Entrada {
	tipo: Tipo;
	nombre: string;
}

export const trayectoria: { anio: number; entradas: Entrada[] }[] = [
	{
		anio: 2026,
		entradas: [
			{ tipo: 'prensa', nombre: 'EL MUNDO' },
			{ tipo: 'campana', nombre: 'OTZ Lab' },
			{ tipo: 'exposicion', nombre: 'COAM, Madrid' },
			{ tipo: 'prensa', nombre: 'Escuela Limón' },
			{ tipo: 'permanente', nombre: 'Gambit Café, Madrid' },
		],
	},
	{
		anio: 2025,
		entradas: [{ tipo: 'colaboracion', nombre: 'Momoc' }],
	},
];
