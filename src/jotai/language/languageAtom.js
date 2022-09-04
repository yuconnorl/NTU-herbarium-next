import { atom } from 'jotai'

import { DEFAULT_LANG } from '@/configs/config'

export const languageAtom = atom(DEFAULT_LANG)

export const transRouteAtom = atom((get) =>
  get(languageAtom) === 'en-US' ? 'en' : '/',
)
