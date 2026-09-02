import React from 'react';
import { Braces, CheckCircle2, Rocket } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { Card } from '../common/Card';
import { getChapterColorClasses, type ChapterColor } from '../../utils/chapterColors';
import type { ChapterId } from '../../types';

/**
 * The app's default entry point: a summary/roadmap page introducing the
 * course and listing its seven modules, with a way in to the full
 * chapter-based experience (the "current homepage", now `CoursePage` in
 * App.tsx). Deliberately lightweight — its own minimal header/footer
 * instead of the course chrome (progress bar, sound toggles, chapter
 * tabs...), none of which make sense before the course has started.
 */
export const LandingPage: React.FC = () => {
  const {
    currentChapter,
    setCurrentChapter,
    setView,
    isChapterCompleted,
    completedChapters,
    progressPercentage,
    playTone,
  } = useProgress();

  const { t } = useLanguage();

  const hasProgress = completedChapters.length > 0;

  const openCourse = (chapterId?: ChapterId) => {
    playTone('click');
    if (chapterId) setCurrentChapter(chapterId);
    setView('course');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Minimal top bar — brand + language only, no course controls */}
      <header className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Braces className="w-5 h-5 text-cyan-400" strokeWidth={2.25} />
            <span className="text-base font-semibold tracking-tight text-white font-display">
              React<span className="text-slate-600">.</span><span className="text-cyan-400">useState</span>
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 text-center">
          <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-4">
            {t.landing.eyebrow}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            {t.landing.title}{' '}
            <span className="text-cyan-400">{t.landing.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.landing.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={() => openCourse(hasProgress ? currentChapter : undefined)}
              className="flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              <Rocket className="w-4 h-4" />
              <span>{hasProgress ? t.landing.ctaContinue : t.landing.ctaStart}</span>
            </button>
            {hasProgress && (
              <span className="font-mono text-xs text-slate-500">
                {progressPercentage}% {t.landing.progressSuffix}
              </span>
            )}
          </div>
        </section>

        {/* Roadmap */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              {t.landing.roadmapEyebrow}
            </span>
            <h2 className="mt-1 font-display text-xl font-semibold text-white">
              {t.landing.roadmapTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{t.landing.roadmapSubtitle}</p>
          </div>

          <div className="space-y-3">
            {t.chapters.map((chap) => {
              const colors = getChapterColorClasses(chap.color);
              const completed = isChapterCompleted(chap.id);

              return (
                <button
                  key={chap.id}
                  onClick={() => openCourse(chap.id)}
                  className="w-full text-left rtl:text-right rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-600"
                >
                  <Card accent={chap.color as ChapterColor} className="hover:border-slate-700 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-slate-600 mt-0.5 w-5 shrink-0">
                          {String(chap.number).padStart(2, '0')}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[11px] font-semibold uppercase tracking-wider ${colors.text}`}>
                              {chap.badge}
                            </span>
                            <span className="text-[11px] text-slate-600">· {chap.readTime}</span>
                          </div>
                          <h3 className="text-sm font-semibold text-slate-100">{chap.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">{chap.subtitle}</p>
                        </div>
                      </div>
                      {completed && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                    </div>
                  </Card>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-600">
          {t.footer.builtWith}
        </div>
      </footer>
    </div>
  );
};
