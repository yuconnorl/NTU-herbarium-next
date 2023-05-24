'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import imgFrontDoorWebp from '@/assets/images/about/frontDoor.webp'
import { DecoHeading, Heading, Paragraph } from '@/components/Letters'

const AboutPage = () => {
  const t = useTranslations('Landing')

  return (
    <>
      <div className='pl-8 md:pl-16'>
        <div className='mb-10 pt-24'>
          <DecoHeading>{t('about_miniTitle')}</DecoHeading>
          <Heading className='mb-6 md:mb-10'>{t('about_title')}</Heading>
          <Paragraph className='w-4/5 leading-relaxed tracking-wider text-onyx md:w-4/6 md:text-lg md:leading-loose md:tracking-widest'>
            {t('about_intro')}
          </Paragraph>
        </div>
        <Image src={imgFrontDoorWebp} alt='front door of NTU herbarium' />
      </div>
    </>
  )
}
export default AboutPage
