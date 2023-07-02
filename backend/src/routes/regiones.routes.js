import { Router } from "express";
import { methodsHTTPRegiones as regionesController} from "../controllers/regiones.controller.js";

const router = Router();

router.get('/', regionesController.getAllRegiones);

export default router;