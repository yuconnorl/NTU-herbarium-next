'use client'

import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { Interweave } from 'interweave'
import { UrlMatcher } from 'interweave-autolink'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { NEWS_TYPES, NEWS_TYPES_COLOR } from '@/configs/config'

import NewsSkeleton from './NewsSkeleton'
import RichText from './RichText'

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

const NewsTable = ({ newsData = [], isExpandable = false }) => {
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
                <Disclosure
                  as='div'
                  key={news.id}
                  className='transition-all duration-500'
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={clsx(
                          'focus-visible:ring/75 relative flex w-full items-center justify-between py-2 pl-4 pr-6 text-left text-sm font-medium text-brown transition-all before:absolute before:left-0 before:h-4/6 before:w-[2px] before:bg-transparent before:content-[""] hover:bg-gray-200 focus:outline-none focus-visible:bg-gray-200',
                          open && 'bg-[#EEEEEE] before:bg-light-brown',
                        )}
                        disabled={!isExpandable}
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
                              !isExpandable ? 'mr-0' : 'sm:mr-4 lg:mr-10',
                              tagsBackgroundColor,
                              'relative flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-3xl py-1 px-2 font-roboto-serif text-xs text-slate-200 md:self-center',
                            )}
                          >
                            {tags}
                          </div>
                        </div>
                        {isExpandable && <CrossIcon open={open} />}
                      </Disclosure.Button>
                      <Disclosure.Panel
                        static
                        className={clsx(
                          open ? 'grid-rows-[1fr] bg-[#EEEEEE]' : 'grid-rows-[0fr]',
                          'slow-fade grid text-base text-brown transition-all duration-300 ',
                        )}
                      >
                        <div className='overflow-hidden pl-4 pr-12 md:pl-20'>
                          <div
                            className={clsx(
                              isHan ? 'font-noto-sans' : 'font-roboto-sans',
                              'link-arrow break-all border-l border-transparent pt-1 pb-6 pl-4 leading-loose tracking-wide text-[#6a6a6a] sm:border-[#8a8a8a70] md:pl-14 md:tracking-wider',
                            )}
                          >
                            <RichText content={news.content} />
                            {/* <Interweave
                              matchers={[new UrlMatcher('url')]}
                              content={news.content}
                              newWindow
                            /> */}
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
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

export default NewsTable
