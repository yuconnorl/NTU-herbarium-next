import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import routes from '@/configs/routes'

// import Hamuburger from '../hamburger/Hamburger'
// import HamburgerMenu from '../hamburger/HamburgerMenu'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Navbar = ({ locale }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const { i18n } = useTranslation()

  return (
    <>
      <nav className='relative z-30 flex items-center justify-between px-8 pt-6 pb-4 opacity-70 md:px-10 md:py-8'>
        <div
          className='slow-fade group font-oswald text-2xl font-medium tracking-widest mix-blend-difference transition-opacity duration-300 md:text-3xl'
          onClick={() => setIsHamburgerOpen(false)}
        >
          {locale}
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
            {/* {isLangEnglish ? (
              <Link
                onClick={handleLanguageChange('zh-TW')}
                href={`${location.pathname.slice(3)}`}
              >
                zh
              </Link>
            ) : (
              <Link
                onClick={handleLanguageChange('en-US')}
                href={`/en${location.pathname}`}
              >
                En
              </Link>
            )} */}
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
