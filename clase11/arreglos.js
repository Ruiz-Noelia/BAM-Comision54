let alumno1 = "Nahuel";
let alumno2 = "Noelia";
let alumno3 = "Micaela";

//array o arreglo: Colección de elementos
let alumnos = ["Nahuel", "Noelia", "Micaela", "Isabel", "Jesica"];
console.log(alumnos);

console.log(alumnos[3]); //los accedemos por el índice o posición

console.log("La cantidad de elementos de este array es: " 
+ alumnos.length); // muestra la longitud o la cantidad de elementos del array

alumnos.push("Aaron");
console.log(alumnos);

alumnos.push("Maria Sol");
console.log(alumnos);

alumnos.push("José");
console.log(alumnos);

console.log("La cantidad de elementos de este array es: " 
+ alumnos.length);

alumnos.pop(); //elimina el último elemento del array
console.log(alumnos);



//FUNCIÓN SALUDAR

let nombre = prompt("Ingresá tu nombre");

function saludar(nombre) { //nombre es el parámetro
    alert("Hola " + nombre + "! gracias por estar en la clase de hoy");
}

(saludar(nombre));

