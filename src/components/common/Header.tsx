import React, { useState } from 'react';
import {
  Braces,
  Volume2,
  VolumeX,
  Zap,
  ZapOff,
  BookOpen,
  CheckCircle2,
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
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        {/* Top bar with Branding, Controls, and Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Left Brand Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleSelectChapter('why-state')}>
              <Braces className="w-5 h-5 text-cyan-400" strokeWidth={2.25} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold tracking-tight text-white font-display">
                    React<span className="text-slate-600">.</span><span className="text-cyan-400">useState</span>
                  </span>
                  <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {t.header.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 hidden md:block">
                  {t.header.brandSubtitle}
                </p>
              </div>
            </div>

            {/* Middle Progress Overview (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 text-xs">
              <span className="text-slate-500">{t.header.progress}</span>
              <div className="w-24 h-1 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="font-mono font-semibold text-slate-300">
                {completedChapters.length}/{t.chapters.length}
              </span>
              <div className="flex items-center gap-1 pl-3 ml-1 border-l border-slate-800">
                {t.chapters.map((chap) => {
                  const unlocked = isChapterCompleted(chap.id);
                  const colors = getChapterColorClasses(chap.color);
                  return (
                    <button
                      key={chap.id}
                      onClick={() => handleSelectChapter(chap.id)}
                      title={`${chap.shortTitle}${unlocked ? ' ✓' : ''}`}
                      aria-label={`${chap.shortTitle}${unlocked ? ' — completed' : ' — not completed yet'}`}
                      className={`transition-colors ${unlocked ? colors.text : 'text-slate-700 hover:text-slate-500'}`}
                    >
                      <Award className="w-3.5 h-3.5" fill={unlocked ? 'currentColor' : 'none'} fillOpacity={unlocked ? 0.2 : 0} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Quick Controls */}
            <div className="flex items-center gap-1.5">

              {/* Language Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs font-medium transition-colors"
                  title="Switch Language / Changer de langue / تغيير اللغة"
                  aria-label="Switch Language / Changer de langue / تغيير اللغة"
                  aria-haspopup="menu"
                  aria-expanded={isLangDropdownOpen}
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span className="uppercase font-mono">{language}</span>
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 rounded-md bg-slate-900 border border-slate-800 shadow-lg p-1 z-50 animate-fadeIn">
                    {languagesList.map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={() => handleLanguageChange(langItem.code)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                          language === langItem.code
                            ? 'text-cyan-400'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{langItem.flag}</span>
                          <span>{langItem.label}</span>
                        </span>
                        {language === langItem.code && <span>✓</span>}
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
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                  renderFlashEnabled
                    ? 'border-cyan-800 text-cyan-400'
                    : 'border-slate-800 text-slate-500 hover:text-slate-300'
                }`}
                title="Render Flasher: Highlights components when they re-render"
                aria-label={renderFlashEnabled ? t.header.renderFlashOn : t.header.renderFlashOff}
                aria-pressed={renderFlashEnabled}
              >
                {renderFlashEnabled ? <Zap className="w-3.5 h-3.5" /> : <ZapOff className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{renderFlashEnabled ? t.header.renderFlashOn : t.header.renderFlashOff}</span>
              </button>

              {/* Sound Audio Toggle */}
              <button
                onClick={() => {
                  toggleSound();
                  if (!soundEnabled) playTone('click');
                }}
                className={`p-1.5 rounded-md border transition-colors ${
                  soundEnabled
                    ? 'border-slate-700 text-cyan-400'
                    : 'border-slate-800 text-slate-500 hover:text-slate-300'
                }`}
                title={soundEnabled ? 'Mute' : 'Unmute'}
                aria-label={soundEnabled ? 'Mute' : 'Unmute'}
                aria-pressed={soundEnabled}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Cheat Sheet Modal Opener */}
              <button
                onClick={() => {
                  playTone('click');
                  setIsCheatSheetOpen(true);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-700 text-slate-200 hover:border-slate-600 hover:text-white text-xs font-medium transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.header.cheatSheet}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-md border border-slate-800 text-slate-300 md:hidden"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Tabs Horizontal Nav (Desktop) — underline style, not filled pills */}
        <div className="hidden md:block border-t border-slate-800 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-5 rtl:space-x-reverse">
              {t.chapters.map((chap) => {
                const isActive = currentChapter === chap.id;
                const isCompleted = isChapterCompleted(chap.id);
                const colors = getChapterColorClasses(chap.color);

                return (
                  <button
                    key={chap.id}
                    onClick={() => handleSelectChapter(chap.id)}
                    className={`relative flex items-center gap-1.5 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
                      isActive
                        ? `${colors.text} ${colors.border}`
                        : 'text-slate-500 border-transparent hover:text-slate-300'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <span className="font-mono text-[10px] text-slate-600">{chap.number}</span>
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
          <div className="md:hidden border-t border-slate-800 bg-slate-950 p-3 space-y-1 animate-fadeIn">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 pb-1">
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium border-l-2 rtl:border-l-0 rtl:border-r-2 transition-colors ${
                    isActive
                      ? `${colors.text} ${colors.border} bg-slate-900/60`
                      : 'text-slate-300 border-transparent hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500 w-4">{chap.number}</span>
                    <span>{chap.title}</span>
                  </div>
                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
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
