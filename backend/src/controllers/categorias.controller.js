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

export const methodsHTTP = {
    getAllCategorias,
    insertCategorias
}