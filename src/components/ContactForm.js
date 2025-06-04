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
      {/* Contact Us Info Section */}
      <div className="contact-us-info">
        <h2>Contact Us</h2>
        <p>Have questions, need support, or want to schedule a demo? We’re here to help.</p>

        <div className="contact-info-block">
          <h3>General Inquiries & Support</h3>
          <p>Email: <a href="mailto:support@gts.ai">support@gts.ai</a></p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Hours: Monday to Friday, 9:00 AM – 6:00 PM IST</p>
        </div>

        <div className="contact-info-block">
          <h3>Partnerships & Business Opportunities</h3>
          <p>Email: <a href="mailto:partnerships@gts.ai">partnerships@gts.ai</a></p>
        </div>

        <div className="contact-info-block">
          <h3>Product Demo Requests</h3>
          <p>Interested in seeing GPTBOT in action? Request a live demo tailored to your industry needs.</p>
          <p>Email: <a href="mailto:demo@gts.ai">demo@gts.ai</a></p>
        </div>

        <div className="contact-info-block">
          <h3>Office Address</h3>
          <address>
            GTS Technologies Pvt. Ltd.<br />
            123 Innovation Park, Hinjewadi Phase II<br />
            Pune, Maharashtra – 411057<br />
            India
          </address>
        </div>

        
      </div>
    </section>
  );
};

export default ContactForm;
