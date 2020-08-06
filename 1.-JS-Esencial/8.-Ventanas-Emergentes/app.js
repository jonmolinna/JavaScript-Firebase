"use strict"

// Ventanas de Alertas
    //alert('Estas en Capitulo 9')

// Ventana de Confirmacion
/*
const video = document.querySelector('.carro');

video.addEventListener('ended', function(){
    let resultado = confirm("¿Deseas ver el video nuevamente?");
    console.log(resultado)
    if(resultado){
        video.play();
    } else {
        console.log('Fin')
    }
})
*/

// Ventana para el ingreso de datos
const video = document.querySelector('.carro');

video.addEventListener("ended", function(){
    let email = prompt("Escribe tu correo para ver mas video", "data@info.com")
    if(email == null || email == "" || email == "data@info.com"){
        console.log("Sin datos")
    } else {
        console.log(email)
    }
});