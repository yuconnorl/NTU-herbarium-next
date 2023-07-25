import clsx from 'clsx'
import Link from 'next-intl/link'

const UnderlinedButton = ({ path, description, isRouteMatch = false }) => {
  return (
    <Link href={path} className='w-max group-hover:opacity-50 transition-opacity'>
      <div className='relative flex w-max overflow-hidden'>
        <div>{description}</div>
        <div
          className={clsx(
            isRouteMatch ? 'translate-x-0' : 'group-hover:translate-x-0',
            'slow-fade absolute bottom-0 h-px w-full -translate-x-full bg-light-brown transition-transform duration-300',
          )}
        />
      </div>
    </Link>
  )
}

export default UnderlinedButton
