import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './components/MainPage';
import Judges from './components/Judges';
import ContactForm from './components/ContactForm';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import './App.css';
import './font/font.css';


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/judges" element={<Judges />} />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          {/* 
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about-us" element={<AboutPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
