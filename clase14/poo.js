//Una clase es una plantilla o un molde para crear objetos
//En JavaScript, las clases son una nueva forma de definir constructores y prototipos.

class Persona {
    //método principal
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    //otros métodos
    //método es acción - comportamiento
    saludar(nombre) {
        return `La persona ${this.nombre} Te manda saludos`; //`{}
    }
}

//creamos objetos
let persona1 = new Persona('Juan', 'Perez'); //instanciamos un objeto de tipo Persona
console.log(persona1);

console.log(persona1.saludar());

let persona2 = new Persona('Juana', 'Velez');
console.log(persona2);

console.log(persona2.saludar());
