import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import imgCollectionWebp from '@/assets/images/collection/collection.webp'
import Button from '@/components/button/Button'
import Content from '@/components/content/Content'
import PrimaryHeading from '@/components/primaryHeading/PrimaryHeading'
import SecondaryHeading from '@/components/secondaryHeading/SecondaryHeading'

const Collection = () => {
  const { t } = useTranslation()

  return (
    <div className='pl-8 md:pl-16'>
      <section className='mb-20'>
        <div className='mb-4 pt-24 md:mb-10'>
          <SecondaryHeading className='pt-8 pb-6'>
            {t('collection_landing_miniTitle')}
          </SecondaryHeading>
          <div className='mb-6 md:mb-10'>
            <PrimaryHeading className='max-w-3/4'>
              {t('collection_landing_title')}
            </PrimaryHeading>
          </div>
          {/* <div className='w-4/5 font-sans text-base font-light leading-relaxed tracking-wider text-onyx md:w-4/6 md:leading-loose md:tracking-widest'>
              <div>{t('collection_landing_content')}</div>
            </div> */}
          <Content className='w-4/5 md:w-4/6'>
            {t('collection_landing_content')}
          </Content>
        </div>
        <Image src={imgCollectionWebp} alt='collection' />
      </section>
      <section className='mb-20 pr-8 md:flex md:pr-16'>
        <div className='mb-8 md:flex-1'>
          <PrimaryHeading className='max-w-3/4 font-notos tracking-widest md:mx-auto'>
            {/* {t('collection_inspect_title')} */}
          </PrimaryHeading>
        </div>
        <div className='md:flex-1'>
          <article className='mb-8 md:pr-10'>
            <h3 className='mb-10 text-xl font-medium tracking-widest opacity-80 md:text-2xl'>
              {t('collection_inspect_online')}
            </h3>
            <Content>{t('collection_inspect_online_content')}</Content>
            <Button url='https://google.com' text='online herbarium' />
          </article>
          <article className='md:pr-10'>
            <h3 className='mb-10 text-xl font-medium tracking-widest opacity-80 md:text-2xl'>
              {t('collection_inspect_inPerson')}
            </h3>
            <Content>{t('collection_inspect_inPerson_content')}</Content>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Collection
