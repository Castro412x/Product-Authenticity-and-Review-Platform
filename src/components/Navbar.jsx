import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShieldCheck, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const defaultLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Medicine Safety', href: '#medicine-safety' },
  { label: 'About', href: '/about' },
]

export default function Navbar({ links, showLogin = true }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { pathname } = useLocation()

  const navLinks = links || defaultLinks

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [pathname, navLinks])

  const isExternal = (href) => href.startsWith('/')

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

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.startsWith('/') ? '' : href.slice(1)
              const isActive = isExternal(href)
                ? pathname === href
                : activeSection === sectionId
              const Comp = isExternal(href) ? Link : 'a'
              return (
                <Comp
                  key={label}
                  to={isExternal(href) ? href : undefined}
                  href={isExternal(href) ? undefined : href}
                  className={`text-sm font-medium px-3 py-2 border-b-2 transition-colors ${
                    isActive
                      ? 'text-[#0B3B6E] border-[#0B3B6E]'
                      : 'text-gray-600 border-transparent hover:text-[#0B3B6E]'
                  }`}
                >
                  {label}
                </Comp>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {showLogin && (
              <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-[#0B3B6E] transition-colors px-3 py-2">
                Login
              </Link>
            )}
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
              {navLinks.map(({ label, href }) => {
                const Comp = isExternal(href) ? Link : 'a'
                return (
                  <Comp
                    key={label}
                    to={isExternal(href) ? href : undefined}
                    href={isExternal(href) ? undefined : href}
                    className="block text-sm font-medium text-gray-600 hover:text-[#0B3B6E] py-1"
                  >
                    {label}
                  </Comp>
                )
              })}
              <hr className="border-gray-100" />
              {showLogin && (
                <Link to="/login" className="block text-sm font-medium text-[#0B3B6E] py-1">Login</Link>
              )}
              <Link to="/signup" className="block text-center bg-[#0B3B6E] text-white font-semibold rounded-lg text-sm px-6 py-2.5">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
