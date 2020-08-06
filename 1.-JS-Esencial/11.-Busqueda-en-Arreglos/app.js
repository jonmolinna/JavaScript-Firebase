"use strict"

// Iterando arreglos con for in
var platillos = ["ceviche", "tacos", "pasta"];

for(let i in platillos){
    console.log(platillos[i])
}

// Iteracion de arreglos con forEach
platillos.forEach((platillo, index) => console.log(index, platillo));

// Buscar un Arreglo
var menu = [
    {nombre: 'Ceviche', precio: 20, pais: 'Pais'},
    {nombre: 'Tacos', precio: 10, pais: 'Mexico'},
    {nombre: 'Pasta', precio: 50, pais: 'Italia'},
    {nombre: 'Quesadillas', precio: 15, pais: 'Mexico'}
];

var pElegido = menu.find(platillo => platillo.nombre == 'Tacos');
console.log(pElegido);

// Busqueda de indece de elementos
var numPlatillo = menu.findIndex(platillo => platillo.nombre == 'Pasta');
console.log(numPlatillo);

// Filtrar arreglos
var resultado = menu.filter(platillo => platillo.pais == 'Mexico');
console.log(resultado);

// Validacion de elementos de un arreglo