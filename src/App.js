// src/App.js (Updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; 

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (Updated)
import Welcome from './pages/Welcome';
import Program from './pages/Program';
import About from './pages/About';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/program" element={<Program />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
       
      </div>
      <Analytics />
    </Router>
  );
};

export default App;