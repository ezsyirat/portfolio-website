/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        pri: "#5840BA",
        sec: "#A4DB74",
        dark: "#0f172a",
      },

      fontFamily: {
        pri: ['Raleway', 'sans-serif'],
      },

      screens: {
        "2xl" : "1320px",
      }
    },
  },
  plugins: [],
}

