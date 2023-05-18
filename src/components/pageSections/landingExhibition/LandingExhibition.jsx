import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Fragment } from 'react'

import { exhibitionPhoto } from '@/assets/fileLoader'
import Content from '@/components/Content'
import { SecondaryHeading } from '@/components/Heading'
import LinkButton from '@/components/LinkButton'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const Exhibition = () => {
  const { t } = useTranslation()
  return (
    <section className='relative mt-4 flex w-full flex-col pb-16 sm:px-8 md:mt-16 md:px-12 mdp:flex-row'>
      <div className='relative px-10 mdp:sticky mdp:top-6 mdp:mb-80 mdp:h-content mdp:w-4/12'>
        <SecondaryHeading>{t('landing_exhibition_miniTitle')}</SecondaryHeading>
        <div className='mb-6 md:mb-10'>
          <h2 className='font-crimson text-3xl leading-tight md:text-5xl md:leading-tight'>
            {t('landing_exhibition_title')}
          </h2>
        </div>
        <div className='relative font-sans text-base font-light leading-relaxed tracking-wider lg:w-10/12'>
          <Content>{t('landing_exhibition_subtitle')}</Content>
        </div>
      </div>
      <div className='border-brown border-opacity-20 px-6 md:px-10 mdp:w-8/12 mdp:border-l mdp:pt-10'>
        <div className='grid-row-4 grid gap-x-16 gap-y-3 text-sm'>
          {exhibitionPhoto.map((item) => (
            <Fragment key={item.key}>
              <span className='my-8 h-px w-full bg-brown opacity-20' />
              <Image className='opacity-80' src={item.imgURL} alt='exx' />
              <div className='mt-4 pl-1'>
                <div className='font-roboto-flex font-light text-xl mb-3'>
                  {t(`landing_exhibition_title_${item.key}`)}
                </div>
                <Content className='pr-3 font-noto-tc-r md:pr-28'>
                  {t(`landing_exhibition_description_${item.key}`)}
                </Content>
              </div>
            </Fragment>
          ))}
        </div>
        <LinkButton url='exhibition' text={t('landing_exhibition_button')} />
      </div>
    </section>
  )
}

export default Exhibition
