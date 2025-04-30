import React, { useState } from 'react';
import './UseCaseCarousel.css';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? useCases.length - 1 : prevIndex - 1));
    } else {
      setActiveIndex((prevIndex) => (prevIndex === useCases.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <section className="use-case-carousel">
      <h2 className="carousel-title">💡 Explore What You Can Build</h2>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={() => handleScroll('left')}>
          &#10094;
        </button>

        <div className="carousel-content">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`carousel-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">{useCase.icon}</div>
                  <h3>{useCase.title}</h3>
                </div>
                <div className="card-back">
                  <p>{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => handleScroll('right')}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default UseCaseCarousel;
