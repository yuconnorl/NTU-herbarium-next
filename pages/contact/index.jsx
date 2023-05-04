import { useTranslation } from 'next-i18next'

const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='px-6 pt-16 pb-8'>
        <div>
          <div className='pb-16 pl-6'>
            <div className='mb-6 md:mb-10'>
              <h2 className='text-4xl font-medium leading-tight md:text-6xl md:leading-tight '>
                {/* <Trans i18nKey='contact_title' components={{ br: <br /> }} /> */}
              </h2>
            </div>
            <div className=''>
              <div className='mb-7 text-sm tracking-wider text-atrovirens'>
                <div>CONTACT</div>
              </div>
              <div className='mt-1'>No.1, Sec. 4, Roosevelt Road, Taipei</div>
              <div>
                <div className='mt-1'>ntutai@ntu.edu.tw</div>
                <div className='mt-1'>+886-2-33662463 ext. 102</div>
              </div>
            </div>
          </div>
          <div className='relative pl-6'>
            <div className='mb-7 text-sm tracking-wider text-atrovirens'>
              <div>OPEN HOURS</div>
            </div>
            <div className='grid gap-y-9'>
              <div className='flex flex-col justify-between py-3'>
                <div className='mb-6 text-base tracking-wider opacity-50'>
                  Herbarium & fern garden
                </div>
                <div className='align-bottom'>
                  <div>Monday - Friday</div>
                  <div>10:00 - 12:00, 13:00 - 16:30</div>
                  <div className='text-xs'>
                    (Closed on national holiday, with appointment)
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between py-3'>
                <div className='mb-6 text-base tracking-wider opacity-50'>
                  Exhibition hall
                </div>
                <div>
                  <div>Monday - Sunday</div>
                  <div>10:00 - 12:00, 13:00 - 16:00</div>
                  <div className='text-xs'>(Closed on Tuesday & national holiday)</div>
                </div>
              </div>
              <div className='flex flex-col justify-between py-3'>
                <div className='mb-6 text-base tracking-wider opacity-50'>
                  Outdoor garden
                </div>
                <div>All day available</div>
              </div>
            </div>
          </div>
          <div className='relative pt-6'>
            <div>
              {/* <ImgWithFallBack className='object-cover w-full h-full' src={item.src} fallback={item.fallback} alt={item.alt} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
