//RUTAS = acceso a los recursos
//Verbos:
//GET - Obtener, PUT = Actualizar, POST = crear, DELETE = eliminar
const express = require('express')

//Enrutador
const router = express.Router()

//Acceso = Crear, Listar, etc...
const peliculaController = require('../controllers/peliculaController')

//Definiendo las rutas
router.post('/', peliculaController.crearPelicula)

router.get('/', peliculaController.obtenerPeliculas)

router.get('/:id', peliculaController.obtenerPeliculaPorId)

router.put('/:id', peliculaController.actualizarPelicula)

router.delete('/:id', peliculaController.eliminarPelicula)

module.exports = router