import { Suspense } from 'react'

import SecondaryHeading from '@/components/letters/heading/secondaryHeading/SecondaryHeading'

import NewsSection from './components/newsSection/NewsSection'

const News = () => {
  return (
    <section className='flex justify-center bg-white bg-landing-news bg-cover bg-center bg-no-repeat px-8 pt-10 pb-12 sm:px-16 md:px-24 mdp:pt-20'>
      <div className='w-full flex-nowrap'>
        <SecondaryHeading className='pt-8 pb-12 tracking-widest'>
          NEWS
        </SecondaryHeading>
        <Suspense fallback={<div>loading</div>}>
          <NewsSection />
        </Suspense>
      </div>
    </section>
  )
}

export default News
