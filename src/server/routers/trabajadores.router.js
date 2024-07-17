import { Router } from 'express'
import * as trabajadoresController from '../controllers/trabajadores.controller.js'

const router = Router()

router.get('/trabajadores', trabajadoresController.findAll)
router.get('/trabajadores/:id', trabajadoresController.findById)
router.post('/trabajadores', trabajadoresController.create)
router.put('/trabajadores/id', trabajadoresController.updateById)
router.delete('/trabajadores/id', trabajadoresController.deleteById)

export default router
