import PropTypes from 'prop-types'
import Link from 'next/link'


const Button = ({ url, text }) => (
  <div className='relative py-12'>
    <Link to={url} className='group'>
      <div className='flex justify-end'>
        <div className='mr-4 tracking-wider'>{text}</div>
        <div className='relative h-6 w-4 overflow-hidden'>
          <div className='flex'>
            <svg
              className='slow-fade mt-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-150 group-hover:translate-y-m150'
              version='1.1'
              x='0'
              y='0'
              viewBox='0 0 20 21.1'
              style={{
                fill: 'none',
                stroke: '#20150F',
                strokeWidth: 1.5,
                strokeMiterlimit: '10',
              }}
            >
              <polyline className='st0' points='6.3,0.9 19,0.9 19,15 ' />
              <line className='st0' x1='0.8' y1='20.2' x2='19' y2='0.9' />
            </svg>
            <svg
              className='slow-fade absolute top-0 mt-2 h-4 w-4 translate-x-m150 translate-y-150 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0'
              version='1.1'
              x='0'
              y='0'
              viewBox='0 0 20 21.1'
              style={{
                fill: 'none',
                stroke: '#20150F',
                strokeWidth: 1.5,
                strokeMiterlimit: '10',
              }}
            >
              <polyline className='st0' points='6.3,0.9 19,0.9 19,15 ' />
              <line className='st0' x1='0.8' y1='20.2' x2='19' y2='0.9' />
            </svg>
          </div>
        </div>
      </div>
      <div className='absolute right-0 mt-6 w-10/12 justify-end overflow-hidden'>
        <div className='slow-fade h-[0.01rem] min-h-[1px] w-full bg-brown opacity-50 transition-transform duration-500 group-hover:translate-x-full' />
      </div>
    </Link>
  </div>
)

Button.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
}

export default Button
