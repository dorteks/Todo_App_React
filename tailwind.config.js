/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 2255, 255, 0.17)",
        "sky-blue": "#A8DAF0",
        "white-smoke": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
