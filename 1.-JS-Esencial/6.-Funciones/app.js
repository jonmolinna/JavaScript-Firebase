"use strict"

// Estructura Basica de una Funcion
function saludar(){
    var saludo = "Hola Mundo";
    console.log(saludo);
}

saludar();

// Parametros de una Funcion
function persona(nombre, edad){
    console.log(nombre, edad)
}

persona("Eung", 24);

// Inicializando Parametros
function contar(cantidad=20){
    console.log('Total ', cantidad);
}

contar() // devuelve 20
contar(100) // devuelve 100

// Parametros de Tipo REST
function cocinar(...masIngredientes){
    console.log("Ingredientes ", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Chile");

// Parametros de tipo SPREAD
// Funciones Anonimas
var hola = (nombre) => {
    var mensaje = "Hola " + nombre
    console.log(mensaje)
}

hola("Eung")

// Callbacks
// Funciones Arrow o Llamado funciones de flecha