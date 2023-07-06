import { getCategorias , insertCategorias, deleteCategorias} from "./API.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loadContent();
});

async function loadContent(){
    const data = await getCategorias();
    const table = document.querySelector("#insert");
    console.log(data);
    data.forEach(categoria => {
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = categoria;
        table.innerHTML += `
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td style="height :1rem; width:1rem;">${Imagen}</td>
            <td><a class="btn btn-warning">Editar</a></td>
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
        CategoriaNombre : CategoriaNombre,
        Descripcion : CategoriaDescripcion,
        Imagen : CategoriaImagen
    }

    console.log(data);
    insertCategorias(data);

});

const table = document.querySelector('#insert');

table.addEventListener('click',(e)=>{
    if (e.target.classList.contains('delete')) {
        console.log(e.target.getAttribute('id'));
        const id = e.target.getAttribute('id');
        const confir = confirm('Deseas eliminar el dato?');
        if (confir) {
            deleteCategorias(id);
        }
    }
})