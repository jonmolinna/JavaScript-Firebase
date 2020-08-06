"use strict"

// Dato Numericos
var edad = 24;

var cantidad = "100";
var nuevaCantidad = Number(cantidad); // covierte de String a Numero

/* 
parseInt() => Conv. Entero   
parseFloat() => conv.  Decimales
*/

// Cadena de Textos
var bebida = "Agua";
var comida = "Ceviche";

// Datos Booleanos
var activo = true;
var pasivo = false;

// Datos de Fecha
var fecha = new Date();
fecha.getDay() // Devuelve el dia de la fecha
fecha.getDate() // Devuelve el mes de la fecha

// Simbolos en JS
var simbolo1 = Symbol();
var simbolo2 = Symbol();
var ambiente = Symbol('dev');

// Estructura de JSON
var persona = {nombre: 'Eung', edad: 23}

var personas = [
    {nombre: 'Nikone', edad: 24},
    {nombre: 'Tanase', edad: 25},
    persona
]

var personaJSON = JSON.stringify(persona); // Convierte un JSON a String
var nuevaPersona = JSON.parse(personaJSON); // Convierte un String a JSON