import { Suspense } from 'react'

import { DecoHeading } from '@/components/Letters'
import NewsSkee from '@/components/NewsSkee'
import NewsSkeleton from '@/components/NewsSkeleton'

import LandingNewsButton from '../LandingNewsButton'

const LandingNews = () => {
  return (
    <section className='flex justify-center bg-white bg-landing-news bg-cover bg-center bg-no-repeat px-8 pt-10 pb-12 sm:px-16 md:px-24 mdp:pt-20'>
      <div className='w-full flex-nowrap'>
        <DecoHeading className='pb-12 tracking-widest'>NEWS</DecoHeading>
        <Suspense fallback={<NewsSkeleton number={5} />}>
          <NewsSkee isTrim />
        </Suspense>
        <LandingNewsButton />
      </div>
    </section>
  )
}

export default LandingNews
