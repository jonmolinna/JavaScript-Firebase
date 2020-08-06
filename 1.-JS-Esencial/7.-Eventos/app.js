"use strict"

// Eventos del Mouse
const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    console.log('El boton se a pulsado');
})

boton.addEventListener('mouseover', function(){
    console.log('El mouse esta sobre el boton');
})

boton.addEventListener('mouseout', function(){
    console.log('El mouse esta fuera del boton');
})

// Eventos del Teclado
window.addEventListener('keydown', function(event){
    console.log('Pulsando tecla')
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener('keypress', function(){
    console.log('Tecla Pulsada')
})

window.addEventListener("keyup", function(){
    console.log('Tecla liberada')
})

// Evento de carga de documento
window.addEventListener('load', function(){
    console.log('El contenido de la ventana se ha cargado')
})

// Evento de Multimedia
const video = document.querySelector('.carro');

video.addEventListener('play', function(){
    console.log('El video a iniciado')
})

video.addEventListener("ended", function(){
    console.log("El video a terminado")
})

video.addEventListener("seeking", function(){
    console.log("Se movio al minuto de ", this.currentTime)
})

// Temporizadores o timers (setInterval => ejec. infinita, setTimeout => ejec. solo una vez)
function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue"
}

setTimeout(function(){
    setColor();
}, 3000)

/*
var temporizador = setInterval(function(){
    setColor();
}, 2000)

function stopChangeColor(){
    clearInterval(temporizador)
}
*/