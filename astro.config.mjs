// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Obras que aún no tienen nombre en su ficha (src/content/obras/): su página lleva
// "noindex" y tampoco debe salir en el mapa del sitio. Se mira por idioma.
const sinNombre = readdirSync('src/content/obras')
	.filter((archivo) => archivo.endsWith('.md') && archivo !== 'LEEME.md')
	.flatMap((archivo) => {
		const [es = '', en = ''] = readFileSync(`src/content/obras/${archivo}`, 'utf-8').split(/^\s*en\s*:\s*$/im);
		const conNombre = (texto) => /^\s*nombre\s*:[ \t]*\S/im.test(texto);
		const obra = archivo.replace(/\.md$/, '');
		return [!conNombre(es) && `/obras/${obra}`, !conNombre(en) && `/en/works/${obra}`].filter(Boolean);
	});

// https://astro.build/config
export default defineConfig({
	// Dirección definitiva de la web (con www, como la tiene Google indexada desde Wix).
	// La usan las direcciones canónicas, las etiquetas para redes y el mapa del sitio.
	site: 'https://www.vittoriachess.com',
	// Direcciones sin barra final: /obras, no /obras/. Cada página se genera como un archivo
	// suelto (obras.html), que el alojamiento sirve en /obras sin redirecciones.
	trailingSlash: 'never',
	build: { format: 'file' },
	integrations: [
		// Mapa del sitio para buscadores, sin las páginas internas.
		sitemap({
			filter: (pagina) =>
				!/\/(sistema|404)\/?$/.test(pagina) &&
				!sinNombre.includes(new URL(pagina).pathname.replace(/\/$/, '')),
		}),
	],
	// Español en la raíz e inglés bajo /en/ (ver docs/definicion.md, Idiomas).
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: { prefixDefaultLocale: false },
	},
	vite: {
		server: {
			// En Windows, el servidor de pruebas dejaba a veces de ver los cambios en los
			// archivos y servía estilos antiguos. Revisarlos por sondeo lo evita. Solo afecta
			// a `npm run dev`, no a la web publicada.
			watch: { usePolling: true, interval: 300 },
		},
	},
});
