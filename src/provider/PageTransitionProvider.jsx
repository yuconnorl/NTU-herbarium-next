import { motion } from 'framer-motion'

const PageTransitionProvider = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className='h-full w-full'
  >
    {children}
  </motion.div>
)

export default PageTransitionProvider
