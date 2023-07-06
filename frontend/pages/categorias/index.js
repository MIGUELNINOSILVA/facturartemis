import { getCategorias } from "./API.js";

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
        </tr>
        `
    });
}

const formularioCategoria = document.querySelector('#formularioCategoria');

formularioCategoria.addEventListener('submit', () => {
    const CategoriaNombre = document.querySelector('#CategoriaNombre');
    const CategoriaDescripcion = document.querySelector('#CategoriaDescripcion');
    
})
