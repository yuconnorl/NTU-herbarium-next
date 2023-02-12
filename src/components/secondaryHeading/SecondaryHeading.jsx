import PropTypes from 'prop-types'

const SecondaryHeading = ({ children, className = '' }) => (
  <h4
    className={`relative flex items-center pt-8 pb-6 font-Lato text-xs tracking-wider text-atrovirens md:text-sm ${className} before:relative before:mr-2 before:h-px before:w-3 before:bg-atrovirens before:content-['']`}
  >
    {children}
  </h4>
)

SecondaryHeading.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default SecondaryHeading
