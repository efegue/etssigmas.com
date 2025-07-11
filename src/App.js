import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import SigmaBetaClub from './pages/SigmaBetaClub';
import Members from './pages/Members';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sigma-beta-club" element={<SigmaBetaClub />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
        
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 