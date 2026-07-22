import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ShieldCheck, Mail, Shield, CheckCircle, Lock } from 'lucide-react'
import { Apple } from 'lucide-react'
import AuthInput from '../components/AuthInput'
import PasswordInput from '../components/PasswordInput'
import FeatureBadge from '../components/FeatureBadge'
import PrimaryButton from '../components/PrimaryButton'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex max-w-[1200px] w-full rounded-2xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden min-h-[600px]">
        <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#0B3B6E] to-[#0A4E8C] dark:from-[#0A2F5A] dark:to-[#062D5C] flex-col relative p-10">
          <div className="bg-white/15 rounded-full p-2.5 w-fit mb-8">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>

          <h1 className="text-white text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
            Welcome Back to<br />MedTrust Africa.
          </h1>

          <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-md">
            Log in to access your personalized medicine safety dashboard, track your saved medications, and stay informed with real-time alerts.
          </p>

          <div className="flex gap-3 mb-auto">
            <FeatureBadge icon={Shield} text="Secure Data" />
            <FeatureBadge icon={CheckCircle} text="Verified Safety" />
          </div>

          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"
              alt="Healthcare"
              className="rounded-2xl w-full object-cover max-h-52 shadow-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">Log in to your account</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AuthInput
              icon={Mail}
              label="Email Address"
              type="email"
              placeholder="e.g. pharmacist@healthcare.org"
              error={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
            />

            <PasswordInput
              label="Password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Minimum 8 characters' },
              })}
            />

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-[#3B82F6] focus:ring-blue-600 bg-white dark:bg-gray-800" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Remember me for 30 days</span>
            </label>

            <PrimaryButton loading={loading}>Log In</PrimaryButton>
          </form>

          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Or log in with</span>
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg py-2.5 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg py-2.5 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200">
              <Apple className="w-5 h-5" />
              Apple
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-blue-600 dark:text-[#3B82F6] font-semibold hover:underline">
              Sign up here
            </Link>
          </p>

          <div className="flex items-center justify-center gap-1.5 mt-6 text-gray-400 dark:text-gray-500 text-xs">
            <Lock className="w-3.5 h-3.5" />
            Protected by industry-standard encryption
          </div>
        </div>
      </div>
    </div>
  )
}
