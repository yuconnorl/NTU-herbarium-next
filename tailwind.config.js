module.exports = {
  darkMode: 'class',
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
        'roboto-serif-l': ['roboto-serif-light', 'Arial', 'sans-serif'],
        'roboto-serif-r': ['roboto-serif-regular', 'Noto Sans TC', 'Arial', 'sans-serif'],
        'roboto-serif-m': ['roboto-serif-medium', 'Arial', 'sans-serif'],
        'roboto-serif-ita': ['roboto-serif-italic', 'Arial', 'sans-serif'],
        'oswald-el': ['oswald-extra-light', 'Arial', 'sans-serif'],
        'oswald-m': ['oswald-medium', 'Arial', 'sans-serif'],
        'noto-serif-r': ['noto-serif-tc-regular'],
        'noto-serif-m': ['noto-serif-tc-medium'],
        'noto-tc-r': ['noto-sans-tc-regular', 'Arial', 'sans-serif'],
        'roboto-flex': ['Roboto-flex', 'Arial', 'sans-serif'],
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
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography')],
}
