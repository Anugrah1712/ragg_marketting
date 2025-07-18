/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'diagonal-move': 'diagonalBlob 20s ease-in-out infinite',
        'diagonal-move-reverse': 'diagonalBlobReverse 20s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.35s ease-out both',
        'glow-border': 'glowBorder 2s ease-in-out infinite',
        'dropdown': 'dropdown 0.25s ease-out forwards', // ✅ NEW
      },
      keyframes: {
        diagonalBlob: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(50vw, 50vh)' },
        },
        diagonalBlobReverse: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-40vw, -40vh)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glowBorder: {
          '0%, 100%': {
            boxShadow: '0 0 0px #00eaff',
          },
          '50%': {
            boxShadow: '0 0 8px #00eaff, 0 0 16px #00eaff88',
          },
        },
        // ✅ NEW dropdown animation
        dropdown: {
          '0%': { opacity: 0, transform: 'translateY(-8px) scale(0.98)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(59, 130, 246, 0.4)',
      },
    },
  },
  plugins: [],
};
