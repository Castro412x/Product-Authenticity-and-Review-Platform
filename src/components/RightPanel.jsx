import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Apple } from 'lucide-react'
import UserTypeCard from './UserTypeCard'
import SocialButton from './SocialButton'

const userTypes = [
  { type: 'individual', title: 'Individual', description: 'Personal account' },
  { type: 'pharmacy', title: 'Pharmacy', description: 'Business account' },
  { type: 'provider', title: 'Provider', description: 'Medical practice' },
]

export default function RightPanel() {
  const [selectedRole, setSelectedRole] = useState('individual')

  return (
    <div className="w-full lg:w-[65%] bg-white flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-10 max-w-2xl mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
          Create your account
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Start your journey toward safer healthcare today.
        </p>

        <div className="flex gap-3 mb-8">
          {userTypes.map((u) => (
            <UserTypeCard
              key={u.type}
              type={u.type}
              title={u.title}
              description={u.description}
              isActive={selectedRole === u.type}
              onClick={() => setSelectedRole(u.type)}
            />
          ))}
        </div>

        <form className="space-y-4 mb-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0B3B6E] text-white font-semibold rounded-lg py-3 text-sm hover:bg-[#0a2f5a] transition-colors duration-200"
          >
            Continue
          </button>
        </form>

        <div className="flex items-center gap-3 mb-6">
          <span className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">OR JOIN WITH</span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex gap-3 mb-8">
          <SocialButton icon="google" label="Google" />
          <SocialButton icon="apple" label="Apple" />
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>

      <div className="flex justify-end gap-6 px-6 sm:px-10 lg:px-16 xl:px-24 py-4 border-t border-gray-100">
        <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
        <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
        <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Cookies</a>
      </div>
    </div>
  )
}
