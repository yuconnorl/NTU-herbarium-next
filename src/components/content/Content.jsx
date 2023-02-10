import PropTypes from 'prop-types'

const Content = ({ children, className = '' }) => (
  <p
    className={`
    font-ASD text-sm font-normal
    leading-normal
    tracking-wider text-text-color
    md:text-base md:leading-relaxed md:tracking-wider ${className}`}
  >
    {children}
  </p>
)

Content.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default Content
