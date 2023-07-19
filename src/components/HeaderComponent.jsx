'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { useEffect, useRef, useState } from 'react'

import NtuHerbarium from '@/assets/images/common/ntu-herbarium-new.png'
import routes from '@/configs/routes'

import LocaleSwitcher from './LocaleSwitcher'

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
        !isBurgerOpen && 'pointer-events-none',
        'fixed top-0 left-0 z-20 w-full hamburger-background text-brown/80 md:hidden',
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
            <Link href={path} className='w-max group-hover:opacity-50 transition-opacity'>
              <div className='relative flex w-max overflow-hidden'>
                <div>{t(description)}</div>
                <div
                  className={clsx(
                    'slow-fade absolute bottom-0 h-px w-full -translate-x-full bg-light-brown transition-transform duration-300 group-hover:translate-x-0',
                  )}
                />
              </div>
            </Link>
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
  const body = useRef(document.querySelector('#body'))
  const t = useTranslations('Routes')

  useEffect(() => {
    body.current = document.querySelector('#body')
  }, [])

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
                <Link href={path}>{t(description)}</Link>
              </li>
            ))}
          </ul>
          <div className='ml-24 flex tracking-wider'>
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
