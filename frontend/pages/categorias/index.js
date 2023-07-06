import { getCategorias , insertCategorias} from "./API.js";

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
            <td><a class="btn btn-danger">Eliminar</a></td>
            <td>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCategoriaEditar">
                Editar
            </button>
          </td>
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

})
