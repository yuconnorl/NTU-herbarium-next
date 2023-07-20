import { LANDING_PAGE_NEWS_QUANTITY } from '@/configs/news'
import { getNewsFromCMS } from '@/utils/fetchNews'

import NewsTableNew from './NewsTableNew'

const NewsSkee = async ({ isTrim }) => {
  const news = await getNewsFromCMS()
  const newsData = isTrim ? news?.slice(0, LANDING_PAGE_NEWS_QUANTITY) : news

  return <NewsTableNew newsData={newsData} />
}

export default NewsSkee
