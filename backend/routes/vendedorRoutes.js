const express = require('express');
const router = express.Router();
const Vendedor = require('../models/vendedor');

router.post('/', async (req, res) => {
    try {
      const novoVendedor = new Vendedor(req.body);
      const vendedorSalvo = await novoVendedor.save();
      res.status(201).json(vendedorSalvo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const vendedores = await Vendedor.find();
      res.status(200).json(vendedores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const vendedor = await Vendedor.findById(req.params.id);
      if (!vendedor) {
        return res.status(404).json({ message: 'Vendedor não encontrado' });
      }
      res.status(200).json(vendedor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!vendedor) {
        return res.status(404).json({ message: 'Vendedor não encontrado' });
      }
      res.status(200).json(vendedor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const vendedor = await Vendedor.findByIdAndDelete(req.params.id);
      if (!vendedor) {
        return res.status(404).json({ message: 'Vendedor não encontrado' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
