import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <h1>EPSILON THETA SIGMA CHAPTER</h1>
      <h2>PHI BETA SIGMA FRATERNITY, INC.</h2>
      <button className="hamburger" onClick={handleHamburgerClick} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        {menuOpen && (
          <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
            &times;
          </button>
        )}
        <ul onClick={closeMenu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Our Chapter</Link></li>
          <li><Link to="/history">History & Mission</Link></li>
          <li><Link to="/events">Chapter Events</Link></li>
          <li><Link to="/gallery">Chapter Gallery</Link></li>
          <li><Link to="/sigma-beta-club">Sigma Beta Club</Link></li>
          <li><Link to="/members">Members Only</Link></li>
          <li><Link to="/pay-dues">Pay Dues</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 