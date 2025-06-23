// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
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
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home onTryDemo={() => setShowChatbot(true)} showChatbot={showChatbot} />
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
      <Analytics/>
      {showChatbot && <Chatbot />}
      <Footer />
    </Router>
  );
}

export default App;
