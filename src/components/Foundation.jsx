import { motion } from 'framer-motion'
import { Shield, Lightbulb, Search, Users } from 'lucide-react'
import Container from './Container'
import Card from './Card'

const cards = [
  {
    icon: Shield,
    title: 'Institutional Integrity',
    description: 'We uphold the highest standards of governance and operational transparency across all partner institutions.',
  },
  {
    icon: Lightbulb,
    title: 'Clinical Innovation',
    description: 'Leveraging cutting-edge technology to create smarter, safer pharmaceutical verification systems.',
  },
  {
    icon: Search,
    title: 'Radical Transparency',
    description: 'Open access to medicine safety data and supply chain tracking for all stakeholders.',
  },
  {
    icon: Users,
    title: 'Collaborative Community',
    description: 'Building a pan-African network of regulators, manufacturers, and healthcare providers.',
  },
]

export default function Foundation() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] dark:bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Our Foundation</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Built on four core pillars that guide every decision, partnership, and innovation we pursue.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <Card key={card.title} index={i} className="p-6">
              <div className="bg-[#EAF3FF] dark:bg-blue-900/30 rounded-lg p-3 w-fit mb-4">
                <card.icon className="w-6 h-6 text-[#0A4E9B] dark:text-[#3B82F6]" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{card.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{card.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
