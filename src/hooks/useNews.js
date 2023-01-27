import { useTranslation } from 'next-i18next'
import useSWR from 'swr'

import { NEWS_URL } from '@/configs/config'

function useNews() {
  const { i18n } = useTranslation('common')
  const lang = i18n.resolvedLanguage

  const fetcher = (url) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: lang }),
    }).then((res) => res.json())

  const { data, error, isLoading } = useSWR(NEWS_URL, fetcher)

  // console.log(data)
  console.log(lang)

  return {
    news: data,
    isLoading,
    isError: error,
  }
}

export default useNews
