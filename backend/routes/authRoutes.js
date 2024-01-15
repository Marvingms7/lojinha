const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    if (users.find(user => user.username === username)) {
      return res.status(400).json({ message: 'Usuário já registrado' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação do usuário
    const newUser = { username, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para fazer login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se o usuário existe
    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera um token de autenticação
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para fazer logout (apenas um exemplo, pois normalmente o logout não requer ação do servidor)
router.post('/logout', (req, res) => {
  // Em uma implementação real, você pode precisar invalidar o token ou realizar outras ações
  res.status(200).json({ message: 'Logout realizado com sucesso' });
});

// Rota para verificar o status da sessão
router.get('/status', (req, res) => {
  // Verifica se o token está presente no cabeçalho da requisição
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  // Verifica a validade do token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    res.status(200).json({ message: 'Token válido', user: decoded.username });
  });
});

module.exports = router;
