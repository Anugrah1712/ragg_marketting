// FeaturesSection.js

import React, { useEffect, useRef, useState } from 'react';
import './FeaturesSection.css';

const features = [
  {
    title: 'Retrieval-Augmented Generation (RAG) Architecture',
    description: 'GPTBOT intelligently retrieves relevant information from uploaded documents and web data, grounding its responses in actual content—no hallucinations, just facts.',
  },
  {
    title: 'Multimodal Input Support',
    description: 'Upload PDFs, DOCX files, plain text, or even URLs. GPTBOT can instantly analyze and extract meaning from diverse formats.',
  },
  {
    title: 'Vector Search with Seamless Integration',
    description: 'Powered by top vector databases including FAISS, Pinecone, Weaviate, and Qdrant for ultra-fast semantic search across your content.',
  },
  {
    title: 'Multiple LLM Support',
    description: 'Switch between powerful models like GPT-4, Llama 3, Gemini 1.5 Flash, and more—dynamically, based on your performance or cost needs.',
  },
  {
    title: 'Developer Console for Full Control',
    description: 'Easily manage prompts, models, indexing, and system behavior via a secure, admin-only interface.',
  },
  {
    title: 'Voice & Time-Aware Interaction',
    description: 'Talk to GPTBOT. It listens. It speaks. With built-in speech-to-text and time-aware greetings, your interactions feel natural and human.',
  },
  {
    title: 'Privacy-First, Self-Hosted Deployment',
    description: 'Deploy GPTBOT entirely on-premise with no data ever sent externally. Perfect for regulated industries like law, finance, and healthcare.',
  },
  {
    title: 'Real-Time Document Summarization & Q&A',
    description: 'Summarize, explore, and query your documents instantly—get precise, context-rich answers with full source traceability.',
  },
];

const FeaturesSection = () => {
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
      id="features"
      ref={sectionRef}
      className={`features-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="features-title">Powerful Features for Smarter Conversations</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
