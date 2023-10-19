let nombre = prompt("Ingresá tu nombre");
let nota = prompt(nombre + ", Ingresá la nota del primer sprint");

//Validación de la nota
//si la nota es mayor a 10
if(nota > 10){
    alert("La nota no puede ser superior a 10");
}
//sino si..
else if(nota >=8){
    alert("Presentás directamente el proyecto final el 16/11");
}
//sino si..
else if(nota >=6){
    alert("Avanzamos al segundo sprint");
}
//sino
else{
    alert("No se avanza al siguiente sprint, debés mejorar tus habilidades en programación");
}