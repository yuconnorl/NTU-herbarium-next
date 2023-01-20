import PropTypes from 'prop-types'

const Content = ({ children, className = '' }) => (
  <p
    className={`
    text-sm font-light leading-relaxed
    tracking-wider text-onyx
    md:text-base md:leading-loose md:tracking-widest ${className}`}
  >
    {children}
  </p>
)

Content.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default Content
