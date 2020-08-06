"use strict"

// Operadores Aritmeticos
var a = 10;
var b = 20;

var suma = a + b;
var resta = a - b;
var multipilicar = a * b;
var division = a / b;
var modulo = a % b; // Modulo o Residuo

var incremento = a;
incremento++; // Incrementa en mas uno

var decremento = a;
decremento--;
decremento = decremento - 1;

// Operadores Relacionales
var c = 10;
var d = 20;

var mayor = c > d; // falso
var menor = c < d; // true
/*
>= => mayor o igual
<= => menor o igual
== => igual que
!= => es diferente que
*/

// Operadores Logicos
var e = 10;
var d = 20;

var and = (e > 10 && d > 10); // (Y) false
var or = (e > 10 || d > 10); // (O) true
var not = !(e > 10); // Operador de negacion (!) true

// Operadores de Asignacion
var datoE = 10;

var igual = datoE;

var masIgual = 10;
masIgual += datoE; // 20  => masIgual = masIgual + datoE

var menosIgual = 10;
menosIgual -= datoE; // 0

var porIgual = 10;
porIgual *= datoE; // 100

var entreIgual = 20;
entreIgual /= datoE; // 2

// Operador Negativo
var datoF = 10;
var datoG = -datoF;

// Operador de Concatenacion
var datoH = 10;
var datoI = 20;

var nombre = "Eung";
var apellido = "Nikone";

var concatNumeros = datoH + datoI; // 30
var concatTexto = nombre + ' ' + apellido; // Eung Nikone

// Operador Temario o Condicional
var datoJ = 10;
var datoK = 20;

    // Condicion ? TRUE : FALSE
var resultado = datoJ > datoK ? "Si es mayor" : "No es mayor"; // No es mayor

// Operador de tipo de datos
var name = "Eung";

var persona = {
    edad: 24,
    name: "Nikone"
}

console.log(typeof persona); // Objeto
console.log(typeof persona.edad); // Numero