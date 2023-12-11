/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'mobile': { 'min': '0px', 'max': '450px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': { 'min': '460px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': { 'min': '1024px', 'max': '1920px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': { 'min': '1920px', 'max': '2560px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '3840px' },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
