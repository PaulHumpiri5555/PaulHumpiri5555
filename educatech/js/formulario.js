/* ================================
   FORMULARIO DE INSCRIPCIÓN
================================ */

let formulario = document.getElementById("formInscripcion");
let dni = document.getElementById("dni");
let celular = document.getElementById("celular");
let nacimiento = document.getElementById("nacimiento");
let carrera = document.getElementById("carrera");
let motivo = document.getElementById("motivo");
let contador = document.getElementById("contador");
let botonEnviar = document.getElementById("botonEnviar");


/* ---------- Ayudas mientras se escribe ---------- */

// DNI y celular solo aceptan números
function soloNumeros(evento) {
  evento.target.value = evento.target.value.replace(/\D/g, "");
  revisarCampos();
}

// Validaciones que el navegador no hace por sí solo
function revisarCampos() {
  let dniValido = /^\d{8}$/.test(dni.value);
  let celularValido = /^9\d{8}$/.test(celular.value);

  dni.setCustomValidity(dniValido ? "" : "El DNI debe tener 8 números.");
  celular.setCustomValidity(celularValido ? "" : "El celular debe tener 9 dígitos.");
}

// Edad mínima: 18 años
function limitarFechaNacimiento() {
  let hoy = new Date();
  hoy.setFullYear(hoy.getFullYear() - 18);
  nacimiento.max = hoy.toISOString().split("T")[0];
}

// Si llegas desde carreras.html?carrera=... la carrera ya viene elegida
function preseleccionarCarrera() {
  let elegida = new URLSearchParams(window.location.search).get("carrera");

  if (elegida) {
    carrera.value = elegida;
  }
}

dni.addEventListener("input", soloNumeros);
celular.addEventListener("input", soloNumeros);

motivo.addEventListener("input", function () {
  contador.textContent = motivo.value.length + "/300";
});

limitarFechaNacimiento();
preseleccionarCarrera();
revisarCampos();


/* ---------- Envío ---------- */

function enviarFormulario(evento) {
  evento.preventDefault();
  revisarCampos();

  // Si hay errores, se muestran y se lleva al primer campo con problema
  if (!formulario.checkValidity()) {
    formulario.classList.add("was-validated");

    let primerError = formulario.querySelector(":invalid");
    primerError.focus();
    primerError.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }

  simularPost();
}

// Simulación de POST: no hay servidor, así que se espera un momento
function simularPost() {
  let datos = Object.fromEntries(new FormData(formulario).entries());
  let codigo = "ET-" + new Date().getFullYear() + "-" + Math.floor(10000 + Math.random() * 90000);

  botonEnviar.disabled = true;
  botonEnviar.textContent = "Enviando...";

  setTimeout(function () {
    console.log("POST /api/inscripcion", datos, codigo);
    mostrarConfirmacion(datos, codigo);
  }, 1400);
}

function mostrarConfirmacion(datos, codigo) {
  document.getElementById("codigo").textContent = codigo;
  document.getElementById("resPostulante").textContent = datos.nombres + " " + datos.apellidos;
  document.getElementById("resDni").textContent = datos.dni;
  document.getElementById("resCarrera").textContent = datos.carrera;
  document.getElementById("resTurno").textContent = datos.turno;
  document.getElementById("resCorreo").textContent = datos.correo;

  document.getElementById("modalExito").showModal();

  // Se deja el formulario listo para otra inscripción
  formulario.reset();
  formulario.classList.remove("was-validated");
  contador.textContent = "0/300";
  revisarCampos();

  botonEnviar.disabled = false;
  botonEnviar.textContent = "Enviar inscripción";
}

formulario.addEventListener("submit", enviarFormulario);
