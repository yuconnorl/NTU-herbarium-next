import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import NtuHerbarium from '@/assets/images/common/ntu-herbarium-new.png'
import routes from '@/configs/routes'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

// hambueger
const Hamburger = ({ isBurgerOpen, setHamburgerOpen }) => (
  <div
    className='z-30 flex overflow-hidden md:hidden'
    onClick={() => setHamburgerOpen(!isBurgerOpen)}
  >
    <div className='h-[14px] w-[20px] flex flex-col'>
      <span
        className={clsx(
          isBurgerOpen ? 'translate-y-full ' : 'bg-gray-600',
          'slow-fade h-[2px] w-full transition-all duration-400 bg-gray-600',
        )}
      />
      <span
        className={clsx(
          isBurgerOpen ? '-translate-y-full' : 'bg-gray-600',
          'slow-fade my-[6px] h-[2px] w-full transition-transform duration-400 bg-gray-600',
        )}
      />
    </div>
  </div>
)

// hamburger menu
const HamburgerMenu = ({ isBurgerOpen, setHamburgerOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        isBurgerOpen ? 'visible' : 'invisible'
      } full-height slow-fade fixed top-0 left-0 z-20 w-full bg-white/50 backdrop-blur-xl text-brown transition-opacity duration-500`}
    >
      <div className='relative h-full w-full'>
        <div className='relative flex h-full flex-col justify-between pt-32 pb-16 pl-12 tracking-wider'>
          <div className='grid gap-y-8 text-3xl'>
            {routes.map(({ path, description }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setHamburgerOpen(false)}
                className='group w-max'
              >
                <div className='relative flex w-max overflow-hidden'>
                  <div className='tracking-wider'>{description}</div>
                  <div
                    className={clsx(
                      'slow-fade absolute bottom-0 h-px w-full -translate-x-full bg-platinum transition-transform duration-300 group-hover:translate-x-0',
                    )}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const HeaderComponent = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const { t, i18n } = useTranslation('common')
  const currentLang = i18n.resolvedLanguage
  const router = useRouter()

  return (
    <>
      <header className='relative z-30 flex items-center justify-between px-6 md:px-10 pt-6 pb-4 text-brown opacity-70 md:py-8'>
        <Link className='logo-width text-lg md:text-xl' href='/'>
          <Image src={NtuHerbarium} width={110} height={55} />
        </Link>
        <nav className='relative hidden text-[0.8rem] md:flex font-roboto-serif font-normal'>
          <ul className='flex tracking-widest md:gap-8'>
            {routes.map(({ path, description }) => (
              <li key={path} className='slow-fade group relative overflow-hidden'>
                <Link href={path}>{description}</Link>
              </li>
            ))}
          </ul>
          <div className='ml-24 flex tracking-wider'>
            {currentLang === 'en' ? (
              <Link href={router.asPath} locale='zh-TW'>
                Zh
              </Link>
            ) : (
              <Link href={router.asPath} locale='en'>
                En
              </Link>
            )}
          </div>
        </nav>
        <Hamburger isBurgerOpen={isHamburgerOpen} setHamburgerOpen={setIsHamburgerOpen} />
      </header>
      <HamburgerMenu
        isBurgerOpen={isHamburgerOpen}
        setHamburgerOpen={setIsHamburgerOpen}
      />
    </>
  )
}

export default HeaderComponent
