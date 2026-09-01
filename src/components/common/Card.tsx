import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  icon,
  badge,
  className = '',
  glowColor = 'none',
}) => {
  const glowStyles = {
    none: 'hover:border-slate-700 hover:shadow-[0_0_24px_rgba(148,163,184,0.08)]',
    cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    emerald: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    purple: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    amber: 'hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    rose: 'hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
  };

  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300 ease-out hover:-translate-y-1 ${glowStyles[glowColor]} ${className}`}
    >
      {(title || icon || badge) && (
        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            {icon && <div className="p-2 rounded-xl bg-slate-800/80 text-cyan-400">{icon}</div>}
            <div>
              {title && <h3 className="text-lg font-bold text-slate-100">{title}</h3>}
              {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {badge && <div>{badge}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
