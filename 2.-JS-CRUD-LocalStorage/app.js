// Variables globales
const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];

// Funciones
const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);
    return item;
}

const GuardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades)); // Guardando en formato JSON
    PintarDB();
}

const PintarDB = () => {
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('rutina')); // Convierte en formato de Arreglo
    if(arrayActividades === null){
        arrayActividades = [];
    } else {
        arrayActividades.forEach(element => {
            if(element.estado){
                listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-3">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="btn material-icons">done</i><i class="btn material-icons">delete</i></span></div>`;
            } else {
                listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-3">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="btn material-icons">done</i><i class="btn material-icons">delete</i></span></div>`;
            } 
        });
    }
}

const EliminarDB = (actividad) => {
    let indexArray;
    arrayActividades.forEach((element, index) => {
        if(element.actividad === actividad){
            indexArray = index;
        }
    });
    arrayActividades.splice(indexArray,1)
    GuardarDB();
}

const EditarDB = (actividad) => {
    let indexArray = arrayActividades.findIndex((element) => element.actividad === actividad)
    arrayActividades[indexArray].estado = true;
    //console.log(arrayActividades[indexArray])
    GuardarDB(); 
}

// EventListener
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;
    CrearItem(actividadUI);
    GuardarDB();
    formularioUI.reset(); // Limpia el formulario
});

    // Este evento se ejecuta una vez que el HTML ya esta cargado
document.addEventListener('DOMContentLoaded', PintarDB);

listaActividadesUI.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[1].innerHTML; // Capturando el texto
        if(e.target.innerHTML === 'delete'){
            // Accion de Eliminar
            EliminarDB(texto)
        }
        if(e.target.innerHTML === 'done'){
            // Accion de Editar
            EditarDB(texto);
        }
    }
});