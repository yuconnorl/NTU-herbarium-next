'use client'

import clsx from 'clsx'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { NEWS_TYPES, NEWS_TYPES_COLOR } from '@/configs/config'

const HorizontalLine = () => <div className='h-px w-full bg-brown opacity-20' />

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
          {newsD.length > 0 &&
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
                      <div className='flex gap-2'>
                        <div className='font-roboto-serif relative translate-y-[1px] whitespace-nowrap text-sm text-light-brown md:mr-4'>
                          {formateDate(news.date)}
                        </div>
                        <div
                          className={clsx(
                            tagsBackgroundColor,
                            'md:hidden relative flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-3xl py-1 px-2 font-roboto-serif text-xs text-slate-200 md:self-center',
                          )}
                        >
                          {tags}
                        </div>
                      </div>
                      <div
                        className={clsx(
                          isHan ? 'font-noto-sans' : 'font-roboto-sans',
                          'md:news-description relative mt-3 mb-1 justify-center pr-4 text-base tracking-wide md:m-0',
                        )}
                      >
                        {news.title}
                      </div>
                      <div
                        className={clsx(
                          tagsBackgroundColor,
                          'hidden relative md:flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-3xl py-1 px-2 font-roboto-serif text-xs text-slate-200 md:self-center',
                        )}
                      >
                        {tags}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
        </motion.div>
      </div>
      <HorizontalLine />
    </motion.div>
  )
}

export default NewsTableNew
