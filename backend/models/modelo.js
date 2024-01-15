const mongoose = require('mongoose');

const modeloSchema = new mongoose.Schema({
  modelo: String,
  ano: Number,
  marca: String,
  preco: Number,
});

module.exports = mongoose.model('modelo', modeloSchema);
