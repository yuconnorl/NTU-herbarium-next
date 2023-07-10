import { getN } from '@/utils/fetchN'
import { newsExtractor } from '@/utils/helper'

import NewsTableNew from './NewsTableNew'

const NewsSkee = async () => {
  const data = await getN()
  const newsData = newsExtractor(data)

  return (
    <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
      <NewsTableNew newsData={newsData} />
    </div>
  )
}

export default NewsSkee
