/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#1a2236',
      secondary: '#293145',
      light: '#333b4f',
      blue: '#0062e1',
      white: 'rgba(255, 255, 255, 0.75)',
      grey: '#6c757d',
      success: 'rgb(10, 187, 135)',
      danger: 'rgb(253, 57, 122)',
      black: '#000',
    },
    extend: {
      width: {
        350: '350px',
        480: '480px',
      },
      height: {
        80: '80px',
      },
      fontSize: {
        '2em': '2em',
        '3em': '3em',
      },
      boxShadow: {
        btn: '0 0 0 .2rem rgba(230,230,230,.4)',
      },
    },
  },
  plugins: [],
};
