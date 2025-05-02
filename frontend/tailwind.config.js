/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: "#E8EAF6",
          100: "#C7CEEA",
          600: "#4B0082",
          700: "#3F0071",
          900: "#2F004B",
        },
        teal: {
          50: "#E0F2F1",
          100: "#B2DFDB",
          600: "#008080",
          700: "#006D5D",
        },
        coral: {
          500: "#FF6B6B",
          600: "#F44336",
        },
        orange: {
          500: "#FFA500",
          600: "#F57C00",
        },
      },
    },
  },
  plugins: [],
};
