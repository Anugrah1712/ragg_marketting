import React, { useEffect, useRef, useState } from 'react';
import './UseCaseCarousel.css';

const useCases = [
  {
    title: 'Legal Document Assistant',
    description:
      'Law firms and legal teams can upload contracts, NDAs, and compliance documents. GPTBOT allows users to search for specific clauses or terms, such as “What is the termination clause?” or “Is there a non-compete provision?”, and provides accurate, source-based responses.',
  },
  {
    title: 'Educational Tutor Bot',
    description:
      'Designed for students and educators, GPTBOT can summarize academic papers, explain complex topics, and assist with homework or research projects. It supports multiple file formats including notes, textbooks, and lecture slides.',
  },
  {
    title: 'Internal Knowledgebase for Employees',
    description:
      'Organizations can upload HR policies, SOPs, and onboarding material. Employees can ask natural language questions like “How do I apply for leave?” or “What is the reimbursement process?” and receive instant, document-based answers.',
  },
  {
    title: 'Customer Support Knowledge Bot',
    description:
      'Businesses can integrate GPTBOT into customer service workflows. By indexing product manuals, service records, and FAQs, it can handle queries such as “How do I reset my device?” or “What does the warranty cover?” with accurate, reference-backed replies.',
  },
  {
    title: 'Consulting and Data Analysis Assistant',
    description:
      'Analysts and consultants can upload client reports, market research, or financial documents. GPTBOT can then extract key insights, summarize content, and help prepare presentations or strategic overviews with speed and accuracy.',
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
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseCarousel;
