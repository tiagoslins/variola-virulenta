const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
const authMiddleware = require('./middleware/auth');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/articles', authMiddleware, articleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});