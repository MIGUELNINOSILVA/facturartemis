import getConnection from "../db/database.js";

async function getAllFacturaDetalle(req, res) {
    try {
        const response = await getConnection();
        const result = await response.query("SELECT * FROM facturadetalle");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getAllFacturaDetalle
}