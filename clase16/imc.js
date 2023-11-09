let nombre = prompt('Ingresá tu nombre');
let peso = prompt(nombre + " " + ", ingresá tu peso en kilos");
let altura = prompt('ingresá tu altura en centimetros');

//convierto la altura a metros
altura = altura / 100;

let imc = peso / (altura * altura);  //calculo del imc - ^ alt + {

function calcularIMC() {
    if (imc < 18.5) {
        alert('Estás bajo de peso, IMC: ' + Math.round(imc));
    } else if (imc >= 18.5 && imc < 24.9) {
        alert('Tu peso normal, IMC: ' + Math.round(imc));
    } else if (imc >= 25 && imc < 29.9) {
        alert('Tenes sobrepeso, IMC: ' + Math.round(imc));
    } else {
        alert('Tenés obesidad, IMC: ' + Math.round(imc))
    }

    return Math.round(imc);
}

calcularIMC();