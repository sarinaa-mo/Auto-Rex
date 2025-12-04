
import "../css/main.css";


export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('preline/plugin'),
  ],
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        dots: {
          '0%, 20%': { content: '"."' },
          '40%': { content: '".."'},
          '60%': { content: '"..."' },
          '80%, 100%': { content: '""' },
        },
      },
      animation: {
        typing: 'dots 1.5s infinite steps(1)',
      },
    },
  },
  plugins: [],
}
