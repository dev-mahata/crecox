export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00000066",
        secondary: "#EC4899",
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