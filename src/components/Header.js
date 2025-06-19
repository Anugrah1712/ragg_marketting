import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle blur effect on <body> when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <>
      {/* Blur overlay on mobile */}
      {menuOpen && <div className="nav-overlay active" onClick={() => setMenuOpen(false)} />}

      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="GTS logo" />
            <span className="branding-text">Genai Technology Solutions</span>
          </div>


          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>

          {/* Navigation */}
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
    </>
  );
};

export default Header;
