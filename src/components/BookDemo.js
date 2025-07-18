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
  const [service, setService] = useState('');

  useEffect(() => {
    const slots = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'];
    setTimeSlots(slots);
    setSelectedSlot('');
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
    if (!service) {
      showMessage("Please select a service.", "error");
      return;
    }

    const payload = new URLSearchParams();
    payload.append("date", selectedDate.toDateString());
    payload.append("slot", selectedSlot);
    payload.append("name", name);
    payload.append("mobile", mobile);
    payload.append("email", email);
    payload.append("service", service);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyBaepntiYEmqae9XkU2JE9vCYpJLblxfPOKnVCoA15wh3a3dN1KmtASagHr_ElESLq/exec", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();
      if (result.status === "success") {
        showMessage("Booking confirmed!", "success");
        setName('');
        setMobile('');
        setEmail('');
        setService('');
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
    <section className="relative z-10 bg-black min-h-screen py-24 px-4 md:px-16 text-white overflow-hidden">
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#60a5fa33] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#1e40af33] blur-[120px] rounded-full pointer-events-none" />

      <h1 className="text-7xl font-bold text-center mb-16 leading-tight heading-gradient">
        Book a Demo
      </h1>

      <div className="bg-[#0b0e14] border border-[#1f2937] rounded-2xl p-10 max-w-3xl mx-auto shadow-[0_0_60px_#60a5fa10] backdrop-blur">
        <p className="text-gray-400 text-center mb-10">
          We're excited to talk to you! Please fill your details, select a date and time.
        </p>

        <div className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#111] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-blue-400 outline-none"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="bg-[#111] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#111] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-blue-400 outline-none"
          />
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="bg-[#111] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-blue-400 outline-none"
          >
            <option value="" disabled>Select a Service</option>
            <option value="GTSBOT">GTSBOT</option>
            <option value="GTSCANVAS">GTSCANVAS</option>
            <option value="Other">Other</option>
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
            dateFormat="EEE, dd MMM yyyy"
            className="bg-[#111] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-blue-400 outline-none w-full"
            calendarClassName="custom-calendar"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`px-4 py-2 text-sm rounded-md border transition-all duration-200 ${
                  selectedSlot === slot
                    ? 'bg-blue-500 text-white border-blue-500 shadow-[0_0_12px_#60a5fa80]'
                    : 'bg-[#111] border-gray-700 text-gray-300 hover:border-blue-400'
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            className={`mt-8 py-3 rounded-md text-white font-semibold transition-all ${
              selectedSlot && name && mobile && email
                ? 'bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_#60a5fa50]'
                : 'bg-gray-700 cursor-not-allowed'
            }`}
            disabled={!(selectedSlot && name && mobile && email)}
            onClick={handleSubmit}
          >
            Confirm Booking
          </button>

          {message.text && (
            <div className={`mt-4 text-center py-2 rounded-md font-medium ${
              message.type === 'success'
                ? 'text-green-400 bg-green-800/20 border border-green-600'
                : 'text-red-400 bg-red-800/20 border border-red-600'
            }`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BookDemo;
