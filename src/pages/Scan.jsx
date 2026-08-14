import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ScanLine,
  QrCode,
  ImagePlus,
  Keyboard,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Check,
  Database,
  Lock,
  ShieldCheck,
  Globe,
  Menu,
  X,
} from 'lucide-react'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Medicine Safety', href: '#medicine-safety' },
  { label: 'Scan', href: '/scan', active: true },
]

const steps = [
  {
    number: 1,
    icon: ScanLine,
    title: 'Scan or Upload',
    description: "Capture the barcode or upload a clear photo of the medicine's unique identifier.",
  },
  {
    number: 2,
    icon: Database,
    title: 'Analyze',
    description: 'There will be a cross-reference of the data with National Health and NAFDAC databases.',
  },
  {
    number: 3,
    icon: Check,
    title: 'Verify',
    description: "Receive instant confirmation of the product's origin, batch details, and safety status.",
    completed: true,
  },
]

const trustItems = [
  { icon: Lock, label: 'End-to-End Encrypted' },
  { icon: ShieldCheck, label: 'NAFDAC Compliant' },
  { icon: Globe, label: 'Nationwide Database Access' },
]

const footerColumns = [
  {
    title: 'Solutions',
    links: ['For Patients'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact', 'Careers'],
  },
  {
    title: 'Resources',
    links: ['Safety Guide', 'Help Center'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
]

const BarcodeGraphic = () => (
  <svg width="120" height="72" viewBox="0 0 120 72" fill="none" className="opacity-40">
    {[3, 7, 2, 9, 4, 6, 2, 8, 3, 5, 7, 2, 4, 6, 3, 8, 2, 5, 9, 3, 6, 2, 7, 4, 5, 3, 8, 2, 6, 4, 9, 2, 5, 7, 3, 8, 4, 2, 6, 3, 7, 5].map((w, i) => (
      <rect key={i} x={i * 2.8} y="4" width={w} height="64" rx="1" fill="white" />
    ))}
  </svg>
)

function LogoMark({ className = 'w-7 h-7' }) {
  return (
    <span className={`${className} bg-[#0B3B6E] rounded-lg flex items-center justify-center shrink-0`}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="6" y="1" width="2" height="12" rx="1" fill="white" />
        <rect x="1" y="6" width="12" height="2" rx="1" fill="white" />
      </svg>
    </span>
  )
}

function ScannerModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3B6E]/60 to-transparent" />
          <QrCode className="absolute inset-0 m-auto w-20 h-20 text-white/90" />
          <div className="absolute left-3 right-3 h-0.5 bg-[#22C55E] animate-pulse" style={{ top: '50%' }} />
          <div className="absolute inset-0 border-4 border-white/30 rounded-2xl" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Scanner Ready</h3>
        <p className="text-sm text-gray-500 mb-6">
          Camera preview placeholder. Point at a barcode or QR code to begin verification.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#0B3B6E] text-white font-semibold rounded-lg py-3 text-sm hover:bg-[#0a2f5a] transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default function Scan() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scannerOpen, setScannerOpen] = useState(false)
  const [uploaded, setUploaded] = useState(null)
  const [manualOpen, setManualOpen] = useState(false)
  const [code, setCode] = useState('')
  const [manualResult, setManualResult] = useState('')
  const fileInputRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploaded(file.name)
      setTimeout(() => setUploaded(null), 4000)
    }
    e.target.value = ''
  }

  const handleManualVerify = (e) => {
    e.preventDefault()
    if (code.trim()) {
      setManualResult(`Verification in progress for code: ${code.trim()}`)
      setCode('')
      setTimeout(() => setManualResult(''), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA] text-gray-900">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-[72px]">
          <Link to="/" className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-extrabold text-xl text-[#0B3B6E]">MedTrust</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium py-1 border-b-2 transition-colors ${
                    link.active
                      ? 'text-[#0B3B6E] border-[#0B3B6E]'
                      : 'text-gray-600 border-transparent hover:text-[#0B3B6E]'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium py-1 text-gray-600 border-b-2 border-transparent hover:text-[#0B3B6E] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium py-1 ${link.active ? 'text-[#0B3B6E] font-semibold' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="block text-sm font-medium text-gray-600 py-1">
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <section className="pt-12 pb-4 text-center">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.12em]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
            TRUSTED VERIFICATION ENTRY
          </span>
          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight">
            Verify Your Medication
          </h1>
          <p className="mt-4 text-gray-500 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Ensure authenticity in seconds. Use our precision scanning tools to validate pharmaceutical products
            across Nigeria.
          </p>
        </section>

        <section className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="bg-[#0B2A4A] rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden shadow-xl shadow-[#0B2A4A]/10">
            <div className="absolute top-6 right-6">
              <BarcodeGraphic />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <span className="bg-white/10 rounded-xl p-3 w-fit">
                <ScanLine className="w-6 h-6 text-white" />
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-white">Scan Barcode</h2>
            <p className="mt-3 text-blue-100/80 text-sm leading-relaxed max-w-sm">
              Instant verification using your device camera. Supports QR codes and standard pharmaceutical barcodes.
            </p>
            <button
              onClick={() => setScannerOpen(true)}
              className="mt-auto pt-10 flex items-center gap-2 text-[#4ADE80] font-semibold text-sm group text-left"
            >
              Launch Scanner{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-left group"
            >
              <div className="flex items-start justify-between">
                <span className="bg-[#EFF3FA] rounded-xl p-3 w-fit">
                  <ImagePlus className="w-5 h-5 text-[#0B3B6E]" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0B3B6E] transition-colors" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0B2A4A]">Upload Photo</h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                Upload an image of the medicine packaging or prescription receipt.
              </p>
              {uploaded && (
                <p className="mt-3 text-xs font-medium text-green-700 bg-green-50 rounded-lg px-3 py-2">
                  {uploaded} selected. Processing…
                </p>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />

            <button
              onClick={() => setManualOpen(!manualOpen)}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-left group"
            >
              <div className="flex items-start justify-between">
                <span className="bg-[#EFF3FA] rounded-xl p-3 w-fit">
                  <Keyboard className="w-5 h-5 text-[#0B3B6E]" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0B3B6E] transition-colors" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0B2A4A]">Enter Manually</h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                Type in the verification code or NAFDAC registration number.
              </p>
              {manualOpen && (
                <form onSubmit={handleManualVerify} className="mt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="e.g. NAFDAC-04-1234"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B6E] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-[#0B3B6E] text-white text-sm font-semibold rounded-lg px-4 py-2 hover:bg-[#0a2f5a] transition-colors"
                  >
                    Verify
                  </button>
                </form>
              )}
              {manualResult && (
                <p className="mt-3 text-xs font-medium text-green-700 bg-green-50 rounded-lg px-3 py-2">
                  {manualResult}
                </p>
              )}
            </button>
          </div>
        </section>

        <section id="how-it-works" className="py-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0B2A4A]">How Verification Works</h2>
              <p className="mt-2 text-gray-500 text-sm">Three simple steps to pharmaceutical peace of mind.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              <div className="hidden md:block absolute top-5 left-[16%] right-[16%] h-px bg-gray-200" />
              {steps.map((step) => (
                <div key={step.number} className="relative text-center md:px-2">
                  <span
                    className={`relative z-10 mx-auto w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-green-600' : 'bg-[#EFF3FA] text-[#0B3B6E]'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-sm font-bold">{step.number}</span>
                    )}
                  </span>
                  <span className="mt-5 mx-auto w-10 h-10 bg-[#F0F4FA] rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#0B3B6E]" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#0B2A4A] text-base">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustItems.map((item) => (
            <span key={item.label} className="flex items-center gap-2 text-sm text-gray-500">
              <item.icon className="w-4 h-4 text-green-600" />
              {item.label}
            </span>
          ))}
        </section>
      </main>

      <footer className="mt-12 bg-white rounded-t-[2rem] border-t border-gray-100 shadow-[0_-6px_24px_rgba(15,35,64,0.04)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2.5">
                <LogoMark />
                <span className="font-extrabold text-lg text-[#0B3B6E]">MedTrust</span>
              </Link>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                Pioneering precision in healthcare verification.
              </p>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">Your health, our priority.</p>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm text-gray-900 mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-500 hover:text-[#0B3B6E] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              &copy; 2026 MedTrust . All rights reserved. Precision in Healthcare.
            </p>
          </div>
        </div>
      </footer>

      {scannerOpen && <ScannerModal onClose={() => setScannerOpen(false)} />}
    </div>
  )
}
