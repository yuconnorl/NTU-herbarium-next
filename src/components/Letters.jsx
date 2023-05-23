import clsx from 'clsx'

import useLanguage from '@/hooks/useLanguage'

export const Paragraph = ({ className, children }) => (
  <>
    <p className={clsx('font-noto-tc-r text-base text-loght', className)}>{children}</p>
  </>
)

export const Heading = ({ className, children }) => {
  const isHan = useLanguage()

  console.log(isHan)

  return (
    <h2
      className={clsx(
        isHan ? 'font-noto-serif-m' : 'font-roboto-flex',
        'whitespace-pre-line text-5xl font-normal opacity-80 leading-tight',
        className,
      )}
    >
      {children}
    </h2>
  )
}
