import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home with hash so it scrolls there
      navigate(`/#${id}`);
    } else {
      // Already on home, scroll smoothly
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-logo-section">
          <img src={logo} alt="GTS Logo" className="footer-logo" />
          <p className="footer-description">
            GTS Technologies Pvt. Ltd.<br />
            Building intelligent AI products for legal, education, enterprise, and customer support.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("hero")}>Home</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("features")}>Features</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("how-it-works")}>How It Works</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("use-case")}>Use Case</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("testimonials")}>Testimonials</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("pricing")}>Pricing</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("faq")}>FAQ</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:contact@genaitechsol.com">contact@genaitechsol.com</a></p>
          <p>Phone: +91 8275287490</p>
          <p>
            Lucerne 403, Gulmohar Renaissance, Near Agarwal Business Hub,<br />
            Wagholi, Pune, Maharashtra – 412207<br />
            India
          </p>
        </div>

        {/* Column 4: Legal & Social */}
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><button className="footer-link-btn" onClick={(e) => e.preventDefault()}>Privacy Policy</button></li>
            <li><button className="footer-link-btn" onClick={(e) => e.preventDefault()}>Terms of Service</button></li>
            <li><button className="footer-link-btn" onClick={(e) => e.preventDefault()}>Security & Compliance</button></li>
          </ul>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <p>
              <a href="https://www.linkedin.com/company/genaitechsol" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="https://twitter.com/@GenaiTechSol" target="_blank" rel="noopener noreferrer">Twitter</a> |{" "}
              <a href="https://github.com/YOUR_ORG" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Genai Technology Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
