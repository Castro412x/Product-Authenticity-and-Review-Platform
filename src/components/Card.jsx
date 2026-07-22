import { motion } from 'framer-motion'

export default function Card({ children, className = '', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-gray-900/30 hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
