import PropTypes from 'prop-types'

const SecondaryHeading = ({ children, className = '' }) => (
  <h4
    className={`text-xs tracking-wider text-atrovirens md:text-sm ${className}`}
  >
    {children}
  </h4>
)

SecondaryHeading.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default SecondaryHeading
