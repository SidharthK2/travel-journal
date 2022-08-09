/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["poppins", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
}
