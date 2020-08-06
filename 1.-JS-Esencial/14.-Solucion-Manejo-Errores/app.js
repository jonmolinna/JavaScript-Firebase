"use strict"

// Manejo de Errores
try {
    var x = y;
} catch (error) {
    //console.log(error)
    //console.log(error.message)
    //console.log(error.name)
}

// Generacion de Errores Personalizados
var valor1 = 100;
var valor2 = 20;

try {
    if(valor1 > valor2){
        console.log(`Mensaje de Validacion: ${valor1} si es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} no es mayor que ${valor2}`)
    }
} catch (err) {
    console.log(error)
}