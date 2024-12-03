const express = require('express');
const router = express.Router();
const db = require('../data/db.json');

router.get('/', (req, res) => {
  res.json(db.escolas);
});

router.get('/:id', (req, res) => {
  const escola = db.escolas.find(e => e.id_escola == req.params.id);
  if (escola) res.json(escola);
  else res.status(404).send("Escola não encontrada.");
});

module.exports = router;
