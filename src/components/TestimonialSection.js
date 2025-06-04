import React, { useEffect, useRef, useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    stars: 5,
    quote:
      'GPTBOT has become our go-to assistant for internal knowledge retrieval.',
    detail:
      'Employees now get instant, policy-based answers to everyday queries, reducing dependency on manual HR support and improving efficiency.',
    name: 'HR Operations Manager',
    role: 'Global IT Services Company',
  },
  {
    stars: 5,
    quote:
      'We’ve integrated GPTBOT into our client onboarding process—game changer.',
    detail:
      'By automating responses from strategy decks and past proposals, GPTBOT accelerates early client interactions and keeps the team focused on high-value tasks.',
    name: 'Strategy Consultant',
    role: 'Boutique Advisory Firm',
  },
  {
    stars: 5,
    quote:
      'Reliable, secure, and completely under our control—exactly what we needed.',
    detail:
      'The self-hosted deployment model allowed us to meet strict compliance and data privacy requirements without compromising performance.',
    name: 'CIO',
    role: 'Financial Services Enterprise',
  },
  {
    stars: 5,
    quote: 'GPTBOT makes document-heavy workflows manageable.',
    detail:
      'Extracting insights from long research reports used to be time-consuming. Now, it’s as simple as asking a question and getting context-rich responses instantly.',
    name: 'Senior Analyst',
    role: 'Research and Advisory Group',
  },
  {
    stars: 5,
    quote:
      'GPTBOT helped reduce over 60 hours of manual document review each month.',
    detail:
      'By enabling natural language queries on complex contracts and legal agreements, GPTBOT streamlined internal processes and improved turnaround times significantly.',
    name: 'Legal Consultant',
    role: 'Mid-Sized Law Firm',
  },
];

const TestimonialSection = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`testimonial-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="testimonial-title">Trusted by Teams & Builders</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className="stars">{'★'.repeat(t.stars)}</div>
            <p className="quote">“{t.quote}”</p>
            <p className="detail">{t.detail}</p>
            <div className="name-role">— {t.name}, <span>{t.role}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
