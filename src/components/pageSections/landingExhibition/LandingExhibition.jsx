import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Fragment } from 'react'

import { exhibitionPhoto } from '@/assets/fileLoader'
import Content from '@/components/content/Content'
import LinkButton from '@/components/linkButton/LinkButton'
import SecondaryHeading from '@/components/SecondaryHeading'

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
          <h2 className='font-RobotoSerif-R text-3xl leading-normal md:text-4xl md:leading-normal'>
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
              <div className='opacity-80'>
                <Image src={item.imgURL} alt='exx' />
              </div>
              <div className='mt-4 pl-1'>
                <div className='font-RobotoSerif-L text-xl mdp:text-[1.25rem]'>
                  {t(`landing_exhibition_title_${item.key}`)}
                </div>
                {/* <div className=' font-robot pt-2 pr-3 text-base font-light text-[#20231F] md:pr-28'></div> */}
                <Content className='pt-2 pr-3 md:pr-28'>
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
