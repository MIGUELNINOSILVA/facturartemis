import {
    obtainCategories,
    obtenerCategory

} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    showCategorias();
    showModalDetalles();
});

/* LISTAR CATEGORIAS  - CRUD (R) */
async function showCategorias() {
    try {
        const categorias = await obtainCategories();
        console.log(categorias);
        const categories = document.querySelector('#categories');
        categorias.forEach(categoria => {
            const {
                CategoriaID,
                CategoriaNombre,
                Descripcion,
                Imagen
            } = categoria;
            categories.innerHTML += `
            <tr>
            <th>${CategoriaID}</th>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td><img src="" alt="Imagen" width="1rem"></td>
            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarModal" data-id="${CategoriaID}" id="editarBoton">Editar</button></td>
            <td><a href="#" class="btn btn-danger">Eliminar</a></td>
            <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#detalleModal" data-id="${CategoriaID}" id="detallesBoton">Detalles</button></td>
          </tr>
            `
        });
    } catch (error) {

    }
}

function showModalDetalles() {
    const editarBoton = document.querySelector('#editarBoton');
    const detallesBoton = document.querySelector('#detallesBoton');
    detallesBoton.addEventListener('click', ()=>{
        console.log("Clic");
    });

}
/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)