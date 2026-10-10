/* ================================
   FILTRO DE CARRERAS 
================================ */

function filtrar(area, boton) {
  let tarjetas = document.querySelectorAll("[data-area]");
  let botones = document.querySelectorAll("[data-filtro]");

  // solo el botón elegido queda en verde sólido
  botones.forEach(function (b) {
    b.classList.remove("btn-edu");
    b.classList.add("btn-outline-success");
  });
  boton.classList.remove("btn-outline-success");
  boton.classList.add("btn-edu");

  // se ocultan las carreras de otras áreas
  tarjetas.forEach(function (tarjeta) {
    let ocultar = area !== "todas" && tarjeta.dataset.area !== area;
    tarjeta.classList.toggle("d-none", ocultar);
  });
}
