const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
  nome: String,
  email: String,
});

module.exports = mongoose.model('vendedor', vendedorSchema);
