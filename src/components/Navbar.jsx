import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const navLinks = ['Solutions', 'How It Works', 'Medicine Safety', 'About']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-[#0B3B6E] font-extrabold text-lg shrink-0">
            <ShieldCheck className="w-7 h-7" />
            MedTrust Africa
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-[#0B3B6E] transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-[#0B3B6E] transition-colors px-3 py-2">
              Login
            </Link>
            <Button to="/signup" variant="primary">Get Started</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#0B3B6E]"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a key={link} href="#" className="block text-sm font-medium text-gray-600 hover:text-[#0B3B6E] py-1">{link}</a>
              ))}
              <hr className="border-gray-100" />
              <Link to="/login" className="block text-sm font-medium text-[#0B3B6E] py-1">Login</Link>
              <Link to="/signup" className="block text-center bg-[#0B3B6E] text-white font-semibold rounded-lg text-sm px-6 py-2.5">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
