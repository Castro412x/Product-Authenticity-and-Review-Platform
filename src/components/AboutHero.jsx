import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const infoBlocks = [
  { label: 'Established', value: '2026' },
  { label: 'HQ', value: 'Aba, Abia State' },
  { label: 'Coverage', value: 'Aba, Abia State Nigeria' },
]

export default function AboutHero() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EAF3FF] dark:from-gray-800 to-white dark:to-gray-900">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-1.5 bg-[#0A4E9B]/10 dark:bg-[#3B82F6]/20 text-[#0A4E9B] dark:text-[#3B82F6] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              About MedTrust Africa
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Restoring Integrity to the<br />
              <span className="text-[#0A4E9B] dark:text-[#3B82F6]">Continental Medicine</span><br />
              Supply Chain.
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              We are building Africa&apos;s first unified pharmaceutical verification network — connecting regulators, manufacturers, and healthcare providers to ensure every medicine reaching patients is authentic, safe, and traceable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 p-6 space-y-5 min-w-[220px]">
              {infoBlocks.map((block) => (
                <div key={block.label}>
                  <div className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-0.5">{block.label}</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{block.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
