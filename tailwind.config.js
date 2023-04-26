/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#701F4A",
        primaryLight: "#9B6280",
        primaryDark: "#701F4A7F",
        secondary: "#474141",
        secondaryLight: "#8E8E8E",
        secondaryDark: "#383333",
        background: "#F4F4F4",
      },
      fontFamily : {
        iranian_sans : ['IranianSans', 'sans-serif']
      },
    },
  },
  plugins: [],
  important: true,
}
