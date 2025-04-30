import React, { useEffect, useRef, useState } from 'react';
import './HowItWorksSection.css';

const steps = [
  {
    title: 'Ingest Document',
    icon: '📄',
    description: 'Upload your document in any format (PDF, DOCX, TXT) and get ready to analyze.',
  },
  {
    title: 'Analyze with Gemini Flash',
    icon: '⚡',
    description: 'Our powerful Gemini AI analyzes the content instantly for insights.',
  },
  {
    title: 'Embed to Vector DB',
    icon: '📡',
    description: 'The extracted data is embedded to a vector database for fast retrieval.',
  },
  {
    title: 'Chat in Real-time',
    icon: '💬',
    description: 'You can now interact with the data in real-time through a chatbot interface.',
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`how-it-works-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="section-title">How It Works — Behind the Scenes</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            className={`step-card ${visible ? 'visible' : ''}`}
            key={index}
          >
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
