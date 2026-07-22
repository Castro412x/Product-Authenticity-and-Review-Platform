import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Container from './Container'
import Button from './Button'

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A4E9B] dark:bg-[#062D5C] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              Partner with MedTrust Africa
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed max-w-md mb-6">
              Join our continent-wide mission to secure the pharmaceutical supply chain and protect millions of lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="secondary">Partner With Us</Button>
              <button className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg text-sm px-6 py-3 transition-all duration-200 hover:scale-105 border-2 border-white text-white hover:bg-white/10">
                Download Annual Report
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center lg:text-left">
            <div className="bg-white/20 rounded-lg p-2 w-fit mx-auto lg:mx-0 mb-3">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <p className="text-white text-xs font-medium mb-1">Institutional inquiries</p>
            <p className="text-white font-semibold text-sm">institutional@medverify.africa</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
