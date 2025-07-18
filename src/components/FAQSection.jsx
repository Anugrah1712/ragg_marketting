import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: 'What types of documents does GTSBOT support?',
    answer:
      'GTSBOT supports PDF, DOCX, and TXT files, as well as public web URLs. It automatically processes and chunks the content for semantic retrieval and accurate responses.',
  },
  {
    question: 'Can GTSBOT be deployed on-premise?',
    answer:
      'Yes. GTSBOT is fully containerized using Docker and can be deployed in secure, private environments, including air-gapped systems with no internet access.',
  },
  {
    question: 'Which large language models are supported?',
    answer:
      'GTSBOT supports GPT-4, Llama-3.3-70B-Instruct-Turbo, Meta-Llama-3.1-405B-Instruct-Turbo, scb10x-llama3-typhoon-v1-5-8b-instruct, and Gemini 1.5 Flash. Users can switch models dynamically through the Developer Console.',
  },
  {
    question: 'Does GTSBOT store or share our data with third parties?',
    answer:
      'No. All processing and storage happen locally within your environment. GTSBOT does not share any data externally unless explicitly configured by your organization.',
  },
  {
    question: 'Can we customize the assistant’s tone and behavior?',
    answer:
      'Absolutely. You can define custom prompts in the Developer Console to control tone, behavior, constraints, and domain-specific logic to suit your organization’s needs.',
  },
  {
    question: 'Does GTSBOT support voice-based interaction?',
    answer:
      'Yes. GTSBOT includes both voice input (speech-to-text) and text-to-speech output, enabling hands-free, conversational interaction.',
  },
];

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
                {/* Header */}
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

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <ExpandableAnswer answer={faq.answer} />
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

function ExpandableAnswer({ answer }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div ref={ref} className="px-8 pb-8">
        <p className="text-gray-400 text-base leading-relaxed break-words">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}
