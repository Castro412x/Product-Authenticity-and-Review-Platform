import { User, Building2, Stethoscope } from 'lucide-react'

const iconMap = {
  individual: User,
  pharmacy: Building2,
  provider: Stethoscope,
}

export default function UserTypeCard({ type, title, description, isActive, onClick }) {
  const Icon = iconMap[type]

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 flex-1 rounded-xl border-2 p-4 transition-all duration-200 cursor-pointer
        ${isActive
          ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-100'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
        }`}
    >
      <div className={`rounded-lg p-2 transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={`font-semibold text-sm ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
        {title}
      </span>
      <span className="text-xs text-gray-500">{description}</span>
    </button>
  )
}
