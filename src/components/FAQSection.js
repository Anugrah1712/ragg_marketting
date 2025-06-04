import React, { useState, useRef, useEffect } from 'react';
import './FAQSection.css';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What types of documents does GPTBOT support?',
    answer: 'GPTBOT supports PDFs, DOCX files, plain text, and web URLs. All content is automatically segmented and indexed for accurate retrieval.',
  },
  {
    question: 'Can GPTBOT be deployed on-premise?',
    answer: 'Yes. GPTBOT is designed for secure, self-hosted deployment using Docker. It can also run in air-gapped environments without internet access.',
  },
  {
    question: 'Is GPTBOT customizable for our specific use case?',
    answer: 'Absolutely. The Developer Console lets you adjust system prompts, response behavior, tone, and even which documents to prioritize during queries.',
  },
  {
    question: 'Does GPTBOT store or share any of our data?',
    answer: 'No. By default, GPTBOT processes and stores all data locally. It does not transmit content to external servers unless explicitly configured to do so.',
  },
  {
    question: 'Can GPTBOT handle tables, structured data, and FAQs?',
    answer: 'Yes. It is capable of understanding and responding based on structured content such as tables, bullet lists, and frequently asked questions within your documents.',
  },
  {
    question: 'Does GPTBOT support multiple users at once?',
    answer: 'Yes. It supports concurrent sessions and can scale horizontally to handle enterprise-level usage across departments or teams.',
  },
  {
    question: 'Which large language models are supported?',
    answer: 'GPTBOT supports GPT-4, Llama 3, Gemini 1.5 Flash, and other state-of-the-art models. You can switch models dynamically via the Developer Console.',
  },
  {
    question: 'Can GPTBOT summarize entire documents?',
    answer: 'Yes. You can ask GPTBOT to summarize full documents or specific sections, with contextually accurate and source-referenced outputs.',
  },
  {
    question: 'Is multilingual support available?',
    answer: 'GPTBOT understands and responds to content in multiple languages, depending on the capabilities of the underlying model you choose.',
  },
  {
    question: 'Can it provide citations for its responses?',
    answer: 'Yes. GPTBOT can reference the exact section or content chunk it used to generate an answer, improving trust and traceability.',
  },
];

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [visibleCount, setVisibleCount] = useState(5);
  const faqListRef = useRef(null);

  const toggleItem = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  // Scroll to bottom of FAQ list whenever visibleCount changes (i.e. on Show More)
  useEffect(() => {
    if (faqListRef.current) {
      faqListRef.current.scrollTo({
        top: faqListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleCount]);

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list" ref={faqListRef} style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        {faqs.slice(0, visibleCount).map((item, index) => {
          const isOpen = expandedItems[index];
          return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
              <button className="faq-question" onClick={() => toggleItem(index)}>
                <span>{item.question}</span>
                <FaChevronDown className={`faq-icon ${isOpen ? 'rotated' : ''}`} />
              </button>
              <div className="faq-answer">{isOpen && <p>{item.answer}</p>}</div>
            </div>
          );
        })}
        {visibleCount < faqs.length && (
          <div className="show-more-container">
            <button className="show-more-button" onClick={showMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
