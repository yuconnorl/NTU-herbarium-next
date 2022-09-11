// import { useAtom } from 'jotai'
// import Link from 'next/link'
// import { useTranslation } from 'next-i18next'
// import { useMemo, useState } from 'react'

// import { languageAtom, transRouteAtom } from '@/jotai/language/languageAtom'
// import routes from '@/router/routes'

// import Hamuburger from '../hamburger/Hamburger'
// import HamburgerMenu from '../hamburger/HamburgerMenu'

// const Navbar = () => {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
//   const { i18n } = useTranslation()
//   const [language, setLanguage] = useAtom(languageAtom)
//   const [transRoute] = useAtom(transRouteAtom)

//   console.log(location.pathname)

//   const isLangEnglish = useMemo(() => language === 'en-US', [language])

//   const handleLanguageChange = (lng) => () => {
//     if (lng === language) return
//     setLanguage(lng)
//     i18n.changeLanguage(lng)
//   }

//   useEffect(() => {
//     hamburgerOpen
//       ? document.body.classList.add('overflow-y-hidden')
//       : document.body.classList.remove('overflow-y-hidden')
//   }, [hamburgerOpen])

//   return (
//     <>
//       <nav className='relative z-30 flex items-center justify-between px-8 pt-6 pb-4 opacity-70 md:px-10 md:py-8'>
//         <div
//           className='slow-fade group font-oswald text-2xl font-medium tracking-widest mix-blend-difference transition-opacity duration-300 md:text-3xl'
//           onClick={() => setIsHamburgerOpen(false)}
//         >
//           <Link to='' className='flex'>
//             <span className={`${isHamburgerOpen && 'text-platinum'}`}>
//               NTU.
//             </span>
//             <div className='absolute hidden translate-x-16 items-center text-sm leading-tight tracking-wide lg:flex'>
//               <div className='ml-3 h-6 w-[1.3px] bg-brown opacity-0' />
//               <div className='slow-fade ml-4 -translate-x-20 opacity-0 transition-all duration-300'>
//                 National Taiwan University <br /> Herbarium
//               </div>
//             </div>
//           </Link>
//         </div>
//         <div className='relative hidden text-xs md:flex'>
//           <ul className='relative flex justify-between tracking-widest'>
//             {routes.map(({ path, description }) => (
//               <li
//                 key={path}
//                 className='slow-fade group relative ml-10 overflow-hidden'
//               >
//                 <Link to={path}>
//                   <span>{description}</span>
//                   <div
//                     className={`${
//                       location.pathname === `/${path}` && 'nav-active'
//                     } absoulte slow-fade mt-1 h-px w-full -translate-x-full bg-brown`}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className='ml-24 flex tracking-wider'>
//             {isLangEnglish ? (
//               <Link
//                 onClick={handleLanguageChange('zh-TW')}
//                 href={`${location.pathname.slice(3)}`}
//               >
//                 zh
//               </Link>
//             ) : (
//               <Link
//                 onClick={handleLanguageChange('en-US')}
//                 href={`/en${location.pathname}`}
//               >
//                 En
//               </Link>
//             )}
//           </div>
//         </div>
//         <div className='md:hidden'>
//           <Hamuburger
//             hamburgerOpen={isHamburgerOpen}
//             setHamburgerOpen={setIsHamburgerOpen}
//           />
//         </div>
//       </nav>
//       {isHamburgerOpen && (
//         <HamburgerMenu
//           hamburgerOpen={isHamburgerOpen}
//           setHamburgerOpen={setIsHamburgerOpen}
//         />
//       )}
//     </>
//   )
// }

// export default Navbar
