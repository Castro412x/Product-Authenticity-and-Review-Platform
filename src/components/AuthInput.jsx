import { forwardRef } from 'react'

const AuthInput = forwardRef(({ icon: Icon, label, error, ...props }, ref) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className={`flex items-center border rounded-lg px-3 py-2.5 transition-all duration-200 ${error ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent'}`}>
        {Icon && <Icon className="w-5 h-5 text-gray-400 mr-2 shrink-0" />}
        <input
          ref={ref}
          className="w-full text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
})

AuthInput.displayName = 'AuthInput'
export default AuthInput
