import TaiLogoF from '@/assets/images/common//tailogo.png'
import TaiLogo from '@/assets/images/common//tailogo.webp'
import ImgWithFallBack from '@/components/ImgWithFallBack'

import ImageSwiper from './components/ImageSwieper/ImageSwiper'

const Hero = () => (
  <section className='full-height h-full w-full pl-6 pr-5 md:pl-10 md:pr-9'>
    <div className='relative flex flex-col'>
      <ImageSwiper />
      <div className='sm:7/12 mt-4 ml-2 w-9/12 opacity-75 sm:max-w-[425px] md:ml-5 md:mt-6 md:w-5/12 md:max-w-[490px] 2xl:max-w-[570px] '>
        <ImgWithFallBack src={TaiLogo} fallback={TaiLogoF} />
      </div>
    </div>
  </section>
)

export default Hero
