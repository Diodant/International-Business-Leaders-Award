import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './components/MainPage';
import Judges from './components/Judges';
import WinnersPage from './components/WinnersPage';
import ContactForm from './components/ContactForm';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import './App.css';
import './font/font.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/judges" element={<Judges />} />
            <Route path="/winners" element={<WinnersPage />} />
            <Route path="/contacts" element={<ContactForm />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:slug" element={<Article />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;