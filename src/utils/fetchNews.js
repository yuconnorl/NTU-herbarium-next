import { NEWS_URL } from '@/configs/config'

async function getNews() {
  const res = await fetch(NEWS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language: 'zh-TW' }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res
}

export default getNews
