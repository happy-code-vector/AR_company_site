import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'success' | 'warning'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color = 'primary', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          {
            'bg-primary-100 text-primary-800': color === 'primary',
            'bg-secondary-100 text-secondary-800': color === 'secondary',
            'bg-success/10 text-success': color === 'success',
            'bg-warning/10 text-warning': color === 'warning',
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
