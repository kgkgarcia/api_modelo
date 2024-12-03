const express = require('express');
const router = express.Router();
const db = require('../data/db.json');

router.get('/', (req, res) => {
  res.json(db.empresas);
});

router.get('/:id', (req, res) => {
  const empresa = db.empresas.find(e => e.id_empresa == req.params.id);
  if (empresa) res.json(empresa);
  else res.status(404).send("Empresa não encontrada.");
});

module.exports = router;
