// 1.-Conoce y usa el metodo Replace en las cadenas de texto
var expresion1 = 'El cliente pidió sushi y comió su sushi';
    //console.log(expresion1.replace(/sushi/g, 'tacos'));


// 2.-Conoce y usa el metodo de busqueda en las cadenas de texto
var expresion2 = 'Esta historia continuará...';
    //console.log(expresion2.search(/\W/)); // => devuelve 4


// 3.-La propiedad lastindex dentro de las expresiones regulares
var expresion3 = /\d/g;

// console.log(expresion3.exec('Pedí 4 tacos y 1 agua')); // indice 5
// console.log(expresion3.exec('Pedí 4 tacos y 1 agua')); // indice 15
// expresion3.lastIndex = 0; // reinicia el contador
// console.log(expresion3.exec('Pedí 4 tacos y 1 agua')); // indice 5


// 4.-Ciclos y evaluaciones en las expresiones regulares
var expresion4 = "Llegaban por montones, primero 10, después 20, después 35 y se duplicaban";
var patron = /\b(\d+)\b/g;
var match;
while (match = patron.exec(expresion4)){
    console.log(match)
    console.log('Se encontró ', match[1], " en la posicion: ", match.index);
}