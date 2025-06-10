import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
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
            <li><button className="footer-link-btn" onClick={() => scrollToSection("how-it-works")}>How It Work</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("use-case")}>Use Case</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("testimonials")}>Testimonials</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("pricing")}>Pricing</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("faq")}>faq</button></li>
            <li><button className="footer-link-btn" onClick={() => scrollToSection("contact")}>Contact</button></li>

            <li><a href="/demo">Request a Demo</a></li> {/* Keep this if /demo is a separate route */}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@gts.ai">support@gts.ai</a></p>
          <p>Phone: +91 7984885953</p>
          <p>
            123 Innovation Park,<br />
            Hinjewadi Phase II,<br />
            Pune – 411057, India
          </p>
        </div>

        {/* Column 4: Legal & Social */}
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/security">Security & Compliance</a></li>
          </ul>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <p>
              <a href="#">LinkedIn</a> | <a href="#">Twitter</a> | <a href="#">GitHub</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2025 GTS Technologies Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
