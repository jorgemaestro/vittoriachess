// English texts — see docs/definicion.md (Idiomas). Written by hand (British English, plain
// and precise) and approved by Jorge; never machine-translated. Same shape as es.ts: every
// English text on the site lives here and nowhere else.
import { titular } from '../data/titular';
import type { Textos } from './es';

const correo = `<a href="mailto:${titular.email}">${titular.email}</a>`;
const domicilio = titular.domicilio.replace('España', 'Spain');

const en: Textos = {
	sufijoTitulo: 'Vittoria Chess',

	nav: {
		obras: 'WORKS',
		piezas: 'THE PIECES',
		estudio: 'STUDIO',
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

	home: {
		titulo: 'Vittoria Chess',
		videoPrincipal: 'Main video',
		videoObras: 'Works video',
		manifiesto: ['The square, the origin', 'Geometry, the law', 'Six pieces. Six souls'],
		verPiezas: 'VIEW THE PIECES',
		verObras: 'VIEW THE WORKS',
		entrevistaEtiqueta: 'Interview',
		entrevistaPregunta: 'IF THE RULE DETERMINES EVERYTHING, WHERE DOES THAT LEAVE THE AUTHOR?',
		entrevistaFragmento: 'Perhaps in the human eye. Geometry gives the structure, but it does not define.',
		entrevistaFoto: 'description of the interview photograph',
		leerEntrevista: 'READ THE INTERVIEW',
	},

	llamada: {
		etiqueta: 'Contact',
		lineas: ['Information on works, editions', 'and commissioned projects.'],
		contactar: 'GET IN TOUCH',
	},

	obras: {
		titulo: 'Works',
		fotoDe: (n: number) => `description of work ${n}`,
		ficha: { tipo: 'TYPE', medidas: 'DIMENSIONS', edicion: 'EDITION', anio: 'YEAR' },
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

	piezas: {
		titulo: 'The pieces',
		nombres: {
			peon: 'PAWN',
			caballo: 'KNIGHT',
			alfil: 'BISHOP',
			torre: 'ROOK',
			reina: 'QUEEN',
			rey: 'KING',
		},
	},

	estudio: {
		titulo: 'Studio',
		marcaPregunta: '(q)',
		fotoDe: (archivo: string) => `description of the photograph ${archivo}`,
		entrevista: [
			{
				pregunta:
					'The whole system is born from three forms: the square, the triangle and the sphere. Why impose such a strict law on yourself?',
				respuesta:
					'Because without a law any form is possible, and then none is necessary. Chess already had an origin: the square. If the board is born from it, the pieces had to be born from it too. The triangle and the sphere complete the language.',
			},
			{
				pregunta:
					'Your work has been placed in the lineage of Brancusi and of Fröbel’s pedagogy, which shaped the eye of the avant-garde. Do you recognise that genealogy?',
				respuesta:
					'I did not seek it, but I recognise it. Brancusi did not sculpt the bird, but flight. Fröbel taught a generation to think with the cube and the sphere. For centuries chess has been a game of modules on a grid. I have simply carried the logic of the board into the pieces.',
			},
			{
				pregunta: 'If the rule determines everything, where does that leave the author?',
				respuesta:
					'Perhaps in the human eye. Geometry gives the structure, but it does not define. During the creative process I would make three or four almost identical forms and study them for days until, somehow, I felt that one resonated more than the others. I believe that difference cannot be calculated. It is an almost spiritual dimension.',
			},
			{
				pregunta: 'In chess, the pawn is the lesser piece. In your system it comes first.',
				respuesta:
					'It was the first I drew. And the first I resolved. It only advances, it never retreats. The others are born from its geometry. It seemed logical to me that the system should begin from the bottom.',
			},
			{
				pregunta:
					'You refused to alter the form to make it easier to manufacture. What has that intransigence cost?',
				respuesta:
					'More than twenty years. 3D printing, plastic and resin all failed, each in its own way. I gave up many times. But I believe a form that adapts to the process ends up losing its essence. Cast metal was the answer: and, at last, the right weight. Then, the hand. Each piece leaves the mould in the rough and is finished down to the sharp edge. No two are alike.',
			},
			{
				pregunta: 'The vertical board leaves the table and takes to the wall. Is it still chess?',
				respuesta:
					'Yes, it can be played, but once it inhabits the vertical plane, like a painting, it seems to demand to be looked at. In honour of Luca de Tena and his ‘exaltation of the useless’.',
			},
			{
				pregunta: 'What does Vittoria mean today?',
				respuesta:
					'At first it was about that battle that is won or lost. Today, twenty years on, I believe it means something deeper: that the work simply exists. What the world decides about it does not really belong to me.',
			},
		],
		frasesEntradilla: [1, 1, 1, 2, 1, 1, 1],
		destacados: {
			1: 'Brancusi did not sculpt the bird, but flight.',
			4: 'A form that adapts to the process ends up losing its essence.',
		},
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
		recibido: 'MESSAGE RECEIVED',
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
						'Formspree, Inc. (United States): receives the form and forwards it by email.',
						'Google (Google Workspace): handles the owner’s email.',
						'Cloudflare, Inc. (United States): hosts the website and may process technical data, such as the IP address.',
					],
				},
				{
					titulo: 'INTERNATIONAL TRANSFERS',
					parrafos: [
						'Formspree and Cloudflare may process data in the United States. These transfers are covered by the EU–US Data Privacy Framework or, failing that, by the standard contractual clauses approved by the European Commission. [TO REVIEW: confirm the safeguard offered by each provider when it is contracted.]',
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
						'When the contact form is sent, the data goes to Formspree (see the privacy policy). The links to Instagram lead to its website, which applies its own cookie policy. [TO REVIEW: confirm, when Formspree is activated in Phase 7, that it adds no cookies or third-party anti-spam checks to this website.]',
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
