import clsx from 'clsx'

import useLanguage from '@/hooks/useLanguage'
const Content = ({ children, className = '' }) => {
  const isHan = useLanguage()

  return (
    <p
      className={clsx(
        isHan ? 'md:leading-8' : 'md:leading-7',
        className,
        'text-base text-text-loght font-sans',
      )}
    >
      {children}
    </p>
  )
}

export default Content
