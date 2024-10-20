// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',   // Yellow
        secondary: '#000000', // Black
        gray: '#808080',      // Gray
      },
    },
  },
  plugins: [],
};
