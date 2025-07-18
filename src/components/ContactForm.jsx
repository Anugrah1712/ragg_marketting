import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }

    const form = new FormData();
    form.append("Name", formData.name);
    form.append("Email", formData.email);
    form.append("Phone", formData.phone);
    form.append("Message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwDogoXgaNwKch-soBs78BSUHYTRmzn2EDwJ0PZVtR_AVAlQCHOvYX99wwkv6yVRuY7/exec",
        {
          method: "POST",
          body: form,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section id='contact' className="contact-section bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Information */}
        <div className="space-y-10">
          <h2 className="text-6xl font-bold heading-gradient">Let’s talk!</h2>

          <div className="text-sm text-gray-400 space-y-8">
            <div>
              <p className="text-blue-400 font-medium mb-1">General Inquiries & Support</p>
              <p>📧 Email: <a href="mailto:support@genaitechsol.com" className="text-white underline">support@genaitechsol.com</a></p>
              <p>📞 Phone: +91 8275287490</p>
              <p>🕘 Hours: All Days, 8:00 AM – 10:00 PM IST</p>
            </div>

            <div>
              <p className="text-blue-400 font-medium mb-1">Sales & Partnerships</p>
              <p>📧 Email: <a href="mailto:contact@genaitechsol.com" className="text-white underline">contact@genaitechsol.com</a></p>
              <p>Let’s collaborate — we offer enterprise licensing, SaaS deployment, and custom integrations.</p>
            </div>

            <div>
              <p className="text-blue-400 font-medium mb-1">Request a Demo</p>
              <p>📧 Email: <a href="mailto:demo@genaitechsol.com" className="text-white underline">demo@genaitechsol.com</a></p>
              <a href="/book-demo" className="inline-block mt-2 px-4 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-600 hover:text-white transition-all">
                📅 Book a Demo
              </a>
            </div>

            <div>
              <p className="text-blue-400 font-medium mb-1">Office Address</p>
              <p>GTS Technologies Pvt. Ltd.</p>
              <p>#08-37</p>
              <p>356A Anchorvale Lane</p>
              <p>Singapore 541356</p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 8275287490"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi team! I'm reaching out for..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#101010] text-white font-medium py-2 rounded-lg border border-gray-700 hover:border-blue-400 transition-all"
          >
            Submit
          </button>

          {errorMessage && (
            <p className="text-red-400 text-sm mt-2 animate-fade-in">{errorMessage}</p>
          )}

          {submitted && (
            <p className="text-green-400 text-sm mt-2">Thank you! We’ll be in touch shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
