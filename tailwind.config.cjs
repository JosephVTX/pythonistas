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
        aoboshione: ["AoboshiOne"],
        actor: ['Actor', 'sans-serif'],
        acme: ["Acme", 'Regular'],
        biorhyme: ["BioRhyme"],
        arapey: ['BioRhyme', 'serif']
      }
    },
  },
  plugins: [
   
  ],
}
