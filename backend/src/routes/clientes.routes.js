import {Router} from "express";
import { methodsHTTP as clientesController} from "../controllers/clientes.controller.js";

const router = Router();

router.get('/', clientesController.getAllClientes);


export default router;