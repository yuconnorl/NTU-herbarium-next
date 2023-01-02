import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { slidePhoto } from '@/assets/fileLoader'

import BannerProgress from './bannerProgress/BannerProgress'

const ImageSwiper = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const totalSlidesNumber = slidePhoto.length
  const slideInterval = 4500

  function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        const id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
      return null
    }, [delay])
  }

  // useInterval(() => {
  //   if (slideNumber < slidePhoto.length) {
  //     setSlideNumber(slideNumber + 1)
  //   } else {
  //     setSlideNumber(1)
  //   }
  // }, slideInterval)

  return (
    <>
      <div className='relative flex h-[80vh] min-h-[600px] md:h-[70vh]'>
        {slidePhoto.map((item) => (
          <div
            className={`${
              slideNumber === item.key && 'slide-visible'
            } absolute left-0 h-full w-full opacity-0 transition-all duration-500 ease-in-out`}
            key={item.key}
          >
            <Image
              className='h-full w-full object-cover opacity-80'
              src={item.src}
              alt='swiper'
            />
            {slideNumber === item.key && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute bottom-5 ml-5 pt-2 text-[0.7rem] text-brown opacity-70'
              >
                <span className='italic'>{`${item.nomenclature}`}</span>
                <span>
                  {item.publisher}
                  <br />
                </span>
                <div className='group flex items-center'>
                  <span className='relative mt-0.5 inline-block'>
                    <a
                      // href={item.personalHref}
                      // FIXME: shit
                      href='www.google.com'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <span className='slow-fade transition-opacity duration-500 group-hover:opacity-50'>
                        {item.credit}
                      </span>
                    </a>
                    <div className='absolute bottom-0 left-0 h-[1px] w-full bg-brown' />
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        ))}
        <BannerProgress
          slideNumber={slideNumber}
          totalSlidesNumber={totalSlidesNumber}
        />
      </div>
    </>
  )
}

export default ImageSwiper
