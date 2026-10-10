/* ================================
   CIFRAS ANIMADAS 
================================ */

let cifras = document.querySelectorAll("[data-meta]");

function animarCifra(cifra) {
  let meta = Number(cifra.dataset.meta);
  let sufijo = cifra.dataset.sufijo || "";
  let actual = 0;
  let paso = Math.ceil(meta / 60);

  let reloj = setInterval(function () {
    actual = Math.min(actual + paso, meta);
    cifra.textContent = actual.toLocaleString("es-PE") + sufijo;

    if (actual >= meta) {
      clearInterval(reloj);
    }
  }, 25);
}

// La animación empieza cuando la cifra aparece en pantalla
let observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      animarCifra(entrada.target);
      observador.unobserve(entrada.target);
    }
  });
});

cifras.forEach(function (cifra) {
  observador.observe(cifra);
});
