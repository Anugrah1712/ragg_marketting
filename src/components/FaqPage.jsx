import React, { useEffect } from 'react';
import FAQSection from '../components/FAQSection'; // Adjust path if needed

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <FAQSection />
    </div>
  );
};

export default FaqPage;
