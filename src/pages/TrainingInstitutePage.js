// src/pages/TrainingInstitutePage.js

import React from 'react';
import './TrainingInstitutePage.css';
// import { Chatbot, DeveloperConsole } from '@anugrah17/rag-chatbot-widget';
// import '@anugrah17/rag-chatbot-widget/chatbot-widget.css';


function TrainingInstitutePage() {
  return (
    <div className="training-page">
      <header className="training-header">
        <h1>AI Chatbot Training for Institutes</h1>
        <p>Empower your students with hands-on experience in building GPT/Gemini-based AI assistants using real-world data.</p>
      </header>

      <section className="training-section">
        <h2>What We Offer</h2>
        <ul>
          <li>✅ Full-stack chatbot development using RAG (Retrieval-Augmented Generation)</li>
          <li>✅ Integration with GPT, Gemini, and your own document/website data</li>
          <li>✅ Real-time deployment and analytics</li>
          <li>✅ Certification and project-based learning</li>
        </ul>
      </section>

      <section className="training-section">
        <h2>Ideal For</h2>
        <p>
          Colleges, coding bootcamps, and training institutes looking to add AI/LLM-focused modules to their curriculum.
        </p>
      </section>

      <section className="training-section">
        <h2>Get in Touch</h2>
        <p>
          Interested in offering this training at your institute? Contact us today and let's discuss how we can partner.
        </p>
        <a href="#contact" className="cta-button">Contact Us →</a>
        {/* <Chatbot /> */}

      </section>
    </div>
  );
}

export default TrainingInstitutePage;
