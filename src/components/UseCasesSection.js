import React from 'react';
import './FeaturesSection.css'; // Reuse existing styles

const UseCasesSection = () => {
  return (
    <section id="use-case" className="features-section">
      <h2 className="features-title">Use Case Scenarios</h2>
      <div className="features-grid use-case-grid">
        <div className="feature-card">
          <h3>Legal Document Assistant</h3>
          <p>
            Law firms and legal teams use GTSBOT to analyze contracts, NDAs, and compliance documents. Users can instantly search for clauses like “termination policy” and receive precise, source-based answers.
          </p>
        </div>
        <div className="feature-card">
          <h3>Educational Tutor Bot</h3>
          <p>
            Schools, colleges, and training institutes deploy GTSBOT to assist students with textbook explanations, topic summaries, and concept clarification—enhancing learning via natural Q&A.
          </p>
        </div>
        <div className="feature-card">
          <h3>Internal Knowledgebase Assistant</h3>
          <p>
            Organizations upload HR policies, SOPs, and documents. Employees can ask, “How do I apply for leave?” and get accurate, policy-based answers.
          </p>
        </div>
        <div className="feature-card">
          <h3>Customer Support Automation</h3>
          <p>
            GTSBOT indexes manuals and FAQs to answer, “How to reset the router?” or “Is my product under warranty?”—reducing support workload.
          </p>
        </div>
        <div className="feature-card">
          <h3>Consulting & Strategy Assistant</h3>
          <p>
            Consultants upload reports or research docs. GTSBOT extracts insights, summarizes key points, and supports pitch prep in natural language.
          </p>
        </div>
        <div className="feature-card">
          <h3>Research & Analysis Companion</h3>
          <p>
            Researchers query GTSBOT on whitepapers, industry reports, or datasets to extract trends, highlight insights, and simplify complexity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
