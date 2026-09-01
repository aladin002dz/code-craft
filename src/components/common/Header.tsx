import React, { useState } from 'react';
import {
  Atom,
  Volume2,
  VolumeX,
  Zap,
  ZapOff,
  BookOpen,
  CheckCircle2,
  Flame,
  Menu,
  X,
  Languages,
  Award
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';
import type { ChapterId, Language } from '../../types';
import { CheatSheetModal } from './CheatSheetModal';
import { ScrollProgressBar } from './ScrollProgressBar';
import { getChapterColorClasses } from '../../utils/chapterColors';

export const Header: React.FC = () => {
  const {
    currentChapter,
    setCurrentChapter,
    isChapterCompleted,
    renderFlashEnabled,
    toggleRenderFlash,
    soundEnabled,
    toggleSound,
    playTone,
    progressPercentage,
    completedChapters
  } = useProgress();

  const { language, setLanguage, t } = useLanguage();
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleSelectChapter = (id: ChapterId) => {
    playTone('click');
    setCurrentChapter(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: Language) => {
    playTone('click');
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl transition-all">
        {/* Top bar with Branding, Controls, and Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleSelectChapter('why-state')}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                <Atom className="w-6 h-6 animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black tracking-tight text-white">
                    React<span className="text-slate-500">.</span><span className="text-cyan-400">useState</span>
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800">
                    {t.header.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                  {t.header.brandSubtitle}
                </p>
              </div>
            </div>

            {/* Middle Progress Overview (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>{t.header.progress}</span>
              </div>
              <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {completedChapters.length} / {t.chapters.length} ({progressPercentage}%)
              </span>
              <div className="flex items-center gap-1 pl-2 ml-1 border-l border-slate-800">
                {t.chapters.map((chap) => {
                  const unlocked = isChapterCompleted(chap.id);
                  const colors = getChapterColorClasses(chap.color);
                  return (
                    <button
                      key={chap.id}
                      onClick={() => handleSelectChapter(chap.id)}
                      title={`${chap.shortTitle}${unlocked ? ' ✓' : ''}`}
                      className={`transition-all ${
                        unlocked
                          ? `${colors.badgeText} scale-100`
                          : 'text-slate-700 hover:text-slate-500 scale-90'
                      }`}
                    >
                      <Award className="w-3.5 h-3.5" fill={unlocked ? 'currentColor' : 'none'} fillOpacity={unlocked ? 0.25 : 0} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Quick Controls */}
            <div className="flex items-center gap-2">
              
              {/* Language Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-all"
                  title="Switch Language / Changer de langue / تغيير اللغة"
                >
                  <Languages className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="uppercase font-bold font-mono">{language}</span>
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-1 z-50 animate-fadeIn">
                    {languagesList.map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={() => handleLanguageChange(langItem.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          language === langItem.code
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{langItem.flag}</span>
                          <span>{langItem.label}</span>
                        </span>
                        {language === langItem.code && <span className="text-cyan-400 font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Render Flash Toggle */}
              <button
                onClick={() => {
                  playTone('click');
                  toggleRenderFlash();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  renderFlashEnabled
                    ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
                title="Render Flasher: Highlights components when they re-render"
              >
                {renderFlashEnabled ? (
                  <>
                    <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="hidden sm:inline">{t.header.renderFlashOn}</span>
                  </>
                ) : (
                  <>
                    <ZapOff className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.header.renderFlashOff}</span>
                  </>
                )}
              </button>

              {/* Sound Audio Toggle */}
              <button
                onClick={() => {
                  toggleSound();
                  if (!soundEnabled) playTone('click');
                }}
                className={`p-2 rounded-xl border transition-all ${
                  soundEnabled
                    ? 'bg-slate-900 border-slate-700 text-cyan-400'
                    : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-400'
                }`}
                title={soundEnabled ? 'Mute' : 'Unmute'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Cheat Sheet Modal Opener */}
              <button
                onClick={() => {
                  playTone('click');
                  setIsCheatSheetOpen(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-500/20 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.header.cheatSheet}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 md:hidden"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Tabs Horizontal Nav (Desktop) */}
        <div className="hidden md:block border-t border-slate-800/80 bg-slate-950/95 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-1 rtl:space-x-reverse py-2">
              {t.chapters.map((chap) => {
                const isActive = currentChapter === chap.id;
                const isCompleted = isChapterCompleted(chap.id);
                const colors = getChapterColorClasses(chap.color);

                return (
                  <button
                    key={chap.id}
                    onClick={() => handleSelectChapter(chap.id)}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? `${colors.navActiveBg} ${colors.navActiveText} border ${colors.navActiveBorder} shadow-sm`
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
                        isActive ? `${colors.pillBg} ${colors.pillText} font-bold` : 'bg-slate-800 text-slate-400'
                      }`}>
                        {chap.number}
                      </span>
                    )}
                    <span>{chap.shortTitle}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Scroll progress within the current chapter, tinted to its accent color */}
        <ScrollProgressBar />

        {/* Mobile Dropdown Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-2 animate-fadeIn">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pb-1">
              {t.header.moduleSelect}
            </div>
            {t.chapters.map((chap) => {
              const isActive = currentChapter === chap.id;
              const isCompleted = isChapterCompleted(chap.id);
              const colors = getChapterColorClasses(chap.color);

              return (
                <button
                  key={chap.id}
                  onClick={() => handleSelectChapter(chap.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? `${colors.navActiveBg} ${colors.navActiveText} border ${colors.navActiveBorder}`
                      : 'text-slate-300 bg-slate-900/60 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-300">
                      {chap.number}
                    </span>
                    <span>{chap.title}</span>
                  </div>
                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Cheat Sheet Modal */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </>
  );
};
