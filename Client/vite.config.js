import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      // Colour variables for the theme of the website.
      colors: {
        'primary': '#023020', //d-green
        'secondary': '#0D0842', //d-blue
        'blackbg': '#F3F3F3', //white
        'favourite': '#FF5841', //gold
      },
      fontFamily:{
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Nunito Sans', 'sans-serif'],
      }
    },
  }

  
})
