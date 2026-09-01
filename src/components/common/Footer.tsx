import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, RotateCcw, Sparkles } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';
import type { ChapterId } from '../../types';

export const Footer: React.FC = () => {
  const {
    currentChapter,
    setCurrentChapter,
    markChapterCompleted,
    isChapterCompleted,
    playTone,
    resetProgress,
    progressPercentage
  } = useProgress();

  const { t, isRTL } = useLanguage();

  const currentIndex = t.chapters.findIndex(c => c.id === currentChapter);
  const prevChapter = currentIndex > 0 ? t.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < t.chapters.length - 1 ? t.chapters[currentIndex + 1] : null;
  const isCurrentCompleted = isChapterCompleted(currentChapter);

  const handleNavigate = (id: ChapterId) => {
    playTone('click');
    setCurrentChapter(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteCurrent = () => {
    playTone('success');
    markChapterCompleted(currentChapter);
    if (nextChapter) {
      setTimeout(() => {
        setCurrentChapter(nextChapter.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/90 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          
          {/* Previous Button */}
          {prevChapter ? (
            <button
              onClick={() => handleNavigate(prevChapter.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all border border-slate-700/60"
            >
              {isRTL ? <ChevronRight className="w-4 h-4 text-cyan-400" /> : <ChevronLeft className="w-4 h-4 text-cyan-400" />}
              <span>{t.footer.prev}: {prevChapter.shortTitle}</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {/* Mark Complete / Next Action */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={handleCompleteCurrent}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all ${
                isCurrentCompleted
                  ? 'bg-emerald-950/80 border border-emerald-600/60 text-emerald-300'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              {isCurrentCompleted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t.footer.completed}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{t.footer.complete}</span>
                </>
              )}
            </button>
          </div>

          {/* Next Button */}
          {nextChapter ? (
            <button
              onClick={() => handleNavigate(nextChapter.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all border border-slate-700/60"
            >
              <span>{t.footer.next}: {nextChapter.shortTitle}</span>
              {isRTL ? <ChevronLeft className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-cyan-400" />}
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>

        {/* Footer Meta & Reset Progress */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4 border-t border-slate-900">
          <div>
            {t.footer.builtWith} {t.header.progress} {progressPercentage}%
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (window.confirm(t.footer.resetConfirm)) {
                  resetProgress();
                  playTone('step');
                }
              }}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.footer.reset}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
