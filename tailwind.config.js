/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#A27B5C",
        "dark-green": "#312509",
        "darker-green":"#312509",
        "creem-green": "#F2F8F2",
        "grey":"#A8A8A8",
        "light-grey":"#F2F8F2",
        "cream-grey" : "##FCECC9"
      },
      boxShadow: {
        'all': '0 0,0 0 1em rgba(0, 0, 0, 0.14)',
      },

    },
  },
  plugins: [],
};
