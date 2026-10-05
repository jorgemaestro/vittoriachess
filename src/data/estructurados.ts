// Datos estructurados (schema.org) — ver docs/seo.md. Información que no se ve en la página
// y que explica a los buscadores qué es cada cosa: la marca, el autor y cada obra.
// Base.astro los escribe en la cabecera de la página que los pide.
import type { Obra } from './obras';

const WEB = 'https://www.vittoriachess.com';
const INSTAGRAM = 'https://www.instagram.com/vittoria_chess/';

const autor = (profesion: string, direccion: string) => ({
	'@type': 'Person',
	'@id': `${WEB}/#autor`,
	name: 'Jorge Maestro',
	jobTitle: profesion,
	url: WEB + direccion,
});

/** Home: la marca, la web y su autor. */
export function deLaMarca(descripcion: string, profesion: string, direccionAutor: string) {
	return [
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			'@id': `${WEB}/#marca`,
			name: 'Vittoria Chess',
			url: WEB,
			description: descripcion,
			founder: autor(profesion, direccionAutor),
			sameAs: [INSTAGRAM],
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			'@id': `${WEB}/#web`,
			name: 'Vittoria Chess',
			url: WEB,
			inLanguage: ['es', 'en'],
			publisher: { '@id': `${WEB}/#marca` },
		},
	];
}

/** Página Autor. */
export function delAutor(descripcion: string, profesion: string, direccion: string) {
	return [
		{
			'@context': 'https://schema.org',
			...autor(profesion, direccion),
			description: descripcion,
			brand: { '@id': `${WEB}/#marca` },
			sameAs: [INSTAGRAM],
		},
	];
}

/** Página de una obra: la obra de arte y su sitio dentro de la web. */
export function deLaObra(
	obra: Obra,
	completa: { nombre: boolean; tipo: boolean; medidas: boolean; anio: boolean; descripcion: boolean },
	textos: { profesion: string; obras: string },
	direcciones: { obra: string; obras: string; autor: string },
	idioma: string,
) {
	// Solo se declaran los datos que la ficha tiene: un [PENDIENTE] no es un dato.
	if (!completa.nombre) return [];
	return [
		{
			'@context': 'https://schema.org',
			'@type': 'VisualArtwork',
			name: obra.nombre,
			url: WEB + direcciones.obra,
			inLanguage: idioma,
			creator: autor(textos.profesion, direcciones.autor),
			...(completa.tipo && { artform: obra.tipo }),
			...(completa.anio && { dateCreated: obra.anio }),
			...(completa.medidas && { size: obra.medidas }),
			...(completa.descripcion && { description: obra.descripcion.join(' ') }),
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: textos.obras, item: WEB + direcciones.obras },
				{ '@type': 'ListItem', position: 2, name: obra.nombre, item: WEB + direcciones.obra },
			],
		},
	];
}
