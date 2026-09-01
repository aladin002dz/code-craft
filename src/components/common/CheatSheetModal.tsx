import React from 'react';
import { X, BookOpen, CheckCircle2, XCircle, Sparkles, Copy, Check } from 'lucide-react';
import { CHEAT_SHEET_ITEMS } from '../../data/cheatSheetData';
import { useProgress } from '../../context/ProgressContext';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  const { playTone } = useProgress();
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                React useState Pro Cheat Sheet
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h2>
              <p className="text-xs text-slate-400">Essential rules, immutable patterns, and pro-tips for React state</p>
            </div>
          </div>
          <button
            onClick={() => {
              playTone('click');
              onClose();
            }}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {CHEAT_SHEET_ITEMS.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-cyan-300 text-base">{item.category}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">Rule #{idx + 1}</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm font-medium">{item.rule}</p>

              {/* Code comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {/* DON'T */}
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40">
                  <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold mb-2">
                    <XCircle className="w-4 h-4" />
                    <span>DON'T (Anti-pattern)</span>
                  </div>
                  <pre className="font-mono text-xs text-rose-200/90 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {item.dontCode}
                  </pre>
                </div>

                {/* DO */}
                <div className="relative p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>DO (Recommended)</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(item.doCode, idx)}
                      className="opacity-80 hover:opacity-100 px-2 py-0.5 rounded bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 text-[11px] font-mono flex items-center gap-1 transition-all"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-emerald-200/90 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {item.doCode}
                  </pre>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic pt-1">
                💡 <span className="font-semibold text-slate-300">Why:</span> {item.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Tip: Press ESC or click Close to return to the interactive guide</span>
          <button
            onClick={() => {
              playTone('click');
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};
