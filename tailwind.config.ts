export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7338EC",
        secondary: "#C25CF5",
        tertiary: "#FBDAAF",
        darkBg: "#000000",
        violetDot: "#AD46FF",
        navLinks: "#99A1AF",
        textLight: "#99A1AF"
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Alata", "sans-serif"]
      }
    },
  },
  plugins: [],
}