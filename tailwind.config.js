/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: '#0f70b7',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        red: '#FF0000',
      },
      screens: {
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
};

// /* eslint-disable global-require */
// const colors = require('tailwindcss/colors');

// module.exports = {
//   content: ['./src/**/.{js,jsx,ts,tsx}'],
//   mode: 'jit',
//   theme: {
//     colors: {
//       primary: '#0f70b7',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.gray,
//       emerald: colors.emerald,
//       indigo: colors.indigo,
//       yellow: colors.yellow,
//     },
//   },
//   variants: {
//     extend: {},
//   },
// };
