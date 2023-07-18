'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NtuHerbarium from '@/assets/images/common/ntu-herbarium-new.png'
import routes from '@/configs/routes'

// hambueger
const HamburgerButton = ({ isBurgerOpen, setHamburgerOpen }) => (
  <div
    className='z-30 md:hidden cursor-pointer w-7 h-7 flex justify-center items-center'
    onClick={() => setHamburgerOpen((state) => !state)}
  >
    <button type='button' className='hamburger'>
      <div className='hamburger-box'>
        <div className={clsx(isBurgerOpen && 'hamburger-active', 'hamburger-inner')} />
      </div>
    </button>
  </div>
)

// hamburger menu
const HamburgerMenu = ({ isBurgerOpen, setHamburgerOpen }) => {
  const variants = {
    open: {
      opacity: 1,
      height: '100%',
      transition: { ease: 'linear', duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: '0%',
      transition: { ease: 'linear', duration: 0.3 },
    },
  }

  const itemVariants = {
    open: {
      opacity: 1,
      y: 20,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 0, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      initial={false}
      animate={isBurgerOpen ? 'open' : 'closed'}
      variants={variants}
      className='fixed top-0 left-0 z-20 w-full bg-white/70 backdrop-blur-xl text-brown/80 md:hidden'
    >
      <motion.ul
        variants={{
          open: {
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.5,
              delayChildren: 0.2,
              staggerChildren: 0.05,
            },
          },
          closed: {
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className={clsx(
          !isBurgerOpen && 'invisible',
          'grid gap-y-5 text-2xl font-noto-serif py-16 pl-12 font-medium',
        )}
      >
        {routes.map(({ path, description }) => (
          <motion.li
            key={path}
            onClick={() => setHamburgerOpen(false)}
            className={clsx(!isBurgerOpen && 'pointer-events-none', 'group')}
            variants={itemVariants}
          >
            <Link href={path} className='w-max group-hover:opacity-50 transition-opacity'>
              <div className='relative flex w-max overflow-hidden'>
                <div className=''>{description}</div>
                <div
                  className={clsx(
                    'slow-fade absolute bottom-0 h-px w-full -translate-x-full bg-light-brown transition-transform duration-300 group-hover:translate-x-0',
                  )}
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

const HeaderComponent = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <>
      <header className='relative flex z-30 items-center justify-between px-6 md:px-10 pt-6 pb-4 text-brown opacity-70 md:py-8'>
        <Link
          className={clsx(
            isHamburgerOpen ? 'opacity-0' : 'opacity-100',
            'logo-width text-lg md:text-xl transition-opacity duration-500',
          )}
          href='/'
        >
          <Image
            src={NtuHerbarium}
            width={110}
            height={55}
            alt='National Taiwan University Herbarium'
          />
        </Link>
        <nav className='relative hidden text-[0.8rem] md:flex font-roboto-serif font-normal'>
          <ul className='flex tracking-wider md:gap-8'>
            {routes.map(({ path, description }) => (
              <li key={path} className='slow-fade group relative overflow-hidden'>
                <Link href={path}>{description}</Link>
              </li>
            ))}
          </ul>
          <div className='ml-24 flex tracking-wider'>
            {/* {currentLang === 'en' ? (
              <Link href={router.asPath} locale='zh-TW'>
                Zh
              </Link>
            ) : (
              <Link href={router.asPath} locale='en'>
                En
              </Link>
            )} */}
          </div>
        </nav>
        <HamburgerButton
          isBurgerOpen={isHamburgerOpen}
          setHamburgerOpen={setIsHamburgerOpen}
        />
      </header>
      <HamburgerMenu
        isBurgerOpen={isHamburgerOpen}
        setHamburgerOpen={setIsHamburgerOpen}
      />
    </>
  )
}

export default HeaderComponent
