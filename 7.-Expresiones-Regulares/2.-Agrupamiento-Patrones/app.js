// 1.-Patrones no sensibles a mayusculas y minusculas
 var expresion1 = /Hola Mundo/i;
    //console.log(expresion1.test('Hola mundo')); // Coincide con el patron => true


// 2.-Aprende a agrupar patrones en subexpresiones
var expresion2 = /Woo+(hoo+)+/i;
    //console.log(expresion2.test('Wooohooohooooo')); // true


// 3.-Coincidencias y grupos mediante exec y match
var expresion3 = /\d+/.exec('Del año 1984')
console.log(expresion3)

console.log('Hasta 1994'.match(/\d+/));