// Páginas principales de la web, en el orden de la barra — ver docs/definicion.md.
// Los textos y las direcciones de cada idioma están en src/i18n/.
import type { ClaveRuta } from '../i18n';

export type Pagina = Extract<ClaveRuta, 'obras' | 'piezas' | 'estudio' | 'contacto'>;

export const paginas: Pagina[] = ['obras', 'piezas', 'estudio', 'contacto'];
