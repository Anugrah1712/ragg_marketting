import React from 'react';
import './HeroSection.css';

function HeroSection() {
  const handleDemoClick = () => {
    // Your demo click logic here
  };

  return (
    <div id="hero" className="hero-container"> 
    <div className="hero-container">
      <div className="blur-bg"></div>
      <div className="hero-content">
        <h1 className="fade-up">Next-Gen AI Chatbot</h1>

        <div className="gts-title fade-up">
          <span>G</span><span>T</span><span>S</span>
        </div>

        {/* New small heading */}
        <h3 className="gts-subheading fade-up">
          Welcome to GTS – Pioneers in AI Innovation
        </h3>

        {/* New paragraph */}
        <p className="gts-description fade-up delay-1">
          At GTS, we develop cutting-edge AI solutions that transform the way businesses interact with information. Our flagship product, GPTBOT, is a powerful contextual assistant built using advanced Retrieval-Augmented Generation (RAG) architecture. Whether you're in legal, education, enterprise, or customer service, GTS empowers you with intelligent, secure, and customizable tools designed to deliver accurate, real-time insights from your data—on your terms.
        </p>

        <button className="glow-button fade-up delay-3" onClick={handleDemoClick}>
          Try the Demo →
        </button>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
