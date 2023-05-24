import { useTranslation } from 'next-i18next'

function useLanguagedFont(isMedium = false, isSerif = false) {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage
  const isHan = currentLang === 'zh-TW'
  const style = isSerif ? 'serif' : 'sans'
  const fontFamily = isHan ? `font-noto-${style}` : `font-roboto-${style}`
  const font = isMedium ? `${fontFamily} font-medium` : `${fontFamily}`

  return font
}

export default useLanguagedFont
