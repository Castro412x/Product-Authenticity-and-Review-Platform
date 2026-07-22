export default function PrimaryButton({ children, loading, ...props }) {
  return (
    <button
      disabled={loading}
      className="w-full bg-[#0B3B6E] dark:bg-[#3B82F6] text-white font-semibold rounded-lg py-3 text-sm hover:bg-[#0a2f5a] dark:hover:bg-[#2563EB] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Logging in...
        </span>
      ) : children}
    </button>
  )
}
