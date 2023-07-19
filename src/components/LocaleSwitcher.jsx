'use client'

import clsx from 'clsx'
import { useLocale } from 'next-intl'
import { usePathname } from 'next-intl/client'
import Link from 'next-intl/link'

const LocaleButton = ({ pathname, localeName, localeCode }) => {
  return (
    <Link
      href={pathname}
      locale={localeCode}
      className='group hover:opacity-70 transition-opacity'
    >
      <div className='relative flex w-max overflow-hidden'>
        <div>{localeName}</div>
        <div
          className={clsx(
            'slow-fade absolute bottom-0 h-px w-full -translate-x-full bg-light-brown transition-transform duration-300 group-hover:translate-x-0',
          )}
        />
      </div>
    </Link>
  )
}

const LocaleSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <>
      {locale === 'en' ? (
        <LocaleButton pathname={pathname} localeName='zh' localeCode='zh-TW' />
      ) : (
        <LocaleButton pathname={pathname} localeName='En' localeCode='en' />
      )}
    </>
  )
}

export default LocaleSwitcher
