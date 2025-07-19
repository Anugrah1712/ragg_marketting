import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: 'spring' },
  },
};

const FeaturesSection = () => {
  return (
    <motion.section
      id="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-black text-white py-24 px-4 md:px-16"
    >
      <h1 className="text-7xl font-bold text-center mb-16 leading-tight heading-gradient">
        What we do
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
        {/* Chatbot Development */}
        <motion.div variants={cardVariants} className="relative group overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-r from-blue-800 via-transparent to-blue-800 opacity-0 group-hover:opacity-20 transition duration-700 blur-xl"></div>
          <div className="bg-[#0b0e14] rounded-2xl border border-[#1f2937] p-6 shadow-xl relative z-10 h-full flex flex-col">
            <div className="bg-[#0f1115] rounded-xl p-4 text-sm space-y-4 mb-5 border border-[#1f2937]">
              <div className="flex items-start gap-3">
                <div className="text-xl">🧑‍💻</div>
                <div className="flex flex-col animate-pulse">
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span className="text-white font-medium">You</span> · <span>8:15 AM</span>
                  </div>
                  <div className="text-white text-sm">Schedule a Google meeting with John for 3:45PM tomorrow!</div>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-fade-in">
                <div className="bg-[#10151f] text-white border border-blue-500 w-6 h-6 text-sm flex items-center justify-center rounded-md font-semibold">
                  AI
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span className="text-white font-medium">AI Assistant</span> · <span>8:15 AM</span>
                  </div>
                  <div className="text-white text-sm">
                    I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.
                  </div>
                </div>
              </div>
            </div>

            {/* No typing bar now */}

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_0.3em_#60a5fa]">
                Chatbot Development
              </h3>
              <p className="text-gray-400 mt-2">
                We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Creation */}
        <motion.div variants={cardVariants} className="relative group overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-tr from-blue-500/10 to-transparent blur-2xl animate-pulse"></div>
          <div className="bg-[#0b0e14] rounded-2xl border border-[#1f2937] p-6 shadow-xl relative z-10 h-full flex flex-col">
            <div className="bg-[#0f1115] rounded-xl p-6 mb-4 relative overflow-hidden h-32 border border-[#1f2937]">
              {/* Animated Stars */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-blue-400 w-[1.5px] h-[1.5px] rounded-full opacity-30"
                    animate={{ opacity: [0.1, 0.6, 0.1] }}
                    transition={{
                      duration: 1.5 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="px-4 py-1 rounded-full border border-blue-400 bg-[#0b0e14]/80 text-white text-sm font-medium shadow-[0_0_10px_#60a5fa40] flex items-center gap-1">
                  Generating image
                  <span className="animate-ping w-2 h-2 bg-blue-400 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Fake input look only */}
            <div className="flex items-center bg-[#111] rounded-lg px-3 py-2 border border-gray-700">
              <div className="text-gray-500 text-sm flex-1">Generate an image of…</div>
              <button className="text-blue-400 px-3 border border-blue-400 rounded-md text-sm py-1">
                Generate
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_0.3em_#60a5fa]">Content Creation</h3>
              <p className="text-gray-400 mt-2">
                Our content creation solutions effortlessly generate high-quality, engaging content according to your brand's guidelines to captivate your audience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Workflow Automations */}
        <motion.div
          variants={cardVariants}
          className="bg-[#0b0e14] rounded-2xl border border-[#1f2937] p-6 shadow-xl relative flex flex-col items-center text-center hover:shadow-[0_0_25px_#60a5fa40] transition-shadow duration-300"
        >
          <div className="relative w-40 h-40 flex items-center justify-center rounded-full bg-black border-4 border-blue-500 mb-6 shadow-[0_0_40px_5px_rgba(59,130,246,0.2)]">
            <span className="text-white text-3xl font-bold">
              100<span className="text-blue-400">+</span>
              <div className="text-sm text-gray-400">Automations</div>
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_0.3em_#60a5fa]">Workflow Automations</h3>
          <p className="text-gray-400 mt-2">
            We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.
          </p>
        </motion.div>

        {/* LLM Development */}
        <motion.div
          variants={cardVariants}
          className="bg-[#0b0e14] rounded-2xl border border-[#1f2937] p-6 shadow-xl hover:shadow-[0_0_25px_#60a5fa40] transition-shadow duration-300"
        >
          <div className="bg-[#111] rounded-xl p-4 text-sm space-y-3 mb-4">
            <div className="text-blue-300">✨ Where do <span className="underline">Quokka’s live?</span></div>
            <div className="text-gray-300">Quokka’s live on Rottnest Island.</div>
          </div>
          <div className="flex items-center bg-[#111] rounded-lg px-3 py-2 border border-gray-700 mb-4">
            <div className="text-gray-600 text-sm">And are Quokka's big?</div>
          </div>
          <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_0.3em_#60a5fa]">LLM Development</h3>
          <p className="text-gray-400 mt-2">
            We develop Large Language Models that transform how your company interacts with data and customers.
          </p>
        </motion.div>

        {/* AI Consulting */}
        <motion.div
          variants={cardVariants}
          className="bg-[#0b0e14] rounded-2xl border border-[#1f2937] p-6 shadow-xl relative hover:shadow-[0_0_25px_#60a5fa40] transition-shadow duration-300"
        >
          <div className="h-32 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-xl mb-4 relative overflow-hidden">
            <div className="absolute top-4 left-6 bg-[#111] text-blue-400 text-xs px-3 py-1 rounded-md border border-blue-400">
              Efficiency +103%
            </div>
            <div className="absolute bottom-4 right-6 bg-[#111] text-blue-400 text-xs px-3 py-1 rounded-md border border-blue-400">
              Cost -67%
            </div>

            <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full">
              <motion.path
                d="M 0 80 Q 30 60 50 70 Q 70 80 90 50 Q 110 30 130 40 Q 150 60 170 30 Q 190 20 200 25"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              {[0, 50, 90, 130, 170, 200].map((cx, i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={[80, 70, 50, 40, 30, 25][i]}
                  r="2.5"
                  fill="#60a5fa"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_0.3em_#60a5fa]">AI Consulting</h3>
          <p className="text-gray-400 mt-2">
            Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
