'use client'

import { useTranslations } from 'next-intl'

const LandingPage = () => {
  const t = useTranslations('Landing')

  return (
    <div>
      <div>{t('title')}</div>
    </div>
  )
}

export default LandingPage
