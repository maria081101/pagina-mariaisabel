const nombre = prompt("¿Cómo te llamas?");
const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (formato AAAA-MM-DD)");

const hoy = new Date();
const nacimiento = new Date(fechaNacimiento);

let edad = hoy.getFullYear() - nacimiento.getFullYear();
const mes = hoy.getMonth() - nacimiento.getMonth();
if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
  edad--;
}

document.getElementById("resultado").innerHTML =
  "<h2>Hola, " + nombre + ". Tienes " + edad + " años.</h2>";