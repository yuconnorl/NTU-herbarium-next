import { createTranslator } from 'next-intl'

import CollectionsComponent from './Collections'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('Collections.metadata_title'),
    description: t('Collections.metadata_description'),
  }
}

const CollectionsPage = () => <CollectionsComponent />

export default CollectionsPage
