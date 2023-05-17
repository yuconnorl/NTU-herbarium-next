import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  return (
    <>
      <nav className='relative z-30 flex items-center justify-between px-6 md:px-10 pt-6 pb-4 text-brown opacity-70 md:py-8'>
        <Link className='font-roboto-serif-r text-base' href='/'>
          NTU Herbarium
        </Link>
        <div className='relative hidden text-[0.8rem] md:flex'>
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
