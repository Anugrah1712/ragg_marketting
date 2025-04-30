import React from 'react';
import './HeroSection.css';
import ChatbotMockup from '../components/ChatbotMockup';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="blur-bg"></div>
      <div className="hero-content">
        <h1 className="fade-up">Next-Gen AI Chatbot</h1>
        <p className="fade-up delay-1">Powered by RAG with GPT & Gemini — Seamlessly Integrated.</p>
        <button className="glow-button fade-up delay-2">Try Demo</button>
      </div>
      <ChatbotMockup />
    </div>
  );
}

export default HeroSection;
