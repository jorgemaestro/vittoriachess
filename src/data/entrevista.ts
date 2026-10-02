// Entrevista de la página Estudio — ver docs/definicion.md (Páginas: Estudio).
// Texto recibido el 02/10/2026 (7 preguntas), con las correcciones aprobadas ese día
// (erratas, respuesta 6 reescrita y preguntas de tú). Cada pregunta es un bloque
// de la página; las fotos son src/assets/entrevista/bloque-NN.

export interface Pregunta {
	pregunta: string;
	respuesta: string;
}

export const entrevista: Pregunta[] = [
	{
		pregunta:
			'Todo el sistema nace de tres formas: el cuadrado, el triángulo y la esfera. ¿Por qué imponerte una ley tan estricta?',
		respuesta:
			'Porque sin ley cualquier forma es posible, y entonces ninguna es necesaria. El ajedrez ya tenía un origen: el cuadrado. Si el tablero nace de él, las piezas también debían nacer de él. El triángulo y la esfera completan el lenguaje.',
	},
	{
		pregunta:
			'Han situado tu obra en la estela de Brancusi y de la pedagogía de Fröbel, que formó la mirada de las vanguardias. ¿Reconoces esa genealogía?',
		respuesta:
			'No la busqué, pero la reconozco. Brancusi no esculpía el pájaro, sino el vuelo. Fröbel enseñó a una generación a pensar con el cubo y la esfera. El ajedrez lleva siglos siendo un juego de módulos sobre una retícula. Yo solo he llevado la lógica del tablero a las piezas.',
	},
	{
		pregunta: 'Si la regla lo determina todo, ¿dónde queda el autor?',
		respuesta:
			'Quizás en el ojo humano. La geometría da la estructura, pero no define. Durante el proceso creativo creaba tres o cuatro formas casi idénticas y las observaba durante días hasta que, de alguna manera, sentía que una vibraba más que las otras. Creo que esa diferencia no se calcula. Es una dimensión casi espiritual.',
	},
	{
		pregunta: 'En el ajedrez, el peón es la pieza menor. En tu sistema es la primera.',
		respuesta:
			'Fue la primera que dibujé. Y fue la primera que resolví. Solo avanza, nunca retrocede. De su geometría nacen las demás. Me parecía lógico que el sistema empezara desde abajo.',
	},
	{
		pregunta:
			'Te negaste a modificar la forma para facilitar su fabricación. ¿Qué ha costado esa intransigencia?',
		respuesta:
			'Más de veinte años. La impresión 3D, el plástico y la resina fallaron, cada uno a su manera. Abandoné muchas veces. Pero creo que una forma que se adapta al proceso acaba perdiendo su esencia. El metal fundido fue la respuesta: y por fin, el peso correcto. Después, la mano. Cada pieza sale en bruto del molde y se termina hasta la arista viva. Ninguna es igual a otra.',
	},
	{
		pregunta: 'El tablero vertical abandona la mesa y ocupa la pared. ¿Sigue siendo ajedrez?',
		respuesta:
			'Sí, puede jugarse pero parece que al habitar el plano vertical, como un cuadro, exige ser observado. En honor a Luca de Tena y su ‘exaltación de lo inútil’.',
	},
	{
		pregunta: '¿Qué significa hoy Vittoria?',
		respuesta:
			'Al principio fue por esa batalla que se gana o se pierde. Hoy, veinte años después, creo que significa algo más profundo: que la mera obra exista. Lo que el mundo decida sobre ella realmente no me pertenece.',
	},
];
