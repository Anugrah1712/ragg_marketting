import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './ContactForm.css';

function BookDemo() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      const slots = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'];
      setTimeSlots(slots);
      setSelectedSlot('');
    };
    fetchSlots();
  }, [selectedDate]);

  const handleSubmit = async () => {
    if (!selectedSlot || !name || !mobile || !email) return;

    if (!/^\d{10}$/.test(mobile)) {
    showMessage("Please enter a valid 10-digit mobile number.", "error");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

    const payload = new URLSearchParams();
    payload.append("date", selectedDate.toDateString());
    payload.append("slot", selectedSlot);
    payload.append("name", name);
    payload.append("mobile", mobile);
    payload.append("email", email);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxr03FE4eRpMVwormKLlHoE34qMxfCcsdiHobgQaMstC0PRmiP7C2FhqZRNW9U9dQSY/exec", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();
      if (result.status === "success") {
        showMessage("Booking confirmed!", "success");
        // Optionally reset form
        setName('');
        setMobile('');
        setEmail('');
        setSelectedSlot('');
      } else {
        showMessage("Error: " + result.message, "error");
      }
    } catch (err) {
      showMessage("Network error submitting booking.", "error");
    }
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="book-demo-container">
      <h1 className="book-demo-title">Select a Date & Time</h1>

      <p className="book-demo-desc">
        Thank you for connecting with us. We are excited to talk to you! Please fill your details, select a date and time.
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="book-demo-input"
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="book-demo-input"
      />
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="book-demo-input"
      />

      <div style={{ marginBottom: '15px' }}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
          dateFormat="EEE, dd MMM yyyy"
          className="custom-datepicker"
          calendarClassName="custom-calendar"
        />
      </div>

      <div className="book-demo-slots">
        {timeSlots.map((slot) => (
          <div
            key={slot}
            className={`book-demo-slot-btn ${selectedSlot === slot ? 'active' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </div>
        ))}
      </div>

      <button
        className={`book-demo-submit ${selectedSlot && name && mobile && email ? 'active' : ''}`}
        disabled={!(selectedSlot && name && mobile && email)}
        onClick={handleSubmit}
      >
        Confirm Booking
      </button>

      {message.text && (
        <div className={`fade-message ${message.type}`}>{message.text}</div>
      )}
    </div>
  );
}

export default BookDemo;
