// Cálculo de la participación 20/80 de la invitación privada — ver docs/invitacion.md.
// Es la única función que hace estas cuentas: las tablas de la página salen de aquí, y
// scripts/comprobar-participacion.ts comprueba que dan las cifras del documento de partida.
//
// F = financiación total recaudada · U = capital utilizado · A = aportación individual ·
// N = ingresos netos disponibles de las ventas elegibles.

export interface Entrada {
	F: number;
	U: number;
	A: number;
	N: number;
}

export interface Resultado {
	/** Cuota individual (A / F). */
	q: number;
	/** Devolución individual del dinero no utilizado. */
	D: number;
	/** Recuperación global prioritaria del capital utilizado. */
	K: number;
	/** Excedente sobre el capital utilizado. */
	E: number;
	/** Parte del excedente para el conjunto de participantes (20 %). */
	B: number;
	/** Parte del excedente para Vittoria Chess (80 %). */
	V: number;
	/** Retorno total individual. */
	T: number;
	/** Beneficio o pérdida individual. */
	P: number;
	/** Rentabilidad individual, en %. */
	ROI: number;
}

export const PARTE_PARTICIPANTES = 0.2;

const centimos = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

export function calcular({ F, U, A, N }: Entrada): Resultado {
	if (!(F > 0)) throw new RangeError('La financiación total (F) debe ser mayor que 0.');
	if (!(U >= 0 && U <= F)) throw new RangeError('El capital utilizado (U) debe estar entre 0 y F.');
	if (!(A > 0 && A <= F)) throw new RangeError('La aportación (A) debe ser mayor que 0 y no superar F.');
	if (!(N >= 0)) throw new RangeError('Los ingresos netos (N) no pueden ser negativos.');

	const q = A / F;
	const D = q * (F - U);
	const K = Math.min(N, U);
	const E = Math.max(0, N - U);
	const B = PARTE_PARTICIPANTES * E;
	const T = D + q * (K + B);
	const P = T - A;
	return {
		q,
		D: centimos(D),
		K: centimos(K),
		E: centimos(E),
		B: centimos(B),
		V: centimos(E - B),
		T: centimos(T),
		P: centimos(P),
		ROI: centimos((100 * P) / A),
	};
}
