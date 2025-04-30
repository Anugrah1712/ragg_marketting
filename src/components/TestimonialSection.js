import React, { useEffect, useRef, useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    stars: 5,
    quote: 'Seamless experience. I uploaded a massive legal document, and the chatbot answered better than my paralegal.',
    name: 'Ananya S.',
    role: 'Legal Associate',
  },
  {
    stars: 5,
    quote: 'The website scraper saved hours of manual research. It even pulled out FAQs with zero effort.',
    name: 'Karthik M.',
    role: 'Product Manager',
  },
  {
    stars: 5,
    quote: 'I used it for a study guide — now I can quiz myself with my own notes. Game-changer for finals.',
    name: 'Riya T.',
    role: 'Computer Science Student',
  },
  {
    stars: 5,
    quote: 'We trained a support bot in under 10 minutes. Now it answers 80% of queries without human handoff.',
    name: 'Vikram R.',
    role: 'Head of Customer Success',
  },
  {
    stars: 5,
    quote: 'Loved the custom prompting. I could literally tell the bot how to think — and it listened.',
    name: 'Meera D.',
    role: 'AI Engineer',
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
      ref={sectionRef}
      className={`testimonial-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="testimonial-title">⭐ Trusted by Teams & Builders</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className="stars">★★★★★</div>
            <p className="quote">“{t.quote}”</p>
            <div className="name-role">— {t.name}, <span>{t.role}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
