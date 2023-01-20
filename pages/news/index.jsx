import useSWR from 'swr'

import NewsTable from '@/components/newsTable/NewsTable'
import PrimaryHeading from '@/components/primaryHeading/PrimaryHeading'
import SecondaryHeading from '@/components/secondaryHeading/SecondaryHeading'
import { NEWS_URL } from '@/configs/config'
import { fetcher } from '@/utils/helper'

const NewsPage = () => {
  const { data, error, isLoading } = useSWR(NEWS_URL, fetcher)

  return (
    <div className='px-6 py-16 md:px-16'>
      <div className='mb-10 pl-6'>
        <SecondaryHeading className='pt-8 pb-6'>NEWS</SecondaryHeading>
        <PrimaryHeading className='mb-8'>What&apos;s new</PrimaryHeading>
      </div>
      <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
        <NewsTable isExpandable isLoading={isLoading} newsData={data} />
      </div>
    </div>
  )
}

export default NewsPage
