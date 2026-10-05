# Fotos de la web

Copia cada foto en su carpeta con el nombre exacto de la tabla (la extensión puede ser
.jpg, .png o .webp). Al guardar, aparece sola en su sitio; mientras falte, se ve una caja
gris. Detalle completo en docs/definicion.md ("Fotos y vídeos: nombres de archivo").

| Dónde | Carpeta | Nombres |
| --- | --- | --- |
| Obras: una carpeta por obra, con el nombre de su ficha | obras/obra-01/ … | 01 (foto principal), 02, 03 … |
| Las piezas | piezas/ | peon, caballo, alfil, torre, reina, rey |
| Home, cuadro junto al manifiesto (foto cuadrada) | home/ | piezas |
| El autor, acceso de la home | autor/ | home |
| El autor, foto de la página | autor/ | retrato |

Ejemplo: la foto principal de la primera obra es `src/assets/obras/obra-01/01.jpg`.
Los datos de cada obra están en su ficha: `src/content/obras/` (ver su LEEME).

Originales a buena resolución: unos 1600 px de lado largo. Astro las recorta a la
proporción de su hueco y genera las versiones ligeras para cada pantalla.

Los vídeos no van aquí: se suben a Cloudflare R2 (ver el documento).
