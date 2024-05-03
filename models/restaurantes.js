const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    clasificacion: { type: Number, required: true },
    nombre: { type: String, required: true },
    sitio: String,
    correoElectronico: String,
    telefono: String,
    calle: String,
    ciudad: String,
    estado: String,
    lat: Number,
    lng: Number
  });
  
  const Restaurante = mongoose.model('Restaurante', restauranteSchema);
  
  module.exports = Restaurante;