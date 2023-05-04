import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Content from '@/components/content/Content'
import LinkButton from '@/components/linkButton/LinkButton'
import PrimaryHeading from '@/components/PrimaryHeading'
import SecondaryHeading from '@/components/SecondaryHeading'
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
        <SecondaryHeading>{t('landing_collection_miniTitle')}</SecondaryHeading>
        <PrimaryHeading className='mb-6 max-w-1/2 md:leading-normal mdp:mb-16'>
          {t('landing_collection_title')}
        </PrimaryHeading>
        <Content className='mdp: w-2/5 md:w-3/6 md:text-lg'>
          {t('landing_collection_subtitle')}
        </Content>
        <div className='w-4/5 font-sans text-base font-light leading-relaxed tracking-wider md:w-3/6 md:text-lg mdp:w-2/6'></div>
      </div>
      <LinkButton url='collection' text={t('landing_collection_button')} />
      <TextSpinner text='National Taiwan University Herbarium' />
    </section>
  )
}

export default Collection
