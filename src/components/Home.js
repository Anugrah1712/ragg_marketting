// Home.js
import React from "react";
import "./Home.css";

const Home = ({ onTryDemo, showChatbot }) => {
  return (
    <section id="hero" className="hero-container">
      <div className="blur-bg"></div>

      <div className="hero-content">
        <h1 className="gts-title fade-up delay-1">GTS</h1>
        <h2 className="gts-subheading fade-up delay-2">
          Welcome to GTS – Pioneers in AI Innovation
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
        {!showChatbot && (
          <button className="glow-button fade-up delay-3" onClick={onTryDemo}>
            Try the Demo →
          </button>
        )}
      </div>
    </section>
  );
};

export default Home;

