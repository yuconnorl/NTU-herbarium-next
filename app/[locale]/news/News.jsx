import { DecoHeading, Heading } from '@/components/Letters'
import NewsTable from '@/components/NewsTable'
import getNews from '@/utils/fetchNews'

const NewsComponent = async () => {
  const news = await getNews()

  return (
    <div className='px-6 py-16 md:px-16'>
      <div className='mb-10 pl-6'>
        <DecoHeading>NEWS</DecoHeading>
        <Heading className='mb-8 text-3xl md:text-4xl'>What&apos;s new</Heading>
      </div>
      <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
        <NewsTable isExpandable newsData={news} />
      </div>
    </div>
  )
}

export default NewsComponent
