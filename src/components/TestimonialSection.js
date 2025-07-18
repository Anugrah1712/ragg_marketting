import React from 'react';

const testimonials = [
  {
    quote: "GTSBOT has become an essential part of our onboarding and HR support processes.",
    author: "— Ms Sejal, HR Manager, HireBridge India",
    detail:
      "From explaining policies to answering leave and benefits queries, GTSBOT handles over 80% of repetitive employee questions. It’s allowed our team to focus on strategic HR initiatives.",
    image: "/hrtest.jpg",
    stars: 4,
  },
  {
    quote: "GTSBOT has streamlined how we engage with prospective and enrolled students on our website.",
    author: "— Mr. Parekh, Director, Datalysis",
    detail:
      "Students can now ask about course schedules, eligibility, and registration directly through the chatbot. It has reduced manual intervention and ensured that students always have access to up-to-date information about ongoing and upcoming programs.",
    image: "/ceo.jpeg",
    stars: 5,
  },
  {
    quote: "We integrated GTSBOT into our support stack, and our response time dropped by 60%.",
    author: "— Mrs. Shalini, Operations Lead",
    detail:
      "Our chatbot now handles tier-1 queries like KYC, loan status, and account FAQs. It’s secure, fast, and fully integrated with our compliance workflows.",
    image: "/mom.png",
    stars: 5,
  },
  {
    quote: "GTSBOT has drastically reduced the time our legal team spends on reviewing contracts.",
    author: "— Legal Consultant, Mid-Sized Law Firm",
    detail:
      "We now get accurate answers to clause-specific questions within seconds, allowing us to focus on more strategic legal work. It’s like having a junior associate who never sleeps.",
    image: "/dev.png",
    stars: 5,
  },
];

const scrollingTestimonials = [...testimonials, ...testimonials];

export default function TestimonialSection() {
  return (
    <section id= 'reviews'
    className="bg-black text-white min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
      <h1 className="text-6xl font-bold text-center mb-16 leading-tight heading-gradient">
  Reviews
</h1>


      {/* Scrollable card container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-10">
          {scrollingTestimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[550px] bg-[#0b0e14] rounded-2xl p-10 border border-gray-800 shadow-[0_0_40px_#60a5fa20] hover:shadow-[0_0_60px_#60a5fa60] transition duration-300 h-[400px] flex-shrink-0"
            >
              <p className="italic text-2xl mb-6 leading-snug text-white">"{t.quote}"</p>

              <div className="flex items-center gap-5 mb-4">
                <img
                  src={t.image}
                  alt="Reviewer"
                  className="w-16 h-16 rounded-full object-cover border border-gray-700"
                />
                <div>
                  <p className="text-blue-400 font-semibold text-lg">{t.author}</p>
                  <div className="text-yellow-400 text-xl">
                    {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-lg">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
