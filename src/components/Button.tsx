
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  glowing?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  glowing = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-accent-blue text-white hover:bg-accent-blue/90 focus:ring-accent-blue',
    secondary: 'bg-dark-600 text-white hover:bg-dark-500 focus:ring-dark-400',
    outline: 'border border-dark-500 bg-transparent text-white hover:bg-dark-700 focus:ring-dark-400',
    ghost: 'bg-transparent text-white hover:bg-dark-700/50 focus:ring-dark-400',
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-md',
  };
  
  const glowingEffect = glowing ? 'animate-glow' : '';
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], glowingEffect, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
