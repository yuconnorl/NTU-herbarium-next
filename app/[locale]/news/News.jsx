import { Suspense } from 'react'

import { DecoHeading, Heading } from '@/components/Letters'
import NewsSkee from '@/components/NewsSkee'

const NewsComponent = () => {
  return (
    <div className='px-6 py-16 md:px-16'>
      <div className='mb-10 pl-6'>
        <DecoHeading>NEWS</DecoHeading>
        <Heading className='mb-8 text-3xl md:text-4xl'>What&apos;s new</Heading>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsSkee />
      </Suspense>
    </div>
  )
}

export default NewsComponent
