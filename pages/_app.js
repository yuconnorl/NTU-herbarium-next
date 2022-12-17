import '../styles/globals.css'

import { appWithTranslation } from 'next-i18next'

import NewsProvider from '@/components/dataProvider/NewsProvider'

import Layout from '../layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <NewsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NewsProvider>
  )
}

export default appWithTranslation(MyApp)
