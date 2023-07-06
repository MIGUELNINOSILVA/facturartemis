import getConnection from "../db/database.js";

async function getAllCategorias(req, res) {
    try {
        const response = await getConnection();
        const result = await response.query("SELECT * FROM categorias");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function insertCategorias(req, res) {
    try {
        const response = await getConnection();
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const categoria = {
            CategoriaNombre,
            Descripcion,
            Imagen
        };
        const result = await response.query("INSERT INTO categorias SET ?", categoria);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function getCategoria(req, res) {
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function deleteCategorias(req, res) {
    try {
        const response = await getConnection();
        const { id } = req.params;
        const result = await response.query("DELETE FROM categorias WHERE CategoriaID = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getAllCategorias,
    insertCategorias,
    getCategoria,
    deleteCategorias
}