import { Disclosure, Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { Interweave } from 'interweave'
import { UrlMatcher } from 'interweave-autolink'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

import { NEWS_TYPES, NEWS_TYPES_COLOR } from '@/configs/config'

import NewsSkeleton from './NewsSkeleton'
const formateDate = (date) => dayjs(date).format('MMM DD, YYYY')

const NewsTable = ({ newsData, isExpandable = false }) => {
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
          {/* FIXME: 理論上在外面就被suspense，所以這個判斷跑不到 */}
          {newsData?.length ? (
            newsData.map((news) => {
              const tags = NEWS_TYPES[news.tags]
              const tagsBackgroundColor = NEWS_TYPES_COLOR[news.tags]
              return (
                <div key={news.id} className='transition-all duration-500'>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button as={Fragment}>
                          <button
                            type='button'
                            className={`${
                              open && 'bg-[#EEEEEE] before:bg-light-brown'
                            } relative flex w-full items-center justify-between px-4 py-2 pr-6 text-left text-sm font-medium text-brown transition-all before:absolute before:left-0 before:h-4/6 before:w-[2px] before:bg-transparent before:content-[''] hover:bg-gray-200 focus:outline-none focus-visible:bg-gray-200 focus-visible:ring focus-visible:ring-opacity-75`}
                            disabled={!isExpandable}
                          >
                            <div className='slow-fade relative flex w-full flex-col py-3 pl-4 transition duration-500 sm:flex-row sm:py-4 sm:pl-4'>
                              <div className='relative w-28 translate-y-[1px] text-sm text-light-brown md:w-32'>
                                {formateDate(news.date)}
                              </div>
                              <div className='sm:news-description relative mt-3 mb-3 justify-center pr-4 font-sans text-base tracking-wide sm:m-0'>
                                {news.title}
                              </div>
                              <div
                                className={`${
                                  !isExpandable ? 'mr-0' : 'sm:mr-4 lg:mr-10'
                                } ${tagsBackgroundColor} relative flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-3xl py-1 px-2 text-xs text-slate-200 sm:self-center`}
                              >
                                {tags}
                              </div>
                            </div>
                            {isExpandable && (
                              <div className='relative flex h-5 w-5 items-center'>
                                <span className='h-[1px] w-5 border-t-[1px] border-black' />
                                <span
                                  className={`${
                                    open ? 'rotate-0' : 'rotate-90'
                                  } absolute h-[1px] w-[1.16rem] border-t-[1px] border-black duration-200`}
                                />
                              </div>
                            )}
                          </button>
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter='transition-all duration-300 ease-out'
                          enterFrom='-translate-y-5 opacity-0'
                          enterTo='translate-y-0 opacity-100'
                          leave='transition-all duration-300 slow-fade'
                          leaveFrom='translate-y-0 opacity-100'
                          leaveTo='-translate-y-5 opacity-0'
                        >
                          <Disclosure.Panel
                            className={`${
                              open ? 'max-h-screen bg-[#EEEEEE]' : 'max-h-0'
                            } slow-fade text-base leading-normal text-brown transition-all duration-300 md:leading-loose`}
                          >
                            <div className='pb-6 pl-4 pr-12 md:pl-20'>
                              <div className='link-arrow break-all border-l border-transparent pl-4 tracking-wide text-[#6a6a6a] sm:border-[#8a8a8a70] md:pl-20 md:tracking-wider'>
                                <Interweave
                                  matchers={[new UrlMatcher('url')]}
                                  content={news.content}
                                  newWindow
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
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
        </motion.div>
      </div>
      <div className='h-px w-full bg-brown opacity-20' />
    </motion.div>
  )
}

NewsTable.propTypes = {
  newsData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  isExpandable: PropTypes.bool,
}

export default NewsTable
