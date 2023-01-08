/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        main: "107.5rem", //1720px
      },
      spacing: {
        8: "2.1875rem", //35px
      },
      fontSize: {
        big: "5rem",
      },
      colors: {
        green: "#0a836a",
      },
    },
  },
  plugins: [],
};
