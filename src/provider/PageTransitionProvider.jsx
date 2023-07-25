'use client'

import { motion } from 'framer-motion'

const PageTransitionProvider = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.65, delay: 0.15 }}
  >
    {children}
  </motion.div>
)

export default PageTransitionProvider
