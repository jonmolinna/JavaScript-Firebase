/******************** CHALLENGE 1 *************************** */
/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.
 * miFuncion("Hola Mundo") devolverá 10.
 */
function Pregunta1(str=""){
    if(!str){
        console.warn("Ingrese un texto");
    } else {
        console.info(`Son Caracteres: ${str.length}`);
    }
}

//Pregunta1('Hola Mundo');


/******************** CHALLENGE 2 *************************** */
/**
 * 2) Programa una función que te devuelva el texto recortado según el número 
 * de caracteres indicados, pe.
 * miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
function Pregunta2(cadena="", longitud=undefined){
    if(!cadena){
        console.warn("Ingrese una cadena")
    } 
    else if(longitud===undefined){
        console.info("Ingresa una Longitud")
    } 
    else {
         console.info(cadena.slice(0, longitud))
    }
}

//Pregunta2("Hola Mundo",4)


/******************** CHALLENGE 3 *************************** */
/**
 * 3) Programa una función que dada una String te devuelva un Array de textos separados
 *  por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
function Pregunta3(cadena="", sepador=undefined){
    if(!cadena){
        console.warn("Ingrese una cadena")
    }
    else if(sepador===undefined){
        console.info("Ingresa un separador")
    }
    else {
        console.info(cadena.split(sepador))
    }
}

//Pregunta3("Hola a todos", " ")


/******************** CHALLENGE 4 *************************** */
/**
 * 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 *  devolverá Hola Mundo Hola Mundo Hola Mundo.
 */
const Pregunta4 = (texto="", veces=undefined) => {
    if(!texto) return console.warn("Ingrese un Texto");

    if(veces === undefined) return console.warn('Ingresa un Numero de Veces');

    if(veces === 0) return console.error("El numero de veces no puede ser cero");

    if(Math.sign(veces) === -1) return console.error('Ingrese un Numero Positivo');

    for(let i=1; i<= veces; i++){
        console.log(`${texto} - ${i}`)
    }
}

Pregunta4('Hola Mundo', 5)


/******************** Tarea para Casa *************************** */
/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/