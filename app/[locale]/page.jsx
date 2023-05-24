'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { exhibitionPhoto } from '@/assets/fileLoader'
import TaiCalligraphy from '@/assets/images/common//tai-calligraphy.webp'
import ImageSwiper from '@/components/ImageSwiper'
import { DecoHeading, Heading, Paragraph } from '@/components/Letters'
import LinkButton from '@/components/LinkButton'
import TextSpinner from '@/components/TextSpinner'

const Hero = () => (
  <section className='w-full px-6 md:px-10'>
    <div className='relative flex flex-col'>
      <ImageSwiper />
      <div className='mt-4 ml-2 w-9/12 opacity-75 sm:w-7/12 sm:max-w-[425px] md:ml-5 md:mt-6 md:w-5/12 md:max-w-[490px] 2xl:max-w-[570px] '>
        <Image src={TaiCalligraphy} alt='NTU Herbarium calligraphy' />
      </div>
    </div>
  </section>
)

const Collection = () => {
  const t = useTranslations('Index')

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

const News = () => (
  <section className='flex justify-center bg-white bg-landing-news bg-cover bg-center bg-no-repeat px-8 pt-10 pb-12 sm:px-16 md:px-24 mdp:pt-20'>
    <div className='w-full flex-nowrap'>
      <DecoHeading className='pb-12 tracking-widest'>NEWS</DecoHeading>
      {/* <NewsSection /> */}
    </div>
  </section>
)

const Exhibition = () => {
  const t = useTranslations('Index')
  return (
    <section className='relative mt-4 flex w-full flex-col pb-16 sm:px-8 md:mt-16 md:px-12 mdp:flex-row'>
      <div className='px-10 mdp:sticky mdp:top-6 mdp:mb-80 mdp:h-content mdp:w-4/12'>
        <DecoHeading>{t('landing_exhibition_miniTitle')}</DecoHeading>
        <Heading className='mb-6 md:mb-10 text-3xl leading-tight md:text-4xl md:leading-tight'>
          {t('landing_exhibition_title')}
        </Heading>
        <Paragraph className='lg:w-10/12 text-lg'>
          {t('landing_exhibition_subtitle')}
        </Paragraph>
      </div>
      <div className='border-brown border-opacity-20 px-6 md:px-10 mdp:w-8/12 mdp:border-l mdp:pt-10'>
        <div className='grid-row-4 grid gap-x-16 gap-y-3 text-sm'>
          {exhibitionPhoto.map((item) => (
            <Fragment key={item.key}>
              <span className='my-8 h-px w-full bg-brown opacity-20' />
              <Image className='opacity-80' src={item.imgURL} alt={item.alt} />
              <div className='mt-4 pl-1'>
                <Heading className='text-xl mb-3'>
                  {t(`landing_exhibition_title_${item.key}`)}
                </Heading>
                <Paragraph className='pr-3 md:pr-28'>
                  {t(`landing_exhibition_description_${item.key}`)}
                </Paragraph>
              </div>
            </Fragment>
          ))}
        </div>
        <LinkButton url='exhibition' text={t('landing_exhibition_button')} />
      </div>
    </section>
  )
}

const LandingPage = () => {
  return (
    <main className='text-brown'>
      <Hero />
      <Collection />
      <News />
      <Exhibition />
    </main>
  )
}

export default LandingPage
