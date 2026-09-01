import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';
import { getChapterColorClasses } from '../../utils/chapterColors';

const SHOW_AFTER_SCROLL_PX = 500;

const isTypingTarget = (el: Element | null) => {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (el as HTMLElement).isContentEditable;
};

const isModalOpen = () => document.querySelector('[role="dialog"], [role="alertdialog"]') !== null;

/**
 * A small pill that appears once the reader has scrolled a bit into a
 * chapter, so moving to the next one doesn't require scrolling all the way
 * down to the footer. Also wires Left/Right arrow-key navigation between
 * chapters (disabled while typing in a form field or while a modal is open).
 */
export const FloatingNextButton: React.FC = () => {
  const { currentChapter, setCurrentChapter, playTone } = useProgress();
  const { t, isRTL } = useLanguage();
  const [visible, setVisible] = useState(false);

  const currentIndex = t.chapters.findIndex((c) => c.id === currentChapter);
  const nextChapter = currentIndex < t.chapters.length - 1 ? t.chapters[currentIndex + 1] : null;
  const prevChapter = currentIndex > 0 ? t.chapters[currentIndex - 1] : null;
  const colors = getChapterColorClasses(nextChapter?.color ?? 'cyan');

  const goTo = (id: string) => {
    playTone('click');
    setCurrentChapter(id as typeof currentChapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER_SCROLL_PX);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTypingTarget(document.activeElement) || isModalOpen()) return;

      const goNext = isRTL ? e.key === 'ArrowLeft' : e.key === 'ArrowRight';
      const goPrev = isRTL ? e.key === 'ArrowRight' : e.key === 'ArrowLeft';

      if (goNext && nextChapter) {
        goTo(nextChapter.id);
      } else if (goPrev && prevChapter) {
        goTo(prevChapter.id);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextChapter?.id, prevChapter?.id, isRTL]);

  if (!nextChapter) return null;

  return (
    <button
      onClick={() => goTo(nextChapter.id)}
      aria-label={`${t.footer.next}: ${nextChapter.shortTitle}`}
      className={`fixed bottom-6 z-30 flex items-center gap-2 pl-4 pr-3 py-3 rounded-full font-bold text-sm shadow-2xl border transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      } ${isRTL ? 'left-6' : 'right-6'} ${colors.badgeBg} ${colors.badgeText} ${colors.badgeBorder} ${colors.badgeGlow} hover:brightness-110 backdrop-blur-md`}
    >
      <span className="hidden sm:inline">{nextChapter.shortTitle}</span>
      {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
    </button>
  );
};
