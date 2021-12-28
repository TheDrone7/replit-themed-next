const colors = require('./colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontFamily: {
      'sans': ['"IBM Plex Sans"', 'sans-serif'],
      'mono': ['"IBM Plex Mono"', 'monospace']
    },
    fontSize: {
      small: ['14px', { lineHeight: '20px' }],
      default: ['16px', { lineHeight: '20px' }],
      subhead: ['20px', { lineHeight: '24px' }],
      subheadBig: ['24px', { lineHeight: '28px' }],
      head: ['32px', { lineHeight: '36px' }],
      headBig: ['40px', { lineHeight: '44px' }],
    },
    dropShadow: {
      '1': '0px 4px 8px 0px rgba(96, 96, 92, 0.16)',
      '2': '0px 8px 16px 0px rgba(96, 96, 92, 0.32)',
      '3': '0px 16px 32px 0px rgba(96, 96, 92, 0.48)',
      'default': '0px 4px 8px 0px rgba(96, 96, 92, 0.16)',
    }
  },
  plugins: [],
}
