// 1.-Creando un Expresion Regular
var expresion1 = new RegExp('abc');
var expresion2 = /Hola Mundo/;

var parrafo = /text1\/n texto2 /; // Para hacer un salto de linea


// 2.-Prueba y evalua tus primeras expresiones regulares
    //console.log(expresion1.test('abcdef')); // Si el expresion se encuentra => true
    //console.log(expresion1.test('abdef')); // El expresion se ecnutra => false
    //console.log(expresion2.test('El primer comentario es Hola Mundo')); // El expresion se encuentra => true


// 3.-Evaluar un conjunto de caracteres con expresiones regulares
var expresion3 = /[0123456789]/;
var expresion4 = /[0-9a-zA-Z]/;
//console.log(expresion3.test('Sucedio en 1996')); // Si los numeros se ecuentra dentro del rango => true


// 4.-Uso de atajos para grupos de caracteres
/**
 *      \d  =>  Cualquier Numero
 *      \w  =>  Cualquier letra o numero
 *      \s  =>  Cualquier espacio en blanco incluido tabs, salto de linea o similares
 *      \D  =>  Cualquier caracter que no sea un numero
 *      \W  =>  Cualquier caracter que no sea alfanumerico
 *      \S  =>  Cualquier caracter que no sea un espacio en blanco
 *      .   =>  Cualquier caracter excepto nueva lineas
 *      ^   =>  Negacion
 *      +   =>  Significa que el patron se va a repetir una o mas veces
 *      *   =>  Significa que el patron se va a repetir una o mas veces, pero acepta que no este presente
 *      ?   =>  Es un patron opcional que reemplaza un caracter
 */

    // Escribe un formato de fecha => 20-08-2020
var expresion5 = /\d\d-\d\d-\d\d\d\d/;
    //console.log(expresion5.test('20-08-2020')); // Coincide con el patron => true
    //console.log(expresion5.test('20-agosto-2020')); // Coincide con el patron => false


// 5.-Coincidencias y negaciones de expresiones
var expresion6 = /[^01]/;
    //console.log(expresion6.test('101001')); // Coincide con el patron Si es negacion => false


// 6.-Trabajar con caracteres especiales para repetir patrones
var expresion7 = /\d+/;
var expresion8 = /\d*/;
    //console.log(expresion7.test('1996')); //true
    //console.log(expresion7.test('')); //false
    //console.log(expresion8.test('')); //true
    //console.log(expresion8.test('1996')); //true


// 7.-Patrones opcionales en las expresiones regulares
var expresion9 = /Hola Mun?do/;
    //console.log(expresion9.test('Hola Mudo')); // Coincide con la expresion => true


// 8.-Conteo de patrones de expresiones regulares
    // {1,2} => minimo acepta un caracter y maximo dos caracteres
    // {2,} => minimo acepta un caracter y maximo cuantas veces
var expresion10 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(expresion10.test('20-08-2020 11:35')) // true