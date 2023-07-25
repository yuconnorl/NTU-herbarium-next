'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { useEffect, useRef, useState } from 'react'

import imgNtuHerbariumLetters from '@/assets/images/common/ntu-herbarium-letters.png'
import routes from '@/configs/routes'

import LocaleSwitcher from './LocaleSwitcher'
import UnderlinedButton from './UnderlinedButton'

// hambueger
const HamburgerButton = ({ isBurgerOpen, setHamburgerOpen, bodyRef }) => {
  function onButtonClick() {
    setHamburgerOpen((state) => !state)
    if (isBurgerOpen) {
      bodyRef.current.classList.remove('overflow-hidden')
    } else {
      bodyRef.current.classList.add('overflow-hidden')
    }
  }

  return (
    <div
      className='z-30 md:hidden cursor-pointer w-7 h-7 flex justify-center items-center'
      onClick={onButtonClick}
    >
      <button type='button' className='hamburger'>
        <div className='hamburger-box'>
          <div className={clsx(isBurgerOpen && 'hamburger-active', 'hamburger-inner')} />
        </div>
      </button>
    </div>
  )
}

// hamburger menu
const HamburgerMenu = ({ isBurgerOpen, setHamburgerOpen, bodyRef }) => {
  const ul = useRef(null)
  const t = useTranslations('Routes')

  function onLinkClick() {
    bodyRef.current.classList.remove('overflow-hidden')
    setHamburgerOpen(false)
  }

  const variants = {
    open: {
      opacity: 1,
      height: '100dvh',
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
      className={clsx(
        // !isBurgerOpen && 'pointer-events-none',
        isBurgerOpen ? 'backdrop-blur' : 'pointer-events-none',
        'fixed top-0 left-0 z-20 w-full text-brown/80 md:hidden bg-white/80',
      )}
    >
      <motion.ul
        ref={ul}
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
        className={clsx('grid gap-y-5 text-2xl font-noto-serif py-16 pl-12 font-medium')}
      >
        {routes.map(({ path, description }) => (
          <motion.li
            key={path}
            onClick={onLinkClick}
            className='group'
            variants={itemVariants}
          >
            <UnderlinedButton path={path} description={t(description)} />
          </motion.li>
        ))}
        <motion.li
          className='mt-16 text-lg'
          key='language-switcher'
          variants={itemVariants}
        >
          <LocaleSwitcher />
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

const HeaderComponent = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const body = useRef(null)
  const t = useTranslations('Routes')
  const locale = useLocale()
  const isHan = locale === 'zh-TW'

  useEffect(() => {
    body.current = document.querySelector('#body')
  }, [])

  return (
    <>
      <header className='relative flex z-30 items-center justify-between px-6 md:px-10 pt-6 pb-4 text-brown opacity-70 md:py-8'>
        <button
          type='button'
          className={clsx(
            isHamburgerOpen ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-500',
          )}
        >
          <Link href='/'>
            <Image
              src={imgNtuHerbariumLetters}
              width={110}
              height={55}
              alt='National Taiwan University Herbarium'
            />
          </Link>
        </button>
        <nav className='relative hidden text-[0.8rem] md:flex font-roboto-serif font-normal items-center'>
          <ul className='flex tracking-wider md:gap-8'>
            {routes.map(({ path, description }) => (
              <li
                key={path}
                className={clsx(
                  isHan ? ' font-noto-serif font-medium text-lg' : 'font-roboto-serif',
                  'slow-fade group relative overflow-hidden',
                )}
              >
                <UnderlinedButton path={path} description={t(description)} />
              </li>
            ))}
          </ul>
          <div className={clsx(isHan && 'text-base', 'ml-24 flex tracking-wider')}>
            <LocaleSwitcher />
          </div>
        </nav>
        <HamburgerButton
          isBurgerOpen={isHamburgerOpen}
          setHamburgerOpen={setIsHamburgerOpen}
          bodyRef={body}
        />
      </header>
      <HamburgerMenu
        isBurgerOpen={isHamburgerOpen}
        setHamburgerOpen={setIsHamburgerOpen}
        bodyRef={body}
      />
    </>
  )
}

export default HeaderComponent
