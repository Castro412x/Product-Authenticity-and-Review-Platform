import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import Container from './Container'

const data = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To establish a unified, tamper-proof pharmaceutical verification network across Africa that restores trust in the continental medicine supply chain.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
    alt: 'Medical team',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'A future where every citizen across Africa has guaranteed access to authentic, safe, and affordable medicine through a transparent and accountable ecosystem.',
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80',
    alt: 'Community health',
  },
]

export default function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {data.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="bg-[#EAF3FF] dark:bg-blue-900/30 rounded-lg p-3 w-fit mb-4">
                <item.icon className="w-6 h-6 text-[#0A4E9B] dark:text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
              <img
                src={item.img}
                alt={item.alt}
                className="rounded-xl w-full h-56 object-cover shadow-md"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
