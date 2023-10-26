let frutas = ["manzana", "pera", "naranja", "mandarina", "banana", "kiwi", "frutilla", "uva", "melón"];

//BUCLE FOR - BUCLE 'PARA, para cierta cantidad de iteraciones
// for (let index = 0; index < frutas.length; index++) {
//     console.log(frutas[index]);
    
// }

//BUCLE MIENTRAS - WHILE
// let i = 0; //el contador lo inicializo en 0
// while (i < frutas.length) {
//     console.log(i +1, "° elemento de arreglo:", frutas[i]);
//     i = i +1;
// }

//BUCLE DO WHILE - HACER MIENTRAS
//Este bucle se ejecuta al menos una vez
let i = 0; do {
    console.log("elemento " + (i+1) + ": " + frutas[i]);
    i++;
} while (i < frutas.length);