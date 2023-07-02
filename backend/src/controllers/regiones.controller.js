import getConnection from "../db/database.js";
import { methodsHTTP } from "./categorias.controller.js";

async function getAllRegiones(req, res) {
    try {
        const response = await getConnection();
        const result = await response.query("SELECT * FROM regiones");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTPRegiones = {
    getAllRegiones
}