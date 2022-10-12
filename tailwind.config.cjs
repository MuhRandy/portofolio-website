/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#1597BB",
        primary: "#FFF8EA",
        secondary: "#06283D",
      },
    },
  },
  plugins: [],
};
