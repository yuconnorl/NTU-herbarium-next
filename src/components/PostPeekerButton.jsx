'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ChevronLeft, ChevronRight } from './Icons'

const PostPeekerButton = ({ title, postId, isNext }) => {
  const t = useTranslations('Components')

  const prompt = isNext ? t('next_news') : t('prev_news')

  return (
    <Link
      className='relative group py-2.5 border-b-light-brown/50 border-b sm:border-b-0'
      href={`/news/${postId}`}
    >
      <div
        className={clsx(
          isNext ? 'text-right mr-0 sm:mr-6' : 'ml-0 sm:ml-6',
          'mb-1.5 text-sm text-feldgrau sm:text-feldgrau/60',
        )}
      >
        {prompt}
      </div>
      <div
        className={clsx(
          isNext && 'justify-end',
          'flex items-center group-hover:opacity-60 transition-opacity',
        )}
      >
        {!isNext && (
          <ChevronLeft className='hidden sm:block mr-2 group-hover:-translate-x-1 transition-transform' />
        )}
        <div className='text-ellipsis overflow-hidden whitespace-nowrap sm:overflow-auto sm:whitespace-normal'>
          {title}
        </div>
        {isNext && (
          <ChevronRight className='hidden sm:block ml-2 group-hover:translate-x-1 transition-transform' />
        )}
      </div>
      <div className='absolute hidden sm:block bottom-0 mt-2.5 w-full overflow-hidden'>
        <div
          className={clsx(
            isNext ? 'group-hover:translate-x-full' : 'group-hover:-translate-x-full',
            'slow-fade h-[0.01rem] min-h-[1px] w-full bg-light-brown opacity-50 transition-transform duration-500',
          )}
        />
      </div>
    </Link>
  )
}

export default PostPeekerButton
