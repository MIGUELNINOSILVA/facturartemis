import { Router } from "express";
import { methodsHTTP as categoriasController} from "../controllers/categorias.controller.js";

const router = Router();

router.get('/',categoriasController.getAllCategorias);
router.get('/:id',categoriasController.getCategoria);
router.post('/',categoriasController.insertCategorias);
router.delete('/:id',categoriasController.deleteCategorias);
router.put('/:id',categoriasController.updateCategoria);

export default router;