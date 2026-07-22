import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import MissionVision from '../components/MissionVision'
import Foundation from '../components/Foundation'
import NetworkSection from '../components/Network'
import Leadership from '../components/Leadership'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const aboutNavLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Supply Chain', href: '#supply-chain' },
  { label: 'Network', href: '#network' },
  { label: 'About', href: '/about' },
  { label: 'Impact', href: '#impact' },
]

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar links={aboutNavLinks} showLogin={false} />

      <div id="platform">
        <AboutHero />
      </div>

      <div id="supply-chain">
        <MissionVision />
      </div>

      <div id="impact">
        <Foundation />
      </div>

      <div id="network">
        <NetworkSection />
      </div>

      <Leadership />
      <CTA />
      <Footer />
    </div>
  )
}
