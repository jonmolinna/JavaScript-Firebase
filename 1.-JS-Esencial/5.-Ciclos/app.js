"use strict"

// Ciclo Difinido FOR
var numeros =  [9,6,7,8,1,3,2,4,5,6,10];
var menor = numeros[0];
var mayor = numeros[0];

for(let i=0; i < numeros.length; i++){
    if(menor > numeros[i]){
        menor = numeros[i]
    }  
}
console.log(menor)

for(let i=0; i<numeros.length; i++){
    if(mayor < numeros[i]){
        mayor = numeros[i]
    }
}
console.log(mayor);

// Ciclo indefinido While
var producto = 5;

while(producto > 0) {
    console.log('Producto Vendido')
    producto--
};

// Ciclo indefinido DO WHILE
var dato = 5;

do {
    console.log('Dato Vendido');
    dato --;
} while (dato >=1)

// Controlar Ciclos
var contador = 0;
var cuenta = 0;

for(contador = 0; contador <= 20; contador++){
    if(contador == 5){
        break // Rompe con el ciclo
    }
    if(contador % 2 == 0){
        continue;
    }
    cuenta++;
}

console.log(cuenta);