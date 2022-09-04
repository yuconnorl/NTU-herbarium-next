import { useTranslation } from 'next-i18next';

import imgFrontDoorJpg from '@/assets/images/about/frontDoor.jpg'
import imgFrontDoorWebp from '@/assets/images/about/frontDoor.webp'
import Footer from '@/components/footer/Footer'
import ImgWithFallBack from '@/components/ImgWithFallBack'
import PrimaryHeading from '@/components/letters/heading/primaryHeading/PrimaryHeading'
import SecondaryHeading from '@/components/letters/heading/secondaryHeading/SecondaryHeading'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='pl-8 md:pl-16'>
        <div className='mb-10 pt-24'>
          <SecondaryHeading className='pt-8 pb-6'>ABOUT</SecondaryHeading>
          <PrimaryHeading className='mb-6 md:mb-10'>
            {t('about_title')}
          </PrimaryHeading>
          <div className='w-4/5 font-sans text-base font-light leading-relaxed tracking-wider text-onyx md:w-4/6 md:text-lg md:leading-loose md:tracking-widest'>
            <div>{t('about_intro')}</div>
          </div>
        </div>
        <ImgWithFallBack
          src={imgFrontDoorWebp}
          fallback={imgFrontDoorJpg}
          alt='front door of TAI'
        />
      </div>
      <Footer />
    </>
  )
}
export default AboutPage
