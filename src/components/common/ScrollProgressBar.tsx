import React, { useEffect, useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';
import { getChapterColorClasses } from '../../utils/chapterColors';

/**
 * Thin fixed bar under the header that fills according to how far the
 * reader has scrolled through the CURRENT chapter. Resets to 0 whenever
 * the chapter changes (see the `currentChapter` effect dependency).
 */
export const ScrollProgressBar: React.FC = () => {
  const { currentChapter } = useProgress();
  const { t } = useLanguage();
  const [scrollPct, setScrollPct] = useState(0);

  const activeChapter = t.chapters.find((c) => c.id === currentChapter);
  const colors = getChapterColorClasses(activeChapter?.color ?? 'cyan');

  useEffect(() => {
    // Chapter switches already scroll to top (see Header's handleSelectChapter),
    // so recomputing immediately below naturally lands back near 0% — no need
    // to force-set state here, which would just trigger an extra render.
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPct(pct);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentChapter]);

  return (
    <div className="h-[3px] w-full bg-slate-900/60 overflow-hidden" aria-hidden="true">
      <div
        className={`h-full bg-gradient-to-r ${colors.progressFrom} ${colors.progressTo} transition-[width] duration-150 ease-out`}
        style={{ width: `${scrollPct}%` }}
      />
    </div>
  );
};
