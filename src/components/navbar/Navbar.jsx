import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import routes from '@/configs/routes'

// import Hamuburger from '../hamburger/Hamburger'
// import HamburgerMenu from '../hamburger/HamburgerMenu'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const { t, i18n } = useTranslation('common')
  const currentLang = i18n.resolvedLanguage

  return (
    <>
      <nav className='relative z-30 flex items-center justify-between px-8 pt-6 pb-4 opacity-70 md:px-10 md:py-8'>
        <div
          className='slow-fade group font-oswald text-2xl font-medium tracking-widest mix-blend-difference transition-opacity duration-300 md:text-3xl'
          onClick={() => setIsHamburgerOpen(false)}
        >
          <Link href='/' className={`${isHamburgerOpen && 'text-platinum'}`}>
            NTU.
          </Link>
        </div>
        <div className='relative hidden text-xs md:flex'>
          <ul className='relative flex justify-between tracking-widest'>
            {routes.map(({ path, description }) => (
              <li
                key={path}
                className='slow-fade group relative ml-10 overflow-hidden'
              >
                <Link href={path}>{description}</Link>
              </li>
            ))}
          </ul>
          <div className='ml-24 flex tracking-wider'>
            {currentLang === 'en' ? (
              <Link href='/' locale='zh-TW'>
                Zh
              </Link>
            ) : (
              <Link href='/' locale='en'>
                En
              </Link>
            )}
          </div>
        </div>
        {/* <div className='md:hidden'>
          <Hamuburger
            hamburgerOpen={isHamburgerOpen}
            setHamburgerOpen={setIsHamburgerOpen}
          />
        </div> */}
      </nav>
      {/* {isHamburgerOpen && (
        <HamburgerMenu
          hamburgerOpen={isHamburgerOpen}
          setHamburgerOpen={setIsHamburgerOpen}
        />
      )} */}
    </>
  )
}

export default Navbar
