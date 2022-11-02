/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
      },
      
      
      fontFamily: {
        daysone: ["DaysOne"],
        aoboshione: ["AoboshiOne"]
      }
    },
  },
  plugins: [],
}
