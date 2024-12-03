const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/empresas', require('./routes/empresas'));
app.use('/escolas', require('./routes/escolas'));
app.use('/cursos', require('./routes/cursos'));

// Iniciar Servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
