import clsx from 'clsx'
import { notFound } from 'next/navigation'
import { createTranslator, NextIntlClientProvider } from 'next-intl'

import Footer from '@/components/Footer'
import Header from '@/components/HeaderComponent'
import { notoSans, notoSerif, roboto } from '@/styles/fonts'

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
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
