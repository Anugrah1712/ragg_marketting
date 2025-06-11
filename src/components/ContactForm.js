import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const params = new URLSearchParams();
    params.append("Name", formData.name);
    params.append("Email", formData.email);
    params.append("Subject", formData.subject);
    params.append("Message", formData.message);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwDogoXgaNwKch-soBs78BSUHYTRmzn2EDwJ0PZVtR_AVAlQCHOvYX99wwkv6yVRuY7/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitted(true);  // Show success even if response failed due to CORS
    }
  };

  return (
    <section id="contact" className="contact-form-container">
      <h1>Contact Us</h1>
      <p className="contact-form-description">
        We’re here to help you explore, integrate, and succeed with AI. Whether you need technical support, have a sales inquiry, or want to schedule a demo — reach out anytime.
      </p>

      <div className="contact-form-block">
        {/* Contact Info (Left Side) */}
        <div className="contact-form-info">
          <div className="contact-form-info-section">
            <h3>General Inquiries & Support</h3>
            <p>📧 Email: <a href="mailto:genaitechsol@gmail.com">genaitechsol@gmail.com</a></p>
            <p>📞 Phone: +91 7984885953</p>
            <p>🕘 Hours: Monday to Friday, 9:00 AM – 6:00 PM IST</p>
          </div>
          <div className="contact-form-info-section">
            <h3>Sales & Partnerships</h3>
            <p>📧 Email: <a href="mailto:genaitechsol@gmail.com">genaitechsol@gmail.com</a></p>
            <p>Let’s collaborate — we offer enterprise licensing, SaaS deployment, and custom integrations.</p>
          </div>
          <div className="contact-form-info-section">
            <h3>Request a Demo</h3>
            <p>📧 Email: <a href="mailto:genaitechsol@gmail.com">genaitechsol@gmail.com</a></p>
            <p>📅 <a href="#book-demo">Book a Demo</a></p>
          </div>
          <div className="contact-form-info-section">
            <h3>Office Address</h3>
            <address>
              GTS Technologies Pvt. Ltd.<br />
              Lucerne 403, Gulmohar Renaissance, Near Agarwal Business Hub<br />
              Wagholi, Pune, Maharashtra – 412207<br />
              India
            </address>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <form
          className="contact-form"
          key={submitted ? 'submitted' : 'unsubmitted'}
          onSubmit={handleSubmit}
        >
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
