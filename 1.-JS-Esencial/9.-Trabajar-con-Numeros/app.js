"use strict"

// Propiedades Numericas
console.log("MAX:VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);
console.log("NaN: ", Number.NaN);

// Metodos Numericos
var numero = "10.30";

console.log("Number: ", Number(numero)); // 10.3
console.log("parseInt: ", parseInt(numero)); // 10
console.log("parseFloat: ", parseFloat(numero)); // 10.3
console.log("isNaN: ", isNaN(numero)); // false => no es un numero
console.log("isInteger: ", Number.isInteger(numero)); // false => no es un numero entero, es cadena

// Metodos Numeros de Instancias
var numeros = 2.5;

console.log("toExponential: ", numeros.toExponential(4));
console.log("toFixed: ", numeros.toFixed(2)); // 2.50 => numeros de decimales
console.log("toPrecision: ", numeros.toPrecision(6)); // 2.50000 => 6 digitos con precision
console.log("toString: ", numeros.toString()); // Convierte un numero en String