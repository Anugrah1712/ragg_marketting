// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import UseCasesSection from './components/UseCasesSection';
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
            <Home />
            <FeaturesSection />
            <HowItWorksSection />
            <UseCasesSection />
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
