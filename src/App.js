import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import AIChatbot from "./components/AIChatbot";
import Home from "./components/Home";
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import TestimonialSection from './components/TestimonialSection';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Chatbot } from 'rag-chatbot-ui-gptbots';
import BookDemo from './components/BookDemo';
import FinStyleChat from './components/FinStyleChat';
import FaqPage from './components/FaqPage'; // ✅ Import the new FAQ page
import DatalysisCaseStudy from './components/DatalysisCaseStudy';
import HRCaseStudy from './components/HRCaseStudy';


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
              <FinStyleChat />
              <FeaturesSection />
              {/* <Ourstatistics /> */}
              <UseCasesSection />
              {/* <PricingSection /> */}
              <TestimonialSection />
              {/* <FAQSection /> Removed from homepage */}
              <ContactForm />
            </>
          }
        />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/faq" element={<FaqPage />} /> {/* ✅ New FAQ route */}
        <Route path="/aichatbot" element={<AIChatbot />} />
        <Route path="/case-datalysis" element={<DatalysisCaseStudy />} />
        <Route path="/case-hr" element={<HRCaseStudy />} />
      </Routes>
      <Analytics />
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
