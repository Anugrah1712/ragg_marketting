import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu after click
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="GTS logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Nav */}
        <nav className={`nav ${menuOpen ? 'show' : ''}`}>
          <ul className="nav-links">
            {[
              { label: 'Features', id: 'features' },
              { label: 'How it works', id: 'how-it-works' },
              { label: 'Use case', id: 'use-case' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQs', id: 'faq' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <li key={id}>
                <button className="nav-link" onClick={() => scrollToSection(id)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
