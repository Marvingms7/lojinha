const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./backend/routes/authRoutes');
const vendedorRoutes = require('./backend/routes/vendedorRoutes');
const clienteRoutes = require('./backend/routes/clienteRoutes');
const marcaRoutes = require('./backend/routes/marcaRoutes');
const modeloRoutes = require('./backend/routes/modeloRoutes');
const vendaRoutes = require('./backend/routes/vendaRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

const jwtSecret = process.env.JWT_SECRET;

app.use('/auth', authRoutes);
app.use('/vendedores', vendedorRoutes);
app.use('/clientes', clienteRoutes);
app.use('/marcas', marcaRoutes);
app.use('/modelos', modeloRoutes);
app.use('/vendas', vendaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Chave secreta JWT: ${jwtSecret}`);
});
