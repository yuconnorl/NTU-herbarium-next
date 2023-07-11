import Link from 'next/link'

const SocialLink = ({ href, children }) => (
  <div className='group mt-1 w-max'>
    <Link href={href} target='_blank'>
      <div className='flex w-max items-center group-hover:opacity-50 transition-opacity duration-500'>
        <div className='relative mr-1 w-max overflow-hidden'>
          <span>{children}</span>
          <span className='slow-fade absolute bottom-0 left-0 h-px w-full bg-[#8A8A8A] transition-transform duration-500 group-hover:translate-x-full' />
        </div>
      </div>
    </Link>
  </div>
)

const Footer = () => (
  <footer className='relative flex flex-col bg-[#EEEEEE] pr-5 pl-10 pt-16 pb-0 md:grid md:grid-cols-footer md:p-16 lg:pl-24 lg:pr-20'>
    <div className='mb-16 font-roboto-serif-ita text-xl text-brown md:mb-0'>
      National Taiwan University <br /> Herbarium
    </div>
    <div className='flex flex-col gap-1 tracking-wide font-noto-sans text-sm text-[#8A8A8A] lg:text-m'>
      <div>臺北市羅斯福路四段一號</div>
      <div className='mt-1'>
        No.1, Sec. 4, Roosevelt Road,
        <br />
        Taipei, Taiwan
      </div>
    </div>
    <div className='my-8 md:my-0 font-noto-sans text-sm text-[#8A8A8A] lg:text-m tracking-wide'>
      <div>ntutai@ntu.edu.tw</div>
      <div className='mt-1'>+886-2-33662463 ext. 102</div>
      <SocialLink href='https://www.facebook.com/TAIHerbarium'>Facebook</SocialLink>
    </div>
    <div className='relative right-0 text-right py-8 text-xs opacity-70 md:absolute md:right-6 md:bottom-6 md:py-0'>
      © NTU Herbarium
    </div>
  </footer>
)

export default Footer
