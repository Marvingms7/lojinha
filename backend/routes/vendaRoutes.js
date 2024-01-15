const express = require('express');
const router = express.Router();
const Venda = require('../models/venda');

router.post('/', async (req, res) => {
  try {
    const novaVenda = new Venda(req.body);
    const vendaSalva = await novaVenda.save();
    res.status(201).json(vendaSalva);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const vendas = await Venda.find().sort({ dataVenda: -1 }); // Ordena por data de venda decrescente
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const venda = await Venda.findById(req.params.id);
    if (!venda) {
      return res.status(404).json({ message: 'Venda não encontrada' });
    }
    res.status(200).json(venda);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const venda = await Venda.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!venda) {
      return res.status(404).json({ message: 'Venda não encontrada' });
    }
    res.status(200).json(venda);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const venda = await Venda.findByIdAndDelete(req.params.id);
    if (!venda) {
      return res.status(404).json({ message: 'Venda não encontrada' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
