import { useAtom } from 'jotai'

import Footer from '@/components/footer/Footer'
import PrimaryHeading from '@/components/letters/heading/primaryHeading/PrimaryHeading'
import SecondaryHeading from '@/components/letters/heading/secondaryHeading/SecondaryHeading'
import NewsTable from '@/components/news/NewsTable'
import { newsAtom } from '@/jotai/news/newsAtom'

const NewsPage = () => {
  const [news] = useAtom(newsAtom)

  return (
    <>
      <div className='px-6 py-16 md:px-16'>
        <div className='mb-10 pl-6'>
          <SecondaryHeading className='pt-8 pb-6'>NEWS</SecondaryHeading>
          <PrimaryHeading className='mb-8'>What&apos;s new</PrimaryHeading>
        </div>
        <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
          <NewsTable isExpandable newsData={news} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsPage
