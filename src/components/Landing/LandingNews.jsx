import { DecoHeading } from '@/components/Letters'
import NewsTable from '@/components/NewsTable'
import getNews from '@/utils/fetchNews'

import LandingNewsButton from '../LandingNewsButton'

const LandingNews = async () => {
  // const news = await getNews()
  // const trimNewsData = news?.slice(0, 5)

  return (
    <section className='flex justify-center bg-white bg-landing-news bg-cover bg-center bg-no-repeat px-8 pt-10 pb-12 sm:px-16 md:px-24 mdp:pt-20'>
      <div className='w-full flex-nowrap'>
        <DecoHeading className='pb-12 tracking-widest'>NEWS</DecoHeading>
        {/* <NewsTable newsData={trimNewsData} /> */}
        <LandingNewsButton />
      </div>
    </section>
  )
}

export default LandingNews
