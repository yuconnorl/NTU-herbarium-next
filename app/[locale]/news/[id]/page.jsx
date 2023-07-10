import clsx from 'clsx'
import dayjs from 'dayjs'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

import PostPeeker from '@/components/PostPeeker'
import RichText from '@/components/RichText'
import { NEWS_TYPES, NEWS_TYPES_COLOR } from '@/configs/config'
import { getN } from '@/utils/fetchN'
import { newsExtractor } from '@/utils/helper'

export async function generateStaticParams() {
  const data = await getN()
  const newsData = newsExtractor(data)

  return newsData.map((news) => ({
    id: news.id,
  }))
}

// export async function generateMetadata({ params }) {
//   const post = allPosts.find(
//     (post) => post.slug === params.slug,
//   )

//   return {
//     title: post?.title,
//     description: post?.description,
//     openGraph: {
//       title: post?.title,
//       description: post?.description,
//       url: `https://terminal-420.space/blog/${post ? post?.slug : ''}`,
//       publishedTime: post?.date,
//       type: 'article',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post?.title,
//       description: post?.description,
//     },
//   }
// }

const HorizontalLine = () => <div className='w-8 md:w-10 h-px bg-light-brown' />

export default async function NewsPost({ params }) {
  const data = await getN()
  const newsData = newsExtractor(data)

  const post = newsData.find((post) => post.id === params.id)
  const postIndex = newsData.findIndex((post) => post.id === params.id)

  const prev = postIndex > 0 ? newsData[postIndex - 1] : null
  const next = postIndex < newsData.length - 1 ? newsData[postIndex + 1] : null

  const tagsBackgroundColor = NEWS_TYPES_COLOR[post.category]
  const category = NEWS_TYPES[post.category]

  if (!post) {
    notFound()
  }

  return (
    <div className='relative w-full pt-28 pb-12 px-6 md:px-12'>
      <section className='w-full max-w-7xl mx-auto relative'>
        <div className='mb-8 sm:mb-12'>
          <div className='flex gap-2 sm:gap-3 items-center'>
            <p className='text-m'>{dayjs(post?.date).format('MMM DD, YYYY')}</p>
            <HorizontalLine />
            <div
              className={clsx(
                tagsBackgroundColor,
                'relative flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-3xl py-0.5 sm:py-1 px-2 sm:px-2.5 font-roboto-serif text-sm text-slate-200',
              )}
            >
              {category}
            </div>
          </div>
          <h1 className='text-4xl font-bold tracking-wide lg:text-6xl font-noto-serif mt-4 mb-6 md:my-8 text-text-color/90'>
            <Balancer>{post?.title}</Balancer>
          </h1>
          <div className='relative w-full'>
            <Image
              src={post.banner}
              width={1550}
              height={550}
              priority={true}
              className='rounded-lg object-cover w-full'
            />
          </div>
        </div>
        <div className='prose prose-slate prose-a:text-light-brown prose-p:my-2 prose-li:my-0 prose-h1:mb-0 mx-auto max-w-4xl prose-ul:pl-4'>
          <RichText content={post.content} />
          <PostPeeker prev={prev} next={next} />
        </div>
      </section>
    </div>
  )
}
