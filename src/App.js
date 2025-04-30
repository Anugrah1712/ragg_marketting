// src/App.jsx
import React from 'react';
import HeroSection from './hero/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection'
import UseCaseCarousel from './components/UseCaseCarousel';
import TestimonialCard from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCaseCarousel/>
      <TestimonialCard />
      <PricingSection />
      <FAQSection />
      <ContactForm />
    </div>
  );
}

export default App;
