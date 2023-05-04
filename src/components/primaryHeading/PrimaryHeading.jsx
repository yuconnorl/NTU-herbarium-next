import clsx from 'clsx'
import PropTypes from 'prop-types'

const PrimaryHeading = ({ children, className = '' }) => (
  <h2
    className={clsx(
      'whitespace-pre-line font-roboto-serif-r text-4xl font-normal leading-normal opacity-80 md:text-5xl md:leading-normal',
      className,
    )}
  >
    {children}
  </h2>
)

PrimaryHeading.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default PrimaryHeading
