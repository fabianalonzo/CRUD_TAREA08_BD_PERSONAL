const express = require('express')

//Actualización para desplegar el FRONT-END
const cors = require('cors') //Permisos sobre el contenido a desplegar
const path = require('path') //Express servir el frontend

const peliculaRoutes = require('./routes/PeliculaRoutes')

const app = express()
const PORT = process.env.PORT || 3000 //Puerto de la App

//Actualización - Permisos corsS
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

//Comunicación se realizará JSON
app.use(express.json())

//Rutas
app.use('/api/pelicula', peliculaRoutes)

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado http://localhost:${PORT}`)
})
