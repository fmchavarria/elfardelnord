# El Far del Nord · Diseño renovado y fotografías originales

Esta versión recupera **exactamente el conjunto de fotografías gastronómicas y de fachada de la primera propuesta** (sin las imágenes posteriores del comedor con clientes) y actualiza exclusivamente los estilos.

- Titulares: **Zilla Slab Medium 500**.
- Textos: **Outfit Light 300**.
- Paleta: marfil `#F4EFE5`, verde `#303E34`, madera `#654835`, piedra `#D2C5B2`, tinta `#282823`.
- Tres idiomas: `index.html` (catalán), `es/index.html` (español) y `en/index.html` (inglés).
- Mantiene contenido, enlaces de reservas y archivos SEO existentes.

## Visualizar

Extrae **todo el ZIP**. Abre `index.html` (catalán) o `es/index.html` (español). Para que los enlaces y recursos funcionen, no muevas los HTML de su estructura. Alternativamente, ejecuta `python3 -m http.server 8000` desde la carpeta del proyecto.

## Pendiente de publicación

Verificar los horarios, precios y puntuaciones publicadas; completar la historia de Carles y Ramón y los textos legales; confirmar el dominio usado en las etiquetas SEO. Las reservas se realizan únicamente mediante el enlace de Google facilitado por el restaurante. La compresión Gzip/Brotli se configura en el servidor.


## Mejoras de accesibilidad
Cabecera sticky en escritorio con botón de reservas siempre visible; tamaños de texto y controles ampliados, estados de foco y mejor legibilidad de preferencias de cookies. En móvil se conserva el botón flotante de reservas.


Actualización: corregidos iconos y botón hamburguesa en móvil; añadida imagen Open Graph local open-graph-el-far-del-nord.jpg.


Actualización: eliminadas flechas, estrellas y glifos decorativos en los tres idiomas. Se conserva el botón de menú móvil dibujado con CSS.


## Correcciones de navegación y contenido (mobile refinado)
- Menú móvil con 3 líneas dibujadas en CSS, accesible, con nombre y estado expandido por idioma.
- Se cierra al seleccionar enlace, tocar fuera o pulsar Escape.
- Portada móvil de altura flexible; texto, reserva y enlace a cocina no se cortan.
- Botón de reserva flotante en móvil **solo** tras abandonar la portada; no tapa los CTAs iniciales.
- Simplificación editorial: se ha retirado la frase decorativa a página completa y la insignia de Restaurant Guru **provisional** (se repondrá cuando exista su original).
- Se han reducido las transiciones y eliminado el zoom de las fotos en hover.
- Conservados fotografías originales, reserva Google, redes, consentimiento y Open Graph.

Para publicar: revisar puntuaciones/horarios vigentes, la historia de Carles y Ramón y los textos legales definitivos.


## Ajustes de idiomas y reservas (nueva versión)
- Eliminado el enlace a la carta de TheFork, así como los enlaces externos a TheFork desde reseñas y pie de página. El dato de valoración de TheFork se conserva solo como referencia informativa, sin enlace a reservas.
- Eliminada la propiedad `hasMenu` que dirigía a TheFork del JSON-LD de Restaurant.
- Menú del mediodía remaquetado con tres bloques: nombre, días y precio, con disposición vertical en móvil y espacio entre los campos en desktop.
- Selector del pie de página con tres opciones independientes (`CA`, `ES`, `EN`), separadas y con área táctil de 45 × 45 px; texto de accesibilidad localizado.
- Reservas: solo Google, https://www.google.com/maps/reserve/v/dine/c/W364VXyCyhQ.
