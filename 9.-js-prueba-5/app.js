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

//Pregunta4('Hola Mundo', 5)


/******************** CHALLENGE 5 *************************** */
/**
 * 5) Programa una función que invierta las palabras de una cadena de texto,
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */
function Pregunta5(palabra=""){
    if(!palabra){
        console.warn("Ingresa una Cadena");
    }
    else {
        console.info(palabra.split("").reverse().join(""));
    }
}

//Pregunta5("Hola Mundo")


/******************** CHALLENGE 6 *************************** */
/**
 * 6) Programa una función para contar el número de veces que se repite una palabra
 * en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
function Pregunta6(cadena="", texto=""){
    if(!cadena) return console.warn("Ingresa un texto largo");
    if(!texto) return console.warn("Ingresa una palabra a evaluar");

    let i=0;
    let contador=0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra se repite ${contador}`);
}

//Pregunta6("hola mundo adios mundo", "mundo");


/******************** CHALLENGE 7 *************************** */
/**
 * 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 * (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */
function Pregunta7(palabra){
    if(!palabra) return console.warn("Ingresa una Palabra");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return palabra === alReves;
}

//const output =Pregunta7("Salas")
//console.log(output)


/******************** CHALLENGE 8 *************************** */
/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
 * miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */
function Pregunta8(texto="", patron=""){
    if(!texto){
        console.warn("Ingresa un Texto");
    } else if (!patron){
        console.warn("Ingresa un patron");
    } else {
        console.log(texto.replace(new RegExp(patron, "ig"), ""))
    }
}

//Pregunta8("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");


/******************** CHALLENGE 9 *************************** */
/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */


/******************** CHALLENGE 10 *************************** */
/**
 * 10) Programa una función que reciba un número y evalúe si es capicúa o no
 * (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */


/******************** CHALLENGE 11 *************************** */
/**
 * 11) Programa una función que calcule el factorial de un número
 * (El factorial de un entero positivo n, se define como el producto de todos los números
 * enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */