import React from 'react';
import './FeaturesSection.css'; // Reuse same styles

const testimonials = [
  {
    quote: "GTSBOT has drastically reduced the time our legal team spends on reviewing contracts.",
    author: "— Legal Consultant, Mid-Sized Law Firm",
    detail: "We now get accurate answers to clause-specific questions within seconds, allowing us to focus on more strategic legal work.",
    stars: 5,
  },
  {
    quote: "It’s transformed how our students engage with complex AI topics.",
    author: "— Professor of AI & Data Science, University Department",
    detail: "Students use GTSBOT to clarify concepts, summarize research papers, and prepare coursework more independently and confidently.",
    stars: 5,
  },
  {
    quote: "Employees no longer flood HR with routine questions—GTSBOT handles it all.",
    author: "— HR Manager, Global Tech Services",
    detail: "We uploaded our policies and procedures, and now staff just ask GTSBOT directly. It’s cut internal query handling time in half.",
    stars: 4,
  },
  {
    quote: "We’ve added GTSBOT to our client toolkit—it delivers insights in seconds.",
    author: "— Strategy Consultant, Boutique Advisory Firm",
    detail: "It helps our team analyze documents, extract key points, and generate slides faster, without missing important details.",
    stars: 5,
  },
  {
    quote: "We trust GTSBOT for secure, high-speed document understanding in a regulated environment.",
    author: "— CIO, Financial Compliance Firm",
    detail: "From indexing to retrieval, everything stays on-premise. It meets our compliance and audit requirements perfectly.",
    stars: 5,
  },
  {
    quote: "Our support team now solves customer issues faster, without digging through manuals.",
    author: "— Customer Experience Lead, Consumer Electronics Brand",
    detail: "By uploading our product guides and troubleshooting documents, GTSBOT has become our always-available, accurate assistant.",
    stars: 4,
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="features-section">
      <h2 className="features-title">What People Are Saying</h2>
      <div className="features-grid testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="feature-card">
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"{t.quote}"</p>
            <p style={{ fontWeight: 600, marginBottom: '10px', color: '#00eaff' }}>{t.author}</p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{t.detail}</p>
            <div style={{ marginTop: '15px', color: '#FFD700' }}>
              {'★'.repeat(t.stars)}
              {'☆'.repeat(5 - t.stars)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
