import { createTranslator } from 'next-intl'

import NewsComponent from './News'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('News.metadata_title'),
    description: t('News.metadata_description'),
  }
}

const NewsPage = () => <NewsComponent />

export default NewsPage
