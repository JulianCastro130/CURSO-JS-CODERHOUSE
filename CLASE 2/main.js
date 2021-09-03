var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");

if (edad >= 60 && edad <= 99){
    alert("Vive el sueño, " + nombre);
} else if (edad >= 100) {
    alert("WASTED");
} else if (edad >= 50) {
    alert("Prepara tu retiro, " + nombre);
} else if (edad >= 40) {
    alert("Dirigete al éxito, " + nombre);
} else if (edad >= 30) {
    alert("Domina tu elemento, " + nombre);
} else if (edad >= 20) {
    alert("Elige tu destino, "+ nombre);
} else if (edad < 20 ) {
    alert("Preparate para la vida, " + nombre);
} 