import PropTypes from 'prop-types'

const Hamburger = ({ hamburgerOpen, setHamburgerOpen }) => (
  <div
    className='z-30 flex overflow-hidden'
    onClick={() => setHamburgerOpen(!hamburgerOpen)}
  >
    <div className='h-[21px] w-[30px]'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <span
          className={`${
            hamburgerOpen
              ? 'w-[30px] translate-y-[7.5px] rotate-[150deg] bg-platinum'
              : 'bg-gray-600'
          } slow-fade h-px w-8/12 transition-all duration-500`}
        />
        <span
          className={`${
            hamburgerOpen ? 'translate-x-full' : 'bg-gray-600'
          } slow-fade my-[6px] h-px w-full transition-transform duration-500`}
        />
        <span
          className={` ${
            hamburgerOpen
              ? 'w-[30px] -translate-y-1.5 rotate-[30deg] bg-platinum'
              : 'bg-gray-600'
          } slow-fade h-px w-8/12 self-end transition-all duration-500`}
        />
      </div>
    </div>
  </div>
)

Hamburger.propTypes = {
  hamburgerOpen: PropTypes.bool,
  setHamburgerOpen: PropTypes.func,
}

export default Hamburger
