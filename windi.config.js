import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      screens: {
      	'xs': '362px',
      	'sm': '640px',
      	'md': '768px',
      	'lg': '1024px',
      	'xl': '1280px',
      	'2xl': '1537px',
      	'3xl': '1740px',
      },
      colors: {
        xbox: '#107C10',
        slate: '#3A3A3A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'sm': '10px',
        'md': '50px',
        'lg': '100px'
      },
      borderRadius: {
        'card': '30px',
      },
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-x': 'flex justify-center',
    'flex-y': 'flex items-center'
  }
});