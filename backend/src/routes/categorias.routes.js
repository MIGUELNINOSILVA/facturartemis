import { Router } from "express";
import { methodsHTTP as categoriasController} from "../controllers/categorias.controller.js";

const router = Router();

router.get('/',categoriasController.getAllCategorias);
router.post('/',categoriasController.insertCategorias);

export default router;