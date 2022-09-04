const Footer = () => (
  <footer className='relative flex flex-col bg-[#EEEEEE] pr-5 pl-10 pt-16 pb-0 md:flex-row md:items-center md:px-16 md:py-16 lg:pl-24 lg:pr-20'>
    <div className='flex w-full flex-col justify-between md:flex-row md:items-center'>
      <div className='relative mb-16 w-8/12 max-w-[350px] font-RobotoSerif-ita text-xl md:mb-0 md:w-5/12'>
        National Taiwan University Herbarium
      </div>
      <div className='relative flex flex-col justify-around text-xs md:w-6/12 md:flex-row md:items-center md:text-sm '>
        <div>
          <div className='font-sans tracking-wide text-[#8A8A8A]'>
            <div className='mt-1'>
              No.1, Sec. 4, Roosevelt Road,
              <br />
              Taipei, Taiwan
            </div>
            <div className='mt-1 w-max'>
              <a
                href='https://goo.gl/maps/M2B2SsLTw6DASXsd7'
                target='blank'
                rel='noreferrer noopener'
              >
                <div className='group flex w-max items-center'>
                  <div className='relative mr-1 w-max overflow-hidden'>
                    <span>Google Map</span>
                    <span className='slow-fade absolute bottom-0 left-0 mt-6 h-px w-full bg-[#8A8A8A] transition-transform duration-500 group-hover:translate-x-full' />
                  </div>
                  <div className='relative mt-1 h-3 w-3 overflow-hidden'>
                    <div className='flex'>
                      <svg
                        className='slow-fade h-2 w-2 transition-transform duration-500 group-hover:translate-x-150 group-hover:translate-y-m150'
                        version='1.1'
                        x='0'
                        y='0'
                        viewBox='0 0 20 21.1'
                        style={{
                          fill: 'none',
                          stroke: '#8A8A8A',
                          strokeWidth: 2.5,
                          strokeMiterlimit: '10',
                        }}
                      >
                        <polyline
                          className='st0'
                          points='6.3,0.9 19,0.9 19,15 '
                        />
                        <line
                          className='st0'
                          x1='0.8'
                          y1='20.2'
                          x2='19'
                          y2='0.9'
                        />
                      </svg>
                      <svg
                        className='slow-fade absolute top-0 h-2 w-2 translate-x-m150 translate-y-150 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0'
                        version='1.1'
                        x='0'
                        y='0'
                        viewBox='0 0 20 21.1'
                        style={{
                          fill: 'none',
                          stroke: '#8A8A8A',
                          strokeWidth: 2.5,
                          strokeMiterlimit: '10',
                        }}
                      >
                        <polyline
                          className='st0'
                          points='6.3,0.9 19,0.9 19,15 '
                        />
                        <line
                          className='st0'
                          x1='0.8'
                          y1='20.2'
                          x2='19'
                          y2='0.9'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 mb-8'>
          <div className='font-sans tracking-wide text-[#8A8A8A]'>
            <div>ntutai@ntu.edu.tw</div>
            <div className='mt-1'>+886-2-33662463 ext. 102</div>
            <div className='mt-1 w-max'>
              <a
                href='https://www.facebook.com/TAIHerbarium'
                target='blank'
                rel='noreferrer noopener'
              >
                <div className='group relative flex w-max items-center'>
                  <div className='relative mr-1 w-max overflow-hidden'>
                    <span>Facebook</span>
                    <span className='slow-fade absolute bottom-0 left-0 h-px w-full bg-[#8A8A8A] transition-transform duration-500 group-hover:translate-x-full' />
                  </div>
                  <div className='relative h-2 w-2 overflow-hidden'>
                    <div className='flex'>
                      <svg
                        className='slow-fade h-2 w-2 transition-transform duration-500 group-hover:translate-x-150 group-hover:translate-y-m150'
                        version='1.1'
                        x='0'
                        y='0'
                        viewBox='0 0 20 21.1'
                        style={{
                          fill: 'none',
                          stroke: '#8A8A8A',
                          strokeWidth: 2.5,
                          strokeMiterlimit: '10',
                        }}
                      >
                        <polyline
                          className='st0'
                          points='6.3,0.9 19,0.9 19,15 '
                        />
                        <line
                          className='st0'
                          x1='0.8'
                          y1='20.2'
                          x2='19'
                          y2='0.9'
                        />
                      </svg>
                      <svg
                        className='slow-fade absolute top-0 h-2 w-2 translate-x-m150 translate-y-150 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0'
                        version='1.1'
                        x='0'
                        y='0'
                        viewBox='0 0 20 21.1'
                        style={{
                          fill: 'none',
                          stroke: '#8A8A8A',
                          strokeWidth: 2.5,
                          strokeMiterlimit: '10',
                        }}
                      >
                        <polyline
                          className='st0'
                          points='6.3,0.9 19,0.9 19,15 '
                        />
                        <line
                          className='st0'
                          x1='0.8'
                          y1='20.2'
                          x2='19'
                          y2='0.9'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-4 h-px w-full bg-white opacity-20 md:hidden' />
    <div className='relative right-0 flex self-end py-8 text-xs opacity-70 md:absolute md:right-6 md:bottom-6 md:py-0'>
      © NTU Herbarium
    </div>
  </footer>
)

export default Footer
