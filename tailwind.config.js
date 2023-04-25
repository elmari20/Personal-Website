/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#191A19',
      yellow: '#FA7921',
      green: '#0B6E4F',
      gray: '#F3F3F3',
      "gray-light": '#FAFAFA',
      "green-light": '#3E8989',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Georgia', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Oswald'],
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'lg': '1.15rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.5rem',
    },
    extend: {
      screens: {
        'xs': '320px',

        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',
        
        '2xl': '1536px',

        '3xl': '1920px',

      },
    },
  },
  plugins: [],
}
