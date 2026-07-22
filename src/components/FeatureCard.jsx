import { Shield, Activity } from 'lucide-react'

const iconMap = {
  shield: Shield,
  activity: Activity,
}

export default function FeatureCard({ icon, title, description }) {
  const Icon = iconMap[icon] || Shield

  return (
    <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
      <div className="bg-white/20 rounded-lg p-2 shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <p className="text-blue-200 text-xs mt-0.5">{description}</p>
      </div>
    </div>
  )
}
