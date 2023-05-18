import clsx from 'clsx'

export const PrimaryHeading = ({ children, className = '' }) => (
  <h2
    className={clsx(
      'whitespace-pre-line font-crimson text-[4rem] font-normal opacity-80',
      className,
    )}
  >
    {children}
  </h2>
)

export const SecondaryHeading = ({ children, className = '' }) => (
  <h4
    className={clsx(
      'font-Lato relative flex items-center pt-8 pb-6 text-xs tracking-wider text-atrovirens md:text-sm',
      'before:relative before:mr-2 before:h-px before:w-3 before:bg-atrovirens before:content-[""]',
      className,
    )}
  >
    {children}
  </h4>
)

export default SecondaryHeading
