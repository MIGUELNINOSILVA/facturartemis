import {Router} from "express";
import { methodsHTTP as empleadosController } from "../controllers/empleados.controller.js";


const router = Router();

router.get('/', empleadosController.getAllEmpleados);

export default router;