import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg text-sm px-6 py-3 transition-all duration-200 hover:scale-105'

  const styles = {
    primary: 'bg-[#0B3B6E] text-white shadow-lg hover:shadow-xl hover:bg-[#0a2f5a]',
    secondary: 'bg-white text-[#0B3B6E] border-2 border-gray-200 hover:border-[#0B3B6E] hover:shadow-lg',
  }

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles[variant]} ${className}`} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
