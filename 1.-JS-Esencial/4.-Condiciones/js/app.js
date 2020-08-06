"use strict"

// Variables
var datoA = 10;
var datoB = 20;
var resultado = "Sin dato";

// Condicion IF
if( datoA > datoB){
    resultado = "La condicion se cumplio"
}

console.log("El if es:", resultado); // Sin dato

// Condicion IF ELSE
if ( datoA > datoB){
    resultado = "La condicion se cumplio";
} 
else if (datoB == datoA){
    resultado = "Segunda evaluacion verdadero";
}
else {
    resultado = "La condicion no se cumplio";
}

console.log("resultado if-else es: ", resultado); // La condicion no se cumplio

// Condiciones Anidadas
// Estructura Switch
var edad = 30;
var resul = "";

switch (edad) {
    case 10: resul = "La edad es 10 años"; break;
    case 20: resul = "La edad es 20 años"; break;
    case 30: resul = "La edad es 30 años"; break;
    default: resul ="Ningun caso coincide"; break;
}

console.log(resul); // La edad es de 30 años

/*** Cadena */
var product = "TV";

switch (product) {
    case "TV": resul = "Se eligio TV"; break;
    case "Radio": resul = "Se eligio Radio"; break;
    case "Telefono": resul = "Se eligio Telefono"; break;
    default: resul ="Ningun caso coincide"; break;
}

console.log(resul);