import clsx from 'clsx'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { createTranslator, NextIntlClientProvider } from 'next-intl'

import Footer from '@/components/Footer'

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

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('LocaleLayout.title'),
  }
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html
      className={clsx(
        'bg-platinum h-full antialiased',
        roboto.variable,
        notoSans.variable,
        notoSerif.variable,
      )}
      lang={locale}
    >
      <body className='h-full font-roboto-serif'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
