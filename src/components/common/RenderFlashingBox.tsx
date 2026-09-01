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
      }, 500);
      return () => clearTimeout(timer);
    }
    // Only react to an actual re-render of the wrapped content (new `children`)
    // or the toggle changing — NOT to `isFlashing` changing itself, otherwise
    // setIsFlashing here would re-trigger this very effect forever.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, renderFlashEnabled]);

  const active = isFlashing && renderFlashEnabled;

  const colorStyles = {
    cyan: active ? 'border-cyan-400' : 'border-slate-800',
    emerald: active ? 'border-emerald-400' : 'border-slate-800',
    amber: active ? 'border-amber-400' : 'border-slate-800',
    purple: active ? 'border-purple-400' : 'border-slate-800',
    rose: active ? 'border-rose-400' : 'border-slate-800',
  };

  const textStyles = {
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    purple: 'text-purple-400',
    rose: 'text-rose-400',
  };

  return (
    <div
      className={`relative rounded-lg border transition-colors duration-300 ${colorStyles[flashColor]} ${className}`}
    >
      {/* Top Header bar with Render Count indicator */}
      {(label || showCounter) && (
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800 text-xs">
          <span className="font-mono text-slate-400 font-medium flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${active ? textStyles[flashColor].replace('text-', 'bg-') : 'bg-slate-700'}`} />
            {label || 'Component'}
          </span>
          {showCounter && (
            <div className={`flex items-center gap-1 text-[11px] font-mono transition-colors ${active ? textStyles[flashColor] : 'text-slate-500'}`}>
              <Activity className="w-3 h-3" />
              <span>Renders: {renderCountRef.current}</span>
            </div>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};
