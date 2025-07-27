import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GalaxyBackground from "./GalaxyBackground";


const headingGradientStyle = {
  background: "linear-gradient(to right, #ffffff, #3b9effaa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const DatalysisCaseStudy = () => {
  const nav = useNavigate();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ───────── FULLSCREEN HERO ───────── */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-black text-white text-center px-4 pt-24 sm:pt-28 overflow-hidden">
        <div className="z-10 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={headingGradientStyle}>
            Case Study: Enhancing Student Engagement at Datalysis with GenAI Chatbot by GTS
          </h1>
        </div>
      </section>

      {/* ───────── CASE CONTENT ───────── */}
      <section className="relative bg-[#0a0a0a] py-20 px-6 sm:px-10 text-gray-200">
        <div className="max-w-6xl mx-auto space-y-12 text-[1.15rem] sm:text-[1.2rem] leading-relaxed text-gray-300">

          {/* Challenge */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>The Challenge</h2>
            <p>
              Datalysis, a top-tier data science and analytics training institute in Bengaluru, was facing exponential growth in student interactions—over 18,000+ queries per month on their website, covering:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>General course details</li>
              <li>Demo class and batch booking</li>
              <li>Help choosing the right program based on background and goals</li>
            </ul>
            <p className="mt-4">
              This led to a heavy workload for the admissions and support team, delayed response times, and an impersonal experience for prospective learners.
            </p>
            <p>
              Datalysis needed a scalable, intelligent, and interactive chatbot that could automate common queries, offer real-time personalization, and support students throughout their decision-making journey.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Our Approach</h2>
            <p>
              Datalysis partnered with GenAI Technology Solutions (GTS) to build and deploy a GenAI-powered chatbot, seamlessly integrated into their website and CRM tools.
            </p>
            <div className="mt-6">
            <p className="mt-2 text-2sm text-center text-gray-400 italic">
              Design architecture
            </p>
          </div>
          </div>

          {/* Solution Architecture */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Solution Architecture</h2>
            <p className="font-semibold">Key Features & Innovations:</p>
            <ul className="list-disc ml-6 mt-2 space-y-4">
              <li>
                <strong>Context-Aware Retrieval with Vector Search</strong><br />
                The chatbot pulls answers from curated course material, FAQs, brochures, testimonials, and schedules using a fast vector-based semantic search engine.
              </li>
              <li>
                <strong>PEFT using QLoRA (Quantized Low-Rank Adaptation)</strong><br />
                Enabled efficient fine-tuning of the base LLM using domain-specific conversation data—optimized for Datalysis’ content, tone, and educational terminology, without needing full-model retraining.
              </li>
              <li>
                <strong>DPO (Direct Preference Optimization)</strong><br />
                Chatbot behavior was fine-tuned based on student interaction preferences—e.g., which course suggestions were accepted, which types of queries led to bookings—allowing it to learn what works without complex reinforcement learning setups.
              </li>
              <li>
                <strong>Smart Batch Booking Assistant</strong><br />
                Integrated into Datalysis’ internal scheduling system, enabling students to view real-time availability, book demos, or enroll directly from the chat interface.
              </li>
              <li>
                <strong>Personalized Course Recommendations</strong><br />
                By analyzing user inputs like educational background, goals, and time commitment, the chatbot could recommend the most suitable learning paths (e.g., full-stack data science vs. business analytics vs. weekend AI bootcamps).
              </li>
            </ul>
          </div>

          {/* Business Impact */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Business Impact & Results</h2>
            <table className="w-full text-base sm:text-lg mt-4 border border-gray-600 text-left">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="p-2 border border-gray-600">Metric</th>
                  <th className="p-2 border border-gray-600">Before</th>
                  <th className="p-2 border border-gray-600">After (90 Days)</th>
                  <th className="p-2 border border-gray-600">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-700">Avg. student query response time</td>
                  <td className="p-2 border border-gray-700">5.2 hours</td>
                  <td className="p-2 border border-gray-700">1.1 minutes</td>
                  <td className="p-2 border border-gray-700">↓ 98%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Demo class booking conversion rate</td>
                  <td className="p-2 border border-gray-700">11%</td>
                  <td className="p-2 border border-gray-700">29%</td>
                  <td className="p-2 border border-gray-700">↑ 2.6x</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Lead-to-enrollment conversion</td>
                  <td className="p-2 border border-gray-700">14%</td>
                  <td className="p-2 border border-gray-700">22%</td>
                  <td className="p-2 border border-gray-700">↑ 57%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Manual query load on staff</td>
                  <td className="p-2 border border-gray-700">100%</td>
                  <td className="p-2 border border-gray-700">35%</td>
                  <td className="p-2 border border-gray-700">↓ 65%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Personalized course match accuracy</td>
                  <td className="p-2 border border-gray-700">NA</td>
                  <td className="p-2 border border-gray-700">89% (via feedback)</td>
                  <td className="p-2 border border-gray-700">Introduced</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Student satisfaction (CSAT)</td>
                  <td className="p-2 border border-gray-700">3.9 / 5</td>
                  <td className="p-2 border border-gray-700">4.7 / 5</td>
                  <td className="p-2 border border-gray-700">↑ 20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Final */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Future-Ready Learning Engagement</h2>
            <p>
              With the DPO + QLoRA-tuned chatbot from GTS, Datalysis has created a more responsive, personalized, and efficient digital student experience—automating FAQs, improving conversions, and lightening the load on staff.
            </p>
            <p className="mt-4">
              Next steps include expanding the system to support:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>AI-based mentor matching</li>
              <li>Automated certificate & progress tracking</li>
              <li>Proactive learning nudges for drop-off prevention</li>
            </ul>
            <p className="mt-4">
              Datalysis is now positioned as a learner-first, AI-augmented edtech brand in India’s competitive upskilling ecosystem.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-10">
            <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-[#1c1c1c] text-white border border-[#3d3d3d] hover:bg-[#2a2a2a] rounded-lg transition duration-300"
            >
            ← Back
            </button>
        </div>
        </div>
      </section>
    </>
  );
};

export default DatalysisCaseStudy;
