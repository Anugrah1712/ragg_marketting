// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './hero/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import UseCaseCarousel from './components/UseCaseCarousel';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Chatbot } from 'rag-chatbot-ui-gptbots';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <HowItWorksSection />
              <UseCaseCarousel />
              <TestimonialSection />
              <PricingSection />
              <FAQSection />
              <ContactForm />
            
            </>
          }
        />
      </Routes>
       <Chatbot />
       <Footer  />
    </Router>
  );
}

export default App;
