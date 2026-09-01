import React, { useEffect, useRef, useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { Activity } from 'lucide-react';

interface RenderFlashingBoxProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
  flashColor?: 'cyan' | 'emerald' | 'amber' | 'purple' | 'rose';
  showCounter?: boolean;
}

export const RenderFlashingBox: React.FC<RenderFlashingBoxProps> = ({
  children,
  label,
  className = '',
  flashColor = 'cyan',
  showCounter = true,
}) => {
  const { renderFlashEnabled, playTone } = useProgress();
  const renderCountRef = useRef(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const isFirstRender = useRef(true);

  renderCountRef.current += 1;

  useEffect(() => {
    if (renderFlashEnabled) {
      setIsFlashing(true);
      if (!isFirstRender.current) {
        playTone('render');
      }
      isFirstRender.current = false;
      const timer = setTimeout(() => {
        setIsFlashing(false);
      }, 600);
      return () => clearTimeout(timer);
    }
    // Only react to an actual re-render of the wrapped content (new `children`)
    // or the toggle changing — NOT to `isFlashing` changing itself, otherwise
    // setIsFlashing here would re-trigger this very effect forever.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, renderFlashEnabled]);

  const colorStyles = {
    cyan: isFlashing && renderFlashEnabled
      ? 'border-cyan-400 ring-4 ring-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
      : 'border-slate-800',
    emerald: isFlashing && renderFlashEnabled
      ? 'border-emerald-400 ring-4 ring-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
      : 'border-slate-800',
    amber: isFlashing && renderFlashEnabled
      ? 'border-amber-400 ring-4 ring-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
      : 'border-slate-800',
    purple: isFlashing && renderFlashEnabled
      ? 'border-purple-400 ring-4 ring-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
      : 'border-slate-800',
    rose: isFlashing && renderFlashEnabled
      ? 'border-rose-400 ring-4 ring-rose-400/40 shadow-[0_0_20px_rgba(244,63,94,0.4)]'
      : 'border-slate-800',
  };

  const badgeColorStyles = {
    cyan: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/80',
    emerald: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
    amber: 'bg-amber-950/80 text-amber-300 border-amber-800/80',
    purple: 'bg-purple-950/80 text-purple-300 border-purple-800/80',
    rose: 'bg-rose-950/80 text-rose-300 border-rose-800/80',
  };

  return (
    <div
      className={`relative rounded-xl border transition-all duration-300 ${colorStyles[flashColor]} ${className}`}
    >
      {/* Top Header bar with Render Count indicator */}
      {(label || showCounter) && (
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/90 border-b border-slate-800/80 rounded-t-xl text-xs">
          <span className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isFlashing && renderFlashEnabled ? 'bg-cyan-400 animate-ping' : 'bg-slate-600'}`} />
            {label || 'Component'}
          </span>
          {showCounter && (
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-mono font-bold transition-all ${badgeColorStyles[flashColor]}`}>
              <Activity className={`w-3 h-3 ${isFlashing && renderFlashEnabled ? 'animate-spin' : ''}`} />
              <span>Renders: {renderCountRef.current}</span>
            </div>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};
