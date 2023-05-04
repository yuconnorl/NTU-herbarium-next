module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        1: '1 1',
      },
      height: { content: 'max-content' },
      backgroundImage: {
        'landing-news': "url('../src/assets/images/main/news-bg.png')",
        'link-arrow': "url('../src/assets/images/common/link-arrow.png')",
      },
      colors: {
        white: '#F2F2F2',
        platinum: '#E9E6E2',
        brown: '#20150F',
        atrovirens: '#0F3828',
        onyx: '#464646',
        tiffany: '#5DCDB2',
        ecru: '#C1B082',
        feldgrau: '#495C57',
        'light-brown': '#795548',
        'text-color': '#1a1a1a',
        'text-loght': '#383838',
      },
      fontFamily: {
        'RobotoSerif-L': ['RobotoSerif-Light', 'Arial', 'sans-serif'],
        'RobotoSerif-R': ['RobotoSerif-Regular', 'Noto Sans TC', 'Arial', 'sans-serif'],
        'RobotoSerif-M': ['RobotoSerif-Medium', 'Arial', 'sans-serif'],
        'RobotoSerif-ita': ['RobotoSerif-Italic', 'Arial', 'sans-serif'],
        'Oswald-el': ['Oswald-ExtraLight', 'Arial', 'sans-serif'],
        'Oswald-M': ['Oswald-Medium', 'Arial', 'sans-serif'],
        Lato: ['Lato', 'Arial', 'sans-serif'],
        noto: ['Noto Sans TC', 'Arial', 'sans-serif'],
        Sansita: ['Sansita Swashed', 'cursive'],
        ASD: [
          'Faktum',
          'PingFang TC',
          'Noto Sans TC',
          'Open Sans',
          '微軟正黑體',
          'sans-serif',
        ],
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald'],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        notos: ['Noto Serif TC', 'serif'],
      },
      letterSpacing: { morewide: '.20rem' },
      screens: {
        smm: '450px',
        mdp: '930px',
      },
      transitionTimingFunction: {
        'slow-fade': 'cubic-bezier(0.36, 0.14, 0, 1)',
      },
      translate: {
        150: '150%',
        m150: '-150%',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
  },
  rippleui: {
    defaultStyle: false,
  },
  plugins: [require('@headlessui/tailwindcss'), require('rippleui')],
}
