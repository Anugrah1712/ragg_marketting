import React, { useState } from 'react';
import './FAQSection.css';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I upload documents?',
    answer: 'Click the upload button on the chat interface or console. You can drag and drop PDFs, DOCX, or TXT files — they’re processed instantly.',
  },
  {
    question: 'What websites can it scrape?',
    answer: 'It works on most publicly accessible websites. Just paste the link, and the system will extract structured content, tables, and FAQs automatically.',
  },
  {
    question: 'Can I customize the bot’s responses?',
    answer: 'Yes! Use the custom prompt editor to define tone, behavior, and response logic — all without touching code.',
  },
  {
    question: 'Which vector databases are supported?',
    answer: 'We support FAISS, Pinecone, Qdrant, Chroma, and Weaviate. Pick the one that fits your stack and scale.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. All uploads and processed data are handled securely and stored in your own environment if using the Enterprise plan.',
  },
];

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = expandedItems[index];
          return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
              <button className="faq-question" onClick={() => toggleItem(index)}>
                <span>{item.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
