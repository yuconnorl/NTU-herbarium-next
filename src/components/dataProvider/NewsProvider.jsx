import { createContext } from 'react'
import useSWR from 'swr'

export const NewsContext = createContext([])

const fetcher = (url) =>
  fetch(url, { method: 'POST' }).then((res) => res.json())

const NewsProvider = ({ children }) => {
  const { data, error } = useSWR('http://localhost:4000/api/news', fetcher)

  return <NewsContext.Provider value={data}>{children}</NewsContext.Provider>
}

export default NewsProvider
