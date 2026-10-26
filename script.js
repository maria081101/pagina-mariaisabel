const nombre = prompt("¿Cómo te llamas?");
const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (formato AAAA-MM-DD)");

const hoy = new Date();
const nacimiento = new Date(fechaNacimiento);

let edad = hoy.getFullYear() - nacimiento.getFullYear();
const mes = hoy.getMonth() - nacimiento.getMonth();
if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
  edad--;
}

if (edad >= 18) {
    document.getElementById("resultado").innerHTML = 
        "<h2>Hola, " + nombre + ". Tienes " + edad + " años. ¡Eres mayor de edad, bienvenido!</h2>";
} else {
    alert("Lo siento " + nombre + ", eres menor de edad y serás redireccionado.");
    window.location.href = "https://www.google.com";
}