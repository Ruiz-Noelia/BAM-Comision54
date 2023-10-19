let nombre = prompt("Ingresá tu nombre");
let edad = prompt(nombre + ", Ingresá tu edad");

//si
if (edad >= 16 && edad <= 80) {
    alert("Podes votar este domigno 22/10");
}

//sino, si..
else if (edad >=81) {
    alert("Podés votar pero acompañado");
}

//sino
else {
    alert("No podes votar aun, sos menor de edad");
}
