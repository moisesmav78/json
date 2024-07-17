import { Router } from 'express'
import * as trabajadoresController from '../controllers/trabajadores.controller.js'

const router = Router()

router.get('/trabajadores', personalController.findAll)
router.get('/trabajadores/:id', personalController.findById)
router.post('/trabajadores', personalController.create)
router.put('/trabajadores/id', personalController.updateById)
router.delete('/trabajadores/id', personalController.deleteById)

export default router
