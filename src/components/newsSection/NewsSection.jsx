import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import useSWR from 'swr'

import NewsTable from '@/components/newsTable/NewsTable'
import { NEWS_URL } from '@/configs/config'
import { fetcher } from '@/utils/helper'

const NewsSection = () => {
  const { t } = useTranslation()

  const { data, error, isLoading } = useSWR(NEWS_URL, fetcher)

  const trimNewsData = data?.slice(0, 5)

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
                <div className='flex'>
                  <svg
                    className='slow-fade mt-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-150 group-hover:translate-y-m150'
                    version='1.1'
                    x='0'
                    y='0'
                    viewBox='0 0 20 21.1'
                    style={{
                      fill: 'none',
                      stroke: '#20150F',
                      strokeWidth: 1.5,
                      strokeMiterlimit: '10',
                    }}
                  >
                    <polyline className='st0' points='6.3,0.9 19,0.9 19,15 ' />
                    <line className='st0' x1='0.8' y1='20.2' x2='19' y2='0.9' />
                  </svg>
                  <svg
                    className='slow-fade absolute top-0 mt-2 h-4 w-4 translate-x-m150 translate-y-150 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0'
                    version='1.1'
                    x='0'
                    y='0'
                    viewBox='0 0 20 21.1'
                    style={{
                      fill: 'none',
                      stroke: '#20150F',
                      strokeWidth: 1.5,
                      strokeMiterlimit: '10',
                    }}
                  >
                    <polyline className='st0' points='6.3,0.9 19,0.9 19,15 ' />
                    <line className='st0' x1='0.8' y1='20.2' x2='19' y2='0.9' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NewsSection
