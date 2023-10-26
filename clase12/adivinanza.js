let numero = 7; //este es el número a adivinar
let intentos = 1;

function adivinar() {
    let respuesta = document.getElementById("respuesta").value;
    let resultado = document.getElementById("resultado");
    
    //si el número es igual a 7
    if(respuesta == numero){
        resultado.textContent= "¡Felicitaciones, acertaste el número en " + intentos + " intentos!";
        resultado.style.color = "green";
        intentos++;
    }
    //sino, SI el número es mayor a 7
    else if(respuesta > numero){
        resultado.textContent = "El número que estás buscando es menor. Intentalo de nuevo";
        resultado.style.color = "red";
        intentos++;
    }
    //si la respuesta es menor a 7
    else{
        resultado.textContent = "El número que estás buscando es mayor. Intentalo de nuevo";
        resultado.style.color = "red";
        intentos++;
    }

    document.getElementById("respuesta").value = "";
}