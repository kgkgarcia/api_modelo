const express = require('express');
const router = express.Router();
const db = require('../data/db.json');

router.get('/', (req, res) => {
  res.json(db.cursos);
});

router.get('/:id', (req, res) => {
  const curso = db.cursos.find(c => c.id_curso == req.params.id);
  if (curso) res.json(curso);
  else res.status(404).send("Curso não encontrado.");
});

module.exports = router;
