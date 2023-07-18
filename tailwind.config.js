module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        1: '1 1',
      },
      fontSize: {
        m: ['0.95rem', '1.4rem'],
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
        'roboto-sans': ['Roboto-flex', 'Arial', 'sans-serif'],
        'roboto-serif': ['var(--font-roboto-serif)', 'Arial', 'sans-serif'],
        'roboto-serif-ita': ['var(--font-roboto-serif-ita)', 'Arial', 'sans-serif'],
        'noto-serif': ['var(--font-noto-serif)'],
        'noto-sans': ['var(--font-noto-sans)', 'Arial', 'sans-serif'],
      },
      letterSpacing: { morewide: '.20rem' },
      screens: {
        smm: '450px',
        mdp: '930px',
      },
      transitionTimingFunction: {
        'slow-fade': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      gridTemplateColumns: {
        footer: 'minmax(350px, 1.5fr) 1fr 1fr',
      },
      translate: {
        150: '150%',
        m150: '-150%',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'top-open': 'top-open 0.25s cubic-bezier(0.4, 0, 0.6, 1) forwards',
        'bottom-open': 'bottom-open 0.25s cubic-bezier(0.4, 0, 0.6, 1) forwards',
        'top-close': 'top-open 0.25s cubic-bezier(0.4, 0, 0.6, 1) backwards',
        'bottom-close': 'bottom-open 0.25s cubic-bezier(0.4, 0, 0.6, 1) backwards',
      },
      keyframes: {
        'top-open': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(150%)' },
          '100%': { transform: 'translate(0, 6px) rotate(45deg)' },
        },
        'bottom-open': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-150%)' },
          '100%': { transform: 'translate(0, -2px) rotate(-45deg)' },
        },
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography')],
}
