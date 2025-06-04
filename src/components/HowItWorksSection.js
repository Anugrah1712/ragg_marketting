import React, { useEffect, useRef, useState } from 'react';
import './HowItWorksSection.css';

const steps = [
  {
    title: 'Step 1: Ingest Your Content',
    description: 'Upload documents like PDFs, DOCX files, or share URLs. GPTBOT parses and segments the content into smaller, meaningful chunks while preserving context.',
  },
  {
    title: 'Step 2: Smart Embedding & Indexing',
    description: 'Each content chunk is embedded using advanced language models and stored in a vector database (like FAISS or Pinecone) for lightning-fast retrieval.',
  },
  {
    title: 'Step 3: Ask Natural Questions',
    description: 'Users interact via chat—text or voice. GPTBOT converts the query into a vector and performs a semantic search to find the most relevant content.',
  },
  {
    title: 'Step 4: Contextual Response Generation',
    description: 'The retrieved content is passed to a powerful large language model (LLM), which generates precise, grounded responses based strictly on your data—no guessing, no made-up answers.',
  },
  {
    title: 'Step 5: Customize Everything',
    description:
      'Through the Developer Console, admins can tweak prompts, switch models, re-index data, or define the assistant’s tone and behavior—on the fly.',
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
      id="how-it-works"
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
