import { Router } from 'express'
import * as peliculasController from '../controllers/peliculas.controller.js'
import { authToken } from '../middlewares/peliculas.middleware.js'

const router = Router()

router.get('/peliculas', peliculasController.findAll)
router.get('/peliculas/id',  peliculasController.findById)
router.post('/peliculas',  peliculasController.create)
router.put('/peliculas/id', peliculasController.updateById)
router.delete('/peliculas/id', peliculasController.deleteById)

export default router
