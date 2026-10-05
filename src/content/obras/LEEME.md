# Fichas de las obras

Una ficha por obra. Se abre con el Bloc de notas y se rellena como un formulario.

- El **nombre del archivo** (minúsculas, sin tildes ni espacios: `gambito.md`) es la
  dirección de la página (`/obras/gambito`) y el nombre de su carpeta de fotos
  (`src/assets/obras/gambito/01.jpg`, `02.jpg`…). Si renombras la ficha, renombra la carpeta.
- Cada campo va en su línea: el nombre del campo, dos puntos y el valor. Los espacios del
  principio dan igual.
- Un campo vacío sale en la web como `[PENDIENTE]`.
- La descripción se escribe debajo de `descripcion:` (o a continuación, en la misma línea).
  Puede ocupar varias líneas; una línea en blanco separa párrafos. Termina donde empieza
  el siguiente campo.
- `detalles` es opcional: otras características, una por línea (altura del rey, peso del
  tablero, número de piezas, estuche…). Si se deja vacío, no aparece en la web.
- Los datos de debajo de `es:` son los españoles y los de debajo de `en:`, los ingleses.
- Al guardar (Ctrl+S) y recargar la página, se ven los cambios.

| Campo | Qué es |
| --- | --- |
| orden | Posición en el catálogo (1 arriba). Las posiciones 2, 5 y 8 son horizontales; el resto, verticales |
| anio | Año |
| medidas | Medidas, tal como se leerán: `60 × 60 × 12 cm` |
| nombre, tipo, edicion, descripcion, detalles | En español (bajo `es:`) y en inglés (bajo `en:`) |

Ejemplo de ficha rellena:

```yaml
---
orden: 1
anio: 2025
medidas: 60 × 60 × 12 cm

es:
  nombre: Nombre de la obra
  tipo: Tablero mural
  edicion: Edición de 8
  descripcion: >
    Primer párrafo de la descripción, que puede
    ocupar varias líneas.

    Segundo párrafo.
  detalles:
    Altura del rey: 9 cm
    32 piezas
    Estuche de piel

en:
  nombre: Name of the work
  tipo: Wall board
  edicion: Edition of 8
  descripcion: >
    First paragraph.
---
```

Para añadir una obra: copiar una ficha, cambiarle el nombre, rellenarla y crear su carpeta
de fotos. Para quitarla: borrar la ficha.
