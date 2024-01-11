const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      // for mobile
        xs: '320px',
        sm: '375px',
        sl: '425px',
        // for laptops
        md: '768px',
        lg: '1024px',
        xl: '1440px'

    },


    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
      },
      fontFamily:{
        Dmsans:  ['DM Sans', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },

    },
      
    keyframes:{
      move:{
        "50%" : {transform : "translateY(-1rem)"}
      }
    },

    animation:{
      moveUp : "move 2s infinite linear"
    },

    container:{
      center: true, 
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem"
      }
    },
  },
  plugins: [],
}

