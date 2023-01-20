import Link from 'next/link'

import ArrowSvg from '../arrowSvg/ArrowSvg'

const Button = ({ url, text }) => (
  <div className='relative py-12'>
    <Link href={url}>
      <div className='group cursor-pointer'>
        <div className='flex justify-end'>
          <div className='mr-4 tracking-wider'>{text}</div>
          <div className='relative h-6 w-4 overflow-hidden'>
            <ArrowSvg size={4} />
          </div>
        </div>
        <div className='absolute right-0 mt-6 w-10/12 justify-end overflow-hidden'>
          <div className='slow-fade h-[0.01rem] min-h-[1px] w-full bg-brown opacity-50 transition-transform duration-500 group-hover:translate-x-full' />
        </div>
      </div>
    </Link>
  </div>
)

export default Button
