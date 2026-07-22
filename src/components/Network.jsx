import { motion } from 'framer-motion'
import Container from './Container'
import Card from './Card'

const stats = [
  { value: '50M+', label: 'Regional Networks' },
  { value: '200+', label: 'Connected Partners' },
]

const nodes = [
  { top: '15%', left: '50%', size: 'w-4 h-4' },
  { top: '35%', left: '20%', size: 'w-3 h-3' },
  { top: '35%', left: '80%', size: 'w-3 h-3' },
  { top: '55%', left: '10%', size: 'w-2.5 h-2.5' },
  { top: '55%', left: '90%', size: 'w-2.5 h-2.5' },
  { top: '70%', left: '30%', size: 'w-3 h-3' },
  { top: '70%', left: '70%', size: 'w-3 h-3' },
  { top: '85%', left: '50%', size: 'w-4 h-4' },
]

export default function NetworkSection() {
  return (
    <section className="bg-[#0A4E9B] dark:bg-[#062D5C] py-16 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              A Continent Connected by Trust
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-md">
              Our verification network spans across 15 African nations, connecting regulators, manufacturers, distributors, and healthcare providers in a unified system.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <Card key={s.label} className="p-4 text-center">
                  <div className="text-2xl font-extrabold text-[#0A4E9B] dark:text-[#3B82F6]">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 lg:h-96 flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-white/20 absolute" />
              <div className="w-48 h-48 rounded-full border-2 border-white/20 absolute" />
              <div className="w-32 h-32 rounded-full border-2 border-white/20 absolute" />
            </div>
            <div className="absolute w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            {nodes.map((node, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-white/30 ${node.size}`}
                style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
