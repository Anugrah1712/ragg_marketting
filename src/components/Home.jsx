import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GalaxyBackground from "./GalaxyBackground";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("contact");
  const nav = useNavigate();
  const location = useLocation();

  const pillWrapper = useRef(null);
  const dropdownWrapper = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const listener = (e) => {
      if (
        pillWrapper.current &&
        !pillWrapper.current.contains(e.target) &&
        dropdownWrapper.current &&
        !dropdownWrapper.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const hdr = document.querySelector("header")?.offsetHeight || 0;
          const y = el.getBoundingClientRect().top + window.scrollY - hdr;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
  }, [location]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const pillClasses =
    active === "services"
      ? "left-0 translate-x-0 w-1/2"
      : "left-1/2 -translate-x-0 w-1/2";

  return (
    <>
      <main>
        <section className="relative isolate z-50 min-h-screen flex items-center justify-center bg-black overflow-visible">
          <GalaxyBackground />
          <div className="absolute -top-[40%] -left-[40%] w-[1200px] h-[1200px] rounded-full bg-[#3b9effaa] blur-[200px] animate-diagonal-move pointer-events-none" />
          <div className="absolute bottom-[-30%] right-[-30%] w-[1000px] h-[1000px] rounded-full bg-[#3b9eff66] blur-[180px] animate-diagonal-move-reverse pointer-events-none" />

          <div className="z-10 max-w-5xl px-4 text-center">
            <img
              src="/logo.png"
              alt="GTS Logo"
              className="mx-auto mt-6 sm:mt-0 mb-6 w-28 h-28 sm:w-32 sm:h-32 object-contain"
            />

            <h1 className="text-7xl font-bold mb-16 leading-tight heading-gradient">
              GenAI Technology Solutions
            </h1>

            <p className="text-[#d0d4dc] text-xl md:text-4xl mb-12">
              We develop custom AI solutions for innovative companies.
            </p>
      

            {/* Pill Nav + Dropdown Container */}
<div className="relative z-[100] flex flex-col items-center mt-4">
  <div
    ref={pillWrapper}
    onMouseLeave={() => setOpen(false)}
    className="relative inline-flex items-stretch bg-[#0d0d0d]/90 border border-[#272727] rounded-[22px] overflow-visible backdrop-blur"
  >
    <span
      className={`absolute top-0 h-full bg-[#151515] transition-all duration-300 ease-out rounded-[22px] ${pillClasses}`}
    />
    <button
      onMouseEnter={() => {
        setActive("services");
        setOpen(true);
      }}
      className="relative z-10 flex items-center justify-center w-40 px-6 py-[14px] font-medium text-[#c2c2c2] hover:text-[#a8cbff] transition"
    >
      <span className="text-[#c2c2c2]">Our</span>
      <span className="text-[#7ab8ff]">&nbsp;Services</span>
    </button>
    <button
      onMouseEnter={() => setActive("contact")}
      onClick={() => {
        setOpen(false);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="relative z-10 flex items-center justify-center w-40 gap-2 px-6 py-[14px] font-medium text-[#c2c2c2] hover:text-[#a8cbff] transition"
    >
      Contact&nbsp;Us <span>→</span>
    </button>
    <span
      className={`absolute -bottom-1 h-2 w-2 rounded-full bg-[#7ab8ff] transition-all duration-300 ease-out ${
        active === "services" ? "left-1/4" : "left-3/4"
      }`}
    />
  </div>

  {/* Dropdown */}
  {hasMounted && open && (
    <div
      ref={dropdownWrapper}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`absolute top-full mt-2 w-full max-w-[95vw] sm:max-w-[480px] px-3 sm:px-4 py-4 border border-[#3c3c3c] bg-[#111111] shadow-xl z-[9999] rounded-xl transition-all duration-300 ease-in-out ${
        open ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
      }`}
    >
      {/* dropdown items */}
      {[
        {
          label: "GTSBOT",
          subtext: "Instant answers powered by your data",
          description:
            "A GTS-powered chatbot that retrieves from your documents, websites, and FAQs — ideal for customer support, education, legal, and more.",
          route: "/aichatbot",
        },
        {
          label: "GTSCANVAS",
          subtext: "Auto-generate high-converting marketing banners",
          description:
            "Feed in your content, and let AI design eye‑catching visuals for web, social media, and ads — customized to your brand.",
          route: "/banner",
        },
      ].map(({ label, subtext, description, route }, idx, arr) => (
        <div key={label}>
          <div
            onClick={() => {
              nav(route);
              setOpen(false);
            }}
            className="p-4 rounded-lg hover:bg-[#1b1b1b] transition-all duration-200 cursor-pointer flex items-start gap-4"
          >
            <span className="relative flex h-4 w-4 mt-[6px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
            </span>

            <div className="flex flex-col">
              <h4 className="text-white font-semibold text-lg">{label}</h4>
              <p className="text-sm text-[#88bfff]">{subtext}</p>
              <p className="text-gray-400 text-sm mt-1 leading-snug">{description}</p>
            </div>
          </div>
          {idx < arr.length - 1 && <div className="border-t border-[#5f5f5f]/40 mx-4 my-2" />}
        </div>
      ))}
    </div>
  )}
</div>
      </div>
</section>

        <section className="relative z-0 min-h-[75vh] flex flex-col items-center justify-center bg-black/90 text-center px-4 overflow-hidden">
          <GalaxyBackground />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/95 to-black/0 z-[1]" />
          <h1 className="absolute top-[15%] text-[28rem] font-bold text-[#3b9eff35] z-0 select-none leading-none blur-sm">
            GTS
          </h1>

          <div className="z-10 max-w-5xl">
            <h2 className="text-[2.6rem] md:text-[4rem] font-semibold leading-snug text-white">
              We're <span className="text-[#c2e9fb]">GenAI Technology Solutions</span>. We
              develop custom <span className="text-[#c2e9fb]">AI</span> solutions for{" "}
              <span className="text-[#c2e9fb]">innovative companies</span>.
            </h2>

            <button
              className="mt-10 px-6 py-3 rounded-lg bg-[#111111] text-white hover:text-[#a1c4fd] border border-[#2c2c2c] transition duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in <span className="text-[#a1c4fd]">touch</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
