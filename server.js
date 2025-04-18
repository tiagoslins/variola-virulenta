const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});