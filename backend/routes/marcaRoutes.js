const express = require('express');
const router = express.Router();
const Marca = require('../models/marca');

router.post('/', async (req, res) => {
  try {
    const novaMarca = new Marca(req.body);
    const marcaSalva = await novaMarca.save();
    res.status(201).json(marcaSalva);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const marcas = await Marca.find();
    res.status(200).json(marcas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const marca = await Marca.findById(req.params.id);
    if (!marca) {
      return res.status(404).json({ message: 'Marca não encontrada' });
    }
    res.status(200).json(marca);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const marca = await Marca.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!marca) {
      return res.status(404).json({ message: 'Marca não encontrada' });
    }
    res.status(200).json(marca);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const marca = await Marca.findByIdAndDelete(req.params.id);
    if (!marca) {
      return res.status(404).json({ message: 'Marca não encontrada' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
