'use client'

import { useTranslations } from 'next-intl'

import { DecoHeading, Heading, Paragraph } from '@/components/Letters'
import PageTransitionProvider from '@/provider/PageTransitionProvider'

const ExhibitionComponent = () => {
  const t = useTranslations('Exhibition')

  return (
    <PageTransitionProvider>
      <div className=''>
        <section className=''>
          <div className='mb-4 pt-24 md:mb-10'>
            <DecoHeading>{t('landing_miniTitle')}</DecoHeading>
            <Heading className='leading-tight text-3xl md:text-5xl md:leading-tight max-w-3/4 mb-6 md:mb-10'>
              {t('landing_title')}
            </Heading>
            <Paragraph className='w-4/5 md:w-4/6 leading-relaxed tracking-wider text-onyx md:text-lg md:leading-loose md:tracking-widest'>
              {/* {t('landing_content')} */}
            </Paragraph>
          </div>
          {/* <Image src={imgCollectionWebp} alt='collection' placeholder='blur' priority /> */}
        </section>
        <section className='px-12'>
          <div className='flex pb-12 text-text-loght flex-col'>
            <div className='flex'>
              <div className='flex-[1_1_25%] mr-10 text-right'>02</div>
              <div className='flex-[1_1_75%] relative'>
                <div className='mb-16'>
                  <h1 className='pb-16 text-7xl'>EXHIBITIONS</h1>
                  <span className='w-full bg-text-loght h-px block'></span>
                </div>
                <div className='flex'>
                  <div className='text-4xl flex-[1_1_50%] pr-[20%] pl-4 leading-normal  font-noto-serif'>
                    超級。 <br />
                    展示。 <br />
                    空間。
                  </div>
                  <div className='text-base flex-[1_1_50%] pr-[20%] pl-4'>
                    常設展示區，顧名思義是你什麼時候來都有。從植物的頭介紹到尾，讓看官充分瞭解植物的各個構造。常設展示區，顧名思義是你什麼時候來都有。從植物的頭介紹到尾，讓看官充分瞭解植物的各個構造
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransitionProvider>
  )
}
export default ExhibitionComponent
