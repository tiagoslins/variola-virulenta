const express = require('express');
const Article = require('../models/Article');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const { title, coverImage, summary, content, author } = req.body;

  try {
    const article = new Article({ title, coverImage, summary, content, author });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar artigo', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar artigos', error });
  }
});

module.exports = router;