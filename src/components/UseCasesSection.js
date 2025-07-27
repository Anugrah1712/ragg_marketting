import React from 'react';
import { FaWrench, FaCogs, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    title: 'Analyze',
    description:
      'We start with a thorough analysis of your current workflows to see how AI could improve your processes.',
    icon: <FaChartLine className="text-6xl text-blue-500 animate-icon-float" />,
  },
  {
    number: '02',
    title: 'Build & Implement',
    description:
      'Then, our developers will start crafting custom AI solutions for your company, continuously prioritising quality and safety.',
    icon: <FaCogs className="text-6xl text-blue-500 animate-icon-bounce delay-100" />,
  },
  {
    number: '03',
    title: 'Maintain & Improve',
    description:
      'After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions.',
    icon: <FaWrench className="text-6xl text-blue-500 animate-icon-float delay-200" />,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-black text-white min-h-screen flex flex-col justify-center px-6 md:px-20">
      <h2 className="text-6xl font-bold text-center mb-16 heading-gradient">The Process</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-[75%] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#1c1c1c] shadow-[0_0_30px_rgba(0,0,0,0.35)] min-h-[400px] flex flex-col justify-start"
          >
            {/* Icon */}
            <div className="mb-8 flex items-center justify-center h-36">
              {step.icon}
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl font-bold mb-4 animate-slide-in">
              <span className="text-blue-400">{step.number}</span>{' '}
              <span className="text-white">{step.title}</span>
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed animate-fade-in delay-150">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
