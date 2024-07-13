const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarios');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', usuarioRoutes);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_bd_crud', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
