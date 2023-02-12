import PropTypes from 'prop-types'

const Content = ({ children, className = '' }) => (
  <p
    className={`
    font-ASD text-sm font-normal
    leading-normal
    tracking-wider text-text-loght
    md:text-base md:leading-7 md:tracking-wider ${className}`}
  >
    {children}
  </p>
)

Content.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default Content
