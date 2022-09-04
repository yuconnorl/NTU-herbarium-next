import PropTypes from 'prop-types'

const PrimaryHeading = ({ children, className = '' }) => (
  <h2
    className={`whitespace-pre-line font-RobotoSerif-R text-4xl font-normal leading-normal opacity-80 md:text-5xl md:leading-normal ${className}`}
  >
    {children}
  </h2>
)

PrimaryHeading.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default PrimaryHeading
