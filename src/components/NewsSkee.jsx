import { getNewsFromCMS } from '@/utils/fetchNews'

import NewsTableNew from './NewsTableNew'

const NewsSkee = async ({ isTrim }) => {
  const news = await getNewsFromCMS()
  const newsData = isTrim ? news?.slice(0, 5) : news

  return <NewsTableNew newsData={newsData} />
}

export default NewsSkee
