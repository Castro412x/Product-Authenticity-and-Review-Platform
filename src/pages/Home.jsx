import { BookOpen, Bell, RefreshCw, Search, ClipboardList, AlertTriangle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import ProcessCard from '../components/ProcessCard'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'

const features = [
  {
    icon: BookOpen,
    title: 'Educational Info',
    description: 'Access comprehensive educational resources on medication safety, proper usage, and potential side effects to make informed health decisions.',
  },
  {
    icon: Bell,
    title: 'Safety Alerts',
    description: 'Receive real-time notifications about medicine recalls, safety warnings, and important updates from regulatory authorities.',
  },
  {
    icon: RefreshCw,
    title: 'Recall Updates',
    description: 'Stay informed about product recalls and withdrawals with instant notifications and detailed information on affected batches.',
  },
]

const steps = [
  {
    icon: Search,
    step: 1,
    title: 'Search',
    description: 'Enter medicine name or scan barcode to instantly access comprehensive safety information.',
  },
  {
    icon: ClipboardList,
    step: 2,
    title: 'Review',
    description: 'View official medicine safety information including usage guidelines, side effects, and regulatory status.',
  },
  {
    icon: BookOpen,
    step: 3,
    title: 'Learn',
    description: 'Read educational resources and guides to better understand medication safety and best practices.',
  },
  {
    icon: AlertTriangle,
    step: 4,
    title: 'Report',
    description: 'Report counterfeit medicine or side effects directly through our platform to help protect others.',
  },
]

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <Hero />

      <section className="bg-[#F8FAFC] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle
            title="Your Comprehensive Safety Hub"
            subtitle="We complement official regulatory systems by helping consumers access medicine safety information in one trusted place."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <SectionTitle
            title="How this Platform Empowers You"
            subtitle="Simple steps to ensuring your family's medicine safety and well-being."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <ProcessCard key={s.step} icon={s.icon} step={s.step} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <Footer />
    </div>
  )
}
