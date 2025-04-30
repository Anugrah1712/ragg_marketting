import React from 'react';
import './ChatbotMockup.css';


function ChatbotMockup() {
  return (
    <div className="chatbot-mockup">
      <div className="chatbot-header">AI Assistant</div>
      <div className="chatbot-body">
        <div className="chatbot-message user">Tell me about your services</div>
        <div className="chatbot-message bot">We use RAG with GPT & Gemini to power intelligent, context-aware assistants.</div>
      </div>
    </div>
  );
}

export default ChatbotMockup;
