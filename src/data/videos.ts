// Vídeos de la home — ver docs/definicion.md (Fotos y vídeos: nombres de archivo).
// Hasta publicar (Fase 10, Cloudflare R2) se leen de public/video/, que no se sube al
// repositorio. Cada vídeo se busca por su nombre fijo; el que falte deja el bloque
// provisional (horizontal) o simplemente no se usa (vertical y póster, opcionales).
import { existsSync } from 'node:fs';

const CARPETA = 'public/video';
const BASE = '/video';

const direccion = (archivo: string) =>
	existsSync(`${CARPETA}/${archivo}`) ? `${BASE}/${archivo}` : undefined;

/** Vídeo cuadrado del cuadro que acompaña al manifiesto de la home (opcional). */
export const videoPiezas = () => ({
	video: direccion('video-piezas.mp4'),
	poster: direccion('video-piezas-poster.jpg'),
});

export const video = (nombre: 'principal' | 'obras') => ({
	horizontal: direccion(`video-${nombre}-horizontal.mp4`),
	vertical: direccion(`video-${nombre}-vertical.mp4`),
	poster: direccion(`video-${nombre}-poster.jpg`),
});
