import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

const BannerProgress = ({ slideNumber, totalSlidesNumber }) => (
  <div className='absolute bottom-0 right-0 z-10 flex w-28 translate-x-[52px] -translate-y-14 rotate-90 text-xs md:translate-y-5 md:translate-x-0 md:rotate-0'>
    <div className='flex items-center justify-around font-oswald-el'>
      <span className='hidden w-[18px] -rotate-90 justify-center md:flex md:rotate-0'>
        {`0${slideNumber}`}
      </span>
      <div className='relative mx-2 h-[1.5px] min-h-[1.2px] w-10 overflow-hidden bg-[#d8d2d2] md:w-[60px] xl:h-[1.85px]'>
        <div key={nanoid()} className='silde-progress absolute h-full w-full bg-brown' />
      </div>
      <span className='hidden w-[18px] -rotate-90 justify-center md:flex md:rotate-0'>
        {`0${totalSlidesNumber}`}
      </span>
    </div>
  </div>
)

BannerProgress.propTypes = {
  slideNumber: PropTypes.number,
  totalSlidesNumber: PropTypes.number,
}

export default BannerProgress
