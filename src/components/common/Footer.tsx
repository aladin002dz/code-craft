import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, RotateCcw, Sparkles } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';
import type { ChapterId } from '../../types';
import { ConfirmDialog } from './ConfirmDialog';

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
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

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
    <footer className="mt-20 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Navigation Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-lg border border-slate-800">

          {/* Previous Button */}
          {prevChapter ? (
            <button
              onClick={() => handleNavigate(prevChapter.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-md text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
            >
              {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              <span>{t.footer.prev}: {prevChapter.shortTitle}</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {/* Mark Complete / Next Action */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={handleCompleteCurrent}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 rounded-md font-semibold text-sm border transition-colors ${
                isCurrentCompleted
                  ? 'border-emerald-800 text-emerald-400'
                  : 'border-cyan-500 bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:border-cyan-400'
              }`}
            >
              {isCurrentCompleted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
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
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-md text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
            >
              <span>{t.footer.next}: {nextChapter.shortTitle}</span>
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
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
              onClick={() => setIsResetDialogOpen(true)}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label={t.footer.reset}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.footer.reset}</span>
            </button>
          </div>
        </div>

      </div>

      <ConfirmDialog
        isOpen={isResetDialogOpen}
        message={t.footer.resetConfirm}
        confirmLabel={t.footer.resetConfirmAction}
        cancelLabel={t.footer.resetCancel}
        onConfirm={() => {
          resetProgress();
          playTone('step');
          setIsResetDialogOpen(false);
        }}
        onCancel={() => setIsResetDialogOpen(false)}
      />
    </footer>
  );
};
