module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#720D5D',
        'crane-red': '#E30425',
      },
      boxShadow: {
        card: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      },
    },
  },
  plugins: [],
};
