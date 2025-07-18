import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: 'What types of documents does GTSBOT support?',
    answer: 'GTSBOT supports PDF, DOCX, TXT files, and public web URLs...',
  },
  {
    question: 'Can GTSBOT be deployed on-premise?',
    answer: 'Yes. GTSBOT is designed for secure, self-hosted deployment...',
  },
  {
    question: 'Which large language models are supported?',
    answer: 'GTSBOT supports GPT-4, Llama 3, Gemini 1.5 Flash...',
  },
  {
    question: 'Does GTSBOT store or share our data with third parties?',
    answer: 'No. All processing and storage happens within your environment...',
  },
  {
    question: 'Can we customize the assistant’s tone and behavior?',
    answer: 'Absolutely. You can define custom prompts...',
  },
  {
    question: 'Does GTSBOT support voice-based interaction?',
    answer: 'Yes. GTSBOT includes voice input and text-to-speech...',
  },
];

const answerVariants = {
  collapsed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

export default function FAQSection() {
  const [open, setOpen] = useState(() => Array(faqs.length).fill(false));

  const toggle = (index) => {
    setOpen((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-24 px-6 sm:px-16 overflow-visible"
    >
      <div className="text-center mb-16">
        <h2 className="text-7xl font-bold heading-gradient">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg mt-4">
          We've gone ahead and answered some of the questions you might have.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {faqs.map((faq, i) => {
            const isOpen = open[i];
            return (
              <div
                key={i}
                className={`rounded-2xl p-0 border transition-colors duration-200 ${
                  isOpen
                    ? "border-blue-500/80 bg-[#0f0f0f]"
                    : "border-gray-800 bg-[#0a0a0a]"
                }`}
              >
                {/* Clickable header */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full text-left px-8 py-8 flex items-start justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <h3 className="text-white text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-base border transition-colors ${
                      isOpen
                        ? "border-blue-400 text-blue-400"
                        : "border-gray-600 text-white"
                    }`}
                  >
                    {isOpen ? "✕" : "+"}
                  </span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={answerVariants}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden px-8 pb-8"
                    >
                      <p className="text-gray-400 text-base leading-relaxed break-words">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
