import React, { useState, useRef, useEffect } from 'react';
import './FeaturesSection.css';

const faqs = [
  {
    question: 'What types of documents does GTSBOT support?',
    answer: 'GTSBOT supports PDF, DOCX, TXT files, and public web URLs...',
  },
  {
    question: 'Can GTSBOT be deployed on-premise?',
    answer: 'Yes. GTSBOT is designed for secure, self-hosted deployment...',
  },
  {
    question: 'Which large language models are supported?',
    answer: 'GTSBOT supports GPT-4, Llama 3, Gemini 1.5 Flash...',
  },
  {
    question: 'Does GTSBOT store or share our data with third parties?',
    answer: 'No. All processing and storage happens within your environment...',
  },
  {
    question: 'Can we customize the assistant’s tone and behavior?',
    answer: 'Absolutely. You can define custom prompts...',
  },
  {
    question: 'Does GTSBOT support voice-based interaction?',
    answer: 'Yes. GTSBOT includes voice input and text-to-speech...',
  },
  {
    question: 'Can multiple users access GTSBOT at once?',
    answer: 'Yes. GTSBOT supports concurrent user sessions...',
  },
  {
    question: 'What vector databases does GTSBOT integrate with?',
    answer: 'GTSBOT is compatible with FAISS, Pinecone, Weaviate...',
  },
  {
    question: 'Can GTSBOT summarize documents or extract insights?',
    answer: 'Yes. Users can ask GTSBOT to summarize entire documents...',
  },
  {
    question: 'Is multilingual support available?',
    answer: 'Yes. GTSBOT can understand and respond in multiple languages...',
  },
];

function FAQSection() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const itemRefs = useRef([]);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    if (expandedIndex !== null && itemRefs.current[expandedIndex]) {
      itemRefs.current[expandedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [expandedIndex]);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 2, faqs.length));
  };

  return (
    <section id="faq" className="features-section">
      <h2 className="features-title">Frequently Asked Questions (FAQs)</h2>
      <div className="faq-container">
        <div className="faq-list">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleExpand(index)}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{expandedIndex === index ? '⌃' : '⌄'}</span>
              </div>
              {expandedIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
        {visibleCount < faqs.length && (
          <div className="show-more-container">
            <button className="faq-show-more" onClick={showMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQSection;
