import { Disclosure, Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { Interweave } from 'interweave'
import { UrlMatcher } from 'interweave-autolink'
import { nanoid } from 'nanoid'
import { Fragment } from 'react'

import NewsItem from '@/components/newsItem.jsx/NewsItem'
import { NEWS_TYPES, NEWS_TYPES_COLOR } from '@/configs/config'

import NewsSkeleton from '../newsSkeleton/NewsSkeleton'

const NewsTable = ({ newsData = [], isExpandable = false }) => {
  const formateDate = (date) => dayjs(date).format('MMM DD, YYYY')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full'
    >
      <div className='h-px w-full bg-brown opacity-20' />
      <div className='mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='divide-y divide-brown divide-opacity-20'
        >
          <div className='accordion-group-bordered accordion-group'>
            {newsData.length > 0 ? (
              newsData.map((news) => {
                const tags = NEWS_TYPES[news.tags]
                const tagsBackgroundColor = NEWS_TYPES_COLOR[news.tags]
                return (
                  <NewsItem
                    key={news.title}
                    id={news.id}
                    isExpandable={isExpandable}
                    title={news.title}
                  >
                    <Interweave
                      matchers={[new UrlMatcher('url')]}
                      content={news.content}
                      newWindow
                    />
                  </NewsItem>
                )
              })
            ) : (
              <>
                <div className='h-px w-full bg-brown opacity-20' />
                {[...Array(5)].map(() => (
                  <NewsSkeleton key={nanoid()} />
                ))}
                <div className='h-px w-full bg-brown opacity-20' />
              </>
            )}
          </div>
        </motion.div>
      </div>
      <div className='h-px w-full bg-brown opacity-20' />
    </motion.div>
  )
}

export default NewsTable
