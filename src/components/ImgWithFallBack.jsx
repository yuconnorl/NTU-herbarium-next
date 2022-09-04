/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'

const ImgWithFallBack = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => (
  <picture>
    <source srcSet={src} type={type} />
    <img src={fallback} {...delegated} />
  </picture>
)

ImgWithFallBack.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  type: PropTypes.string,
}

export default ImgWithFallBack
