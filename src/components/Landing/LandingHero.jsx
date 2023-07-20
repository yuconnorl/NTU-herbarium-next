import Image from 'next/image'
import { Suspense } from 'react'

import imgCalligraphy from '@/assets/images/common//tai-calligraphy.webp'
import Carousell from '@/components/Carousell'

const CarousellFallback = () => {
  return (
    <>
      <div className='animate-pulse relative flex h-[80vh] min-h-[600px] md:h-[65vh] bg-ecru/50'></div>
      <div className='w-full text-xs md:text-sm bg-[#f9f8f7]/90 h-7 md:h-9 border-t border-t-brown/10 py-2 px-2'>
        National Taiwan University Herbarium
      </div>
    </>
  )
}

const LandingHero = () => (
  <section className='w-full px-6 md:px-10'>
    <div className='relative flex flex-col'>
      <Suspense fallback={<CarousellFallback />}>
        <Carousell />
      </Suspense>
      <div className='mt-4 ml-2 w-9/12 opacity-75 sm:w-7/12 sm:max-w-[425px] md:ml-5 md:mt-6 md:w-5/12 md:max-w-[490px] 2xl:max-w-[570px] '>
        <Image src={imgCalligraphy} alt='NTU Herbarium calligraphy' />
      </div>
    </div>
  </section>
)

export default LandingHero
