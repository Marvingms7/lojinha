const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  cpf: String,
  dataNascimento: Date,
  endereco: String,
});

module.exports = mongoose.model('cliente', clienteSchema);
