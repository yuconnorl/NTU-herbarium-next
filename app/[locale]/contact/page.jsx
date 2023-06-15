import { createTranslator } from 'next-intl'

import ContactComponent from './Contact'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('Contact.metadata_title'),
    description: t('Contact.metadata_description'),
  }
}

const ContactPage = () => <ContactComponent />

export default ContactPage
