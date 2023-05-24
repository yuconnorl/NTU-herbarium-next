import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { DecoHeading, Heading, Paragraph } from '@/components/Letters'
import LinkButton from '@/components/LinkButton'
import TextSpinner from '@/components/TextSpinner'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const Collection = () => {
  const { t } = useTranslation('common')

  return (
    <section className='relative px-10 pt-6 pb-8 sm:px-16 mdp:px-28 lg:pb-24 lg:pt-20'>
      <div className='mb-20 mdp:mb-12'>
        <DecoHeading>{t('landing_collection_miniTitle')}</DecoHeading>
        <Heading className='mb-10 md:max-w-1/2 mdp:mb-16 text-4xl md:text-[3rem] md:leading-tight'>
          {t('landing_collection_title')}
        </Heading>
        <Paragraph className='mdp:w-2/5 md:w-3/6 md:text-lg'>
          {t('landing_collection_subtitle')}
        </Paragraph>
      </div>
      <LinkButton url='collection' text={t('landing_collection_button')} />
      <TextSpinner text='NTU Herbarium * NTU Herbarium *' />
    </section>
  )
}

export default Collection
