import React, { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black hover:bg-white/90',
  secondary: 'glass text-white hover:bg-white/10',
  accent: 'bg-accent text-black hover:bg-accent-light'
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base'
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  external = false,
  icon,
  onClick
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,transform] duration-150 ease-out active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...external ? { target: '_blank', rel: 'noreferrer' } : {}}>
        
        {children}
        {icon}
      </a>);

  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
      {icon}
    </button>);

}