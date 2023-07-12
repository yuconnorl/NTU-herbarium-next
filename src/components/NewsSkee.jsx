import { Suspense } from 'react'

import { getNewsFromCMS } from '@/utils/fetchNews'

import NewsTableNew from './NewsTableNew'

const NewsSkee = async () => {
  const newsData = await getNewsFromCMS()

  return (
    <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
      <Suspense fallback={<div>loading...</div>}>
        <NewsTableNew newsData={newsData} />
      </Suspense>
    </div>
  )
}

export default NewsSkee
