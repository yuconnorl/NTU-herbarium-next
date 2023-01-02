import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from '../public/locales/en/common.json'
import zhTw from '../public/locales/zh-TW/common.json'

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    lng: 'en',
    react: { useSuspense: false },
    load: 'currentOnly',
    resources: {
      en: { translation: enUS },
      'zh-TW': { translation: zhTw },
    },
  })

export default i18n
