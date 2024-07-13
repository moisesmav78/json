const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// CREATE
router.post('/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).send(nuevoUsuario);
  } catch (err) {
    res.status(400).send(err);
  }
});

// READ
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).send(usuarios);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).send();
    }
    res.status(200).send(usuario);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE
router.put('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!usuario) {
      return res.status(404).send();
    }
    res.status(200).send(usuario);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE
router.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).send();
    }
    res.status(200).send(usuario);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
