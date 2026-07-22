export default function FeatureBadge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
      <Icon className="w-3.5 h-3.5" />
      {text}
    </span>
  )
}
