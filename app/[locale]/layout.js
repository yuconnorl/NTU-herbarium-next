import clsx from 'clsx'
import { notFound } from 'next/navigation'
import { createTranslator, NextIntlClientProvider } from 'next-intl'

import Footer from '@/components/Footer'
import Header from '@/components/HeaderComponent'
import { useStore } from '@/store/store'
import { notoSans, notoSerif, robotoSerif, robotoSerifIta } from '@/styles/fonts'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: {
      default: t('Metadata.title'),
      template: `%s - ${t('Metadata.template')}`,
    },
    description: t('Metadata.description'),
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
        robotoSerifIta.variable,
        robotoSerif.variable,
        notoSans.variable,
        notoSerif.variable,
      )}
      lang={locale}
    >
      <body
        className={clsx(
          useStore.getState().isHamburgerOpen && 'overflow-hidden',
          'h-full font-roboto-serif flex flex-col justify-between',
        )}
        id='body'
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
