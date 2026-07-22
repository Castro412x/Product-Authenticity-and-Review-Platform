import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Helping You Make<br />
            <span className="text-[#22C55E]">Safer Medicine</span><br />
            Decisions.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            Verify medicine information, receive safety alerts, and access reliable educational resources, all in one trusted platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button to="/signup" variant="primary">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">Learn How It Works</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#0B3B6E]/10 rounded-full blur-3xl" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
              alt="Doctor"
              className="w-full h-80 lg:h-96 object-cover rounded-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 z-20 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&q=80"
              alt="Family"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
