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
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`how-it-works-section ${visible ? 'visible' : ''}`}
    >
        <h2 className="how-it-works-title">How It Works — Behind the Scenes</h2>
        <div className="how-it-works-container">
        {steps.map((step, index) => (
            <div className="card" key={index}>
            <div className="how-it-works-step-header">
                <div className="how-it-works-step-icon">{step.icon}</div> 
                <h3 className="how-it-works-step-title">{step.title}</h3>
                
            </div>            
            <p className="how-it-works-step-description">
                {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
