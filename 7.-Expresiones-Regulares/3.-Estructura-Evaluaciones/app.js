// 1.-Limitar palabras y cadenas de texto en una expresion regular
var expresion1 = /\bcat\b/;
    //console.log(expresion1.test("cat")); // => true
    //console.log(expresion1.test("categoria")); // => false


// 2.-Uso de patrones opcionales en tus expresiones regulares
var expresion2 = /pollo|res|pescado/;
    //console.log(expresion2);
    //console.log(expresion2.test('El cliente pidío pescado')); // => true


// 3.-Patrones al inicio y al final de una expresion
var expresion3 = /^Any|JavaScript$/;
console.log(expresion3.test('Any app that can be imagined can be in JavaScript')); // => true