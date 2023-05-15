const TextSpinner = ({ text = '' }) => (
  <div className='font-Sansita absolute right-20 top-0 animate-spin-slow'>
    <svg viewBox='0 0 100 100' width='250' height='250'>
      <defs>
        <path
          id='circle'
          d='M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0'
        />
      </defs>
      <text fontSize='12.7'>
        <textPath className='opacity-10' xlinkHref='#circle'>
          {text}
        </textPath>
      </text>
    </svg>
  </div>
)

export default TextSpinner
