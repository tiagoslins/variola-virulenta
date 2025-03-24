const express = require('express');
const Article = require('../models/Article');
const router = express.Router();

// Obter todos os artigos
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criar um novo artigo
router.post('/', async (req, res) => {
  const { title, coverImage, summary, content, author } = req.body;

  const newArticle = new Article({
    title,
    coverImage,
    summary,
    content,
    author,
  });

  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
