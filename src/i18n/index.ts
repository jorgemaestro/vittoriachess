// Idiomas — ver docs/definicion.md (Idiomas). ES en la raíz, EN bajo /en/ con direcciones
// traducidas. Cualquier componente o página llama a usar(Astro) y recibe sus textos, sus
// direcciones y la dirección de la misma página en el otro idioma.
import es, { type Textos } from './es';
import en from './en';

export type Idioma = 'es' | 'en';
export type ClaveRuta =
	| 'inicio'
	| 'obras'
	| 'piezas'
	| 'autor'
	| 'contacto'
	| 'avisoLegal'
	| 'privacidad'
	| 'cookies';

const textos: Record<Idioma, Textos> = { es, en };

export const rutas: Record<Idioma, Record<ClaveRuta, string>> = {
	es: {
		inicio: '/',
		obras: '/obras',
		piezas: '/piezas',
		autor: '/autor',
		contacto: '/contacto',
		avisoLegal: '/aviso-legal',
		privacidad: '/privacidad',
		cookies: '/cookies',
	},
	en: {
		inicio: '/en',
		obras: '/en/works',
		piezas: '/en/pieces',
		autor: '/en/author',
		contacto: '/en/contact',
		avisoLegal: '/en/legal-notice',
		privacidad: '/en/privacy',
		cookies: '/en/cookies',
	},
};

// La dirección tal como se publica: sin barra final, sin "index" y sin ".html" (la web se
// genera como archivos sueltos, /obras.html, que se sirven en /obras).
export const sinBarraFinal = (ruta: string) =>
	ruta.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';

/** Dirección de la misma página en otro idioma (la home de ese idioma si no hay equivalente). */
export function equivalente(pathname: string, de: Idioma, a: Idioma): string {
	const actual = sinBarraFinal(pathname);
	for (const clave of Object.keys(rutas[de]) as ClaveRuta[]) {
		if (sinBarraFinal(rutas[de][clave]) === actual) return rutas[a][clave];
	}
	// Página de una obra: /obras/<obra> ↔ /en/works/<obra>
	if (actual.startsWith(`${rutas[de].obras}/`)) {
		return rutas[a].obras + actual.slice(rutas[de].obras.length);
	}
	return rutas[a].inicio;
}

function tieneEquivalente(pathname: string, de: Idioma): boolean {
	const actual = sinBarraFinal(pathname);
	return (
		Object.values(rutas[de]).some((ruta) => sinBarraFinal(ruta) === actual) ||
		actual.startsWith(`${rutas[de].obras}/`)
	);
}

export function usar(astro: { currentLocale?: string; url: URL }) {
	const idioma: Idioma = astro.currentLocale === 'en' ? 'en' : 'es';
	const otro: Idioma = idioma === 'es' ? 'en' : 'es';
	return {
		idioma,
		/** Textos del idioma de la página. */
		t: textos[idioma],
		/** Direcciones del idioma de la página. */
		r: rutas[idioma],
		/** La misma página en cada idioma (para el selector ES / EN y para Google). */
		enIdioma: {
			[idioma]: equivalente(astro.url.pathname, idioma, idioma),
			[otro]: equivalente(astro.url.pathname, idioma, otro),
		} as Record<Idioma, string>,
		/** true si la página existe en los dos idiomas (no es la 404 ni una página interna). */
		conEquivalente: tieneEquivalente(astro.url.pathname, idioma),
	};
}
