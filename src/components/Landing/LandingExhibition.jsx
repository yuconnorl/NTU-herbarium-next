'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { exhibitionPhoto } from '@/assets/fileLoader'
import { DecoHeading, Heading, Paragraph } from '@/components/Letters'
import LinkButton from '@/components/LinkButton'

const LandingExhibition = () => {
  const t = useTranslations('Landing')
  return (
    <section className='relative mt-4 flex w-full flex-col pb-16 sm:px-8 md:mt-16 md:px-12 mdp:flex-row'>
      <div className='px-10 mdp:sticky mdp:top-6 mdp:mb-80 mdp:h-content mdp:w-4/12'>
        <DecoHeading>{t('exhibition_miniTitle')}</DecoHeading>
        <Heading className='mb-6 md:mb-10 text-3xl leading-tight md:text-4xl md:leading-tight'>
          {t('exhibition_title')}
        </Heading>
        <Paragraph className='lg:w-10/12 text-lg'>{t('exhibition_subtitle')}</Paragraph>
      </div>
      <div className='border-brown border-opacity-20 px-6 md:px-10 mdp:w-8/12 mdp:border-l mdp:pt-10'>
        <div className='grid-row-4 grid gap-x-16 gap-y-3 text-sm'>
          {exhibitionPhoto.map((item) => (
            <Fragment key={item.key}>
              <span className='my-8 h-px w-full bg-brown opacity-20' />
              <Image
                className='opacity-80'
                src={item.imgURL}
                alt={item.alt}
                placeholder='blur'
              />
              <div className='mt-4 pl-1'>
                <Heading className='text-xl mb-3'>
                  {t(`exhibition_title_${item.key}`)}
                </Heading>
                <Paragraph className='pr-3 md:pr-28'>
                  {t(`exhibition_description_${item.key}`)}
                </Paragraph>
              </div>
            </Fragment>
          ))}
        </div>
        <LinkButton url='/exhibition' text={t('exhibition_button')} />
      </div>
    </section>
  )
}

export default LandingExhibition
