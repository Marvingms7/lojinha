const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://marcus_vinicius:root@root.bcntqm1.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Erro de conexão com o MongoDB: ${err}`);
});

db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso.');
});

module.exports = db;
