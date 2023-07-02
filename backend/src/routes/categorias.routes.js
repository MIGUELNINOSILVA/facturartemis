import { Router } from "express";
import { methodsHTTP as categoriasController} from "../controllers/categorias.controller.js";

const router = Router();

router.get('/',categoriasController.getAllCategorias);

export default router;