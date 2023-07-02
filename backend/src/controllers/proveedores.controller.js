import getConnection from "../db/database.js";

async function getAllProveedores(req, res) {
    try {
        const response = await getConnection();
        const result = await response.query("SELECT * FROM proveedores");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getAllProveedores
}