/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purpleLight: '#5E3DB3',
        greyDark: '#E7E7E7',
        greyLight: '#F5F4F9;',
        greyTitle: '#C2C2C2',
        purpleDark: '#090C35;',
      },
      screens: {
        lgDesktop: '2560px'
      }
    },
  },
  plugins: [],
}
