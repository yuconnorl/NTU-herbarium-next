import { Suspense } from 'react'

import { getNewsFromCMS } from '@/utils/fetchNews'

// import NewsSkeleton from './NewsSkeleton'
import NewsTableNew from './NewsTableNew'

const HorizontalLine = () => <div className='h-px w-full bg-brown opacity-20' />

const NewsPlaceHolder = () => {
  return (
    <>
      <HorizontalLine />
      {[...Array(5)].map(() => (
        <NewsSkeleton />
      ))}
      <HorizontalLine />
    </>
  )
}

const NewsSkee = async () => {
  const newsData = await getNewsFromCMS()

  return (
    <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
      {/* <Suspense fallback={<NewsPlaceHolder />}> */}
      <Suspense fallback={<div>loading</div>}>
        <NewsTableNew newsData={newsData} />
      </Suspense>
    </div>
  )
}

export default NewsSkee
