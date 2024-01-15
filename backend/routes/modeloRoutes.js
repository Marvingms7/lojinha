const express = require('express');
const router = express.Router();
const Modelo = require('../models/modelo');

router.post('/', async (req, res) => {
  try {
    const novoModelo = new Modelo(req.body);
    const modeloSalvo = await novoModelo.save();
    res.status(201).json(modeloSalvo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const modelos = await Modelo.find();
    res.status(200).json(modelos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const modelo = await Modelo.findById(req.params.id);
    if (!modelo) {
      return res.status(404).json({ message: 'Modelo não encontrado' });
    }
    res.status(200).json(modelo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const modelo = await Modelo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!modelo) {
      return res.status(404).json({ message: 'Modelo não encontrado' });
    }
    res.status(200).json(modelo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const modelo = await Modelo.findByIdAndDelete(req.params.id);
    if (!modelo) {
      return res.status(404).json({ message: 'Modelo não encontrado' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
