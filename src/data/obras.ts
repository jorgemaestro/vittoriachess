// Obras — ver docs/definicion.md (Páginas: Obras).
// Los datos de cada obra están en su ficha (src/content/obras/<identificador>.md) y sus
// fotos en src/assets/obras/<identificador>/01, 02… Aquí se juntan con el hueco que le
// toca a cada una en el catálogo, por orden.
import { getCollection } from 'astro:content';
import type { Idioma } from '../i18n';

// Huecos del catálogo en px del lienzo de 1440 (la página los pasa a vw). El patrón de
// seis se repite 4320 px más abajo si hay más obras.
const HUECOS = [
	{ izquierda: 138, arriba: 201, ancho: 512, alto: 696 },
	{ izquierda: 789, arriba: 726, ancho: 592, alto: 473 },
	{ izquierda: 434, arriba: 1386, ancho: 572, alto: 773 },
	{ izquierda: 790, arriba: 2361, ancho: 512, alto: 696 },
	{ izquierda: 59, arriba: 2886, ancho: 592, alto: 473 },
	{ izquierda: 434, arriba: 3546, ancho: 572, alto: 773 },
];
const CICLO = 4320;

const hueco = (i: number) => {
	const h = HUECOS[i % HUECOS.length];
	return { ...h, arriba: h.arriba + CICLO * Math.floor(i / HUECOS.length) };
};

// Fotos de cada obra, por carpeta: { 'obra-01': ['obras/obra-01/01', 'obras/obra-01/02'] }
const fotosPorObra: Record<string, string[]> = {};
for (const ruta of Object.keys(
	import.meta.glob('/src/assets/obras/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'),
).sort()) {
	const [, carpeta, archivo] = ruta.match(/obras\/([^/]+)\/([^/]+)\.[^.]+$/) ?? [];
	if (carpeta) (fotosPorObra[carpeta] ??= []).push(`obras/${carpeta}/${archivo}`);
}

/** Marcadores [PENDIENTE] del idioma, para los campos vacíos (t.obras.sinDatos). */
type SinDatos = Record<'nombre' | 'tipo' | 'medidas' | 'edicion' | 'anio' | 'descripcion', string>;

export interface Obra {
	/** Identificador: nombre de su ficha, de su carpeta de fotos y final de su dirección. */
	slug: string;
	izquierda: number;
	arriba: number;
	ancho: number;
	alto: number;
	nombre: string;
	tipo: string;
	medidas: string;
	edicion: string;
	anio: string;
	/** Párrafos de la descripción. */
	descripcion: string[];
	/** Otras características, una por línea. Opcional: vacío si la ficha no las tiene. */
	detalles: string[];
	/** Fotos (carpeta y nombre sin extensión); la primera es la principal. */
	fotos: string[];
	/** true si la obra tiene alguna foto en su carpeta. */
	conFotos: boolean;
	/** Qué datos vienen de la ficha (true) y cuáles son un marcador [PENDIENTE] (false). */
	completa: Record<'nombre' | 'tipo' | 'medidas' | 'anio' | 'descripcion', boolean>;
}

/** Identificadores de todas las obras, para generar sus páginas. */
export const identificadores = async () => (await getCollection('obras')).map((o) => o.id);

/** Las obras en el orden del catálogo, con los textos del idioma pedido. */
export async function cargarObras(idioma: Idioma, sinDatos: SinDatos): Promise<Obra[]> {
	const fichas = (await getCollection('obras')).sort(
		(a, b) => a.data.orden - b.data.orden || a.id.localeCompare(b.id),
	);
	const dato = (valor: string | null | undefined, marcador: string) => valor?.trim() || marcador;

	return fichas.map((ficha, i) => {
		const textos = ficha.data[idioma];
		return {
			slug: ficha.id,
			...hueco(i),
			nombre: dato(textos?.nombre, sinDatos.nombre),
			tipo: dato(textos?.tipo, sinDatos.tipo),
			medidas: dato(ficha.data.medidas, sinDatos.medidas),
			edicion: dato(textos?.edicion, sinDatos.edicion),
			anio: dato(ficha.data.anio, sinDatos.anio),
			descripcion: dato(textos?.descripcion, sinDatos.descripcion)
				.split(/\n+/)
				.map((p) => p.trim())
				.filter(Boolean),
			detalles: (textos?.detalles ?? '').split(/\n+/).filter(Boolean),
			conFotos: Boolean(fotosPorObra[ficha.id]),
			completa: {
				nombre: Boolean(textos?.nombre?.trim()),
				tipo: Boolean(textos?.tipo?.trim()),
				medidas: Boolean(ficha.data.medidas?.trim()),
				anio: Boolean(ficha.data.anio?.trim()),
				descripcion: Boolean(textos?.descripcion?.trim()),
			},
			// Sin fotos todavía: tres cajas grises con los nombres que se esperan.
			fotos:
				fotosPorObra[ficha.id] ?? ['01', '02', '03'].map((n) => `obras/${ficha.id}/${n}`),
		};
	});
}
