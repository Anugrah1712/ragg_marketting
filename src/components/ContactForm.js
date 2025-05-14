// ContactForm.js
import React, { useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  useEffect(() => {
    const handleScroll = () => {
      const form = document.querySelector('.contact-form-container');
      const scrollY = window.scrollY;
      // if (form) {
      //   form.style.transform = `translateY(${scrollY * 0.05}px)`; // subtle effect
      // }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="contact-section-wrapper">
      <h2 className="contact-form-heading">Get in Touch</h2>
      <div className="contact-form-container">
        <div className="contact-form-card">
          <p>
            Have a question, feedback, or a custom request? We'd love to hear from you.
            Drop us a message and we'll get back to you as soon as possible.
          </p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Where can we reach you?" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us how we can help" required></textarea>

            <button type="submit" className="send-btn">
              <span>Send Message</span>
              <i className="arrow-icon">→</i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
