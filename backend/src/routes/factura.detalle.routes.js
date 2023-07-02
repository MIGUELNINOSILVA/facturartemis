import { Router } from "express";
import { methodsHTTP as facturaDetalleController} from "../controllers/factura.detalle.controller.js";


const router = Router();

router.get('/', facturaDetalleController.getAllFacturaDetalle);


export default router;