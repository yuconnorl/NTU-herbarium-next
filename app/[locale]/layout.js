// import {Inter} from '@next/font/google';
import clsx from 'clsx'
import { notFound } from 'next/navigation'
import { createTranslator, NextIntlClientProvider } from 'next-intl'

// const inter = Inter({subsets: ['latin']});

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
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
    <html className='bg-platinum font-roboto-serif h-full antialiased' lang={locale}>
      <body className='h-full'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <Navigation /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
