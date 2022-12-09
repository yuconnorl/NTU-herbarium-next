module.exports = {
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-TW'],
  },
  debug: process.env.NODE_ENV === 'development',
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  // fallbackLng: {
  //   default: ['zh-TW'],
  // },
  ns: ['common'],
}
