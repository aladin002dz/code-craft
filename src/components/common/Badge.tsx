import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * A small text label — deliberately not a filled pill. A colored dot marks
 * the category and the text itself carries the color, in line with the
 * editorial/technical-docs direction (labels, not badges).
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    purple: 'text-purple-400',
    amber: 'text-amber-400',
    rose: 'text-rose-400',
    slate: 'text-slate-400',
  };

  const dotStyles = {
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    purple: 'bg-purple-400',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    slate: 'bg-slate-500',
  };

  const sizeStyles = {
    sm: 'text-[11px]',
    md: 'text-xs',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[variant]}`} />
      {children}
    </span>
  );
};
