import { useTranslation } from 'next-i18next';

import Button from '@/components/button/Button'
import PrimaryHeading from '@/components/letters/heading/primaryHeading/PrimaryHeading'
import SecondaryHeading from '@/components/letters/heading/secondaryHeading/SecondaryHeading'

import TextSpinner from './components/textSpinner/TextSpinner'

const Collection = () => {
  const { t } = useTranslation()

  return (
    <section className='relative px-10 pt-6 pb-8 sm:px-16 lg:pb-24 lg:pt-20 mdp:px-28'>
      <div className='mb-20 mdp:mb-12'>
        <SecondaryHeading className='pt-8 pb-6'>
          {t('landing_collection_miniTitle')}
        </SecondaryHeading>
        <PrimaryHeading className='mb-6 max-w-1/2 md:leading-normal mdp:mb-16'>
          {t('landing_collection_title')}
        </PrimaryHeading>
        <div className='w-4/5 font-sans text-base font-light leading-relaxed tracking-wider md:w-3/6 md:text-lg mdp:w-2/6'>
          {t('landing_collection_subtitle')}
        </div>
      </div>
      <Button url='collection' text={t('landing_collection_button')} />
      <TextSpinner />
    </section>
  )
}

export default Collection
