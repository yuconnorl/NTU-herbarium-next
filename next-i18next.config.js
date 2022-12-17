const { IS_DEV } = require('./src/configs/config')

module.exports = {
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-TW'],
  },
  debug: IS_DEV,
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  fallbackLng: {
    default: ['zh-TW'],
  },
  ns: ['common'],
}
