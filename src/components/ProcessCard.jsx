import { motion } from 'framer-motion'

export default function ProcessCard({ icon: Icon, step, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <span className="absolute -top-3 -right-3 text-6xl font-extrabold text-gray-100 select-none leading-none">
        {String(step).padStart(2, '0')}
      </span>
      <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4 relative z-10">
        <Icon className="w-6 h-6 text-[#0B3B6E]" />
      </div>
      <h3 className="text-gray-900 font-bold text-lg mb-2 relative z-10">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed relative z-10">{description}</p>
    </motion.div>
  )
}
