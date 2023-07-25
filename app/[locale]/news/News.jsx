import { Suspense } from 'react'

import { DecoHeading, Heading } from '@/components/Letters'
import NewsSkee from '@/components/NewsSkee'
import NewsSkeleton from '@/components/NewsSkeleton'

const NewsComponent = () => {
  return (
    <div className='px-6 py-16 md:px-16'>
      <div className='mb-10 md:pl-6 pl-2'>
        <DecoHeading>NEWS</DecoHeading>
        <Heading className='mb-8 text-3xl md:text-4xl'>What&apos;s new</Heading>
      </div>
      <Suspense fallback={<NewsSkeleton />}>
        <NewsSkee />
      </Suspense>
    </div>
  )
}

export default NewsComponent
