import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-accent-purple text-white hover:bg-accent-purple/80 focus:ring-accent-purple': variant === 'primary',
            'bg-accent-blue text-white hover:bg-accent-blue/80 focus:ring-accent-blue': variant === 'secondary',
            'border-2 border-white/20 text-light-100 hover:bg-white/10 focus:ring-white/20': variant === 'outline',
            'text-light-300 hover:bg-white/10': variant === 'ghost',
            'bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue text-white hover:opacity-90 focus:ring-accent-purple shadow-lg shadow-accent-purple/25': variant === 'gradient',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-2.5 text-base': size === 'md',
            'px-8 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
