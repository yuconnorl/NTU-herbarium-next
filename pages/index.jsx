import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Collection from '@/components/pageSections/landingCollection/LandingCollection'
import Exhibition from '@/components/pageSections/landingExhibition/LandingExhibition'
import Hero from '@/components/pageSections/landingHero/LandingHero'
import News from '@/components/pageSections/landingNews/LandingNews'

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
        <meta name='description' content='NTU Herbarium' />
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
