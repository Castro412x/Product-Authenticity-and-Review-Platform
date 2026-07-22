import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import MissionVision from '../components/MissionVision'
import Foundation from '../components/Foundation'
import NetworkSection from '../components/Network'
import Leadership from '../components/Leadership'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <AboutHero />
      <MissionVision />
      <Foundation />
      <NetworkSection />
      <Leadership />
      <CTA />
      <Footer />
    </div>
  )
}
