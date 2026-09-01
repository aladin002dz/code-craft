import React from 'react';
import { X, BookOpen, CheckCircle2, XCircle, Copy, Check } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  const { playTone } = useProgress();
  const { t } = useLanguage();
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyCode = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(idx);
      playTone('click');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t.cheatSheetModal.title}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <div>
              <h2 className="text-base font-semibold text-white font-display">
                {t.cheatSheetModal.title}
              </h2>
              <p className="text-xs text-slate-500">{t.cheatSheetModal.subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playTone('click');
              onClose();
            }}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            aria-label={t.cheatSheetModal.closeTip}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {t.cheatSheet.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-cyan-400 text-base font-display">{item.category}</h3>
                <span className="text-xs text-slate-600 font-mono">
                  {t.cheatSheetModal.ruleNumber}{idx + 1}
                </span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm">{item.rule}</p>

              {/* Code comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {/* DON'T */}
                <div className="p-3 rounded-lg bg-rose-500/[0.03] border border-rose-900/40">
                  <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold mb-2">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>{t.cheatSheetModal.dont}</span>
                  </div>
                  <pre className="font-mono text-xs text-rose-200/80 whitespace-pre-wrap leading-relaxed overflow-x-auto" dir="ltr">
                    {item.dontCode}
                  </pre>
                </div>

                {/* DO */}
                <div className="relative p-3 rounded-lg bg-emerald-500/[0.03] border border-emerald-900/40 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t.cheatSheetModal.do}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(item.doCode, idx)}
                      className="opacity-70 hover:opacity-100 text-emerald-400 text-[11px] font-mono flex items-center gap-1 transition-opacity"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>{t.cheatSheetModal.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{t.cheatSheetModal.copy}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-emerald-200/80 whitespace-pre-wrap leading-relaxed overflow-x-auto" dir="ltr">
                    {item.doCode}
                  </pre>
                </div>
              </div>

              <p className="text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-400">{t.cheatSheetModal.why}</span> {item.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>{t.cheatSheetModal.closeTip}</span>
          <button
            onClick={() => {
              playTone('click');
              onClose();
            }}
            className="px-4 py-1.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
          >
            {t.cheatSheetModal.gotIt}
          </button>
        </div>
      </div>
    </div>
  );
};
