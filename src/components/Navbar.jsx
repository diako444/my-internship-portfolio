import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Diakou</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Hamburger Icon for Mobile */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          
          <div className="mobile-action">
            <a href="#contact" className="btn-connect" onClick={closeMenu}>Let's Talk</a>
          </div>
        </nav>

        {/* Desktop Action Button */}
        <div className="navbar-action">
          <a href="#contact" className="btn-connect">Let's Talk</a>
        </div>
      </div>
    </header>
  );
}



export default Navbar;
