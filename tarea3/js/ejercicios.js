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
  alert("El area del terreno es de " + area + " m2");
  alert("El perimetro del terreno es de " + perimetro + " m");
}