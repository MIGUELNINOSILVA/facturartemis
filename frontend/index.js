import {
 obtainCategories, obtenerCategory

} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
 showCategorias();
});

/* LISTAR CATEGORIAS  - CRUD (R) */
async function showCategorias() {
    try {
        const categorias = await obtainCategories();
        console.log(categorias);
    } catch (error) {
        
    }
}


/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


