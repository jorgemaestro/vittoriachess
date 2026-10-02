// Textos en español — ver docs/definicion.md (Idiomas). Todo el texto de la web en
// español está aquí: se corrige en este archivo y en ningún otro sitio. El inglés, con la
// misma forma, está en en.ts.
import { titular } from '../data/titular';

const correo = `<a href="mailto:${titular.email}">${titular.email}</a>`;

const es = {
	sufijoTitulo: 'Vittoria Chess',

	nav: {
		obras: 'OBRAS',
		piezas: 'LAS PIEZAS',
		estudio: 'ESTUDIO',
		contacto: 'CONTACTO',
		etiquetaPrincipal: 'Principal',
		etiquetaMenu: 'Menú',
		etiquetaPie: 'Pie',
		abrirMenu: 'Abrir menú',
		cerrarMenu: 'Cerrar menú',
	},

	pie: {
		email: 'EMAIL',
		instagram: 'INSTAGRAM',
		avisoLegal: 'AVISO LEGAL',
		privacidad: 'PRIVACIDAD',
		cookies: 'COOKIES',
	},

	pendiente: 'PENDIENTE',

	home: {
		titulo: 'Vittoria Chess',
		videoPrincipal: 'Vídeo principal',
		videoObras: 'Vídeo obras',
		manifiesto: ['El cuadrado, el origen', 'La geometría, la ley', 'Seis piezas. Seis almas'],
		verPiezas: 'VER PIEZAS',
		verObras: 'VER OBRAS',
		entrevistaEtiqueta: 'Entrevista',
		entrevistaPregunta: 'SI LA REGLA LO DETERMINA TODO, ¿DÓNDE QUEDA EL AUTOR?',
		entrevistaFragmento: 'Quizás en el ojo humano. La geometría da la estructura, pero no define.',
		entrevistaFoto: 'descripción de la foto de la entrevista',
		leerEntrevista: 'LEER ENTREVISTA',
	},

	llamada: {
		etiqueta: 'Contacto',
		lineas: ['Información sobre obras, ediciones', 'y proyectos por encargo.'],
		contactar: 'CONTACTAR',
	},

	obras: {
		titulo: 'Obras',
		fotoDe: (n: number) => `descripción de la obra ${n}`,
		ficha: { tipo: 'TIPO', medidas: 'MEDIDAS', edicion: 'EDICIÓN', anio: 'AÑO' },
		consultar: 'CONSULTAR DISPONIBILIDAD',
		otras: 'Otras obras',
		anterior: 'ANTERIOR',
		todas: 'TODAS LAS OBRAS',
		siguiente: 'SIGUIENTE',
		mensajeConsulta: (nombre: string) => `Consulta sobre la obra: ${nombre}.`,
		// Datos de cada obra mientras no llegan los reales (Fase 6).
		sinDatos: {
			nombre: '[PENDIENTE: NOMBRE]',
			tipo: '[PENDIENTE: TIPO]',
			medidas: '[PENDIENTE: MEDIDAS]',
			edicion: '[PENDIENTE: EDICIÓN]',
			anio: '[PENDIENTE: AÑO]',
			descripcion: '[PENDIENTE: descripción breve de la obra]',
		},
	},

	piezas: {
		titulo: 'Las piezas',
		nombres: {
			peon: 'PEÓN',
			caballo: 'CABALLO',
			alfil: 'ALFIL',
			torre: 'TORRE',
			reina: 'REINA',
			rey: 'REY',
		},
	},

	estudio: {
		titulo: 'Estudio',
		marcaPregunta: '(p)',
		fotoDe: (archivo: string) => `descripción de la foto ${archivo}`,
		// Entrevista (texto del 02/10/2026, con las correcciones aprobadas ese día).
		entrevista: [
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
		],
		// Cuántas frases de cada respuesta forman la entradilla (una por pregunta).
		frasesEntradilla: [1, 1, 1, 2, 1, 1, 1],
		// Frases literales de la entrevista, tras el bloque indicado (0 = primero).
		destacados: {
			1: 'Brancusi no esculpía el pájaro, sino el vuelo.',
			4: 'Una forma que se adapta al proceso acaba perdiendo su esencia.',
		} as Record<number, string>,
		trayectoria: {
			titulo: 'TRAYECTORIA',
			tipos: {
				prensa: 'PRENSA',
				campana: 'CAMPAÑA',
				exposicion: 'EXPOSICIÓN',
				permanente: 'PERMANENTE',
				colaboracion: 'COLABORACIÓN',
			},
		},
	},

	contacto: {
		titulo: 'Contacto',
		palabra: 'CONTACTO',
		frase: 'Para consultas, proyectos y colaboraciones.',
		apunte: 'Cada solicitud se atiende de forma individual.',
		campos: {
			nombre: 'NOMBRE*',
			apellidos: 'APELLIDOS',
			telefono: 'TELÉFONO',
			email: 'EMAIL*',
			mensaje: 'MENSAJE*',
		},
		avisos: {
			nombre: 'FALTA EL NOMBRE',
			email: 'FALTA EL EMAIL',
			emailInvalido: 'EL EMAIL NO ES VÁLIDO',
			mensaje: 'FALTA EL MENSAJE',
		},
		enviar: 'ENVIAR',
		aceptas: 'AL ENVIAR ACEPTAS LA',
		politica: 'POLÍTICA DE PRIVACIDAD',
		gracias: 'Muchas gracias.',
		recibido: 'Mensaje recibido.',
		fallo: 'NO SE HA PODIDO ENVIAR. INTÉNTALO DE NUEVO O ESCRIBE A',
		asunto: 'Vittoria Chess — mensaje de',
	},

	noEncontrada: {
		titulo: 'Página no encontrada',
		palabra: 'PÁGINA NO ENCONTRADA',
		frase: 'Esta página no existe o ha cambiado de dirección.',
		volver: 'VOLVER AL INICIO',
	},

	// Páginas legales. Borrador: los [REVISAR] los confirma el titular antes de publicar.
	// Cada apartado: título, párrafos (pueden llevar enlaces) y, si hace falta, una lista.
	legal: {
		actualizado: 'ÚLTIMA ACTUALIZACIÓN',
		fecha: '30 DE SEPTIEMBRE DE 2026',
		aviso: {
			titulo: 'AVISO LEGAL',
			apartados: [
				{
					titulo: 'TITULAR DE LA WEB',
					parrafos: [
						`En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que esta web (${titular.web}) pertenece a:`,
					],
					lista: [
						`Titular: ${titular.nombre}`,
						`NIF: ${titular.nif}`,
						`Domicilio: ${titular.domicilio}`,
						`Email: ${correo}`,
					],
				},
				{
					titulo: 'OBJETO',
					parrafos: [
						'Esta web presenta la obra y las piezas de ajedrez de Vittoria Chess y ofrece un medio de contacto para consultas sobre obras, ediciones y proyectos por encargo. Desde la web no se realizan ventas. [REVISAR: si en el futuro se vende desde la web, habrá que añadir condiciones de venta.]',
					],
				},
				{
					titulo: 'PROPIEDAD INTELECTUAL E INDUSTRIAL',
					parrafos: [
						'El diseño de las piezas, las obras, las fotografías, los vídeos, los textos, el logotipo y el nombre Vittoria Chess, así como el diseño de esta web, pertenecen a su titular o se usan con autorización. Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin permiso expreso y por escrito. [REVISAR: si la marca Vittoria Chess está registrada, indicar el registro.]',
					],
				},
				{
					titulo: 'USO DE LA WEB',
					parrafos: [
						'Quien visita la web se compromete a usarla conforme a la ley y a este aviso. El titular no se hace responsable del mal uso de sus contenidos ni de los daños que pudieran derivarse de interrupciones o errores técnicos ajenos a su control.',
					],
				},
				{
					titulo: 'ENLACES A OTRAS WEBS',
					parrafos: [
						'La web contiene enlaces a sitios de terceros, como Instagram. El titular no controla sus contenidos ni sus políticas, y no es responsable de ellos.',
					],
				},
				{
					titulo: 'LEGISLACIÓN Y JURISDICCIÓN',
					parrafos: [
						'Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la ley; si quien visita la web es consumidor, los de su domicilio.',
					],
				},
			],
		},
		privacidad: {
			titulo: 'POLÍTICA DE PRIVACIDAD',
			apartados: [
				{
					titulo: 'RESPONSABLE DEL TRATAMIENTO',
					parrafos: [],
					lista: [
						`Responsable: ${titular.nombre}`,
						`NIF: ${titular.nif}`,
						`Domicilio: ${titular.domicilio}`,
						`Email: ${correo}`,
					],
				},
				{
					titulo: 'QUÉ DATOS SE RECOGEN',
					parrafos: [
						'Solo los que se escriben en el formulario de contacto: nombre, apellidos, teléfono, email y el mensaje. Apellidos y teléfono son opcionales. Esta web no usa cookies de seguimiento ni herramientas de analítica (ver la política de cookies).',
					],
				},
				{
					titulo: 'PARA QUÉ SE USAN',
					parrafos: [
						'Para responder a la consulta y, si la hay, mantener la conversación sobre obras, ediciones o encargos. No se envían boletines ni publicidad, y no se toman decisiones automatizadas.',
					],
				},
				{
					titulo: 'BASE LEGAL',
					parrafos: [
						'El consentimiento de quien envía el formulario y, cuando la consulta se refiere a una obra o a un encargo, la aplicación de medidas previas a un posible contrato (artículo 6.1 a y b del Reglamento General de Protección de Datos).',
					],
				},
				{
					titulo: 'CUÁNTO TIEMPO SE GUARDAN',
					parrafos: [
						'El tiempo necesario para atender la consulta y su seguimiento. Después se conservan bloqueados solo durante los plazos que exija la ley. [REVISAR: indicar un plazo concreto si se prefiere, por ejemplo dos años desde el último contacto.]',
					],
				},
				{
					titulo: 'QUIÉN MÁS TRATA LOS DATOS',
					parrafos: [
						'No se ceden a terceros salvo obligación legal. Intervienen, como encargados del tratamiento:',
					],
					lista: [
						'Web3Forms: recibe el formulario y lo reenvía por email. [REVISAR: razón social y país del proveedor.]',
						'Google (Google Workspace): gestiona el correo del titular.',
						'Cloudflare, Inc. (Estados Unidos): aloja la web y puede tratar datos técnicos, como la dirección IP.',
					],
				},
				{
					titulo: 'TRANSFERENCIAS INTERNACIONALES',
					parrafos: [
						'Web3Forms y Cloudflare pueden tratar datos en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o, en su defecto, en las cláusulas contractuales tipo aprobadas por la Comisión Europea. [REVISAR: confirmar la garantía que ofrece cada proveedor al contratarlo.]',
					],
				},
				{
					titulo: 'TUS DERECHOS',
					parrafos: [
						`Puedes pedir el acceso, la rectificación o la supresión de tus datos, oponerte a su tratamiento, limitarlo, pedir su portabilidad y retirar tu consentimiento en cualquier momento, escribiendo a ${correo}. Si consideras que no se han respetado tus derechos, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).`,
					],
				},
			],
		},
		cookies: {
			titulo: 'POLÍTICA DE COOKIES',
			apartados: [
				{
					titulo: 'QUÉ SON',
					parrafos: [
						'Las cookies y tecnologías parecidas son pequeños archivos o datos que una web guarda en el navegador de quien la visita.',
					],
				},
				{
					titulo: 'QUÉ USA ESTA WEB',
					parrafos: [
						'Esta web no usa cookies propias ni de terceros para analítica, publicidad o seguimiento. Solo guarda en el navegador (almacenamiento de sesión) una marca técnica para no repetir la pantalla de carga de la portada durante la misma visita. Se borra sola al cerrar el navegador y no identifica a nadie. Por ser necesaria para el funcionamiento que se pide al entrar, no requiere consentimiento (artículo 22.2 de la LSSI-CE).',
					],
				},
				{
					titulo: 'SERVICIOS DE TERCEROS',
					parrafos: [
						'Al enviar el formulario de contacto, los datos se envían a Web3Forms (ver la política de privacidad). Los enlaces a Instagram llevan a su web, que aplica su propia política de cookies. [REVISAR: confirmar al activar Web3Forms en la Fase 7 que no añade cookies ni comprobaciones antispam de terceros en esta web.]',
					],
				},
				{
					titulo: 'CÓMO GESTIONARLAS',
					parrafos: [
						'Cualquier navegador permite ver, bloquear y borrar las cookies y los datos guardados por las webs desde su configuración.',
					],
				},
				{
					titulo: 'CAMBIOS',
					parrafos: [
						'Si en el futuro la web incorporase cookies que necesiten consentimiento, se actualizaría esta política y se pediría antes de usarlas.',
					],
				},
			],
		},
	},
};

export type Textos = typeof es;
export default es;
