import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import imgCollectionWebp from '@/assets/images/collection/collection.webp'
import Content from '@/components/Content'
import { PrimaryHeading, SecondaryHeading } from '@/components/Heading'
import LinkButton from '@/components/LinkButton'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const Collection = () => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.resolvedLanguage

  const inspectionData = [
    {
      title: 'collection_inspect_online',
      content: 'collection_inspect_online_content',
      link: 'https://tai2.ntu.edu.tw/',
      linkDescription: 'collection_inspect_online_link',
    },
    {
      title: 'collection_inspect_inPerson',
      content: 'collection_inspect_inPerson_content',
      link: 'contact',
      linkDescription: 'collection_inspect_inPerson_link',
    },
  ]

  return (
    <>
      <Head>
        <title>{t('helmet_collection_title')}</title>
        <meta name='description' content={t('helmet_collection_description')} />
      </Head>
      <div className='pl-8 md:pl-16'>
        <section className='mb-32'>
          <div className='mb-4 pt-24 md:mb-10'>
            <SecondaryHeading>{t('collection_landing_miniTitle')}</SecondaryHeading>
            <div className='mb-6 md:mb-10'>
              <PrimaryHeading className='max-w-3/4'>
                {t('collection_landing_title')}
              </PrimaryHeading>
            </div>
            <Content className='w-4/5 md:w-4/6'>
              {t('collection_landing_content')}
            </Content>
          </div>
          <Image src={imgCollectionWebp} alt='collection' />
        </section>
        <section className='mb-20 pr-8 md:flex md:pr-16'>
          <div className='mb-8 md:flex-1'>
            {/* <PrimaryHeading className='max-w-3/4 font-notos tracking-widest md:mx-auto'>
            {t('collection_inspect_title')}
          </PrimaryHeading> */}
          </div>
          <div className='md:flex-1'>
            {inspectionData.map(({ title, content, link, linkDescription }) => (
              <article className='mb-8 md:pr-10' key={title}>
                <h3 className='mb-10 text-xl font-medium tracking-widest opacity-80 md:text-2xl'>
                  {t(title)}
                </h3>
                <Content>{t(content)}</Content>
                <LinkButton url={link} text={t(linkDescription)} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Collection
