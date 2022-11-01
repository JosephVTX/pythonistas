/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        daysone: ["DaysOne"],
        aoboshione: ["AoboshiOne"]
      }
    },
  },
  plugins: [],
}
