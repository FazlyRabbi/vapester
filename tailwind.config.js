/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "13px",
      base: "14px",
      titleSm: "15px",
      xl: "1.25rem",
    },

    colors: {
      transparent: "transparent",
      primary: "#F45DA0",
      white: "#ffffff",
      gray: "#191919",
      second: "#47B8E7",
      black: "#000",
      softGray: "#ddd",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      red: "#FF0000",
    },

    screens: {
      sm: "568px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
