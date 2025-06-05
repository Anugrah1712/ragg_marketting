// HowItWorksSection.js

import React, { useEffect, useRef, useState } from 'react';
import './FeaturesSection.css'; // using the same CSS as features

const steps = [
  {
    title: 'Ingest Your Content',
    description: 'Upload PDFs, DOCX files, text documents, or provide URLs. GPTBOT processes and segments the content into smaller, context-preserving chunks.',
  },
  {
    title: 'Smart Embedding & Indexing',
    description: 'Each content chunk is embedded using advanced language models and stored in a high-performance vector database like FAISS, Pinecone, or Weaviate.',
  },
  {
    title: 'Give Custom Prompts',
    description: 'Define how GPTBOT should behave using tailored system prompts. You can control tone, formality, content scope, and more—perfect for domain-specific use cases.',
  },
  {
    title: 'Customize Anything',
    description: 'Through the Developer Console, tweak system behavior, change LLMs, re-index content, manage vector databases, or fine-tune user interaction—on the fly.',
  },
  {
    title: 'Ask Natural Questions',
    description: 'Users interact through text or voice. GPTBOT converts queries into semantic vectors and searches the indexed content for the most relevant information.',
  },
  {
    title: 'Contextual Response Generation',
    description: 'Relevant content is passed to a selected large language model, which generates accurate, grounded, and trustworthy responses based only on your data.',
  },
];

const HowItWorksSection = () => {
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
      id="how-it-works"
      ref={sectionRef}
      className={`features-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="features-title">How It Works — Behind the Scenes</h2>
      <div className="features-grid how-it-works-grid">
        {steps.map((step, index) => (
          <div className="feature-card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
