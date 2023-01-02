import '../styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'

import NewsProvider from '@/components/dataProvider/NewsProvider'

import Layout from '../src/layout/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <NewsProvider>
      <Layout>
        <AnimatePresence mode='wait'>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </NewsProvider>
  )
}

export default appWithTranslation(MyApp)
