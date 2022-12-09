import { motion } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'
import Link from 'next/link'
import PropTypes from 'prop-types'

import routes from '@/configs/routes'

const HamburgerMenu = ({ hamburgerOpen, setHamburgerOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`${
        hamburgerOpen ? 'visible' : 'invisible'
      } full-height slow-fade fixed top-0 left-0 z-20 w-full bg-[#746159] bg-opacity-95 text-platinum transition-opacity duration-500`}
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
                    className={`${
                      location.pathname === path && 'nav-active'
                    } slow-fade absolute bottom-0 h-px w-full -translate-x-full bg-platinum transition-transform duration-300 group-hover:translate-x-0`}
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

HamburgerMenu.propTypes = {
  hamburgerOpen: PropTypes.bool,
  setHamburgerOpen: PropTypes.func,
}

export default HamburgerMenu
