import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const caseStudies = [
  {
    title: "Datalysis",
    subtitle: "Institutional AI Transformation",
    image: "/Edtech.png",
    path: "/case-datalysis",
    tag: "EDTECH",
  },
  {
    title: "HireBridge India",
    subtitle: "Next-Gen HR AI Platform",
    image: "/HR.png",
    path: "/case-hr",
    tag: "HR & RECRUITMENT",
  },
  {
    title: "Finlytics",
    subtitle: "Conversational Banking AI",
    image: "/fintech.png",
    path: "/case-fintech",
    tag: "FINTECH",
  },
  {
    title: "LegalMind",
    subtitle: "AI for Legal Research & Drafting",
    image: "/law.png",
    path: "/case-law",
    tag: "LAW FIRM",
  },
];

export default function CaseStudies() {
  const nav = useNavigate();

  return (
    <section className="w-full bg-black py-24 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-6 leading-tight heading-gradient">
          Case Studies
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-16">
          We help companies anticipate and act with insight and speed.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {caseStudies.map(({ title, subtitle, image, path, tag }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              onClick={() => nav(path)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_#00FFFF66]"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[220px] object-cover transition duration-300 group-hover:brightness-90"
              />
              <div className="p-6 text-left space-y-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-black text-white rounded-full">
                  {tag}
                </span>
                <h3 className="text-xl font-bold text-black">{subtitle}</h3>
                <p className="text-cyan-600 font-medium text-sm">{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
