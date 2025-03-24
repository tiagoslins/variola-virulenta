import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EpisodesPage from './pages/EpisodesPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/episodios" element={<EpisodesPage />} />
        <Route path="/artigos" element={<ArticlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
