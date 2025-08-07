import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaPlay } from 'react-icons/fa';


const videoList = [
  {
    title: 'Introducing Our Latest Feature',
    id: '1eVejwxg7e7Q9x8zsCVR62TRqxEOSAn1h',
  },
  {
    title: 'Feature Walkthrough: How It Works',
    id: '1mSHqm7t4BE7bBiZjFNRy2CEbWirH6NyR',
  },
  {
    title: 'Who We Are & What We Do',
    id: '1irh3w2u0-Gmohpz_UC5CtpAVMtCQ4jYU',
  },
  {
    title: 'Live Client Demonstration',
    id: '1Mgvsn9vloTwOMPcnrPlFGvigaG-CB1LP',
  },
];


const getDriveURL = (id) => `https://drive.google.com/uc?export=preview&id=${id}`;

const VideoSection = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleVisibility = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
      setShowPlayButton(true);
    }
  });
};

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibility, {
      threshold: [0.75],
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      className="relative bg-black text-white py-20 px-6 md:px-20"
      ref={sectionRef}
    >
      <h2 className="text-5xl font-bold mb-10 text-center heading-gradient">
        Trusted by the World's Leading AI Companies
      </h2>

      {/* Video Preview */}
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <iframe
            src={`https://drive.google.com/file/d/${videoList[currentIndex].id}/preview`}
            allow="autoplay"
            className="w-full h-[400px] rounded-xl"
        />

        {/* Overlay Play Button */}
        {showPlayButton && (
          <button
            onClick={openModal}
            className="absolute bottom-6 left-6 px-6 py-2 bg-white text-black rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <FaPlay size={12} />
            PLAY
          </button>
        )}
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {videoList.map((video, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setShowPlayButton(false);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              currentIndex === index
                ? 'bg-white text-black border-white'
                : 'border-gray-500 text-gray-300 hover:border-white'
            } transition`}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* Modal Video Player */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
              >
                ✕
              </button>
              <video
                src={getDriveURL(videoList[currentIndex].id)}
                controls
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default VideoSection;
