import { Router } from "express";
import { methodsHTTP as proveedoresController } from "../controllers/proveedores.controller.js";

const router = Router();

router.get('/', proveedoresController.getAllProveedores);

export default router;