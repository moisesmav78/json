import { Router } from 'express'
import * as clientesController from '../controllers/clientes.controller.js'

const router = Router()

router.post('/register', clientesController.register)
router.post('/login', clientesController.login)

export default router

