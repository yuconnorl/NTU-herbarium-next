import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { PrimaryHeading, SecondaryHeading } from '@/components/Heading'
import NewsTable from '@/components/NewsTable'
import useNews from '@/hooks/useNews'

const NewsPage = () => {
  const { news, isLoading } = useNews()
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('helmet_news_title')}</title>
        <meta name='description' content={t('helmet_news_description')} />
      </Head>
      <div className='px-6 py-16 md:px-16'>
        <div className='mb-10 pl-6'>
          <SecondaryHeading>NEWS</SecondaryHeading>
          <PrimaryHeading className='mb-8'>What&apos;s new</PrimaryHeading>
        </div>
        <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
          <NewsTable isExpandable newsData={news} />
        </div>
      </div>
    </>
  )
}

export default NewsPage
