// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			// En Windows, el servidor de pruebas dejaba a veces de ver los cambios en los
			// archivos y servía estilos antiguos. Revisarlos por sondeo lo evita. Solo afecta
			// a `npm run dev`, no a la web publicada.
			watch: { usePolling: true, interval: 300 },
		},
	},
});
