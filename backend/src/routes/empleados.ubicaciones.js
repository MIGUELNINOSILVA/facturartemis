import {Router} from 'express';
import { methodsHTTP as empleadosUbicacionesController } from '../controllers/empleados.ubicaciones.controller.js';


const router = Router();

router.get('/', empleadosUbicacionesController.getAllEmpleadosUbicacion);

export default router;
