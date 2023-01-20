import '../styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'

import Layout from '../src/layout/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode='wait'>
      <Layout key={router.pathname}>
        <Component {...pageProps} key={router.pathname} />
      </Layout>
    </AnimatePresence>
  )
}

export default appWithTranslation(MyApp)
