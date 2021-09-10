let resultado = parseInt(prompt("Ingrese posición inicial"));
let numero = parseInt(prompt("Ingrese cantidad de kilometros x vuelta"));
let vuelta = parseInt(prompt("Ingrese cantidad de vueltas"));
document.write("Posición inicial: "+resultado+" "+"km."+"<br>");
document.write(resultado+"km<br>");
console.log(resultado);
for (let i=0;i<vuelta;i++){
    resultado += numero;
    document.write(resultado+"km"+"<br>");
    console.log(resultado);
}
document.write("Posición final: "+resultado+"km.");