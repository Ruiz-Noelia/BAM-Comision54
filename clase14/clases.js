class Persona {
    static idPersona = 0; //atributos de clase

    constructor(nombre, apellido) {
        this._idPersona = ++Persona.idPersona; //atributo del objeto
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //getter y setter

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    //Método toString()
    toString() {
        return `ID persona: ${this._idPersona}
Nombre: ${this._nombre},
Apellido: ${this._apellido}`;
    }

}


//CREAMOS OTRA CLASE - PROMOTOR
class Promotor extends Persona { //extender = heredar (tanto atributos como comportamiento)

    static idPromotor = 0;

    constructor(nombre, apellido, email) {
        super(nombre, apellido); //PRIMERO SIEMPRE traer lo de la clase padre
        this._idPromotor = ++Promotor.idPromotor;
        this._email = email;
    }

    //método get (traer)
    get idPromotor() {
        return this._idPromotor;
    }

    get email() {
        return this._email;
    }

    //método set (settear, fijar, establecer)
    set email(email) {
        this._email = email;
    }

    toString() {
        return `${super.toString()},
id promotor: ${this._idPromotor},
email: ${this._email}` //alt gr + }
    }

}

//CREAMOS OTRA CLASE - ALUMNOS

class Alumno extends Persona{

    static idAlumno = 0; //atributo estático de la clase

    constructor(nombre, apellido, cuil) {
        super(nombre, apellido);
        this._idAlumno = ++Alumno.idAlumno;
        this._cuil = cuil;
    }

    get idAlumno(){
        return this._idAlumno;
    }

    get cuil(){
        return this._cuil;
    }

    set cuil(cuil){
        this._cuil=cuil;
    }

    toString(){
        return `${super.toString()}
id alumno: ${this._idAlumno},
CUIL: ${this._cuil}`;
    }

}

//INSTANCIAMOS OBJETOS DE LA CLASE PERSONA
let persona1 = new Persona("Luis", "Gonzalez");
console.log(persona1);

console.log(persona1.toString());

let persona2 = new Persona("Juana", "Lopez");
console.log(persona2);

console.log(persona2.toString());

//INSTANCIAMOS OBJETOS DE LA CLASE PROMOTOR
let promotor1 = new Promotor("Noelia", "Ruiz", "ruiz@mail.com");
console.log(promotor1);

console.log(promotor1.toString());

let promotor2 = new Promotor("Jesus", "Diaz", "jdiaz@mail.com"); //instanciamos un promotor - objeto de la clase promotor
console.log(promotor2);

console.log(promotor2.toString());

//INSTANCIAMOS OBJETOS DE LA CLASE ALUMNO
let alumno1 = new Alumno("Michel", "Merlo", 23569700); //instanciamos un objeto de la clase Alumno
console.log(alumno1);

console.log(alumno1.toString());

let alumno2 = new Alumno("Pablo", "Areco", 23754700); //instanciamos un objeto de la clase Alumno
console.log(alumno2);

console.log(alumno2.toString());