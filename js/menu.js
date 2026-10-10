let botonMenu = document.getElementById("botonMenu");
let menuLista = document.getElementById("menuLista");

function abrirMenu() {
  menuLista.classList.toggle("abierto");

  let abierto = menuLista.classList.contains("abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
  if (abierto) {
    botonMenu.textContent = "\u2715 Cerrar";
  } else {
    botonMenu.textContent = "\u2630 Men\u00fa";
  }
}
