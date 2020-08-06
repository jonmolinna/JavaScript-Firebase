"use strict"

// Manejador de Errores
var boton = document.getElementById('boton');
var mensajes = document.getElementById('mensajes')

boton.addEventListener('click', function() {
    getCountries()
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries)
        })
        .catch(error => {
            mensajes.classList.toggle('hide');
            mensajes.innerHTML = error;
            setTimeout(() => mensajes.classList.toggle('hide'), 6000)
        })
})

function getCountries(){
    return fetch('URL')
};

function mostrarBanderas(countries){
    countries.map((e, i) => {
        e.name
    })
}