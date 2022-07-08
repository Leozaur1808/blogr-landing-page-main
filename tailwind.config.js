/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '1080px',
      lg: '1440px'
    },
    extend: {
      colors:{
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        veryLightRedMobile: 'hsl(13, 100%, 72%)',
        lightRedMobile: 'hsl(353, 100%, 62%)',
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      },
      backgroundImage :{
        'intro-desktop': "url('/images/bg-pattern-intro-desktop.svg')",
        'intro-mobile': "url('/images/bg-pattern-intro-mobile.svg')",
        'circle': "url('/images/bg-pattern-circles.svg')"
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    },
  },
  plugins: [],
}
