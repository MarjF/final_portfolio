/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        tahiti: {
          50: "#4c5153",
          100: "#d0957C",
          150: "#696564",
          200: "#797979",
          300: "#E5B099",
        },
      },
      fontSize: {
        xxl: "8rem",
      },
      margin: {
        97: "25rem",
        99: "45rem",
      },
      height: {
        98: "33rem",
      },
    },
  },
  plugins: [],
};
