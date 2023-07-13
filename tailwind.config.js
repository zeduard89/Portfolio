/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
      vibrate: 'vibrate 5.8s infinite',
      bounce2: 'bounce2 5.4s infinite',
      bounce: 'bounce 1.8s infinite',
      slideDown: 'slideDown 2s',
      fadeIn:'fadeIn 20s'

      },
      keyframes: {
        vibrate: {
          '0%': {
            transform: 'translateX(0)',
          },
          '10%': {
            transform: 'translateX(-8px) rotate(5deg)',
          },
          '20%': {
            transform: 'translateX(8px) rotate(-5deg)',
          },
          
        },
        bounce2:{
          '0%, 100%': {
            transform: 'translatex(0%) ',
            'animation-timing-function': 'cubic-bezier(0.1, 0, 1, 1)',
          },
          '50%': {
            transform: 'translatex(1300%) translatey(-180%)',
            'animation-timing-function': 'cubic-bezier(0.1, 0, 1, 1)',
          },
          '55%': {
            transform: 'translatex(1350%) translatey(0%)',
            'animation-timing-function': 'cubic-bezier(0.1, 0, 1, 1)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        slideDown:{
          '0%':{
            transform: 'translateY(-25rem)',
          },
          '100%':{
            transform: 'translateY(0rem)'
          }
        },
        fadeIn:{
          '0%':{
            opacity:'0%'
          },
          '100%':{
            opacity: '100%'
          }
        }
        
      },
    },
  },
  variants: {
    extend: {
      animation:['hover']
    },
  },
  plugins: [],
}