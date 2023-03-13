import useLanguage from '@/hooks/useLanguage'

const Content = ({ children, className = '' }) => {
  const isHan = useLanguage()

  return (
    <p
      className={`
    ${isHan ? 'md:leading-8' : 'md:leading-7'}
    font-ASD text-sm font-normal
    leading-normal
    tracking-wider text-text-loght
    md:text-base md:leading-7 md:tracking-wider ${className}`}
    >
      {children}
    </p>
  )
}

export default Content
