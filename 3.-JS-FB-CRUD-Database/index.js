// Importando la base de datos de Firebase
const db = firebase.firestore();
const taskForm = document.getElementById('task-form');
const taskContainer = document.getElementById('tasks-container');
let editStatus = false;
let id = '';

// Guardando datos en una collection
const saveTask = (title, description) => {
    db.collection('tasks').doc().set({
        title,
        description
    })
}

// Obteniendo las Tareas
//const getTasks = () => db.collection('tasks').get();

// Funcion que actualiza cuando hay nuevos cambios
const onGetTasks = (callback) => db.collection('tasks').onSnapshot(callback);

// Funcion que permite eliminar una tarea
const deleteTask = id => db.collection('tasks').doc(id).delete();

// Funcion que permite obtener un solo tarea mediante el id
const getTask = (id) => db.collection('tasks').doc(id).get();

// Funcion que permite actuaizar una tarea
const updateTask = (id, updatedTask) => db.collection('tasks').doc(id).update(updatedTask)

// Evento que carga cuando y ejecuta una funcion
window.addEventListener('DOMContentLoaded', async (e) => {
    //const querySnapshot = await getTasks();
    onGetTasks((querySnapshot) => {
        taskContainer.innerHTML = '';
        querySnapshot.forEach(doc => {
            
            const task = doc.data();
            task.id = doc.id;
            //console.log(task);

            taskContainer.innerHTML += `<div class="card card-body mt-2 border-success">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <div>
                    <button class="btn btn-primary btn-delete" data-id="${task.id}">Delete</button>
                    <button class="btn btn-secondary btn-edit" data-id="${task.id}">Edit</button>
                </div>
            </div>`

            const btnDelete = document.querySelectorAll('.btn-delete'); // Obtiene todo los elem del btn
            btnDelete.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    await deleteTask(e.target.dataset.id);
                })
            })

            const btnEdit = document.querySelectorAll('.btn-edit');
            btnEdit.forEach(btn => {
                btn.addEventListener('click', async e => {
                    const doc = await getTask(e.target.dataset.id);
                    const task = doc.data();
                    editStatus = true;
                    id = doc.id;

                    taskForm['task-title'].value = task.title;
                    taskForm['task-description'].value = task.description;
                    taskForm['btn-task-form'].innerText = 'Update';
                })
            })
        })
    })
})

// Evento que te permite obtener el valor de las tareas
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskForm['task-title'];
    const description = taskForm['task-description']

    if(!editStatus){
        await saveTask(title.value, description.value);
    } else {
        await updateTask(id, {
            title: title.value,
            description: description.value
        });
        editStatus = false;
        id = '';
        taskForm['btn-task-form'].innerText = 'Save'
    }

    
    taskForm.reset(); // Limpiar el formulario 
    title.focus();
});