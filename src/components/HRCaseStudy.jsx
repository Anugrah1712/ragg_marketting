import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GalaxyBackground from "./GalaxyBackground";


const headingGradientStyle = {
  background: "linear-gradient(to right, #ffffff, #3b9effaa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const HRCaseStudy = () => {
  const nav = useNavigate();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ───────── FULLSCREEN HERO ───────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-black text-white text-center px-4 overflow-hidden">
        <img
          src="/HR.png"
          alt="HR Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="z-10 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={headingGradientStyle}>
            Case Study: Transforming Recruitment Support at HireBridge India with GenAI Chatbot by GTS
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
              HireBridge India is a recruitment process outsourcing (RPO) firm based in Kanpur, offering end-to-end talent acquisition support for fast-growing startups and large enterprises across India.
            </p>
            <p className="mt-4">
              With hiring volumes surging—often processing over 20,000 candidate profiles per month—HireBridge’s recruiters were bogged down by routine tasks like candidate screening, JD matching, client query resolution, and compliance documentation.
            </p>
            <p className="mt-4">
              The result: longer turnaround times, higher operational costs, and increasing recruiter burnout.
            </p>
            <p className="mt-4">
              To stay competitive and improve service delivery, HireBridge needed a scalable, intelligent system to optimize internal workflows, automate repetitive tasks, and reduce dependency on manual labor.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Our Approach</h2>
            <p>
              HireBridge partnered with GenAI Technology Solutions (GTS) to build and deploy a Retrieval-Augmented Generation (RAG)-based chatbot, embedded directly into the company’s Application Tracking System.
            </p>
            <div className="mt-6">
            <img
              src="/hr-approach.png"
              alt="Our Approach"
              className="w-full rounded-xl border border-white/40"
            />
            <p className="mt-2 text-2sm text-center text-gray-400 italic">
              Design architecture
            </p>
          </div>
          </div>
          {/* Solution Architecture */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Solution Architecture</h2>
            <p className="font-semibold">Key Enhancements Included:</p>
            <ul className="list-disc ml-6 mt-2 space-y-4">
              <li>
                <strong>RAG-powered document retrieval:</strong><br />
                The chatbot fetched accurate, contextual answers from thousands of internal job descriptions, candidate CVs, client policies, and past placement data.
              </li>
              <li>
                <strong>RAFT (Retrieval-Augmented Fine-Tuning):</strong><br />
                We fine-tuned the model using industry-specific datasets including annotated JD-CV matching logic, recruiter chat logs, significantly improving relevance and domain understanding.
              </li>
              <li>
                <strong>RLHF (Reinforcement Learning from Human Feedback):</strong><br />
                Recruiters provided live feedback to fine-tune the chatbot's conversational tone and ensure correct interpretations of nuanced client requirements, diversity mandates, and candidate prioritization logic.
              </li>
              <li>
                <strong>ATS Integration:</strong><br />
                The solution was integrated with Zoho Recruit and Naukri APIs, allowing recruiters to perform shortlisting, screening, and basic queries without switching tabs.
              </li>
            </ul>
          </div>

          {/* Business Impact */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Business Impact & Optimized Metrics</h2>
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
                  <td className="p-2 border border-gray-700">Avg. time to screen 1 candidate</td>
                  <td className="p-2 border border-gray-700">11 minutes</td>
                  <td className="p-2 border border-gray-700">2.5 minutes</td>
                  <td className="p-2 border border-gray-700">⬇ 77%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Recruiter headcount for ops tasks</td>
                  <td className="p-2 border border-gray-700">42 FTEs</td>
                  <td className="p-2 border border-gray-700">28 FTEs</td>
                  <td className="p-2 border border-gray-700">⬇ 33%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Profile shortlisting accuracy</td>
                  <td className="p-2 border border-gray-700">72%</td>
                  <td className="p-2 border border-gray-700">93%</td>
                  <td className="p-2 border border-gray-700">⬆ 21 points</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Candidate query resolution time</td>
                  <td className="p-2 border border-gray-700">4.6 hours</td>
                  <td className="p-2 border border-gray-700">45 minutes</td>
                  <td className="p-2 border border-gray-700">⬇ 84%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">Internal recruiter satisfaction (CSAT)</td>
                  <td className="p-2 border border-gray-700">3.7/5</td>
                  <td className="p-2 border border-gray-700">4.6/5</td>
                  <td className="p-2 border border-gray-700">⬆ 24% improvement</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-700">SLA adherence to client timelines</td>
                  <td className="p-2 border border-gray-700">68%</td>
                  <td className="p-2 border border-gray-700">91%</td>
                  <td className="p-2 border border-gray-700">⬆ 23 points</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Closing */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={headingGradientStyle}>Scaling Smart Recruitment in India</h2>
            <p>
              With the GenAI chatbot from GTS, HireBridge India has automated a large portion of its daily recruitment support operations—reducing manual work, lowering headcount, and improving recruiter productivity and morale.
            </p>
            <p className="mt-4">
              As the system continues to learn and evolve via RAFT and RLHF loops, HireBridge is now exploring use cases for AI-assisted interview scheduling, salary benchmarking, and compliance tracking—making it a future-ready partner for modern Indian enterprises.
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

export default HRCaseStudy;
