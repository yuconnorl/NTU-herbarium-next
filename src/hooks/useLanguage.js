import { useTranslation } from 'next-i18next'

const useLanguage = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage
  const isHan = currentLang === 'zh-TW'

  return isHan
}

export default useLanguage
