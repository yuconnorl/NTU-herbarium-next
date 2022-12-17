import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Collection from '@/components/landing/Collection'
import Exhibition from '@/components/landing/Exhibition'
import Hero from '@/components/landing/Hero'
import News from '@/components/landing/News'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const LandingPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('landing_collection_title')}</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='bg-platinum text-brown'>
        <Hero />
        <Collection />
        <News />
        <Exhibition />
      </main>
    </>
  )
}

export default LandingPage
