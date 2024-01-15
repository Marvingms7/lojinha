const mongoose = require('mongoose');

const vendaSchema = new mongoose.Schema({
  veiculo: String,
  cliente: String,
  vendedor: String,
  dataVenda: Date,
});

module.exports = mongoose.model('venda', vendaSchema);
