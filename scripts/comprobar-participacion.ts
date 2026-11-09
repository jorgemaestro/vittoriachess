// Comprueba la función de cálculo de la invitación contra las cifras del documento de partida.
// Uso: node scripts/comprobar-participacion.ts
import { calcular } from '../src/data/participacion.ts';

let fallos = 0;
const igual = (descripcion: string, obtenido: unknown, esperado: unknown) => {
	const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
	if (!ok) fallos++;
	console.log(`${ok ? 'bien ' : 'FALLO'}  ${descripcion}: ${JSON.stringify(obtenido)}${ok ? '' : ` (esperado ${JSON.stringify(esperado)})`}`);
};

// Ejemplo de 1.000 € con 8.000 € captados y utilizados.
const tabla: [number, number, number][] = [
	[0, 0, -100],
	[4000, 500, -50],
	[8000, 1000, 0],
	[12000, 1100, 10],
	[16000, 1200, 20],
	[40000, 1800, 80],
	[60000, 2300, 130],
];
for (const [N, T, ROI] of tabla) {
	const r = calcular({ F: 8000, U: 8000, A: 1000, N });
	igual(`N = ${N} → retorno y rentabilidad`, [r.T, r.ROI], [T, ROI]);
}

// Éxito extraordinario (netos supuestos de 40.000 y 60.000 €).
for (const [N, K, E, B, total, V] of [
	[40000, 8000, 32000, 6400, 14400, 25600],
	[60000, 8000, 52000, 10400, 18400, 41600],
]) {
	const r = calcular({ F: 8000, U: 8000, A: 8000, N });
	igual(`N = ${N} → capital, excedente, 20 %, total participantes, Vittoria Chess`, [r.K, r.E, r.B, r.K + r.B, r.V], [K, E, B, total, V]);
}

// Capital no utilizado: se usan 6.000 € de 8.000; quien aportó 1.000 € recupera 250 € de entrada.
igual('U = 6.000, sin ventas → devolución', calcular({ F: 8000, U: 6000, A: 1000, N: 0 }).D, 250);
igual('U = 6.000, sin ventas → retorno total', calcular({ F: 8000, U: 6000, A: 1000, N: 0 }).T, 250);
// Recuperación exacta con capital parcial.
igual('U = 6.000, N = 6.000 → retorno', calcular({ F: 8000, U: 6000, A: 1000, N: 6000 }).T, 1000);
// Financiación parcial: 5.000 € captados y utilizados.
igual('F = U = 5.000, N = 10.000, A = 500 → retorno', calcular({ F: 5000, U: 5000, A: 500, N: 10000 }).T, 600);
// Redondeo a céntimos.
igual('A = 333 → retorno redondeado', calcular({ F: 8000, U: 8000, A: 333, N: 12000 }).T, 366.3);
// Datos imposibles: deben dar error, no un resultado.
for (const [descripcion, entrada] of [
	['F = 0', { F: 0, U: 0, A: 1, N: 0 }],
	['U > F', { F: 8000, U: 9000, A: 1000, N: 0 }],
	['A = 0', { F: 8000, U: 8000, A: 0, N: 0 }],
	['N < 0', { F: 8000, U: 8000, A: 1000, N: -1 }],
] as const) {
	let error = false;
	try {
		calcular(entrada);
	} catch {
		error = true;
	}
	igual(`${descripcion} → error`, error, true);
}

console.log(fallos ? `\n${fallos} comprobación(es) fallida(s)` : '\nTodas las comprobaciones correctas');
process.exit(fallos ? 1 : 0);
