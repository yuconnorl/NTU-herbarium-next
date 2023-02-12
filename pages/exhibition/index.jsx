import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const ExhibitionPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('helmet_exhibition_title')}</title>
        <meta name='description' content={t('helmet_exhibition_description')} />
      </Head>
      <main className='bg-platinum text-brown'></main>
      <div>Exhibition Section</div>
    </>
  )
}

export default ExhibitionPage
