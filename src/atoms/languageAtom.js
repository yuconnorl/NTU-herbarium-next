import { atom } from 'jotai'
import { useTranslation } from 'next-i18next'

// const currentLang = i18n.resolvedLanguage
// const { t, i18n } = useTranslation()

export const languageAtom = atom(DEFAULT_LANG)

export const transRouteAtom = atom((get) => (get(languageAtom) === 'en-US' ? 'en' : '/'))
