import React, { useEffect, useRef, useState } from "react";
import GalaxyBackground from "./GalaxyBackground";
import CaseStudies from "./CaseStudies";
import PricingSection from './PricingSection';

const banners = [
  { src: "/banner1.png", id: "text" },
  { src: "/banner2.png", id: "voice" },
  { src: "/banner3.png", id: "image" },
  { src: "/banner4.png", id: "about" },
];

export default function AIChatbot() {
  const carouselRef = useRef(null);
  const indexRef = useRef(0);
  const [offset, setOffset] = useState(0);

  /* header height */
  useEffect(() => {
    const measure = () => {
      const h = document.querySelector("header")?.getBoundingClientRect().height || 0;
      setOffset(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
}, []);

  /* carousel autoplay */
  useEffect(() => {
    const id = setInterval(() => {
      if (!carouselRef.current) return;
      indexRef.current = (indexRef.current + 1) % banners.length;
      carouselRef.current.scrollTo({
        left: indexRef.current * window.innerWidth,
        behavior: "smooth",
      });
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


  /* content data */
  const sections = [
    {
      id: "text",
      hero: "GTSBOT",
      title: "AI for Text",
      paragraphs: [
        "GTSBOT is your always‑on, RAG‑powered text assistant that redefines customer support and engagement through precision and empathy. It taps into your documents, help centers, and live product specs to craft conversational answers that feel naturally human.",
        "Where rigid bots fail, GTSBOT dynamically grounds each reply in real‑time data, sentiment, and history—scaling to thousands of chats while sounding like a single helpful teammate.",
        "A continuous learning loop keeps responses sharp. From e‑commerce to healthcare, teams cut costs and boost CSAT with conversations that simply *feel* right."
      ],
    },
    {
      id: "voice",
      hero: "GTSBOT",
      title: "AI for Voice",
      paragraphs: [
        "Imagine an agent that listens actively and adapts intelligently. GTSBOT Voice brings the same RAG intelligence to calls—interpreting speech in real‑time and replying with a warm, natural tone.",
        "Multilingual, emotion‑aware, and available 24/7, it routes, surveys, and even upsells while keeping human agents free for the big stuff.",
        "Turn every phone call into a friction‑less, data‑driven moment of delight—no hold music required."
      ],
    },
    {
      id: "image",
      hero: "GTSCANVAS",
      title: "AI for Image",
      paragraphs: [
        "GTSCANVAS is your creative co‑pilot—turning prompts and docs into stunning, brand‑aligned visuals in seconds.",
        "Feed it your brand palette, KPIs, or raw data; get campaign banners, infographics, or deck slides tailor‑made for every channel.",
        "Design bottlenecks disappear, experimentation explodes, and visual storytelling finally keeps pace with your ideas."
      ],
    },
    {
      id: "about",
      hero: "GTS",
      title: "Moments of Impact",
      paragraphs: [
        "A GTS Moment happens when intelligence meets flawless execution. Our products exist to create those moments—at scale.",
        "GTSBOT and GTSCANVAS already power customer conversations and creative pipelines worldwide, embedding RAG where it moves the needle most.",
        "Join us and turn AI from hype into hard ROI—augmenting teams, delighting users, and unlocking growth that sticks."
      ],
    },
  ];

  return (
    <div className="bg-black text-white w-full overflow-x-hidden">

      {/* ───────── BANNER CAROUSEL ───────── */}
      <section
  className="relative w-screen overflow-hidden
             -translate-y-0 sm:translate-y-0   /* default */
             translate-y-16 sm:translate-y-0    /* ⬅ add this line */
             "
  style={{ top: `-${offset}px` }}>
        <div className="absolute inset-0 z-0 pointer-events-none h-full">
          <GalaxyBackground />
        </div>

        {/* black bars hide star‑field above/below strip */}
        <div className="absolute inset-x-0 top-0 z-10" style={{ height: offset, background: "#000" }} />
        <div className="absolute inset-x-0 bottom-0 z-10" style={{ height: offset, background: "#000" }} />

        <div
          ref={carouselRef}
          className="relative z-20 flex overflow-x-auto snap-x snap-mandatory no-scrollbar transition-transform duration-700 ease-in-out"
          style={{ scrollBehavior: "smooth", width: "100vw" }}
        >
          {banners.map(({ src, id }, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-screen h-auto flex items-center justify-center cursor-pointer snap-start"
              style={{ aspectRatio: "16/9" }}
              onClick={() => scrollToSection(id)}
            >
              <img src={src} alt={`Banner ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <CaseStudies /> {/* ✅ RIGHT HERE */}
      <PricingSection />


      {/* ───────── CONTENT SECTIONS ───────── */}
      {sections.map(({ id, hero, title, paragraphs }) => {
        const heroSize =
          hero === "GTSCANVAS"
            ? "text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem]"
            : "text-[5rem] sm:text-[8rem] md:text-[14rem] lg:text-[22rem]";

        return (
          <section
            key={id}
            id={id}
            className="relative py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-black"
          >
            <h1
              className={`absolute inset-0 flex items-center justify-center ${heroSize} font-bold text-[#3b9eff35] select-none leading-none blur-sm`}
            >
              {hero}
            </h1>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 fade-in-up">
              <h2 className="heading-gradient text-3xl sm:text-4xl md:text-6xl font-extrabold">
                {hero} <span className="text-white/90">— {title}</span>
              </h2>
              {paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
                  {p}
                </p>
              ))}

              {id !== "about" && (
                <div className="mx-auto mt-12 sm:mt-14 h-px w-32 sm:w-40 bg-gradient-to-r from-transparent via-[#7ab8ff66] to-transparent" />
              )}
            </div>
          </section>
        );
      })}    
    </div>
  );
}