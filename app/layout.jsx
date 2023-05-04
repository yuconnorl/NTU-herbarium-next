import './global.css'

import clsx from 'clsx'
import localFont from 'next/font/local'

import Footer from '@/components/Footer'
// import Header from '@/components/Header'

// loading local fonts
const oswald = localFont({
  src: [
    {
      path: '../public/fonts/oswald-extra-light.ttf',
      weight: '200',
    },
    {
      path: '../public/fonts/oswald-medium.ttf',
      weight: '600',
    },
  ],
  variable: '--font-oswald',
})

// built-in SEO helper
export const metadata = {
  title: {
    default: 'NTU Herbarium',
    template: '%s - NTU Herbarium',
  },
  description:
    'Welcome to Terminal 420, a blog that focuses on web-related tech and cannabis research. Pull up a chair and have fun!',
  openGraph: {
    title: 'Terminal 420',
    description: 'Terminal 420, a place of cannabis and web tech',
    url: 'https://terminal-420.space',
    siteName: 'Terminal 420',
    images: [
      {
        url: 'https://terminal-420.space/images/og.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh-Tw',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terminal 420',
    description: 'Terminal 420, a place of cannabis and web tech',
    images: 'https://terminal-420.space/images/og.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.png',
  },
}

const RootLayout = ({ children }) => {
  return (
    <html
      id='root'
      lang='zh-TW'
      className={clsx(
        'scrollbar bg-main-black font-sans-serif text-mallard-50 3xl:text-[1.1rem] w-full',
        oswald.variable,
      )}
    >
      <body className='w-full antialiased'>
        <div className='main flex w-full flex-col justify-between'>
          {/* <Header /> */}
          <main className='relative flex w-full flex-[1_0_0] justify-center px-6'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
