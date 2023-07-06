export const IS_DEV = process.env.NODE_ENV === 'development'

// news 的類型
export const NEWS_TYPES = {
  Announcement: 'Announcement',
  Salon: 'Salon for botany',
  Event: 'Event',
}

export const NEWS_TYPES_COLOR = {
  Announcement: 'bg-feldgrau',
  Salon: 'bg-tiffany',
  Event: 'bg-ecru',
}

export const NEWS_URL = IS_DEV
  ? 'http://localhost:5000/api/news'
  : 'https://ntu-news-ovl2njeii-molajack.vercel.app/api/news'
