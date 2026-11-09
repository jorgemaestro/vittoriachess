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
	volverInicio: 'VOLVER AL INICIO',

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

	// Invitación privada (ver docs/invitacion.md). La carta es el texto de Jorge, íntegro.
	invitacion: {
		tituloSeo: 'Mecenas — Vittoria Chess',
		irWeb: 'IR A LA WEB',
		etiqueta: 'INVITACIÓN PRIVADA',
		titulo: 'Mecenas',
		subtitulo: 'Nace Vittoria Chess, por Jorge Maestro',
		fecha: 'Del 10 al 13 de diciembre de 2026',
		lugar: 'Una galería muy especial en pleno Malasaña, entre obras del siglo XVII',
		apertura: 'Inauguración: jueves 10, a las 20:00 (prensa, 19:00)',
		botonParticipar: 'QUIERO PARTICIPAR',
		regaloPortada: 'Para aportaciones superiores a 500 € recibirás, además de tu parte de la rentabilidad, seis piezas de ajedrez terminadas en bronce.',
		imagenPortada: 'fotografía de la obra para la portada',
		ver: 'VER MÁS',
		cerrar: 'CERRAR',
		carta: [
			'Si has recibido esta invitación es porque quiero compartir contigo, posiblemente, uno de los momentos más importantes de mi trayectoria.',
			'Como seguramente sepas, después de años de trabajo, Vittoria Chess ve la luz <b>del 10 al 13 de diciembre</b> en una galería muy especial en el corazón de Malasaña.',
			'Para llegar al alcance que merece, he fijado un objetivo mínimo de <b>8.000 €</b> para los días de la inauguración, el catering y los medios. Y lejos de pedirte ayuda, te propongo participar en el resultado.',
			'Participes o no, me hace especial ilusión poder compartir esto contigo. La cuenta atrás ha comenzado. Te cuento más abajo.',
			'Muchas gracias.',
		],
		firma: 'Jorge Maestro',
		marca: 'Vittoria Chess',
		momento: {
			titulo: 'El comienzo de una nueva etapa.',
			texto: 'Vittoria Chess nace de años explorando el ajedrez como obra de arte. Esta exposición lo presenta ante coleccionistas y profesionales del diseño, y tu participación ayuda a que suceda en las mejores condiciones.',
			discreto: 'Por privacidad aún no puedo mencionar invitados ni medios, pero se prevé una exposición de alta consideración, con personas y medios conocidos.',
		},
		destino: {
			abrir: 'EN QUÉ SE EMPLEAN LOS 8.000 €',
			texto: 'En gastos identificables del lanzamiento, documentados uno a uno. Lo que no llegue a usarse se devuelve en proporción.',
			partidas: ['Galería', 'Organización y montaje', 'Catering y hospitalidad', 'Comunicación y difusión', 'Producción y relaciones públicas'],
			sinDesglose: 'Desglose disponible cuando esté cerrado el presupuesto.',
		},
		ventana: {
			titulo: 'La oportunidad sigue tras la exposición.',
			hitos: [
				['10–13 de diciembre', 'Exposición'],
				['Hasta el 31 de diciembre', 'Ventas y encargos elegibles'],
			],
			texto: 'Cuentan las ventas y los encargos elegibles formalizados hasta el <b>31 de diciembre de 2026</b>, también los posteriores a la exposición. Lo pendiente de cobro se liquida cuando se cobra, descontados sus costes.',
			nota: 'Liquidaciones según cobros efectivamente recibidos y condiciones del acuerdo.',
		},
		obra: {
			titulo: 'Obras concebidas para perdurar.',
			texto: 'Geometría, materia y trabajo artesanal, entre el arte y el diseño contemporáneo.',
			expuestas: 'OBRAS EN LA EXPOSICIÓN',
			facturacion: 'FACTURACIÓN ESTIMADA DE LAS OBRAS EXPUESTAS',
			notaPrecios: 'Suma de los precios de venta al público, IVA incluido.',
		},
		objetivo: {
			titulo: 'EL OBJETIVO',
			objetivo: 'OBJETIVO',
			recibido: 'RECIBIDO Y VERIFICADO',
			pendiente: 'RESTANTE',
			actualizado: 'ÚLTIMA ACTUALIZACIÓN',
			nota: 'Solo cuenta lo recibido y verificado en la cuenta.',
			alcanzado: 'Objetivo mínimo alcanzado. Las nuevas aportaciones se destinarán a más medios e invitados.',
		},
		funcionamiento: {
			titulo: 'CÓMO FUNCIONA',
			pasos: [
				['Aportas', 'Tu aportación financia gastos documentados de la exposición, hasta un máximo conjunto de 8.000 €.'],
				['Se devuelve el mecenazgo', 'Las primeras ventas se destinan a devolver lo aportado. <b>Se prevé que con una sola venta se cubra el coste de la inauguración. Si no se emplea el 100 % de tu aportación, se te devolverá el restante la semana siguiente al evento.</b>'],
				['Se reparte el margen', 'Una vez cubierta tu inversión, los mecenas recibiréis un 20 % del beneficio de Vittoria Chess hasta terminar el año 2026, incluidos los posibles encargos derivados de este evento hasta el 31 de diciembre de 2026.'],
			],
			riesgo: 'Sin rentabilidad fija ni límite: el resultado puede ser alto, modesto o negativo, con riesgo de perder parte o todo el capital utilizado. No da derechos societarios, de propiedad intelectual ni sobre las obras.',
			definicion: 'Ingresos netos disponibles: lo realmente cobrado de ventas elegibles, descontados IVA, comisiones y costes de fabricación y entrega. Una venta firmada pero no cobrada aún no cuenta.',
		},
		ejemplo: {
			titulo: 'UN EJEMPLO CON 1.000 €',
			texto: 'Si se reúnen y se usan los 8.000 €, 1.000 € son el 12,5 % del grupo. El 20 % es del grupo y solo sobre el excedente, no sobre lo facturado.',
			abrir: '¿CUÁNTO PODRÍA RECUPERAR SEGÚN LAS VENTAS?',
			columnas: ['NETO DISPONIBLE', 'RETORNO POR 1.000 €', 'RENTABILIDAD'],
			nota: 'Escenarios hipotéticos, antes de impuestos. No son previsiones de venta.',
		},
		extraordinario: {
			abrir: '¿Y SI SE VENDE TODO Y LLEGAN ENCARGOS ANTES DE FIN DE AÑO?',
			texto: 'Facturar 80.000–100.000 € no significa repartir esa cifra: antes se descuentan IVA, comisiones y costes. Los netos siguientes son solo supuestos.',
			columnas: ['HIPÓTESIS', '80.000 € FACTURADOS', '100.000 € FACTURADOS'],
			filas: ['Neto disponible supuesto', 'Capital global recuperado', 'Excedente', '20 % para participantes', 'Retorno total participantes', 'Importe para Vittoria Chess', 'Retorno por 1.000 €'],
		},
		preguntas: {
			titulo: 'PREGUNTAS FRECUENTES',
			lista: [
				['¿En qué se usará mi dinero?', 'Íntegramente en las actividades y los procesos necesarios para el buen desarrollo del evento: alquiler de la galería, catering, medios… La semana siguiente se entregará un informe con el desglose detallado de todas las partidas.'],
				['¿Cuánto podría ganar?', 'No hay rendimiento fijo ni máximo. Recuperado el capital, el 20 % del excedente es para los participantes.'],
				['¿Puedo perder dinero?', 'Existe ese riesgo. Si en 2026 no se cierra ninguna venta, el importe se devolvería con las ventas previstas para 2027. La devolución estará sujeta a que se produzca alguna venta.'],
				['¿Y si no se vende ninguna obra?', 'Solo se devolvería la parte de la financiación no utilizada.'],
				['¿Y si se recauda más de 8.000 €?', 'Se utilizará, si es necesario, para más medios o para invitar a algún artista o creador de contenido concreto. Todo figurará en el informe de gastos.'],
				['¿Y si no se gastan los 8.000 €?', 'Lo sobrante se devuelve en proporción. Si se usan 6.000 €, quien aportó 1.000 € recupera 250 € de inmediato; los otros 750 € dependen de los resultados.'],
				['¿Cómo se reparte el beneficio?', 'Primero se recupera el capital utilizado; después, 20 % para los participantes y 80 % para el proyecto.'],
				['¿Cuenta una venta firmada aún no cobrada?', 'Cuenta si se formaliza antes del 31 de diciembre, pero solo se reparte cuando se cobra.'],
				['¿Se incluyen los encargos?', 'Sí, los elegibles según el acuerdo y formalizados en plazo, descontados sus costes y anticipos.'],
				['¿Cuándo se liquida?', 'La primera liquidación, en enero de 2027; habrá otras si se cobran encargos más tarde.'],
				['¿Quién gestiona la participación?', 'Jorge Maestro. Una gestoría llevará todos los procesos legales, los contratos y los modelos, para la máxima legalidad de todo el proceso.'],
				['¿Me convierto en socio?', 'No. No recibes acciones, propiedad intelectual, obras ni derechos sobre ventas fuera del periodo pactado.'],
				['¿Cómo se garantiza la transparencia?', 'Cada participante recibe el detalle del capital, los gastos, las ventas, los cobros, los costes y su liquidación.'],
				['¿Qué impuestos se aplican?', 'Dependen del acuerdo final y de cada participante. Las cifras son antes de impuestos.'],
				['¿Cómo participo?', 'Con una transferencia y un correo de confirmación a jorge@vittoriachess.com.'],
			],
		},
		calendario: {
			titulo: 'TRANSPARENCIA Y CALENDARIO',
			fases: [
				['Hasta el 1 de diciembre', 'Recaudación.'],
				['10–13 de diciembre', 'Exposición.'],
				['Semana siguiente al evento', 'Informe de gastos y devolución de lo no utilizado.'],
				['31 de diciembre', 'Fin del plazo de ventas elegibles.'],
				['Enero de 2027', 'Rendición de cuentas y primera liquidación.'],
				['Después', 'Liquidaciones de encargos cobrados más tarde.'],
			],
		},
		cercania: {
			titulo: 'Formar parte de este comienzo.',
			texto: 'Más allá del resultado, quiero que vivas la exposición de cerca: es una invitación a compartir el origen de esta nueva etapa.',
		},
		participar: {
			titulo: 'CÓMO PARTICIPAR',
			estado: 'PENDIENTE DE ACTIVAR',
			aviso: 'Se abrirá cuando el acuerdo esté revisado jurídica y fiscalmente. Hasta entonces no se aceptan aportaciones.',
			pasos: [
				['Transfiere tu aportación', 'A esta cuenta, con el concepto MECENAS:'],
				['Envía el justificante', 'Por correo a jorge@vittoriachess.com.'],
				['Recibe la documentación', 'Te responderé en el mismo hilo con el resto de la documentación.'],
			],
			titular: 'TITULAR',
			iban: 'IBAN',
			copiarIban: 'COPIAR IBAN',
			copiarConcepto: 'COPIAR CONCEPTO',
			copiado: 'COPIADO',
			concepto: 'CONCEPTO',
			escribir: 'ENVIAR EL JUSTIFICANTE',
			cuerpoCorreo: 'Adjunto el justificante de mi transferencia.\n\nNombre:\nImporte:\n',
			duda: 'RESOLVER UNA DUDA',
			asuntoDuda: 'Duda sobre la invitación',
			participar: 'PARTICIPAR',
			nota: 'Recuerda adjuntar el justificante: abrir el correo no es enviarlo. La participación se confirma cuando Jorge responde.',
		},
		regalo: {
			titulo: 'Un gesto de gratitud.',
			condicion: 'PARA APORTACIONES SUPERIORES A 500 €',
			texto: [
				'Independientemente de los resultados de la exposición, en 2027 recibirás un regalo muy especial: seis piezas de ajedrez en bronce, como reconocimiento y muestra de mi agradecimiento por la confianza que has depositado en mí y en Vittoria Chess.',
				'Un pequeño símbolo de lo que significa haber formado parte de este comienzo.',
			],
			imagen: 'fotografía de las seis piezas sobre fondo negro',
		},
		gracias: 'Muchas gracias.',
		pie: 'Invitación personal e intransferible. Documento informativo: la participación queda sujeta al acuerdo definitivo.',
	},

	exposicion: {
		palabra: 'OBRAS',
		frase: 'Obra disponible tras la exposición.',
		fechas: 'Del 10 al 13 de diciembre de 2026',
		lugar: 'Una galería muy especial en pleno Malasaña, entre obras del siglo XVII',
		faltan: 'FALTAN',
		unidades: ['DÍAS', 'HORAS', 'MIN', 'SEG'],
		abierta: 'La exposición está abierta.',
		terminada: 'La exposición ha terminado.',
		evento: 'Jueves 10 de diciembre, 20:00 · Inauguración, solo con invitación.',
		reservar: 'Las obras también pueden reservarse antes de la exposición.',
		solicitar: 'SOLICITAR INFORMACIÓN',
		mensaje: 'Me gustaría recibir información sobre la exposición, la inauguración del jueves 10 de diciembre y la reserva de obras.',
		imagen: 'imagen o vídeo de la exposición',
		tituloSeo: 'Obras: exposición en Madrid, 10–13 de diciembre — Vittoria Chess',
		descripcionSeo:
			'Las obras de Vittoria Chess estarán disponibles tras su exposición en Madrid, del 10 al 13 de diciembre de 2026. Solicita información.',
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
