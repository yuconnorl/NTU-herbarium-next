import clsx from 'clsx'

import useLanguage from '@/hooks/useLanguage'
const Content = ({ children, className = '' }) => {
  const isHan = useLanguage()

  return (
    <p
      className={clsx(
        isHan ? 'md:leading-8' : 'md:leading-7',
        className,
        'font-ASD text-base font-normal leading-normal tracking-wider text-text-loght md:leading-7 md:tracking-wider',
      )}
    >
      {children}
    </p>
  )
}

export default Content
