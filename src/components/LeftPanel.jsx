import { ShieldCheck, Shield, Activity } from 'lucide-react'

export default function LeftPanel() {
  return (
    <div className="w-full lg:w-[35%] bg-[#0B3B6E] dark:bg-[#0A2F5A] flex flex-col relative overflow-hidden min-h-[500px] lg:min-h-screen">
      <div className="flex-1 flex flex-col px-8 py-10 z-10 relative">
        <div className="bg-white/15 rounded-full p-2.5 w-fit mb-8">
          <ShieldCheck className="w-7 h-7 text-white" />
        </div>

        <h1 className="text-white text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
          Securing the Heart of African Healthcare.
        </h1>

        <p className="text-blue-200 text-sm leading-relaxed mb-8">
          Join thousands of people in ensuring medicine safety through precision verification.
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="bg-white/20 rounded-lg p-2 shrink-0"><Shield className="w-5 h-5 text-white" /></div>
            <div><h3 className="text-white font-semibold text-sm">Trust & Authenticity</h3><p className="text-blue-200 text-xs mt-0.5">Anti-counterfeit technology</p></div>
          </div>
          <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="bg-white/20 rounded-lg p-2 shrink-0"><Activity className="w-5 h-5 text-white" /></div>
            <div><h3 className="text-white font-semibold text-sm">Direct Connectivity</h3><p className="text-blue-200 text-xs mt-0.5">Real-time supply chain monitoring</p></div>
          </div>
        </div>

        <div className="mt-auto lg:hidden">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"
            alt="Healthcare"
            className="rounded-2xl w-full object-cover max-h-48 shadow-lg"
          />
        </div>
      </div>

      <div className="hidden lg:block px-8 pb-6">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
          alt="Healthcare"
          className="rounded-3xl w-full object-cover max-h-48 shadow-xl"
        />
      </div>

      <div className="px-8 py-4 border-t border-white/10">
        <p className="text-blue-300 text-xs">
          &copy; 2026 MedTrust Africa. Precision in Healthcare.
        </p>
      </div>
    </div>
  )
}
