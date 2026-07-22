import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
