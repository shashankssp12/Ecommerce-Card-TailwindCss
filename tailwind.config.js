/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      boxShadow: {
        "theme-1": "0 0 60px -15px rgba(0,0,0,0.7)",
        "theme-2": "15px 0 35px -5px rgba(0,0,0,0.5)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        tashu: "0 0 60px 2px rgb(255, 105, 180)",
      },
      colors: {
        "theme-blue": "#5515ef",
        "theme-pink": "#eb589e",
        "theme-blue-dark": "#3c01ca",
      },
      fontSize: {
        "19xl": "19rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
