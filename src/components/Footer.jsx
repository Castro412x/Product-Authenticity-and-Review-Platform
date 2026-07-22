import { ShieldCheck, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerData = [
  {
    title: 'Solutions',
    links: ['Medicine Search', 'Safety Alerts', 'Education'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Partners', 'Resources', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'],
  },
  {
    title: 'Support',
    links: ['Contact Support', 'Help Centre', 'Report Issue'],
  },
]

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
)

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-[#0B3B6E] dark:text-[#3B82F6] font-extrabold text-lg mb-4">
              <ShieldCheck className="w-7 h-7" />
              MedTrust Africa
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              Your trusted platform for medicine safety information, alerts, and education.
            </p>
            <div className="flex gap-3">
              {[FacebookIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 text-gray-500 dark:text-gray-400 hover:bg-[#0B3B6E] dark:hover:bg-[#3B82F6] hover:text-white transition-colors" aria-label={`Social ${i}`}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerData.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0B3B6E] dark:hover:text-[#3B82F6] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 dark:text-gray-500">&copy; 2026 MedTrust Africa. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-[#22C55E] font-medium">
            <Lock className="w-3.5 h-3.5" />
            Securing Access to Safe Medicine
          </div>
        </div>
      </div>
    </footer>
  )
}
