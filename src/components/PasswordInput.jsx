import { useState, forwardRef } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

const PasswordInput = forwardRef(({ label, error, ...props }, ref) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <a href="#" className="text-xs text-blue-600 dark:text-[#3B82F6] font-medium hover:underline">Forgot password?</a>
      </div>
      <div className={`flex items-center border rounded-lg px-3 py-2.5 transition-all duration-200 bg-white dark:bg-gray-800 ${error ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent'}`}>
        <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2 shrink-0" />
        <input
          ref={ref}
          type={show ? 'text' : 'password'}
          className="w-full text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
          {...props}
        />
        <button type="button" onClick={() => setShow(!show)} className="shrink-0 ml-2">
          {show ? <EyeOff className="w-5 h-5 text-gray-400 dark:text-gray-500" /> : <Eye className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'
export default PasswordInput
