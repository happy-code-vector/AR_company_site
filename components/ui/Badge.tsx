import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'pink' | 'blue'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color = 'primary', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
          {
            'bg-accent-purple/20 text-accent-purple border border-accent-purple/30': color === 'primary' || color === 'purple',
            'bg-accent-blue/20 text-accent-blue border border-accent-blue/30': color === 'secondary' || color === 'blue',
            'bg-accent-green/20 text-accent-green border border-accent-green/30': color === 'success',
            'bg-accent-orange/20 text-accent-orange border border-accent-orange/30': color === 'warning',
            'bg-accent-pink/20 text-accent-pink border border-accent-pink/30': color === 'pink',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
