const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true
  },
  salario: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
