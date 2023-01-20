export const IS_DEV = process.env.NODE_ENV === 'development'

// 預設顯示語言
export const DEFAULT_LANG = 'zh-TW'

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
  ? 'http://localhost:4000/api/news'
  : 'http://localhost:4000/api/news'
