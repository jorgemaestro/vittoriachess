# Fotos de la web

Copia cada foto en su carpeta con el nombre exacto de la tabla (la extensión puede ser
.jpg, .png o .webp). Al guardar, aparece sola en su sitio; mientras falte, se ve una caja
gris. Detalle completo en docs/definicion.md ("Fotos y vídeos: nombres de archivo").

| Dónde | Carpeta | Nombres |
| --- | --- | --- |
| Obras (orden de la tabla del documento) | obras/ | obra-01 … obra-08 |
| Las piezas | piezas/ | peon, caballo, alfil, torre, reina, rey |
| Entrevista, acceso de la home | entrevista/ | home |
| Entrevista, bloques de la página | entrevista/ | bloque-01 … bloque-06 |

Ejemplo: la primera obra es `src/assets/obras/obra-01.jpg`.

Originales a buena resolución: unos 1600 px de lado largo. Astro las recorta a la
proporción de su hueco y genera las versiones ligeras para cada pantalla.

Los vídeos no van aquí: se suben a Cloudflare R2 (ver el documento).
