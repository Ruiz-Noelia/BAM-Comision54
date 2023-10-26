//ESTRUCTURA SWITCH

// let fruta = "pera";

// switch (fruta) {
//     case "manzana":
//         console.log(color = "rojo");
//         break; //rompe la estructura y sale

//     case "pera":
//         console.log(color = "verde");
//         break;

//     default:
//         console.log(color = "blanco");
//         break;
// }


let frutas = ["manzana", "kiwi", "pera", "sandia", "limón"];

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);

//ARRAY.MAP()
// frutas.map(fruta =>{
//     console.log(fruta);
// })

//fOR EACH - PARA CADA ELEMENTO DE ARRAY
// frutas.forEach(function(objeto, indice, arreglo){
//     console.log(objeto, indice, arreglo);
// })

//FILTRAR EL ARREGLO CON FILTROS
// frutas.forEach(fruta =>{
//     console.log(fruta);
// })

//ARREGLOS - MÉTODO FIND()
const numeros = [12, 23, 45, 69, 78, 100]; //arreglo de números

let resultado = numeros.find(numero => //buscamos el primer valor que cumpla la condición
    numero > 15)
console.log(resultado);

