import { motion } from 'framer-motion'

import imgTaiLogo from '@/assets/images/common/tai-logo-leaf.png'

const LoadingCover = () => {
  return (
    <motion.div
      key='loading-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-atrovirens'
    >
      <img className='' src={imgTaiLogo} alt='' />
    </motion.div>
  )
}

export default LoadingCover
