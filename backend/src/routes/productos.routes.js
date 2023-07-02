import { Router } from "express";
import { methodsHTTP as productosController} from "../controllers/productos.controller.js";

const router = Router();

router.get('/', productosController.getAllProductos);

export default router;