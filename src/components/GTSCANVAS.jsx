import React, { useState } from "react";
import GalaxyBackground from "./GalaxyBackground";

const GTSCANVAS = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [toast, setToast] = useState("");

  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleGenerate = () => {
    if (!prompt && !image1 && !image2) {
      showToast("⚠️ Please provide at least one image or a prompt!");
      return;
    }
    console.log("Generating banner with:", { image1, image2, prompt });
    showToast("✨ Generating banner... Please wait!");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <GalaxyBackground />

      {/* Glowing gradient background orbs */}
      <div className="absolute -top-[40%] left-[10%] w-[900px] h-[900px] bg-[#60a5fa]/10 blur-[180px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-30%] right-[10%] w-[900px] h-[900px] bg-[#f472b6]/10 blur-[180px] rounded-full pointer-events-none animate-pulse" />

      {/* Toast popup */}
      {toast && (
        <div className="fixed top-6 px-6 py-3 rounded-xl text-white text-sm font-medium heading-gradient shadow-[0_0_25px_rgba(96,165,250,0.5)] animate-fade-in-out z-50">
          {toast}
        </div>
      )}

      {/* Main content */}
      <div className="z-10 flex flex-col items-center w-full px-4">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-10 tracking-widest heading-gradient drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
          GTSCANVAS
        </h1>

        {/* Card */}
        <div className="w-full max-w-md sm:max-w-lg bg-[#0d0d0d]/80 border border-[#2d2d2d] rounded-3xl p-8 shadow-[0_0_40px_rgba(96,165,250,0.25)] backdrop-blur-md">

          {/* Upload Section */}
          <div className="flex justify-between gap-4 mb-6">
            {[{ label: "Upload Image 1", img: image1, set: setImage1 },
              { label: "Upload Image 2", img: image2, set: setImage2 }].map(
              ({ label, img, set }, idx) => (
                <label
                  key={idx}
                  className="w-1/2 aspect-square border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-sm cursor-pointer transition-all duration-300 border-[#2d2d2d] hover:border-transparent hover:heading-gradient relative overflow-hidden"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={`preview-${idx}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <>
                      <span className="text-3xl mb-2 heading-gradient">+</span>
                      <span className="heading-gradient">{label}</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, set)}
                  />
                </label>
              )
            )}
          </div>

          {/* Prompt Box */}
          <textarea
            className="w-full h-28 p-4 rounded-xl bg-[#121212] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-transparent mb-6 border border-[#2d2d2d] focus:border-transparent focus:bg-[#121212]/10"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full py-3 rounded-xl font-semibold text-lg heading-gradient border border-[#2d2d2d] hover:shadow-[0_0_25px_rgba(96,165,250,0.6)] hover:border-transparent transition-all duration-300"
          >
            Generate
          </button>
        </div>
      </div>

      {/* Toast animation */}
      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-10px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out;
        }
      `}</style>
    </main>
  );
};

export default GTSCANVAS;
