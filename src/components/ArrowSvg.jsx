const ArrowSvg = ({ size }) => {
  const strokeColor = '#20150F'
  const strokeWidth = 1.5

  return (
    <div className='flex'>
      <svg
        className={`  trans mt-2 h-${size} w-${size} transition-transform duration-500 group-hover:translate-x-150 group-hover:translate-y-m150`}
        version='1.1'
        x='0'
        y='0'
        viewBox='0 0 20 21.1'
        style={{
          fill: 'none',
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          strokeMiterlimit: '10',
        }}
      >
        <polyline points='6.3,0.9 19,0.9 19,15 ' />
        <line x1='0.8' y1='20.2' x2='19' y2='0.9' />
      </svg>
      <svg
        className={`slow-fade absolute top-0 mt-2 h-${size} w-${size} translate-x-m150 translate-y-150 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0`}
        version='1.1'
        x='0'
        y='0'
        viewBox='0 0 20 21.1'
        style={{
          fill: 'none',
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          strokeMiterlimit: '10',
        }}
      >
        <polyline points='6.3,0.9 19,0.9 19,15 ' />
        <line x1='0.8' y1='20.2' x2='19' y2='0.9' />
      </svg>
    </div>
  )
}

export default ArrowSvg
