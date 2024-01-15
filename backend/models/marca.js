const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema({
  nome: String,
});

module.exports = mongoose.model('marca', marcaSchema);
