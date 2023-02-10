import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import imgFrontDoorWebp from '@/assets/images/about/frontDoor.webp'
import PrimaryHeading from '@/components/primaryHeading/PrimaryHeading'
import SecondaryHeading from '@/components/secondaryHeading/SecondaryHeading'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const AboutPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <div className='pl-8 md:pl-16'>
        <div className='mb-10 pt-24'>
          <SecondaryHeading className='pt-8 pb-6'>ABOUT</SecondaryHeading>
          <PrimaryHeading className='mb-6 md:mb-10'>{t('about_title')}</PrimaryHeading>
          <div className='w-4/5 font-sans text-base font-light leading-relaxed tracking-wider text-onyx md:w-4/6 md:text-lg md:leading-loose md:tracking-widest'>
            <div>{t('about_intro')}</div>
          </div>
        </div>
        <Image src={imgFrontDoorWebp} alt='front door of TAI' />
      </div>
    </>
  )
}
export default AboutPage
