import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>EPSILON THETA SIGMA CHAPTER</h1>
      <h2>PHI BETA SIGMA FRATERNITY, INC.</h2>
      <nav>
        <ul>
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