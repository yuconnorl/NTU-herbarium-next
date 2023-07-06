import NewsTable from '@/components/NewsTable'
import getNews from '@/utils/fetchNews'

const NewsSkee = async () => {
  const news = await getNews()

  return (
    <div className='flex flex-col divide-y divide-brown divide-opacity-20'>
      <NewsTable isExpandable newsData={news} />
    </div>
  )
}

export default NewsSkee
