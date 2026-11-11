// English texts — see docs/definicion.md (Idiomas). Written by hand (British English, plain
// and precise) and approved by Jorge; never machine-translated. Same shape as es.ts: every
// English text on the site lives here and nowhere else.
import { titular } from '../data/titular';
import type { Textos } from './es';

const correo = `<a href="mailto:${titular.email}">${titular.email}</a>`;
const domicilio = titular.domicilio.replace('España', 'Spain');

const en: Textos = {
	sufijoTitulo: 'Vittoria Chess',

	seo: {
		imagen: 'piezas/rey',
		profesion: 'Architect and artist',
		legal: (titulo: string) => `${titulo} of the Vittoria Chess website.`,
		inicio: {
			titulo: 'Vittoria Chess — Sculptural chess, reimagined as art',
			descripcion:
				'Luxury sculptural chess sets by architect and artist Jorge Maestro. Six pieces born from pure geometry, hand-finished in metal, and the vertical chess set.',
		},
		obras: {
			titulo: 'Works: luxury chess sets and unique pieces — Vittoria Chess',
			descripcion:
				'Designer chess sets and boards: unique pieces, editions and commissions. Metal, marble and wood, finished by hand.',
		},
		piezas: {
			titulo: 'Pieces: six chess sculptures — Vittoria Chess',
			descripcion:
				'Pawn, knight, bishop, rook, queen and king: six sculptures born from the square, with geometry as the only law. Cast metal, polished by hand.',
		},
		autor: {
			titulo: 'Jorge Maestro, architect and artist — Vittoria Chess',
			descripcion:
				'Jorge Maestro, architect and artist, is the author of Vittoria Chess: six chess pieces ruled by geometry, and vertical chess, a game created to be contemplated.',
		},
		contacto: {
			titulo: 'Contact — Vittoria Chess',
			descripcion:
				'Enquiries about works, availability, commissions and collaborations. Each request is answered individually.',
		},
	},

	nav: {
		obras: 'WORKS',
		piezas: 'PIECES',
		autor: 'AUTHOR',
		contacto: 'CONTACT',
		etiquetaPrincipal: 'Main',
		etiquetaMenu: 'Menu',
		etiquetaPie: 'Footer',
		abrirMenu: 'Open menu',
		cerrarMenu: 'Close menu',
	},

	pie: {
		email: 'EMAIL',
		instagram: 'INSTAGRAM',
		avisoLegal: 'LEGAL NOTICE',
		privacidad: 'PRIVACY',
		cookies: 'COOKIES',
	},

	pendiente: 'PENDING',
	volverInicio: 'BACK TO HOME',

	home: {
		titulo: 'Vittoria Chess',
		videoPrincipal: 'Main video',
		videoObras: 'Works video',
		manifiesto: ['The square, the origin', 'Geometry, the law', 'Six pieces. Six souls'],
		verPiezas: 'VIEW THE PIECES',
		verObras: 'VIEW THE WORKS',
		autorFirma: 'JORGE MAESTRO · ARCHITECT AND ARTIST',
		autorFoto: 'description of the photograph of the author',
		saberMas: 'LEARN MORE',
	},

	llamada: {
		etiqueta: 'Contact',
		lineas: ['Information on works, editions', 'and commissioned projects.'],
		contactar: 'GET IN TOUCH',
	},

	obras: {
		titulo: 'Works',
		fotoDe: (n: number) => `description of work ${n}`,
		ficha: { tipo: 'TYPE', medidas: 'DIMENSIONS', edicion: 'EDITION', anio: 'YEAR', detalles: 'DETAILS' },
		consultar: 'ENQUIRE ABOUT AVAILABILITY',
		otras: 'Other works',
		anterior: 'PREVIOUS',
		todas: 'ALL WORKS',
		siguiente: 'NEXT',
		mensajeConsulta: (nombre: string) => `Enquiry about the work: ${nombre}.`,
		sinDatos: {
			nombre: '[PENDING: NAME]',
			tipo: '[PENDING: TYPE]',
			medidas: '[PENDING: DIMENSIONS]',
			edicion: '[PENDING: EDITION]',
			anio: '[PENDING: YEAR]',
			descripcion: '[PENDING: short description of the work]',
		},
	},

	invitacion: {
		tituloSeo: 'A personal invitation — Vittoria Chess',
		irWeb: 'VISIT THE WEBSITE',
		etiqueta: 'PRIVATE INVITATION · CONFIDENTIAL INFORMATION',
		confidencial: 'PRIVATE INVITATION · CONFIDENTIAL',
		titulo: 'A personal invitation',
		subtitulo: 'Vittoria, by Jorge Maestro',
		fecha: '10 to 13 December 2026',
		lugar: 'An art gallery in the very heart of Malasaña',
		apertura: 'Thursday 10, private opening at 8 pm · Friday 11, Saturday 12 and Sunday 13, open to all',
		botonParticipar: 'INVEST',
		regaloPortada: 'For your trust: six chess pieces finished in bronze, a gift to keep for ever.',
		imagenPortada: 'photograph of the work for the cover',
		ver: 'SEE MORE',
		cerrar: 'CLOSE',
		carta: [
			'If you have received this invitation, it is because I want to share with you one of the most important moments of my career.',
			'From <b>10 to 13 December</b>, Vittoria Chess comes to light at an art gallery in the heart of Malasaña.',
			'It is more than an exhibition: it is the beginning of a journey that, at last, I can share.',
			'To give it the reach it deserves, I have prepared a proposal for you to take part in the project. The details are below.',
			'Whether or not you take part, it means a great deal to me to count on you. And the countdown… has begun.',
		],
		firma: 'Jorge Maestro',
		marca: 'Vittoria Chess',
		momento: {
			titulo: 'The beginning of a new chapter.',
			texto: 'Vittoria Chess grew out of years spent exploring chess as a work of art. This exhibition presents it to collectors and design professionals, and your participation helps it happen in the best possible conditions.',
			discreto: 'For privacy reasons I cannot yet name guests or media, but this is expected to be a highly regarded exhibition, with well-known people and press in attendance.',
		},
		destino: {
			abrir: 'WHAT THE €10,000 IS FOR',
			texto: 'Identifiable launch expenses, each one documented. Anything not used is returned proportionally.',
			partidas: ['Gallery', 'Organisation and installation', 'Catering and hospitality', 'Communication and promotion', 'Production and public relations'],
			sinDesglose: 'A breakdown will be available once the budget is final.',
		},
		ventana: {
			titulo: 'The opportunity continues after the exhibition.',
			hitos: [
				['10–13 December', 'Exhibition'],
				['Until 31 December', 'Sales and commissions'],
			],
			texto: 'Your return does not close on 13 December. Every sale and commission closed before the year ends counts, and on <b>31 December</b> we do the final count.',
			nota: '',
		},
		obra: {
			titulo: 'Works made to last.',
			texto: 'Geometry, material and craftsmanship, between art and contemporary design.',
			expuestas: 'WORKS IN THE EXHIBITION',
			facturacion: 'ESTIMATED VALUE OF THE WORKS ON SHOW',
			sorpresa: 'There will also be a surprise collaboration.',
			notaPrecios: 'Average margin of 60% to 80% per work.',
			estimados: 'estimated',
		},
		objetivo: {
			titulo: 'The goal',
			objetivo: 'GOAL',
			recibido: 'RECEIVED AND VERIFIED',
			pendiente: 'REMAINING',
			actualizado: 'LAST UPDATED',
			nota: 'Only what has been received and verified in the account counts.',
			alcanzado: 'Minimum goal reached. New contributions will go towards more press and guests.',
		},
		funcionamiento: {
			titulo: 'How it works',
			pasos: [
				['You invest', 'Choose your contribution. Together, the goal is to raise at least €10,000 for the exhibition.'],
				['You recover your investment', 'If not all the funds have been used, the remaining amount will be returned proportionally to each investor the week after the exhibition. <b>Two or three closed sales are estimated to recover the investment.</b>'],
				['We share the profit', '20% of the direct margin on sales until 31 December is shared among the investors.'],
			],
			riesgo: '',
			definicion: 'Net revenue available: what is actually received from eligible sales, net of VAT, commissions and manufacturing and delivery costs. A signed sale that has not been paid does not count yet.',
		},
		ejemplo: {
			titulo: 'Return by sales',
			abrir: '',
			columnas: ['TURNOVER', 'YOU INVEST €1,000, YOU RECEIVE', 'RETURN'],
			filas: ['2 works', '3 works', '6 works', 'the whole exhibition', 'exhibition and commissions, best case'],
			nota: 'With €10,000 raised. Each sale net of VAT and of its production cost.',
		},
		extraordinario: {
			abrir: 'WHAT IF EVERYTHING SELLS AND COMMISSIONS ARRIVE BEFORE THE YEAR ENDS?',
			texto: 'Turnover of €80,000–100,000 does not mean that amount is shared: VAT, commissions and costs come first. The net figures below are assumptions only.',
			columnas: ['ASSUMPTION', '€80,000 TURNOVER', '€100,000 TURNOVER'],
			filas: ['Assumed net revenue', 'Total capital recovered', 'Surplus', '20% for participants', 'Total return to participants', 'Amount for Vittoria Chess', 'Return per €1,000'],
		},
		preguntas: {
			titulo: 'Frequently asked questions',
			lista: [
				['What will my money be used for?', 'Entirely on the activities, processes and materials needed for the event to run well: gallery hire, production, catering, press… The following week a report will be provided with a detailed breakdown of every item.'],
				['How much could I earn?', 'It depends on sales: around +3% with two works sold, +15% with three, +49% with six, +108% if the whole exhibition sells and close to +150% in the best case, with commissions.'],
				['Could I lose money?', 'There is that risk. If no sale is closed in 2026, the amount would be returned from the sales expected in 2027. The return is subject to at least one sale taking place.'],
				['What if no work is sold?', 'Only the unused part of the funding would be returned.'],
				['What if more than €10,000 is raised?', 'If needed, it will be used for more press coverage or to invite a particular artist or content creator. Everything will appear in the expense report.'],
				['What if the €10,000 is not all spent?', 'The remainder will be returned proportionally. If €6,000 is used, someone who contributed €1,000 will get €400 back straight away; the other €600 depends on results.'],
				['How is the profit shared?', 'First, contributions are returned. Then 20% of the profit is shared among all investors, each in proportion to what they contributed; 80% goes to the project.'],
				['Does a signed sale that has not been paid count?', 'It counts if formalised by 31 December, but is only shared once it has been paid.'],
				['Are commissions included?', 'Yes, eligible ones under the agreement and formalised in time, net of their costs and advances.'],
				['When is it settled?', 'The first settlement in January 2027; there will be others if commissions are paid later.'],
				['Who manages the participation?', 'Jorge Maestro. An accounting and legal firm will handle all the legal processes, contracts and filings, to ensure the whole process is fully compliant.'],
				['Do I become a partner?', 'No. You receive no shares, intellectual property, works or rights over sales beyond the agreed period.'],
				['How is transparency guaranteed?', 'Each participant receives the details of the capital, expenses, sales, payments, costs and their own settlement.'],
				['What taxes apply?', 'They depend on the final agreement and on each participant. All figures are before tax.'],
				['How do I take part?', 'With a bank transfer and a confirmation email to jorge@vittoriachess.com.'],
			],
		},
		calendario: {
			titulo: 'Calendar',
			fases: [
				['Until 1 December', 'Funding round.'],
				['10–13 December', 'Exhibition.'],
				['The week after the event', 'Income and expense report, and return of unused funds.'],
				['31 December', 'Sales and commissions close.'],
				['January 2027', 'Accounts and first settlement.'],
			],
		},
		cercania: {
			titulo: 'Being part of this beginning.',
			texto: 'Beyond the result, I want you to experience the exhibition up close: it is an invitation to share the origin of this new chapter.',
		},
		participar: {
			titulo: 'How to take part',
			estado: 'NOT YET OPEN',
			aviso: 'It will open once the agreement has been reviewed from a legal and tax perspective. Until then, no contributions are accepted.',
			pasos: [
				['Transfer your contribution', 'To this account, with the reference VITTORIA 2026:'],
				['Send the proof of payment', 'By email to jorge@vittoriachess.com.'],
				['Receive the documents', 'I will reply in the same thread with the rest of the documentation.'],
			],
			titular: 'ACCOUNT HOLDER',
			iban: 'IBAN',
			copiarIban: 'COPY IBAN',
			copiarConcepto: 'COPY REFERENCE',
			copiado: 'COPIED',
			concepto: 'REFERENCE',
			escribir: 'SEND THE PROOF OF PAYMENT',
			cuerpoCorreo: 'Please find attached the proof of my transfer.\n\nName:\nAmount:\n',
			duda: 'ASK A QUESTION',
			asuntoDuda: 'Question about the invitation',
			participar: 'TAKE PART',
			nota: 'Your participation is confirmed when Jorge replies to your email.',
		},
		regalo: {
			titulo: 'A gesture of gratitude.',
			condicion: 'FOR CONTRIBUTIONS OVER €500',
			texto: [
				'You will receive a very special gift: six bronze chess pieces, in recognition of and as a token of my gratitude for the trust you have placed in this project.',
				'A small symbol of what it means to have been part of this beginning.',
			],
			imagen: 'photograph of the six pieces on a black background',
		},
		gracias: 'Thank you very much.',
		visitar: 'VISIT THE WEBSITE',
		faltan: 'OPENING IN',
		compartir: {
			etiqueta: 'SHARE THE EXHIBITION',
			texto: 'Share the exhibition page; this invitation is for you only.',
			whatsapp: 'WHATSAPP',
			otras: 'INSTAGRAM AND MORE',
			copiar: 'COPY LINK',
			copiado: 'LINK COPIED',
			mensaje: 'Vittoria Chess opens in Madrid, 10 to 13 December.',
		},
		guardar: {
			etiqueta: 'SAVE THE DATE',
			titulo: 'Thursday 10 December, 8 pm',
			texto: 'Save this day in your calendar. Opening in Malasaña, by invitation only.',
			google: 'ADD TO GOOGLE CALENDAR',
			otros: 'OTHER CALENDARS',
			evento: 'Vittoria Chess · Opening',
			detalle: 'Opening of Vittoria Chess, by Jorge Maestro. Art gallery in the heart of Malasaña. By invitation only.',
		},
		pie: 'A personal, non-transferable invitation. For information only: participation is subject to the final agreement.',
	},

	exposicion: {
		palabra: 'WORKS',
		frase: 'Works available after the exhibition.',
		fechas: '10 to 13 December 2026',
		lugar: 'A very special gallery in the heart of Malasaña, among 17th-century works',
		faltan: 'OPENING IN',
		unidades: ['DAYS', 'HOURS', 'MIN', 'SEC'],
		abierta: 'The exhibition is open.',
		terminada: 'The exhibition has ended.',
		evento: 'Thursday 10 December, 8 pm · Opening, by invitation only.',
		reservar: 'Works can also be reserved before the exhibition.',
		solicitar: 'REQUEST INFORMATION',
		mensaje: 'I would like to receive information about the exhibition, the opening on Thursday 10 December and reserving a work.',
		imagen: 'image or video of the exhibition',
		tituloSeo: 'Works: exhibition in Madrid, 10–13 December — Vittoria Chess',
		descripcionSeo:
			'Vittoria Chess works will be available after their exhibition in Madrid, from 10 to 13 December 2026. Request information.',
	},

	piezas: {
		titulo: 'Pieces',
		nombres: {
			peon: 'PAWN',
			caballo: 'KNIGHT',
			alfil: 'BISHOP',
			torre: 'ROOK',
			reina: 'QUEEN',
			rey: 'KING',
		},
	},

	autor: {
		titulo: 'Author',
		texto: [
			{
				parrafos: [
					'Jorge Maestro dreams of creating the six chess pieces with geometry as the only law.',
					'It all begins with the square. The origin of the game. The only form that survives the passing of the centuries.',
					'He gives them life; movement.',
				],
			},
			{ destacado: ['To say the most', 'with the least.'] },
			{
				parrafos: [
					'Stone, wood and resin. Materials that demand sacrifices in form. Then, metal appeared.',
					'Six living sculptures are born: the pawn, the knight, the bishop, the rook, the queen and the king.',
					'And with them, Vittoria Chess. His work. Where he explores form, material and perspective.',
					'Vertical chess. A new way of seeing.',
				],
			},
			{ destacado: ['A game created', 'to be contemplated.'] },
		],
		trayectoria: {
			titulo: 'EXHIBITIONS AND PRESS',
			tipos: {
				prensa: 'PRESS',
				campana: 'CAMPAIGN',
				exposicion: 'EXHIBITION',
				permanente: 'PERMANENT',
				colaboracion: 'COLLABORATION',
			},
		},
	},

	contacto: {
		titulo: 'Contact',
		palabra: 'CONTACT',
		frase: 'For enquiries, projects and collaborations.',
		apunte: 'Each request is answered individually.',
		campos: {
			nombre: 'FIRST NAME*',
			apellidos: 'LAST NAME',
			telefono: 'PHONE',
			email: 'EMAIL*',
			mensaje: 'MESSAGE*',
		},
		avisos: {
			nombre: 'PLEASE ENTER YOUR NAME',
			email: 'PLEASE ENTER YOUR EMAIL',
			emailInvalido: 'THIS EMAIL IS NOT VALID',
			mensaje: 'PLEASE ENTER A MESSAGE',
		},
		enviar: 'SEND',
		aceptas: 'BY SENDING YOU ACCEPT THE',
		politica: 'PRIVACY POLICY',
		gracias: 'Thank you.',
		recibido: 'Message received.',
		fallo: 'THE MESSAGE COULD NOT BE SENT. PLEASE TRY AGAIN OR WRITE TO',
		asunto: 'Vittoria Chess — message from',
	},

	noEncontrada: {
		titulo: 'Page not found',
		palabra: 'PAGE NOT FOUND',
		frase: 'This page does not exist or has moved.',
		volver: 'BACK TO HOME',
	},

	// Legal pages. Draft: the [TO REVIEW] notes are confirmed by the owner before publishing.
	legal: {
		actualizado: 'LAST UPDATED',
		fecha: '30 SEPTEMBER 2026',
		aviso: {
			titulo: 'LEGAL NOTICE',
			apartados: [
				{
					titulo: 'WEBSITE OWNER',
					parrafos: [
						`In compliance with Spanish Law 34/2002 on information society services and electronic commerce (LSSI-CE), this website (${titular.web}) belongs to:`,
					],
					lista: [
						`Owner: ${titular.nombre}`,
						`Tax ID (NIF): ${titular.nif}`,
						`Address: ${domicilio}`,
						`Email: ${correo}`,
					],
				},
				{
					titulo: 'PURPOSE',
					parrafos: [
						'This website presents the work and the chess pieces of Vittoria Chess and offers a means of contact for enquiries about works, editions and commissioned projects. No sales are made through the website. [TO REVIEW: if sales are made through the website in future, terms of sale must be added.]',
					],
				},
				{
					titulo: 'INTELLECTUAL AND INDUSTRIAL PROPERTY',
					parrafos: [
						'The design of the pieces, the works, the photographs, the videos, the texts, the logotype and the name Vittoria Chess, as well as the design of this website, belong to its owner or are used with permission. Their reproduction, distribution, public communication or transformation, in whole or in part, is prohibited without express written permission. [TO REVIEW: if the Vittoria Chess trade mark is registered, state the registration.]',
					],
				},
				{
					titulo: 'USE OF THE WEBSITE',
					parrafos: [
						'Visitors undertake to use the website in accordance with the law and with this notice. The owner is not responsible for any misuse of its contents or for damage arising from interruptions or technical errors beyond the owner’s control.',
					],
				},
				{
					titulo: 'LINKS TO OTHER WEBSITES',
					parrafos: [
						'The website contains links to third-party sites, such as Instagram. The owner does not control their contents or their policies and is not responsible for them.',
					],
				},
				{
					titulo: 'GOVERNING LAW AND JURISDICTION',
					parrafos: [
						'This notice is governed by Spanish law. Any dispute shall be submitted to the courts that are competent under the law; where the visitor is a consumer, those of the consumer’s place of residence.',
						'This text is a translation of the Spanish original, which prevails in the event of any discrepancy.',
					],
				},
			],
		},
		privacidad: {
			titulo: 'PRIVACY POLICY',
			apartados: [
				{
					titulo: 'DATA CONTROLLER',
					parrafos: [],
					lista: [
						`Controller: ${titular.nombre}`,
						`Tax ID (NIF): ${titular.nif}`,
						`Address: ${domicilio}`,
						`Email: ${correo}`,
					],
				},
				{
					titulo: 'WHAT DATA IS COLLECTED',
					parrafos: [
						'Only what is entered in the contact form: first name, last name, phone number, email address and the message. Last name and phone number are optional. This website does not use tracking cookies or analytics tools (see the cookie policy).',
					],
				},
				{
					titulo: 'WHAT IT IS USED FOR',
					parrafos: [
						'To reply to the enquiry and, where there is one, to continue the conversation about works, editions or commissions. No newsletters or advertising are sent, and no automated decisions are made.',
					],
				},
				{
					titulo: 'LEGAL BASIS',
					parrafos: [
						'The consent of the person who sends the form and, where the enquiry concerns a work or a commission, the steps taken prior to a possible contract (Article 6(1)(a) and (b) of the General Data Protection Regulation).',
					],
				},
				{
					titulo: 'HOW LONG IT IS KEPT',
					parrafos: [
						'For as long as is needed to deal with the enquiry and its follow-up. After that it is kept blocked only for the periods required by law. [TO REVIEW: state a specific period if preferred, for example two years from the last contact.]',
					],
				},
				{
					titulo: 'WHO ELSE PROCESSES THE DATA',
					parrafos: [
						'The data is not shared with third parties unless required by law. The following act as data processors:',
					],
					lista: [
						'Web3Forms: receives the form and forwards it by email. [TO REVIEW: legal name and country of the provider.]',
						'Google (Google Workspace): handles the owner’s email.',
						'Cloudflare, Inc. (United States): hosts the website and may process technical data, such as the IP address.',
					],
				},
				{
					titulo: 'INTERNATIONAL TRANSFERS',
					parrafos: [
						'Web3Forms and Cloudflare may process data in the United States. These transfers are covered by the EU–US Data Privacy Framework or, failing that, by the standard contractual clauses approved by the European Commission. [TO REVIEW: confirm the safeguard offered by each provider when it is contracted.]',
					],
				},
				{
					titulo: 'YOUR RIGHTS',
					parrafos: [
						`You may request access to your data, its rectification or erasure, object to or restrict its processing, request its portability and withdraw your consent at any time by writing to ${correo}. If you believe your rights have not been respected, you may lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).`,
						'This text is a translation of the Spanish original, which prevails in the event of any discrepancy.',
					],
				},
			],
		},
		cookies: {
			titulo: 'COOKIE POLICY',
			apartados: [
				{
					titulo: 'WHAT THEY ARE',
					parrafos: [
						'Cookies and similar technologies are small files or pieces of data that a website stores in the visitor’s browser.',
					],
				},
				{
					titulo: 'WHAT THIS WEBSITE USES',
					parrafos: [
						'This website does not use its own or third-party cookies for analytics, advertising or tracking. It only stores in the browser (session storage) a technical marker so that the loading screen on the home page is not repeated during the same visit. It is deleted automatically when the browser is closed and identifies no one. As it is necessary for the service requested on entering, it does not require consent (Article 22.2 of the LSSI-CE).',
					],
				},
				{
					titulo: 'THIRD-PARTY SERVICES',
					parrafos: [
						'When the contact form is sent, the data goes to Web3Forms (see the privacy policy). The links to Instagram lead to its website, which applies its own cookie policy. [TO REVIEW: confirm, when Web3Forms is activated in Phase 7, that it adds no cookies or third-party anti-spam checks to this website.]',
					],
				},
				{
					titulo: 'HOW TO MANAGE THEM',
					parrafos: [
						'Any browser lets you view, block and delete cookies and the data stored by websites from its settings.',
					],
				},
				{
					titulo: 'CHANGES',
					parrafos: [
						'If the website were to add cookies that require consent in future, this policy would be updated and consent would be requested before they are used.',
						'This text is a translation of the Spanish original, which prevails in the event of any discrepancy.',
					],
				},
			],
		},
	},
};

export default en;
