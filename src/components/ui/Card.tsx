import { cn } from '../../utils/cn';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'ghost';
  padding?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const paddings: Record<string, string> = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export default function Card({
  variant = 'default',
  padding = 'md',
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-shadow duration-200',
        variant === 'default' && 'bg-bg-card border border-border shadow-sm',
        variant === 'accent' && 'bg-primary/5 border border-primary/20',
        variant === 'ghost' && 'bg-transparent',
        paddings[padding],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
