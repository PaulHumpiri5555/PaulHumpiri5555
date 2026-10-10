/* ================================
   BOTÓN VOLVER ARRIBA
================================ */

let botonSubir = document.getElementById("botonSubir");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    botonSubir.style.display = "block";
  } else {
    botonSubir.style.display = "none";
  }
});

function volverArriba() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
