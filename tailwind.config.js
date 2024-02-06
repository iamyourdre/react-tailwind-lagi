/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}",
    'node_modules/preline/dist/*.js',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'jkt-light': "#f5f5f1",
        'jkt-red': "#E20613",
        'jkt-dark': "#221f1f",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
