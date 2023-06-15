import { createTranslator } from 'next-intl'

import ExhibitionComponent from './Exhibition'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('Exhibition.metadata_title'),
    description: t('Exhibition.metadata_description'),
  }
}

const CollectionPage = () => <ExhibitionComponent />

export default CollectionPage
