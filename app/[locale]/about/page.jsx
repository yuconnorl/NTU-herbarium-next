import { createTranslator } from 'next-intl'

import AboutComponent from './About'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('About.metadata_title'),
    description: t('About.metadata_description'),
  }
}

const AboutPage = () => <AboutComponent />

export default AboutPage
