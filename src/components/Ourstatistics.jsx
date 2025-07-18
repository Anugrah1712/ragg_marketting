import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    title: "Projects completed",
    value: "93+",
    description: "We've successfully completed 93 top-tier projects.",
  },
  {
    title: "Satisfied customers",
    value: "100%",
    description: "We ensure a 100% satisfaction level for our clients.",
  },
  {
    title: "Hours saved per day",
    value: "3h",
    description: "Our solutions save our clients an average of 3 hours of work per day.",
  },
  {
    title: "Cost saved per month",
    value: "80k",
    description: "Our solutions save our clients an average of $80,000 per month.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const StatsSection = () => {
  return (
    <section className="relative z-10 bg-black text-white py-28 px-4 md:px-20 min-h-screen overflow-hidden">
      {/* subtle blur blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#60a5fa33] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#1e40af33] blur-[120px] pointer-events-none" />

      {/* Section Title */}
      
      <h1 className="text-7xl font-bold text-center mb-16 leading-tight heading-gradient">
        Our Statistics
      </h1>


      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="bg-[#0b0e14] rounded-2xl border border-[#1f2937] px-10 py-12 min-h-[320px] lg:min-h-[360px] backdrop-blur-md shadow-[0_0_40px_#60a5fa10] hover:shadow-[0_0_60px_#60a5fa30] transition duration-300"
          >
            <div className="text-xl font-semibold text-white mb-4 leading-snug">
              {item.title}
            </div>
            <div className="text-[3.6rem] md:text-[4.5rem] font-bold text-[#a1c4fd] drop-shadow-[0_0_0.3em_#60a5fa] mb-6">
              {item.value}
            </div>
            <div className="border-t border-gray-700 opacity-30 mb-5" />
            <p className="text-base text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
