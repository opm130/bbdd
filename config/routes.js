import { Router } from "express";
import infoController from "../controllers/infoController.js";

const router=new Router()

// Obtiene info disponibles
router.get('/info',infoController.index)
// Crea un nuevo info
router.post('/info',infoController.store)
// Obtiene detalles del info por el id
router.get('/info/:id',infoController.details) 

export default router