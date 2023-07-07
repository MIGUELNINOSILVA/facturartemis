import {
    getCategorias,
    insertCategorias,
    deleteCategorias,
    getCategoria
} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    loadContent();
});

async function loadContent() {
    const data = await getCategorias();
    const table = document.querySelector("#insert");
    console.log(data);
    data.forEach(categoria => {
        const {
            CategoriaID,
            CategoriaNombre,
            Descripcion,
            Imagen
        } = categoria;
        table.innerHTML += `
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td style="height :1rem; width:1rem;">${Imagen}</td>
            
            <td><button type="button" class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#modalCategoriaEditar" id="${CategoriaID}">
            Editar
        </button> </td>
            <td><button class="btn btn-danger delete" id="${CategoriaID}">Eliminar</button></td>
        </tr>
        `
    });
}

const formularioCategoria = document.querySelector('#formularioCategoria');

formularioCategoria.addEventListener('submit', (e) => {
    e.preventDefault();
    const CategoriaNombre = document.querySelector('#CategoriaNombre').value;
    const CategoriaDescripcion = document.querySelector('#CategoriaDescripcion').value;
    const CategoriaImagen = document.querySelector('#CategoriaImagen').value;

    const data = {
        CategoriaNombre: CategoriaNombre,
        Descripcion: CategoriaDescripcion,
        Imagen: CategoriaImagen
    }

    insertCategorias(data);

});

const table = document.querySelector('#insert');

table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('id');
        const confir = confirm('Deseas eliminar el dato?');
        if (confir) {
            deleteCategorias(id);
        }
    }
    if (e.target.classList.contains('edit')) {
        const id = e.target.getAttribute('id');
        editarCategoria(id);
    }
})

async function editarCategoria(id) {
    const data = await getCategoria(id);
    const dataJson = {
        CategoriaID: data[0].CategoriaID,
        CategoriaNombre: data[0].CategoriaNombre,
        Descripcion: data[0].Descripcion,
        Imagen: data[0].Imagen
    }
    formularioEdit(dataJson);
}

function formularioEdit(data) {
    console.log(data);
    const formularioCategoriaEdit = document.querySelector('#formularioCategoriaEdit');
    const CategoriaNombreEdit = document.querySelector('#CategoriaNombreEdit');
    const CategoriaDescripcionEdit = document.querySelector('#CategoriaDescripcionEdit');
    const CategoriaImagenEdit = document.querySelector('#CategoriaImagenEdit');

    // Asignar los valores al formulario
    CategoriaNombreEdit.value = data.CategoriaNombre;
    CategoriaDescripcionEdit.value = data.Descripcion;
    CategoriaImagenEdit.value = data.Imagen;

    formularioCategoriaEdit.addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoJson = {
            CategoriaID :data.CategoriaID,
            CategoriaNombre: CategoriaNombreEdit.value,
            Descripcion: CategoriaDescripcionEdit.value,
            Imagen: CategoriaImagenEdit.value
        }
        console.log(nuevoJson);
        
    })
}