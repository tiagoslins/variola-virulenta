const Article = require('../models/Article');

exports.createArticle = async (req, res) => {
  const { title, coverImage, summary, content, author } = req.body;

  try {
    const article = new Article({ title, coverImage, summary, content, author });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar artigo', error });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar artigos', error });
  }
};