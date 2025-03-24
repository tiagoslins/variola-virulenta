const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acesso não autorizado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adiciona os dados do usuário ao objeto da requisição
    next(); // Chama o próximo middleware ou rota
  } catch (err) {
    res.status(400).json({ message: 'Token inválido ou expirado' });
  }
};

module.exports = authMiddleware;
