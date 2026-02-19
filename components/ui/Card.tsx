import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'glass' | 'gradient'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6',
          {
            'bg-dark-800/50': variant === 'default',
            'bg-dark-800 shadow-xl shadow-black/20': variant === 'elevated',
            'border border-white/10 bg-dark-800/30': variant === 'bordered',
            'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300': variant === 'glass',
            'bg-gradient-to-br from-accent-purple/20 via-accent-pink/10 to-accent-blue/20 border border-white/10': variant === 'gradient',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
