import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // ADD THIS


import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

/* same ids / labels the header uses */
const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'process',  label: 'Process'  },
  { id: 'pricing',  label: 'Pricing'  },
  { id: 'reviews',  label: 'Reviews'  },
  { id: 'faq',      label: 'FAQ'      },
  { id: 'contact',  label: 'Contact'  },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ You forgot this


  /* ---------- smooth‑scroll helper ---------- */
  const go = (id) => {
  if (id === 'faq') {
    navigate('/faq');
    return;
  }

  // existing scroll logic
  if (id === 'home') {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
    return;
  }

  if (location.pathname === '/') {
    const el = document.getElementById(id);
    if (el) {
      const hdr = document.querySelector('header')?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - hdr;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  } else {
    window.location.href = `/#${id}`;
  }
};


  return (
    <footer className="bg-black text-white border-t border-gray-800 pt-20 pb-6 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* -------- Column 1: brand -------- */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => go('home')}
            className="flex items-center gap-2 text-left"
          >
            <img src={logo} alt="GTS Logo" className="w-7 h-7" />
            <span className="text-2xl font-semibold">GTS</span>
          </button>
          <p className="text-gray-400 text-sm max-w-sm">
            GenAI Technology Solutions Pvt. Ltd. — Building intelligent AI products for legal, education, enterprise,
            and customer support.
          </p>
        </div>

        {/* -------- Column 2: quick links -------- */}
        <div>
          <h4 className="text-blue-400 font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-300 space-y-2">
            <li>
              <button
                onClick={() => go('home')}
                className="hover:text-white transition text-left w-full"
              >
                Home
              </button>
            </li>
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className="hover:text-white transition text-left w-full"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* -------- Column 3: contact -------- */}
        <div>
          <h4 className="text-blue-400 font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-300 text-sm mb-2">
            Email:&nbsp;
            <a
              href="mailto:contact@genaitechsol.com"
              className="text-blue-400 hover:underline"
            >
              contact@genaitechsol.com
            </a>
          </p>
          <p className="text-gray-300 text-sm mb-2">Phone: +91 827 528 7490</p>
          <p className="text-gray-400 text-sm">
            #08-37<br />
            356A Anchorvale Lane<br />
            Singapore 541356
          </p>
        </div>

        {/* -------- Column 4: legal & socials -------- */}
        <div>
          <h4 className="text-blue-400 font-semibold mb-3">Legal</h4>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Security & Compliance</a></li>
          </ul>

          <h4 className="text-blue-400 font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-white" /></a>
            <a href="https://twitter.com/GenaiTechSol" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-white" /></a>
            <a href="https://www.linkedin.com/company/genaitechsol" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-white" /></a>
            <a href="https://www.youtube.com/@GenAITechnologySolutions" target="_blank" rel="noopener noreferrer"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* ---- footer bottom ---- */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 GenAI Technology Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
