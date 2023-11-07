//Link de info : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

//Método stringigy - muestra como un string el objeto

let alumno = {
    "nombre": "Valentin",
    "apellido": "Rodriguez",
    "edad": 25,
}

console.log(JSON.stringify(alumno));

//Método JSON.parse - parsea de una cadena o string a objeto json
let otroAlumno = '{"nombre":"John","edad":30,"ciudad":"New York"}';
console.log(JSON.parse(otroAlumno));