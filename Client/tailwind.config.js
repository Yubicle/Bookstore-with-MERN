/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colour variables for the theme of the website.
      colors: {
        'primary': '#023020', //d-green
        'secondary': '#0D0842', //d-blue
        'blackbg': '#F3F3F3', //dark colour
        'favourite': '#FF5841', //gold
      },
      fontFamily:{
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Nunito Sans', 'sans-serif'],
      }
    },
  },  
  plugins: [],
}

