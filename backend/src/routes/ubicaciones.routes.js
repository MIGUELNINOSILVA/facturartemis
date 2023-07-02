import { Router } from "express";
import { methodsHTTPUbicaciones as ubicacionesController} from "../controllers/ubicaciones.controller.js";


const router = Router();

router.get('/', ubicacionesController.getAllUbicaciones);

export default router;