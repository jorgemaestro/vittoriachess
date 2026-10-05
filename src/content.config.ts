// Fichas de las obras — ver docs/definicion.md (Páginas: Obras, "Fichas de las obras").
// Un archivo por obra en src/content/obras/. El nombre del archivo es su identificador:
// la dirección de su página y el nombre de su carpeta de fotos.
//
// Las fichas se editan a mano con el Bloc de notas, así que se leen con un lector propio,
// tolerante: da igual la sangría, las comillas o que falten las líneas de guiones. Cada
// línea "campo: valor" es un dato; lo que sigue a "descripcion:" o a "detalles:" es su
// texto, hasta el siguiente campo.
import { defineCollection } from 'astro:content';
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const CARPETA = 'src/content/obras/';
const GENERALES = ['orden', 'anio', 'medidas'];
const POR_IDIOMA = ['nombre', 'tipo', 'edicion', 'descripcion', 'detalles'];
// Campos de varias líneas: la descripción (párrafos) y los detalles (uno por línea).
const DE_VARIAS_LINEAS = ['descripcion', 'detalles'];

const sinTildes = (texto: string) =>
	texto
		.toLowerCase()
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace('año', 'anio')
		.replace('ano', 'anio');
const sinComillas = (texto: string) => texto.trim().replace(/^(["'])(.*)\1$/, '$2').trim();

/** Convierte el texto de una ficha en sus datos. */
export function leerFicha(contenido: string) {
	const datos: Record<string, unknown> = { es: {}, en: {} };
	let idioma: 'es' | 'en' = 'es';
	let bloque: { clave: string; lineas: string[] } | null = null; // campo de varias líneas en curso

	const cerrarBloque = () => {
		if (!bloque) return;
		// Descripción: una línea en blanco separa párrafos. Detalles: cada línea es uno.
		const partes =
			bloque.clave === 'descripcion' ? bloque.lineas.join('\n').split(/\n\s*\n/) : bloque.lineas;
		(datos[idioma] as Record<string, string>)[bloque.clave] = partes
			.map((p) => p.replace(/\s+/g, ' ').trim())
			.filter(Boolean)
			.join('\n');
		bloque = null;
	};

	for (const linea of contenido.replace(/^﻿/, '').split(/\r?\n/)) {
		const limpia = linea.trim();
		if (/^-{3,}$/.test(limpia)) continue;

		const seccion = limpia.match(/^(es|en)\s*:$/i);
		if (seccion) {
			cerrarBloque();
			idioma = seccion[1].toLowerCase() as 'es' | 'en';
			continue;
		}

		const campo = limpia.match(/^([A-Za-zÁÉÍÓÚáéíóúÑñ]+)\s*:\s*(.*)$/);
		const clave = campo && sinTildes(campo[1]);
		if (campo && clave && (GENERALES.includes(clave) || POR_IDIOMA.includes(clave))) {
			cerrarBloque();
			const valor = campo[2];
			if (DE_VARIAS_LINEAS.includes(clave))
				bloque = { clave, lineas: [valor.replace(/^[>|][+-]?\s*/, '')] };
			else if (clave === 'orden') datos.orden = Number(sinComillas(valor));
			else if (GENERALES.includes(clave)) datos[clave] = sinComillas(valor);
			else (datos[idioma] as Record<string, string>)[clave] = sinComillas(valor);
			continue;
		}

		if (bloque) bloque.lineas.push(limpia);
	}
	cerrarBloque();
	return datos;
}

const fichas: Loader = {
	name: 'fichas-de-obras',
	load: async ({ store, parseData, generateDigest, watcher, logger, config }) => {
		const carpeta = fileURLToPath(new URL(CARPETA, config.root));

		const cargar = async () => {
			store.clear();
			// LEEME.md son las instrucciones de la carpeta, no una obra.
			const archivos = readdirSync(carpeta).filter((a) => a.endsWith('.md') && a !== 'LEEME.md');
			for (const archivo of archivos) {
				const id = archivo.replace(/\.md$/, '');
				try {
					const data = await parseData({ id, data: leerFicha(readFileSync(carpeta + archivo, 'utf-8')) });
					store.set({ id, data, digest: generateDigest(data) });
				} catch (error) {
					logger.error(`La ficha ${archivo} no se ha podido leer: ${(error as Error).message}`);
				}
			}
		};

		await cargar();

		// En desarrollo: al guardar, crear o borrar una ficha, se vuelven a leer todas.
		const alCambiar = async (ruta: string) => {
			if (!ruta.replace(/\\/g, '/').includes(CARPETA)) return;
			await cargar();
			logger.info(`Fichas de obras recargadas (${ruta.replace(/^.*[\\/]/, '')})`);
		};
		watcher?.on('change', alCambiar);
		watcher?.on('add', alCambiar);
		watcher?.on('unlink', alCambiar);
	},
};

const texto = z.string().nullish();
const porIdioma = z.object({
	nombre: texto,
	tipo: texto,
	edicion: texto,
	descripcion: texto,
	detalles: texto,
});

const obras = defineCollection({
	loader: fichas,
	schema: z.object({
		// Posición en el catálogo. Si falta, la obra va al final.
		orden: z.number().catch(999),
		anio: texto,
		medidas: texto,
		es: porIdioma,
		en: porIdioma,
	}),
});

export const collections = { obras };
