import React from 'react';
import './HeroSection.css';
import ChatbotMockup from '../components/ChatbotMockup';
import { useNavigate } from 'react-router-dom';
import { Chatbot } from 'rag-chatbot-ui-marketing';

function HeroSection() {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/training-institute');
  };
  return (
    <div className="hero-container">
      <div className="blur-bg"></div>
      <div className="hero-content">
        <h1 className="fade-up">Next-Gen AI Chatbot</h1>
        <p className="fade-up delay-1">Harness the power of Retrieval-Augmented Generation (RAG) with GPT & Gemini to create intelligent assistants grounded in your own documents and websites.</p>
        <button className="glow-button fade-up delay-2" onClick={handleDemoClick}>Try the Demo →</button>

      </div>
      {/* <ChatbotMockup /> */}
      <Chatbot />
    </div>
  );
}

export default HeroSection;



// npm install rag-chatbot-ui@latest