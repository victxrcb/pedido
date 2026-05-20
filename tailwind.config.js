export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        roseSoft: '#F7D8E2',
        elegantRed: '#DA4B82',
        goldSoft: '#F4D7A2',
        nightShade: '#100814',
        mistWhite: '#F9F3F0'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(247, 216, 226, 0.25)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.18)'
      },
      backdropBlur: {
        xs: '2px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
