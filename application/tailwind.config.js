/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#1a2236',
      secondary: '#293145',
      blue: '#0062e1',
      white: 'rgba(255, 255, 255, 0.75)',
      grey: '#6c757d',
    },
    extend: {
      width: {
        350: '350px',
      },
      height: {
        80: '80px',
      },
    },
  },
  plugins: [],
};
