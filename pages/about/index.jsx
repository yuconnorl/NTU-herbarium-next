import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import imgFrontDoorWebp from '@/assets/images/about/frontDoor.webp'
import { DecoHeading, Heading, Paragraph } from '@/components/Letters'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const AboutPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('helmet_about_title')}</title>
        <meta name='description' content={t('helmet_about_description')} />
      </Head>
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
