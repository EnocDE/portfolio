import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive']
      },
      backgroundImage: {
        'shape': "url('../public/zigzag.png')",
      },
      boxShadow: {
        'animated': "10px 10px 0 #242424",
        'animated-reverse': "0 0 0 #242424",
      },
      backgroundColor: {
        'transparent-black': "#00000082" 
      }
    },
  },
  plugins: [animations],
}

