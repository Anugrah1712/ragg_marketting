import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'; // Added close icon
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const handleNavClick = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        setMenuOpen(false);
      }
    } else {
      // Navigate to home with anchor
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      {menuOpen && <div className="nav-overlay active" onClick={() => setMenuOpen(false)} />}

      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="GTS logo" />
            <span className="branding-text">Genai Technology Solutions</span>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoClose size={28} color="#00e5ff" />
            ) : (
              <>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </>
            )}
          </div>

          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
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
                <button
                  className="nav-link"
                  onClick={() => {
                    handleNavClick(id);
                    setMenuOpen(false); // Ensure menu closes
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
