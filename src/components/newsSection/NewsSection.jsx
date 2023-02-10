import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import NewsTable from '@/components/newsTable/NewsTable'
import useNews from '@/hooks/useNews'

import ArrowSvg from '../arrowSvg/ArrowSvg'

const NewsSection = () => {
  const { t } = useTranslation()
  const { news, isLoading } = useNews()
  const trimNewsData = news?.slice(0, 5)

  return (
    <>
      <NewsTable newsData={trimNewsData} isLoading={isLoading} />
      <div className='relative float-right w-max py-12'>
        <Link href='news'>
          <div className='group flex cursor-pointer'>
            <div className='relative flex w-max flex-col justify-center overflow-hidden'>
              <div className='tracking-wider'>{t('landing_news_button')}</div>
              <div className='relative mt-2 w-full'>
                <div className='slow-fade h-px w-full bg-brown opacity-50 transition-transform duration-500 group-hover:translate-x-full' />
              </div>
            </div>
            <div className='ml-4'>
              <div className='relative h-6 w-4 overflow-hidden'>
                <ArrowSvg size={4} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NewsSection
