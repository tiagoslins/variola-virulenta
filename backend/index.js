const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos da pasta 'frontend'
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));  // Ajuste o caminho para o index.html
});

// Exemplo de outras rotas, se necessário
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Pode adicionar outras rotas
});

// Definir a porta para o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
