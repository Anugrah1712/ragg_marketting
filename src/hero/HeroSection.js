import React from 'react';
import './HeroSection.css';
import ChatbotMockup from '../components/ChatbotMockup';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="blur-bg"></div>
      <div className="hero-content">
        <h1 className="fade-up">Next-Gen AI Chatbot</h1>
        <p className="fade-up delay-1">Harness the power of Retrieval-Augmented Generation (RAG) with GPT & Gemini to create intelligent assistants grounded in your own documents and websites.</p>
        <button className="glow-button fade-up delay-2"> Try the Demo →</button>
      </div>
      <ChatbotMockup />
    </div>
  );
}

export default HeroSection;
