import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  /** Optional 2px accent rule shown on the card's leading edge. */
  accent?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'indigo' | 'teal' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  icon,
  badge,
  className = '',
  accent = 'none',
}) => {
  const accentStyles = {
    none: '',
    cyan: 'before:bg-cyan-500',
    emerald: 'before:bg-emerald-500',
    purple: 'before:bg-purple-500',
    amber: 'before:bg-amber-500',
    rose: 'before:bg-rose-500',
    indigo: 'before:bg-indigo-500',
    teal: 'before:bg-teal-500',
  };

  return (
    <div
      className={`relative rounded-lg border border-slate-800 bg-slate-900/40 p-6 transition-colors duration-200 hover:border-slate-700 ${
        accent !== 'none'
          ? `pl-[calc(1.5rem+2px)] rtl:pl-6 rtl:pr-[calc(1.5rem+2px)] before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:rounded-l-lg rtl:before:left-auto rtl:before:right-0 rtl:before:rounded-l-none rtl:before:rounded-r-lg ${accentStyles[accent]}`
          : ''
      } ${className}`}
    >
      {(title || icon || badge) && (
        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {icon && <span className="text-slate-500">{icon}</span>}
            <div>
              {title && <h3 className="text-base font-semibold text-slate-100">{title}</h3>}
              {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {badge && <div>{badge}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
