import { Router } from "express";
import { methodsHTTP as correosController } from "../controllers/correos.controller.js";

const router = Router();


router.get('/', correosController.getAllCorreos);

export default router;