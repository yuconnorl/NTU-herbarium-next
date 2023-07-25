'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import imgCollectionWebp from '@/assets/images/collection/collection.webp'
import { DecoHeading, Heading, Paragraph } from '@/components/Letters'
import LinkButton from '@/components/LinkButton'
import PageTransitionProvider from '@/provider/PageTransitionProvider'

const CollectionComponent = () => {
  const t = useTranslations('Collection')

  const inspectionData = [
    {
      title: 'inspect_online',
      content: 'inspect_online_content',
      outLink: true,
      link: 'https://tai2.ntu.edu.tw/',
      linkDescription: 'inspect_online_link',
    },
    {
      title: 'inspect_inPerson',
      content: 'inspect_inPerson_content',
      outLink: false,
      link: 'contact',
      linkDescription: 'inspect_inPerson_link',
    },
  ]

  return (
    <PageTransitionProvider>
      <div className='pl-8 md:pl-16'>
        <section className='mb-32'>
          <div className='mb-4 pt-24 md:mb-10'>
            <DecoHeading>{t('landing_miniTitle')}</DecoHeading>
            <Heading className='leading-tight text-3xl md:text-5xl md:leading-tight max-w-3/4 mb-6 md:mb-10'>
              {t('landing_title')}
            </Heading>
            <Paragraph className='w-4/5 md:w-4/6 leading-relaxed tracking-wider text-onyx md:text-lg md:leading-loose md:tracking-widest'>
              {t('landing_content')}
            </Paragraph>
          </div>
          {/* <Image src={imgCollectionWebp} alt='collection' placeholder='blur' priority /> */}
        </section>
        <section className='mb-20 pr-8 md:flex md:pr-16'>
          <div className='mb-8 md:flex-1 text-xl md:text-2xl'></div>
          <div className='md:flex-1'>
            {inspectionData.map(({ title, content, link, linkDescription, outLink }) => (
              <article className='mb-8 md:pr-10' key={title}>
                <Heading className='mb-10 text-xl md:text-2xl'>{t(title)}</Heading>
                <Paragraph>{t(content)}</Paragraph>
                <LinkButton isOutLink={outLink} url={link} text={t(linkDescription)} />
              </article>
            ))}
          </div>
        </section>
        <section>
          <div className='flex pb-12 text-text-loght'>
            <div className='flex-[1_1_25%] mr-10'>02</div>
            <div className='flex-[1_1_75%] text-5xl border-b border-black pb-24'>
              Accessing Herbarium <br />
              標本館
            </div>
          </div>
        </section>
      </div>
    </PageTransitionProvider>
  )
}
export default CollectionComponent
