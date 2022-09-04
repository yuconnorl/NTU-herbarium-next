import { atom } from 'jotai'

import { IS_DEV, LANDING_PAGE_NEWS_QUANTITY } from '@/configs/config'
import { languageAtom } from '@/jotai/language/languageAtom'

const URL = IS_DEV
  ? 'http://localhost:4000/api/news'
  : 'https://ntu-news.herokuapp.com/api/news'

// async atom, fetch news and sorting with date
export const newsAtom = atom(async (get) => {
  const lang = get(languageAtom)
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language: lang }),
  })
  const data = await response.json()
  const sortedDate = data.sort((a, b) => b.date.localeCompare(a.date))
  return sortedDate
})

export const filterNewsAtom = atom((get) => {
  const rawNews = get(newsAtom)
  // slice news array, and return modified one
  const filterNews =
    rawNews.length > LANDING_PAGE_NEWS_QUANTITY
      ? rawNews.slice(0, LANDING_PAGE_NEWS_QUANTITY)
      : rawNews
  return filterNews
})
