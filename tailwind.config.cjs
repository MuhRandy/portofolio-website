/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#1597BB",
        primary: "#FFF8EA",
        secondary: "#06283D",
      },
      fontFamily: {
        libre: ['"Playfair Display"', "serif"],
        fondamento: ['"Fondamento"', "cursive"],
      },
    },
  },
  plugins: [
    // Or with a custom prefix:
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
