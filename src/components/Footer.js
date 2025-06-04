import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>GTS</h2>
          <p>
            Harness the power of Retrieval-Augmented Generation (RAG) with GPT
            & Gemini to create intelligent assistants grounded in your own
            documents and websites.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: hello@gts.ai</p>
          <p>Support: support@gts.ai</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GTS - Generative AI Technology Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
