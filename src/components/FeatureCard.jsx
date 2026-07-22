import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300"
    >
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 w-fit mb-4">
        <Icon className="w-6 h-6 text-[#0B3B6E] dark:text-[#3B82F6]" />
      </div>
      <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
