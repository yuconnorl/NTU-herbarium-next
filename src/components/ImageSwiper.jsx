import clsx from 'clsx'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { slidePhoto } from '@/assets/fileLoader'

// progress bar
const BannerProgress = ({ slideNumber, totalSlidesNumber }) => (
  <div className='absolute bottom-4 right-4 z-10 flex text-xs md:rotate-0'>
    <div className='flex items-center justify-around font-oswald-el'>
      <span className='hidden w-[18px] justify-center md:flex'>{`0${slideNumber}`}</span>
      <div className='relative mx-2 h-[1.5px] min-h-[1.2px] w-10 overflow-hidden bg-[#d8d2d2] md:w-[60px] xl:h-[1.85px]'>
        <div key={nanoid()} className='silde-progress absolute h-full w-full bg-brown' />
      </div>
      <span className='hidden w-[18px] justify-center md:flex'>
        {`0${totalSlidesNumber}`}
      </span>
    </div>
  </div>
)

const ImageSwiper = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const totalSlidesNumber = slidePhoto.length
  const slideInterval = 6000

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

  useInterval(() => {
    if (slideNumber < slidePhoto.length) {
      setSlideNumber(slideNumber + 1)
    } else {
      setSlideNumber(1)
    }
  }, slideInterval)

  return (
    <>
      <div className='relative flex h-[80vh] min-h-[600px] md:h-[65vh]'>
        {slidePhoto.map((item) => (
          <div
            className={clsx(
              slideNumber === item.key && 'slide-visible',
              'absolute left-0 h-full w-full opacity-0 transition-all duration-500 ease-in-out',
            )}
            key={item.key}
          >
            <Image
              className='h-full w-full object-cover opacity-80'
              src={item.src}
              alt='swiper'
            />
            {slideNumber === item.key && (
              <motion.div
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute flex items-center justify-between w-full pt-1 md:pt-1.5 px-3 text-[0.7rem] md:text-sm text-brown/80'
              >
                <span className='italic mt-0.5'>{`${item.nomenclature}`}</span>
                <div className='group flex items-center'>
                  <span className='relative inline-block'>
                    <Link
                      className='slow-fade transition-opacity text-[0.7rem] md:text-xs duration-500 group-hover:opacity-50'
                      href={item.personalHref}
                      target='_blank'
                    >
                      {item.credit}
                    </Link>
                    <div className='absolute bottom-0 left-0 h-[1px] w-full bg-brown/60' />
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        ))}
        <BannerProgress slideNumber={slideNumber} totalSlidesNumber={totalSlidesNumber} />
      </div>
      <div className='w-full bg-[#f9f8f7]/90 h-7 md:h-9 border-t border-t-brown/10'></div>
    </>
  )
}

export default ImageSwiper
