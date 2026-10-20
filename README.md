# Repostería Gustocci · sitio web

Sitio estático (HTML, CSS y JavaScript, sin dependencias). Solo usa Google Fonts para las tipografías.

## Abrir en tu computadora
Descomprime la carpeta y haz doble clic en `index.html`.

## Qué editar
- **Productos, precios y etiquetas:** `js/main.js`, lista `PRODUCTOS`.
  - `p: null` muestra “Consultar precio”.
  - `t: 'Más vendido'` muestra una etiqueta en la tarjeta (vacío = sin etiqueta).
  - `img: 'archivo.jpg'` usa una foto de la carpeta `img/`; si está vacío se muestra un ícono de color.
- **Número de WhatsApp:** `js/main.js`, variable `WHATSAPP` (con código de país, sin +). El número del botón de contacto también aparece en `contacto.html`.
- **Horarios, redes sociales y mapa:** `contacto.html` (comentarios `EDITAR` y `MAPA`).
- **Misión y visión:** `conocenos.html` (son textos sugeridos; reemplázalos por los reales).
- **Colores:** variables al inicio de `css/estilos.css`.

## Fotos
Las imágenes de `img/` son recortes de tu banner. Para tener una foto real de cada postre, guarda tus fotos en `img/` (ancho ideal 800 px, formato JPG) y escribe su nombre en `img:` y su descripción en `alt:`.

## Reservas y consultas
No hay servidor: los formularios validan los datos, muestran un resumen y abren WhatsApp con el mensaje ya escrito. El pedido solo queda enviado cuando el cliente pulsa “Enviar” en WhatsApp. Para recibir pedidos por correo se necesita un servicio de formularios (por ejemplo Formspree o Netlify Forms).

## Publicar gratis
- **Netlify:** arrastra la carpeta completa a https://app.netlify.com/drop.
- **GitHub Pages:** sube los archivos a un repositorio y activa Pages en Settings.
