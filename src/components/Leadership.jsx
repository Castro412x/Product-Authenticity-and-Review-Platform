import { motion } from 'framer-motion'
import Container from './Container'
import Card from './Card'

const leaders = [
  {
    name: 'Dr. Amara Okafor',
    role: 'Chief Executive Officer',
    description: 'Former WHO regional pharmaceutical advisor with 20+ years in global health policy and medicine safety regulation.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
  },
  {
    name: 'James Mwangi',
    role: 'Chief Technology Officer',
    description: 'Tech innovator specializing in blockchain-based supply chain solutions and AI-driven pharmaceutical verification systems.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Dr. Fatima Diallo',
    role: 'Chief Medical Officer',
    description: 'Pharmacovigilance expert dedicated to building safer medicine ecosystems across emerging markets in Africa.',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
  },
]

export default function Leadership() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Executive Leadership & Strategic Counsel
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Our team brings together decades of experience in medicine safety, technology, and public health across the African continent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {leaders.map((person, i) => (
            <Card key={person.name} index={i} className="p-6 text-center">
              <img
                src={person.img}
                alt={person.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
                loading="lazy"
              />
              <h3 className="font-bold text-gray-900 text-lg">{person.name}</h3>
              <p className="text-[#0A4E9B] text-sm font-medium mb-3">{person.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{person.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
