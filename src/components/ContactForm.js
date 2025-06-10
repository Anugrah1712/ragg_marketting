import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(false);

  const form = new FormData();
  form.append("Name", formData.name);
  form.append("Email", formData.email);
  form.append("Subject", formData.subject);
  form.append("Message", formData.message);
  form.append("Timestamp", new Date().toLocaleString());

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwDogoXgaNwKch-soBs78BSUHYTRmzn2EDwJ0PZVtR_AVAlQCHOvYX99wwkv6yVRuY7/exec", {
      method: "POST",
      body: form, // No headers needed, browser sets them correctly
    });

    if (!response.ok) throw new Error("Failed to submit");

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (err) {
    console.error(err);
    setError(true);
  }
};


  return (
    <section id="contact" className="contact-form-container">
      <h1>Contact Us</h1>
      <p className="contact-form-description">
        We’re here to help you explore, integrate, and succeed with AI. Whether you need technical support, have a sales inquiry, or want to schedule a demo — reach out anytime.
      </p>

      <div className="contact-form-block">
        {/* Contact Info */}
        <div className="contact-form-info">
          <div className="contact-form-info-section">
            <h3>General Inquiries & Support</h3>
            <p>📧 Email: <a href="mailto:support@gts.ai">support@gts.ai</a></p>
            <p>📞 Phone: +91 7984885953</p>
            <p>🕘 Hours: Monday to Friday, 9:00 AM – 6:00 PM IST</p>
          </div>
          <div className="contact-form-info-section">
            <h3>Sales & Partnerships</h3>
            <p>📧 Email: <a href="mailto:sales@gts.ai">sales@gts.ai</a></p>
            <p>Let’s collaborate — we offer enterprise licensing, SaaS deployment, and custom integrations for organizations of all sizes.</p>
          </div>
          <div className="contact-form-info-section">
            <h3>Request a Demo</h3>
            <p>See GPTBOT in action with a live walkthrough tailored to your business.</p>
            <p>📧 Email: <a href="mailto:demo@gts.ai">demo@gts.ai</a></p>
            <p>📅 Schedule a session: <a href="#book-demo">Book a Demo</a></p>
          </div>
          <div className="contact-form-info-section">
            <h3>Office Address</h3>
            <address>
              GTS Technologies Pvt. Ltd.<br />
              123 Innovation Park, Hinjewadi Phase II<br />
              Pune, Maharashtra – 411057<br />
              India
            </address>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          {submitted ? (
            <p className="submit-message">
              Thank you for reaching out! We will get back to you soon.
            </p>
          ) : (
            <>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (optional)"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here"
                />
              </label>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
