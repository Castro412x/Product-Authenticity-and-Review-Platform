import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
        <Icon className="w-6 h-6 text-[#0B3B6E]" />
      </div>
      <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
