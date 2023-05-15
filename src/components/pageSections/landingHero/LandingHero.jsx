import Image from 'next/image'

import TaiCalligraphy from '@/assets/images/common//tai-calligraphy.webp'

import ImageSwiper from '../../ImageSwiper'

const Hero = () => (
  <section className='full-height h-full w-full pl-6 pr-5 md:pl-10 md:pr-9'>
    <div className='relative flex flex-col'>
      <ImageSwiper />
      <div className='mt-4 ml-2 w-9/12 opacity-75 sm:w-7/12 sm:max-w-[425px] md:ml-5 md:mt-6 md:w-5/12 md:max-w-[490px] 2xl:max-w-[570px] '>
        <Image src={TaiCalligraphy} alt='NTU Herbarium calligraphy' />
      </div>
    </div>
  </section>
)

export default Hero
