import React, { useEffect } from "react";
import "./Home.css";

const Home = ({ onTryDemo, showChatbot }) => {

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = document.querySelector(".header")?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <section id="hero" className="hero-container">
      <div className="blur-bg"></div>

      <div className="hero-content">
        <h1 className="gts-title fade-up delay-1">GTS</h1>
        <h2 className="gts-subheading fade-up delay-2">
          AI THAT SPEAKS YOUR BUSINESS
        </h2>
        <p className="gts-description fade-up delay-2">
          At GTS, we develop cutting-edge AI solutions that transform the way
          businesses interact with information. Our flagship product, GTSBOT,
          is a powerful contextual assistant built using advanced
          Retrieval-Augmented Generation (RAG) architecture. Whether you're in
          legal, education, enterprise, or customer service, GTS empowers you
          with intelligent, secure, and customizable tools designed to deliver
          accurate, real-time insights from your data—on your terms.
        </p>
        <button
          className={`glow-button fade-up delay-3 ${
            showChatbot ? "hidden-but-reserved" : ""
          }`}
          onClick={onTryDemo}
        >
          Try the Demo →
        </button>
      </div>
    </section>
  );
};

export default Home;
