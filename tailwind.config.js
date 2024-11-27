/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#FFCF4B',
        primaryDarkYellow: '#27AE60',
        secondaryGrey: '#F9F9F9',
        secondaryDarkGrey: '#CEC6C6',
        primaryText: '#263238',
        secondaryText: '#65624C',
        lightgray:"#EEE7E7",
        backgroungGray:'#F9FAFF',
        footerText:'#605F5F'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: '58px',
        h2: '36px',
        h3: '24px',
        h4: '20px',
        h5: '18px',
        body: '16px',
        body2: '14px',
        body3: '12px',
      },
      width: {
        'full-minus-2rem': 'calc(100% - 2rem)',
      },
      translate: {
        '5px': '5px',
        '-5px': '-5px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

