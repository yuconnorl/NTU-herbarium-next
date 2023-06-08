'use client'
import clsx from 'clsx'

export const Paragraph = ({ className, children }) => {
  const isHan = true

  return (
    <p
      className={clsx(
        isHan ? 'font-noto-sans leading-relaxed' : 'font-roboto-sans md:leading-7',
        'text-base text-text-loght',
        className,
      )}
    >
      {children}
    </p>
  )
}

export const Heading = ({ className, children }) => {
  const isHan = true

  return (
    <h2
      className={clsx(
        isHan ? 'font-noto-serif font-medium' : 'font-roboto-serif',
        'whitespace-pre-line opacity-80 text-text-color',
        className,
      )}
    >
      {children}
    </h2>
  )
}
export const DecoHeading = ({ className, children }) => {
  return (
    <h4
      className={clsx(
        'font-roboto-serif relative flex items-center pt-8 pb-6 text-xs tracking-wider text-atrovirens md:text-sm',
        'before:relative before:mr-2 before:h-px before:w-3 before:bg-atrovirens before:content-[""]',
        className,
      )}
    >
      {children}
    </h4>
  )
}
