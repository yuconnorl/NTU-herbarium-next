import { createTranslator } from 'next-intl'

import CollectionComponent from './Collection'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('Collection.metadata_title'),
    description: t('Collection.metadata_description'),
  }
}

const CollectionPage = () => <CollectionComponent />

export default CollectionPage
