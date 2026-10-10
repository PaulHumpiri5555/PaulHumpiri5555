function ejercicio01() {
  //Entradas
  let dolares = Number(prompt("Ingrese la cantidad en dólares: "));
  let tasa = Number(prompt("Ingrese la tasa de cambio a moneda local: "));
  //Proceso
  let local = dolares * tasa;
  //Salida
  alert("$" + dolares + " equivalen a " + local + " en moneda local");
}

function ejercicio02() {
  //Entradas
  let largo = Number(prompt("Ingrese el largo del terreno: "));
  let ancho = Number(prompt("Ingrese el ancho del terreno: "));
  //Proceso
  let area = largo * ancho;
  let perimetro = 2 * (largo + ancho);
  //Salida
  alert("El area del terreno es de " + area + " m²");
  alert("El perimetro del terreno es de " + perimetro + " m");
}

function ejercicio03() {
  document.getElementById("imagenProducto").src = "../imagenes/REAL-MADRID.jpg";
  
  document.getElementById("tituloProducto").innerHTML = "Real Madrid";
  document.getElementById("descripcionProducto").innerHTML = "El Real Madrid es uno de los clubes más grandes del mundo. En la imagen se ve a su plantel con la camiseta blanca, listo para competir en el campo.";
  document.getElementById("skuProducto").innerHTML = "SKU: RM-900";
  document.getElementById("precioProducto").innerHTML = "$900,000,000.00";
  document.getElementById("tituloProducto").style.color = "";
  document.getElementById("descripcionProducto").style.color = "";
  alert("La imagen y el texto del producto cambiaron al tema del Real Madrid");
}

function ejercicio04() {
  document.getElementById("imagenProducto").src = "../imagenes/portada-1-e1616067350247.webp";
  document.getElementById("tituloProducto").innerHTML = "Champions League";
  document.getElementById("descripcionProducto").innerHTML = "La copa de la Champions League es el trofeo más deseado del fútbol europeo. El Real Madrid la ha ganado 15 veces.";
  document.getElementById("skuProducto").innerHTML = "SKU: UCL-100";
  document.getElementById("precioProducto").innerHTML = "$100,000,000.00";
  document.getElementById("tituloProducto").style.color = "#0b3d91";
  document.getElementById("descripcionProducto").style.color = "#0b3d91";
  alert("La imagen y el texto del producto cambiaron al tema de la Champions League");
}
