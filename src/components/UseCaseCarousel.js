import React, { useEffect, useRef, useState } from 'react';
import './UseCaseCarousel.css'; // Keep your existing CSS file, but update classes below

const useCases = [
  {
    title: 'Legal QA',
    description:
      'Upload contracts, policies, or case files. Get precise answers to complex legal questions — grounded in the exact documents you provide.',
    icon: '⚖️',
  },
  {
    title: 'Customer Support',
    description:
      'Turn your help docs into a 24/7 AI assistant. Respond instantly to customer queries with context-rich, accurate replies.',
    icon: '💬',
  },
  {
    title: 'Educational Aid',
    description:
      'Upload notes, textbooks, or syllabi. Create a study companion that explains, quizzes, and guides — tailored to your learning pace.',
    icon: '📚',
  },
  {
    title: 'Custom AI Assistants',
    description:
      'Design purpose-built bots for HR, internal tools, product docs, or anything you can imagine. Fully customizable, endlessly flexible.',
    icon: '🤖',
  },
];

const UseCaseCarousel = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

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
      id="use-case"
      ref={sectionRef}
      className={`features-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="features-title">Explore What You Can Build</h2>
      <div className="features-grid">
        {useCases.map((useCase, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{useCase.icon}</div>
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseCarousel;
