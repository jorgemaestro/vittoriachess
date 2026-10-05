// Textos en español — ver docs/definicion.md (Idiomas). Todo el texto de la web en
// español está aquí: se corrige en este archivo y en ningún otro sitio. El inglés, con la
// misma forma, está en en.ts.
import { titular } from '../data/titular';

const correo = `<a href="mailto:${titular.email}">${titular.email}</a>`;

const es = {
	sufijoTitulo: 'Vittoria Chess',

	// Lo que leen Google y las redes de cada página (ver docs/seo.md). Títulos de unos 60
	// caracteres y descripciones de unos 155, con las búsquedas que interesan.
	seo: {
		// Foto para compartir cuando la página no tiene una propia (src/assets/…).
		imagen: 'piezas/rey',
		profesion: 'Arquitecto y artista',
		legal: (titulo: string) => `${titulo} de la web de Vittoria Chess.`,
		inicio: {
			titulo: 'Vittoria Chess — Ajedrez escultórico de autor',
			descripcion:
				'Ajedrez de diseño y de autor, del arquitecto y artista Jorge Maestro. Seis piezas nacidas de la geometría, trabajadas a mano en metal, y el ajedrez vertical.',
		},
		obras: {
			titulo: 'Obras: ajedrez de lujo y piezas únicas — Vittoria Chess',
			descripcion:
				'Tableros y juegos de ajedrez de diseño: piezas únicas, ediciones y proyectos por encargo. Metal, mármol y madera, trabajados a mano.',
		},
		piezas: {
			titulo: 'Piezas: seis esculturas de ajedrez — Vittoria Chess',
			descripcion:
				'Peón, caballo, alfil, torre, reina y rey: seis esculturas nacidas del cuadrado, con la geometría como única ley. Metal fundido y pulido a mano.',
		},
		autor: {
			titulo: 'Jorge Maestro, arquitecto y artista — Vittoria Chess',
			descripcion:
				'Jorge Maestro, arquitecto y artista, autor de Vittoria Chess: seis piezas de ajedrez regidas por la geometría y el ajedrez vertical, creado para ser contemplado.',
		},
		contacto: {
			titulo: 'Contacto — Vittoria Chess',
			descripcion:
				'Consultas sobre obras, disponibilidad, proyectos por encargo y colaboraciones. Cada solicitud se atiende de forma individual.',
		},
	},

	nav: {
		obras: 'OBRAS',
		piezas: 'PIEZAS',
		autor: 'AUTOR',
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
		autorFirma: 'JORGE MAESTRO · ARQUITECTO Y ARTISTA',
		autorFoto: 'descripción de la foto del autor',
		saberMas: 'SABER MÁS',
	},

	llamada: {
		etiqueta: 'Contacto',
		lineas: ['Información sobre obras, ediciones', 'y proyectos por encargo.'],
		contactar: 'CONTACTAR',
	},

	obras: {
		titulo: 'Obras',
		fotoDe: (n: number) => `descripción de la obra ${n}`,
		ficha: { tipo: 'TIPO', medidas: 'MEDIDAS', edicion: 'EDICIÓN', anio: 'AÑO', detalles: 'DETALLES' },
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
		titulo: 'Piezas',
		nombres: {
			peon: 'PEÓN',
			caballo: 'CABALLO',
			alfil: 'ALFIL',
			torre: 'TORRE',
			reina: 'REINA',
			rey: 'REY',
		},
	},

	autor: {
		titulo: 'Autor',
		// Texto en tercera persona y presente (05/10/2026). Los destacados son frases
		// literales del texto, que no se repiten: van a tamaño grande, una línea por elemento.
		texto: [
			{
				parrafos: [
					'Jorge Maestro sueña con crear las seis piezas del ajedrez con la geometría como única ley.',
					'Todo empieza en el cuadrado. El origen del juego. La única forma que sobrevive al paso de los siglos.',
					'Les da vida; movimiento.',
				],
			},
			{ destacado: ['Contar lo máximo', 'con lo mínimo.'] },
			{
				parrafos: [
					'Piedra, madera y resina. Materiales que exigen sacrificios en la forma. Aparece el metal.',
					'Nacen seis esculturas vivas: el peón, el caballo, el alfil, la torre, la reina y el rey.',
					'Y con ellas, Vittoria Chess. Su obra. Donde explora la forma, el material y la perspectiva.',
					'El ajedrez vertical. Una nueva mirada.',
				],
			},
			{ destacado: ['Un juego creado', 'para ser contemplado.'] },
		],
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
