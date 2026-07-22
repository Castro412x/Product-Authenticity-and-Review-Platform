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
          ? 'border-blue-600 dark:border-[#3B82F6] bg-blue-50 dark:bg-blue-900/30 shadow-md shadow-blue-100 dark:shadow-blue-900/30'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm'
        }`}
    >
      <div className={`rounded-lg p-2 transition-colors duration-200 ${isActive ? 'bg-blue-600 dark:bg-[#3B82F6] text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={`font-semibold text-sm ${isActive ? 'text-blue-600 dark:text-[#3B82F6]' : 'text-gray-800 dark:text-gray-200'}`}>
        {title}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400">{description}</span>
    </button>
  )
}
