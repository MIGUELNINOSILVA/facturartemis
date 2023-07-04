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
        const data = req.body;
        console.log(data);
        // const result = await response.query("INSERT INTO categorias")
        res.json(data);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getAllCategorias,
    insertCategorias
}