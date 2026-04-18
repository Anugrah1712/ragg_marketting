import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { Chatbot } from "gts-chatbot";
import AIChatbot from "./components/AIChatbot";
import Home from "./components/Home";
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';
import BookDemo from './components/BookDemo';
import FinStyleChat from './components/FinStyleChat';
import FaqPage from './components/FaqPage';
import DatalysisCaseStudy from './components/DatalysisCaseStudy';
import HRCaseStudy from './components/HRCaseStudy';
import VideoSection from './components/VideoSection';
import GTSCANVAS from "./components/GTSCANVAS";

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
              <VideoSection />
              <UseCasesSection />
              <ContactForm />
            </>
          }
        />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/aichatbot" element={<AIChatbot />} />
        <Route path="/case-datalysis" element={<DatalysisCaseStudy />} />
        <Route path="/case-hr" element={<HRCaseStudy />} />
        <Route path="/banner" element={<GTSCANVAS />} />
      </Routes>

      <Analytics />
      <Footer />

      {/* ✅ GLOBAL FLOATING CHATBOT */}
      <Chatbot
        config={{
          API_BASE_URL: "https://genaitechsol.shop",
          PROJECT_NAME: "genaitechsol.com"
        }}
      />
    </Router>
  );
}

export default App;