import React, { useEffect, useRef, useState } from 'react';
import './FeaturesSection.css';

const features = [
  {
    title: 'Document Upload',
    icon: '📄',
    description: 'Instantly upload PDFs, Word docs, or text files. Your chatbot reads and understands the content in seconds — ready to answer questions with context-aware precision.',
  },
  {
    title: 'Website Scraping',
    icon: '🌐',
    description: 'Input a URL and let the bot extract structured content, FAQs, and insights from any website using advanced scraping and analysis tools.',
  },
  {
    title: 'Custom Prompting',
    icon: '💬',
    description: 'Define the chatbot’s behavior with custom instructions. Tailor tone, context rules, and response logic to match your exact use case.',
  },
];

const FeaturesSection = () => {
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
      id="features"
      ref={sectionRef}
      className={`features-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="features-title">Powerful Features for Smarter Conversations</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
