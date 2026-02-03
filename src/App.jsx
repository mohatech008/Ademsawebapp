import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 1. Import Router parts
import './index.css';

// Your existing imports
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import DonatePage from './Pages/DonatePage';
import AboutusPage from './Pages/AboutusPage';
import ScrollToTop from './ScrollToTop';
import ProgramCard from './Components/ProgramCard';
import ProgramsPage from './Pages/ProgramsPage';

function App() {
  return (
    <Router>
    <ScrollToTop />
      <div className="w-full">
        
        {/* Navbar stays outside Routes so it is visible on EVERY page */}
        <Navbar /> 

        {/* 3. The Routes decide which page component to show */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
        </Routes>

        {/* Footer stays outside Routes so it is visible on EVERY page */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;