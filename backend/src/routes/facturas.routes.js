import { Router } from "express";
import { methodsHTTP as facturasController } from "../controllers/facturas.controller.js";

const router = Router();

router.get('/', facturasController.getAllFacturas);


export default router;