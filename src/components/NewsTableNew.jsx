'use client'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { NEWS_TYPES, NEWS_TYPES_COLOR } from '@/configs/config'

import NewsSkeleton from './NewsSkeleton'

const CrossIcon = ({ open = false }) => (
  <div className='relative flex h-5 w-5 items-center'>
    <span className='h-[1px] w-5 border-t-[1px] border-black' />
    <span
      className={clsx(
        open ? 'rotate-0' : 'rotate-90',
        'absolute h-[1px] w-[1.16rem] border-t-[1px] border-black duration-200',
      )}
    />
  </div>
)

const HorizontalLine = () => <div className='h-px w-full bg-brown opacity-20' />

const NewsPlaceHolder = () => {
  return (
    <>
      <HorizontalLine />
      {[...Array(5)].map(() => (
        <NewsSkeleton key={nanoid()} />
      ))}
      <HorizontalLine />
    </>
  )
}

const NewsTableNew = ({ newsData = [] }) => {
  const formateDate = (date) => dayjs(date).format('MMM DD, YYYY')
  const [newsD, setNewsD] = useState([])
  const isHan = true

  useEffect(() => {
    if (newsData.length > 0) setNewsD(newsData)
  }, [newsData])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full'
    >
      <HorizontalLine />
      <div className='mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='divide-y divide-brown divide-opacity-20'
        >
          {newsD.length > 0 ? (
            newsD.map((news) => {
              const tags = NEWS_TYPES[news.category]
              const tagsBackgroundColor = NEWS_TYPES_COLOR[news.category]
              return (
                <div key={news.id}>
                  <Link
                    href={`news/${news.id}`}
                    className={clsx(
                      'focus-visible:ring/75 relative flex w-full items-center justify-between py-2 pl-4 pr-6 text-left text-sm font-medium text-brown transition-all before:absolute before:left-0 before:h-4/6 before:w-[2px] before:bg-transparent before:content-[""] hover:bg-gray-200 focus:outline-none focus-visible:bg-gray-200',
                    )}
                  >
                    <div className='slow-fade relative flex w-full flex-col py-3 pl-4 transition duration-500 md:flex-row md:py-4 md:pl-4'>
                      <div className='font-roboto-serif relative translate-y-[1px] whitespace-nowrap text-sm text-light-brown md:mr-4'>
                        {formateDate(news.date)}
                      </div>
                      <div
                        className={clsx(
                          isHan ? 'font-noto-sans' : 'font-roboto-sans',
                          'md:news-description relative my-3 justify-center pr-4 text-base tracking-wide md:m-0',
                        )}
                      >
                        {news.title}
                      </div>
                      <div
                        className={clsx(
                          tagsBackgroundColor,
                          'relative flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-3xl py-1 px-2 font-roboto-serif text-xs text-slate-200 md:self-center',
                        )}
                      >
                        {tags}
                      </div>
                    </div>
                    <CrossIcon open={false} />
                  </Link>
                </div>
              )
            })
          ) : (
            <NewsPlaceHolder />
          )}
        </motion.div>
      </div>
      <HorizontalLine />
    </motion.div>
  )
}

export default NewsTableNew
