/* Repostería Gustocci · JavaScript común */
(function () {
  document.documentElement.classList.add('js');

  /* ===== CONFIGURACIÓN EDITABLE ===== */
  var WHATSAPP = '59170420780';           // número con código de país, sin +
  var CATEGORIAS = ['Tortas', 'Pasteles y postres individuales', 'Queques', 'Cupcakes', 'Galletas decoradas', 'Especialidades'];
  // p: precio en Bs. (null = "Consultar precio") · t: etiqueta promocional editable (vacía = sin etiqueta)
  var PRODUCTOS = [
    { id: 'torta-chocolate', n: 'Torta de Chocolate', c: 'Tortas', p: 120, t: '', img: 'torta-chocolate.jpg', alt: 'Porción de torta de chocolate con capas de crema y una cereza', e: '🍫', g: '#d7a98a,#8b4513', d: 'Deliciosa torta rellena con crema y cobertura de chocolate.', x: 'Chocolate, crema y cobertura de chocolate.' },
    { id: 'torta-fresa', n: 'Torta de Fresa', c: 'Tortas', p: 130, t: '', img: 'tarta-frutos-rojos.jpg', alt: 'Tarta con frutos rojos y rosetas de crema chantillí', e: '🍓', g: '#ffc2d6,#e0568f', d: 'Torta suave decorada con crema chantillí y fresas.', x: 'Crema chantillí y fresas. (La foto es referencial: tarta con frutos rojos.)' },
    { id: 'torta-tres-leches', n: 'Torta Tres Leches', c: 'Tortas', p: 125, t: '', img: '', alt: '', e: '🥛', g: '#bfe3f5,#4a9fd0', d: 'Suave y deliciosa torta preparada con una mezcla de tres leches.', x: 'Mezcla de tres leches.' },
    { id: 'queque-vainilla', n: 'Queque de Vainilla', c: 'Queques', p: 45, t: '', img: '', alt: '', e: '🍰', g: '#fff0a8,#f4c430', d: 'Queque esponjoso ideal para compartir en familia.', x: 'Vainilla, textura esponjosa.' },
    { id: 'cupcake-chocolate', n: 'Cupcake de Chocolate', c: 'Cupcakes', p: 12, t: '', img: '', alt: '', e: '🧁', g: '#e3c4f0,#9c4fc0', d: 'Cupcake decorado con deliciosa crema de chocolate.', x: 'Chocolate y crema de chocolate. Precio por unidad.' },
    { id: 'galletas-decoradas', n: 'Galletas Decoradas', c: 'Galletas decoradas', p: 25, t: '', img: '', alt: '', e: '🍪', g: '#ffd9a8,#f28c28', d: 'Galletas dulces decoradas para ocasiones especiales.', x: 'Decoración personalizable según la ocasión.' },
    { id: 'hojaldres', n: 'Hojaldres y panes dulces', c: 'Pasteles y postres individuales', p: null, t: '', img: 'hojaldres.jpg', alt: 'Palmeras de hojaldre, brioche y empanadas dulces recién horneadas', e: '🥐', g: '#ffe0b0,#d9a441', d: 'Variedad de hojaldres y panes dulces dorados, ideales para acompañar un café.', x: 'Masa de hojaldre y brioche.' },
    { id: 'bombones', n: 'Bombones y cañoncitos', c: 'Especialidades', p: null, t: '', img: 'bombones.jpg', alt: 'Bandeja dorada con bombones de chocolate y cañoncitos rellenos', e: '🍬', g: '#e8c0a0,#5b2a12', d: 'Bandeja de bombones y cañoncitos rellenos, perfecta para regalar o compartir.', x: 'Chocolate, rellenos cremosos y acabados crocantes.' }
  ];
  var OCASIONES = ['Ninguna', 'Cumpleaños', 'Aniversario', 'Boda', 'Otra ocasión'];

  /* ===== UTILIDADES ===== */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function precio(p) { return p.p ? 'Bs. ' + p.p : 'Consultar precio'; }
  function wa(t) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t); }
  function buscar(id) { return PRODUCTOS.filter(function (p) { return p.id === id; })[0]; }

  /* ===== ENCABEZADO Y PIE ===== */
  var pag = document.body.getAttribute('data-page');
  var LINKS = [['inicio', 'index.html', 'Inicio'], ['conocenos', 'conocenos.html', 'Conócenos'], ['productos', 'productos.html', 'Productos'], ['reservas', 'reservas.html', 'Reservas'], ['contacto', 'contacto.html', 'Contacto']];
  var cab = $('#cab'), pie = $('#pie');
  if (cab) {
    cab.outerHTML = '<header class="cab"><div class="wrap nav"><a class="marca" href="index.html">Gustocci</a><button class="burger" aria-label="Abrir menú" aria-expanded="false">☰</button><ul class="menu">' +
      LINKS.map(function (l) { return '<li><a href="' + l[1] + '"' + (l[0] === pag ? ' class="on" aria-current="page"' : '') + '>' + l[2] + '</a></li>'; }).join('') + '</ul></div></header>';
    var bur = $('.burger'), men = $('.menu');
    bur.addEventListener('click', function () { var o = men.classList.toggle('open'); bur.setAttribute('aria-expanded', o); });
  }
  if (pie) {
    pie.outerHTML = '<footer class="pie"><div class="wrap"><div class="cols"><div><h4>Repostería Gustocci</h4><p>Más que postres, creamos momentos especiales.</p></div><div><h4>Navegación</h4>' +
      LINKS.map(function (l) { return '<a href="' + l[1] + '">' + l[2] + '</a>'; }).join('') + '</div><div><h4>Contacto</h4><a href="' + wa('Hola Gustocci, quisiera hacer una consulta.') + '" target="_blank" rel="noopener">+591 70420780</a><a href="mailto:gustocci@gmail.com">gustocci@gmail.com</a><span>Oruro, Bolivia</span></div></div><p class="copy">© 2026 Repostería Gustocci · Oruro, Bolivia</p></div></footer><button class="arriba" aria-label="Volver al inicio de la página">↑</button>';
    var up = $('.arriba');
    up.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () { up.classList.toggle('on', window.scrollY > 500); }, { passive: true });
  }

  /* ===== APARICIÓN AL DESPLAZAR ===== */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 }) : null;
  function reveal() { $$('.rv:not(.in)').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); }); }

  /* ===== TARJETAS Y MODAL ===== */
  function thumb(p) {
    return p.img ? '<img class="thumb" src="img/' + p.img + '" alt="' + esc(p.alt) + '" loading="lazy">'
      : '<div class="thumb fb" style="background:linear-gradient(135deg,' + p.g + ')" role="img" aria-label="' + esc(p.n) + '">' + p.e + '</div>';
  }
  function card(p) {
    return '<article class="card rv">' + (p.t ? '<span class="tag">' + esc(p.t) + '</span>' : '') + thumb(p) +
      '<div class="body"><h3>' + esc(p.n) + '</h3><p>' + esc(p.d) + '</p><div class="row"><span class="precio">' + precio(p) +
      '</span><button class="pick" data-open="' + p.id + '">Ver detalles</button></div></div></article>';
  }
  function modal(id) {
    var p = buscar(id), d = $('#modal');
    if (!d) {
      d = document.createElement('dialog'); d.id = 'modal'; document.body.appendChild(d);
      d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('[data-close]')) d.close(); });
    }
    d.setAttribute('aria-label', p.n);
    d.innerHTML = '<button class="x" data-close aria-label="Cerrar">×</button>' + thumb(p) + '<div class="mb"><h3>' + esc(p.n) + '</h3><p class="cat">' + esc(p.c) + '</p><p>' + esc(p.d) + '</p>' +
      '<p><strong>Características:</strong> ' + esc(p.x) + '</p><p><strong>Tamaños y porciones:</strong> consúltalos al reservar.</p><p class="precio">' + precio(p) + '</p>' +
      '<div class="btns"><a class="btn b-naranja" href="reservas.html?producto=' + p.id + '">Reservar</a><a class="btn b-cafe" target="_blank" rel="noopener" href="' + wa('Hola Gustocci, quisiera consultar por: ' + p.n) + '">Consultar</a></div></div>';
    d.showModal();
  }
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-open]'); if (b) modal(b.getAttribute('data-open')); });

  /* Inicio: destacados */
  var dest = $('#destacados');
  if (dest) dest.innerHTML = ['torta-chocolate', 'torta-fresa', 'torta-tres-leches'].map(function (i) { return card(buscar(i)); }).join('');

  /* Productos: filtros + búsqueda */
  var cat = $('#catalogo');
  if (cat) {
    var filtro = 'Todas', chips = $('#chips'), q = $('#buscar');
    chips.innerHTML = ['Todas'].concat(CATEGORIAS.filter(function (c) { return PRODUCTOS.some(function (p) { return p.c === c; }); }))
      .map(function (c) { return '<button class="chip' + (c === 'Todas' ? ' on' : '') + '" aria-pressed="' + (c === 'Todas') + '">' + c + '</button>'; }).join('');
    var pintar = function () {
      var t = q.value.trim().toLowerCase();
      var l = PRODUCTOS.filter(function (p) { return (filtro === 'Todas' || p.c === filtro) && p.n.toLowerCase().indexOf(t) > -1; });
      cat.innerHTML = l.length ? l.map(card).join('') : '<p class="vacio">No encontramos productos con esa búsqueda. Prueba con otra palabra o escríbenos para un pedido especial.</p>';
      $('#cuenta').textContent = l.length + (l.length === 1 ? ' producto' : ' productos');
      reveal();
    };
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      $$('.chip').forEach(function (c) { c.classList.remove('on'); c.setAttribute('aria-pressed', 'false'); });
      b.classList.add('on'); b.setAttribute('aria-pressed', 'true'); filtro = b.textContent; pintar();
    });
    q.addEventListener('input', pintar); pintar();
  }

  /* ===== FORMULARIOS ===== */
  var CAMPOS = [
    ['nombre', 'Nombre', 'text', 1], ['apellido', 'Apellido', 'text', 1], ['tel', 'Teléfono o WhatsApp', 'tel', 1], ['cat', 'Tipo de producto', 'select', 1],
    ['prod', 'Producto específico', 'select', 1], ['cant', 'Cantidad', 'number', 1], ['tam', 'Tamaño o porciones', 'text', 0], ['ocasion', 'Ocasión especial', 'select', 0],
    ['fecha', 'Fecha de entrega', 'date', 1], ['hora', 'Hora preferida', 'time', 1], ['detalle', 'Sabor, relleno o decoración', 'text', 0, 'full'], ['msg', 'Mensaje adicional', 'textarea', 0, 'full']
  ];
  function campo(c) {
    var id = 'f-' + c[0], ctl = c[2] === 'select' ? '<select id="' + id + '"></select>' : c[2] === 'textarea' ? '<textarea id="' + id + '" rows="3"></textarea>' : '<input id="' + id + '" type="' + c[2] + '"' + (c[0] === 'cant' ? ' min="1" value="1"' : '') + (c[0] === 'tam' ? ' placeholder="Ej. 12 porciones"' : '') + '>';
    return '<div class="f ' + (c[4] || '') + '"><label for="' + id + '">' + c[1] + (c[3] ? ' *' : '') + '</label>' + ctl + '<span class="err" id="e-' + c[0] + '" role="alert"></span></div>';
  }
  var form = $('#reserva');
  if (form) {
    form.innerHTML = CAMPOS.map(campo).join('') + '<p class="nota full">* Campos obligatorios.</p><div class="full"><button class="btn b-rosa" style="width:100%" type="submit">Revisar mi pedido</button></div>';
    var v = function (k) { return $('#f-' + k).value.trim(); };
    var usadas = CATEGORIAS.filter(function (c) { return PRODUCTOS.some(function (p) { return p.c === c; }); });
    $('#f-cat').innerHTML = '<option value="">Selecciona un tipo</option>' + usadas.map(function (c) { return '<option>' + c + '</option>'; }).join('');
    $('#f-ocasion').innerHTML = OCASIONES.map(function (o) { return '<option>' + o + '</option>'; }).join('');
    var llenar = function (sel) {
      $('#f-prod').innerHTML = '<option value="">Selecciona un producto</option>' + PRODUCTOS.filter(function (p) { return p.c === v('cat'); }).map(function (p) { return '<option value="' + p.id + '">' + esc(p.n) + '</option>'; }).join('');
      if (sel) $('#f-prod').value = sel;
    };
    $('#f-cat').addEventListener('change', function () { llenar(); });
    llenar();
    var man = new Date(); man.setDate(man.getDate() + 1); $('#f-fecha').min = man.toISOString().slice(0, 10);
    var pre = (location.search.match(/producto=([\w-]+)/) || [])[1], pp = pre && buscar(pre);
    if (pp) { $('#f-cat').value = pp.c; llenar(pp.id); }

    form.addEventListener('submit', function (e) {
      e.preventDefault(); var ok = true, first = null;
      CAMPOS.forEach(function (c) {
        var k = c[0], el = $('#f-' + k), m = '';
        if (c[3] && !v(k)) m = 'Completa este campo.';
        else if (k === 'tel' && !/^\+?[\d\s-]{7,}$/.test(v(k))) m = 'Escribe un número válido (mínimo 7 dígitos).';
        else if (k === 'cant' && +v(k) < 1) m = 'La cantidad mínima es 1.';
        else if (k === 'fecha' && v(k) && v(k) < el.min) m = 'Elige una fecha desde mañana.';
        $('#e-' + k).textContent = m; el.classList.toggle('bad', !!m);
        if (m) { ok = false; first = first || el; }
      });
      if (!ok) { first.focus(); return; }
      var pr = buscar(v('prod')), rows = [['Nombre', v('nombre') + ' ' + v('apellido')], ['Teléfono', v('tel')], ['Producto', pr.n + ' (' + precio(pr) + ')'], ['Cantidad', v('cant')], ['Tamaño/porciones', v('tam') || '—'], ['Entrega', v('fecha').split('-').reverse().join('/') + ' a las ' + v('hora')], ['Ocasión', v('ocasion')], ['Detalles', v('detalle') || '—'], ['Mensaje', v('msg') || '—']];
      var txt = 'Hola Gustocci, quiero hacer una reserva:\n' + rows.map(function (r) { return '• ' + r[0] + ': ' + r[1]; }).join('\n');
      var r = $('#resumen');
      r.innerHTML = '<h3>Resumen de tu pedido</h3><dl>' + rows.map(function (x) { return '<dt>' + x[0] + '</dt><dd>' + esc(x[1]) + '</dd>'; }).join('') + '</dl>' +
        '<a class="btn wa" target="_blank" rel="noopener" href="' + wa(txt) + '">Confirmar y enviar por WhatsApp</a> <button class="btn b-borde" type="button" id="editar">Editar datos</button>' +
        '<p class="nota" style="margin-top:14px">Se abrirá WhatsApp con el mensaje listo. Tu reserva queda confirmada cuando Gustocci te responda.</p>';
      r.classList.add('on'); r.scrollIntoView({ behavior: 'smooth', block: 'center' });
      $('#editar').addEventListener('click', function () { r.classList.remove('on'); form.scrollIntoView({ behavior: 'smooth' }); });
    });
  }

  var cf = $('#consulta');
  if (cf) cf.addEventListener('submit', function (e) {
    e.preventDefault(); var n = $('#c-nombre'), m = $('#c-msg'), ok = true;
    [n, m].forEach(function (el) { var bad = !el.value.trim(); el.classList.toggle('bad', bad); $('#' + el.id.replace('c-', 'ce-')).textContent = bad ? 'Completa este campo.' : ''; if (bad) ok = false; });
    if (ok) window.open(wa('Hola Gustocci, soy ' + n.value.trim() + '. ' + m.value.trim()), '_blank', 'noopener');
  });

  reveal();
})();
