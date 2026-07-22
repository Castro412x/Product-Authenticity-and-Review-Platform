import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'

const stats = [
  { value: 150, suffix: 'K+', label: 'Medicines Searched' },
  { value: 2143, suffix: '+', label: 'Safety Alerts Issued' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-[#0B3B6E] py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
                {inView && <CountUp end={s.value} duration={2.5} />}{s.suffix}
              </div>
              <div className="text-blue-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
