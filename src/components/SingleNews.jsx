import dayjs from 'dayjs'

import RichText from '@/components/RichText'

const SingleNews = ({ title, date, content, category, bannerImage }) => {
  const formateDate = (date) => dayjs(date).format('MMM DD, YYYY')

  return (
    <div className='prose prose-p:my-2 prose-li:my-0'>
      <h1>{title}</h1>
      <div>Published at {formateDate(date)}</div>
      <RichText content={content} />
    </div>
  )
}

export default SingleNews
