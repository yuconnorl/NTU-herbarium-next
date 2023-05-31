import localFont from 'next/font/local'

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/roboto-serif-light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/roboto-serif-regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/roboto-serif-medium.ttf',
      weight: '500',
    },
  ],
  variable: '--font-roboto',
})

const notoSerif = localFont({
  src: [
    {
      path: '../../public/fonts/noto-serif-tc-regular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/noto-serif-tc-medium.otf',
      weight: '500',
    },
  ],
  variable: '--font-noto-serif',
})

const notoSans = localFont({
  src: '../../public/fonts/noto-sans-tc-regular.otf',
  variable: '--font-noto-sans',
})

export { notoSans, notoSerif, roboto }
