import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get('/api/articles');
      setArticles(response.data);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Podcast Varíola Virulenta</h1>
      <h2>Últimos Artigos</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href={`/artigos/${article._id}`}>Leia mais</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
