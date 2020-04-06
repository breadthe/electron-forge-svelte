let defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Roboto',
          'Raleway',
          'system-ui',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        'serif': [
          'Merriweather',
          'Bitter',
          'Constantia',
          'Lucida Bright',
          'Lucidabright',
          'Lucida Serif',
          'Lucida',
          'DejaVu Serif',
          'Bitstream Vera Serif',
          'Liberation Serif',
          'Georgia',
          'serif',
        ],
        'mono': [
          'Source Code Pro',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ]
      },
    },
    cursor: {
    }
  },
  variants: {
  },
  plugins: []
}
