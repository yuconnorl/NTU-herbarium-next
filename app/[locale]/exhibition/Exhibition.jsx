import Image from 'next/image'

import SingleNews from '@/components/SingleNews'
import { getBanner, getN } from '@/utils/fetchN'
import { newsExtractor } from '@/utils/helper'

const ExhibitionComponent = async () => {
  const data = await getN()
  const banner = await getBanner()

  const newsData = newsExtractor(data)

  return (
    <div className='prose'>
      <div>exhibition</div>
      {newsData.length ? (
        newsData.map(({ id, title, category, date, content }) => (
          <SingleNews
            key={id}
            title={title}
            category={category}
            date={date}
            content={content}
          />
        ))
      ) : (
        <div>loading</div>
      )}
      <Image
        src={`https:${banner.items[0].fields.image.fields.file.url}`}
        alt='front door of NTU herbarium'
        width={300}
        height={300}
      />
    </div>
  )
}
export default ExhibitionComponent
