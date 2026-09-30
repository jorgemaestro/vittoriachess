// Entrevista de la página Estudio — ver docs/definicion.md (Páginas: Estudio).
// Texto recibido el 30/09/2026. Seis bloques: cada uno con una foto
// (src/assets/entrevista/bloque-NN) y sus preguntas.

export interface Pregunta {
	pregunta: string;
	respuesta: string;
}

export const bloques: Pregunta[][] = [
	// 1 · El origen
	[
		{
			pregunta: '¿Cómo entró el ajedrez en tu vida?',
			respuesta:
				'Tenía cinco años. Un amigo de mi padre me enseñó a mover las piezas junto a una piscina, un verano. Era un hombre mayor, de pelo cano, con un tigre desdibujado tatuado en el brazo. El juego era de plástico imitando madera, con fieltro verde bajo cada pieza. No recuerdo ganar ni perder. Recuerdo mirar las piezas. Desde entonces las vi como personajes: las movíamos nosotros, pero de alguna manera parecían moverse solas.',
		},
		{
			pregunta: '¿Cuándo decidiste diseñar las tuyas?',
			respuesta:
				'A los quince años, una noche de invierno, tumbado en la cama. La idea llegó de golpe. Cogí un papel doblado y un Bic azul y dibujé un peón. Ese dibujo se perdió, y no se parece en nada al peón que hago hoy. Pero la pregunta que hizo es la que sigo respondiendo: ¿podían estas piezas ser más verdaderas?',
		},
	],
	// 2 · La idea
	[
		{
			pregunta: '¿Qué significa "más verdaderas"?',
			respuesta:
				'Menos arbitrarias. El Staunton es bello, pero sus formas podrían haber sido otras. Yo quería que cada pieza pareciera necesaria, así que fui al origen. Todo en el ajedrez ocurre sobre el cuadrado. Si el tablero nace del cuadrado, las piezas también tenían que nacer de él. Después vinieron el triángulo y la esfera, y nada más. Esa fue la ley que me impuse.',
		},
		{
			pregunta: 'Eres arquitecto. ¿Dónde está la arquitectura en las piezas?',
			respuesta:
				'En el método. Estudié las proporciones oficiales: el tamaño de las casillas, la altura de las piezas, la relación entre ellas. Quería que cada decisión se apoyara en algo. Pero la arquitectura me dio reglas, y las piezas necesitaban algo que las reglas no dan.',
		},
	],
	// 3 · La forma
	[
		{
			pregunta: '¿Cómo se da personalidad a la geometría pura?',
			respuesta:
				'Preguntando qué es cada pieza antes de preguntar cómo es. El peón es humilde y valiente. Solo avanza, y de él nacen todas las demás piezas del sistema. El alfil es velocidad y vejez. La reina, feminidad y altivez. El rey, autoridad. El caballo es el más noble de los animales reducido a su geometría. La torre es un edificio en movimiento. Después viene la parte que ninguna regla resuelve. Hacía dos versiones separadas por una décima de milímetro y las miraba durante horas, hasta que una de ellas estaba viva.',
		},
		{
			pregunta: 'Veintiún años entre el primer dibujo y las piezas terminadas. ¿Por qué tanto?',
			respuesta:
				'Porque las piezas se diseñaron para ser correctas, no para ser fáciles de fabricar. Caras planas, aristas vivas, esferas que se encuentran con planos. Un taller tras otro me decía que era demasiado complejo, demasiado manual, demasiado caro. Me negué a cambiar un solo milímetro para adaptarlas a un proceso. Si la forma cambiaba, ya no era la pieza. Así que pasé por la impresión 3D, los plásticos y la resina. Cada material resolvía algo y fallaba en otra cosa. Abandoné el proyecto muchas veces, y las piezas pasaron años guardadas en cajas. Siempre volví.',
		},
	],
	// 4 · La materia
	[
		{
			pregunta: '¿Por qué metal?',
			respuesta:
				'No por lujo. Por peso. La resina podía tener un aspecto perfecto y aun así no pesar nada en la mano, y además podía romperse. Una pieza tiene que asentarse, resistir y durar. El metal fundido fue el único material que dio a la geometría la presencia que necesitaba. La primera vez que levanté una pieza recién fundida, áspera y llena de rebabas, el peso por fin era el correcto.',
		},
		{
			pregunta: '¿Son todas las piezas idénticas?',
			respuesta:
				'No. Cada pieza sale del molde sin terminar y se completa a mano. Se elimina material, se redefinen las aristas, se lijan las superficies, se pulen, se tratan y se vuelven a pulir, y se coloca la piel en la base. Yo mismo trabajo en ellas. El estándar es exacto: caras planas, aristas vivas. Pero las manos dejan huella, y no hay dos piezas iguales. Antes pensaba que la perfección era que no hubiera diferencia. Ahora pienso que la diferencia forma parte de ella.',
		},
	],
	// 5 · La obra
	[
		{
			pregunta: '¿Por qué colgar un tablero de ajedrez en la pared?',
			respuesta:
				'Un tablero ocupa una mesa, que es uno de los espacios más valiosos de una habitación. Me pregunté qué pasaría si pasaba al plano vertical. ¿Sigue siendo ajedrez? Lo es, y se puede seguir jugando. Pero en la pared ocupa el lugar de la pintura, y pide ser mirado como una obra, no guardado como un juego.',
		},
		{
			pregunta: '¿Juegas?',
			respuesta:
				'Mucho menos de lo que me gustaría. Sobre todo online, y con algún amigo cuando puedo. Nunca he sido un buen jugador. Mi fascinación nunca tuvo que ver con ganar. Tenía que ver con las piezas.',
		},
	],
	// 6 · El nombre
	[
		{
			pregunta: '¿Por qué Vittoria?',
			respuesta:
				'El ajedrez es una batalla, y cada partida termina en victoria o derrota. El italiano, porque para mí evoca diseño y tradición. El nombre también hablaba de mí: de haber hecho lo que me propuse a los quince años. Con los años su significado ha cambiado. Hoy la victoria no es lo que el mundo decida sobre la obra. Es que la obra existe.',
		},
	],
];
