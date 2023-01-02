import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Collection from '@/components/landingCollection/LandingCollection'
import Exhibition from '@/components/landingExhibition/LandingExhibition'
import Hero from '@/components/landingHero/LandingHero'
import News from '@/components/landingNews/LandingNews'
import PageTransitionProvider from '@/provider/PageTransitionProvider'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const LandingPage = () => {
  const { t } = useTranslation('common')

  return (
    <PageTransitionProvider>
      <Head>
        <title>{t('landing_collection_title')}</title>
        <meta name='description' content='NTU Herbarium' />
      </Head>
      <main className='bg-platinum text-brown'>
        <Hero />
        <Collection />
        <News />
        <Exhibition />
      </main>
    </PageTransitionProvider>
  )
}

export default LandingPage
