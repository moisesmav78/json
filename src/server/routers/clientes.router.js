import { Router } from 'express'
import * as clientesController from '../controllers/clientes.controller.js'

const router = Router()

router.post('/register', usuariosController.register)
router.post('/login', usuariosController.login)

export default router

