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
  X
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import type { ChapterId } from '../../types';
import { CheatSheetModal } from './CheatSheetModal';

export const CHAPTERS: {
  id: ChapterId;
  number: number;
  title: string;
  shortTitle: string;
  badge: string;
}[] = [
  { id: 'why-state', number: 1, title: "The 'Why State?' Dilemma", shortTitle: '1. Why State?', badge: 'Foundation' },
  { id: 'anatomy', number: 2, title: 'Anatomy & Mechanics of useState', shortTitle: '2. Anatomy', badge: 'Syntax' },
  { id: 'snapshot-queue', number: 3, title: 'State as a Snapshot & Queueing', shortTitle: '3. Snapshot & Queue', badge: 'Deep Dive' },
  { id: 'fiber-hooks', number: 4, title: 'Fiber Nodes & The Linked List', shortTitle: '4. Fiber Internals', badge: 'Under Hood' },
  { id: 'complex-state', number: 5, title: 'Objects & Arrays Immutability', shortTitle: '5. Complex State', badge: 'Patterns' },
  { id: 'interactive-labs', number: 6, title: 'Interactive Real-world Labs', shortTitle: '6. Live Labs', badge: 'Practice' },
  { id: 'quiz', number: 7, title: 'Mastery Quiz & Certification', shortTitle: '7. Quiz Arena', badge: 'Challenge' },
];

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

  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectChapter = (id: ChapterId) => {
    playTone('click');
    setCurrentChapter(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                    React<span className="text-cyan-400">useState</span>
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800">
                    Interactive Guide
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                  Master React State, Snapshots & Internals Visually
                </p>
              </div>
            </div>

            {/* Middle Progress Overview (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Progress:</span>
              </div>
              <div className="w-28 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {completedChapters.length} / {CHAPTERS.length} ({progressPercentage}%)
              </span>
            </div>

            {/* Right Quick Controls */}
            <div className="flex items-center gap-2">
              
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
                    <span className="hidden sm:inline">Render Flash: ON</span>
                  </>
                ) : (
                  <>
                    <ZapOff className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Render Flash: OFF</span>
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
                title={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
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
                <span className="hidden md:inline">Cheat Sheet</span>
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
            <nav className="flex items-center space-x-1 py-2">
              {CHAPTERS.map((chap) => {
                const isActive = currentChapter === chap.id;
                const isCompleted = isChapterCompleted(chap.id);

                return (
                  <button
                    key={chap.id}
                    onClick={() => handleSelectChapter(chap.id)}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono ${
                        isActive ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
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

        {/* Mobile Dropdown Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-2 animate-fadeIn">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pb-1">
              Select Module
            </div>
            {CHAPTERS.map((chap) => {
              const isActive = currentChapter === chap.id;
              const isCompleted = isChapterCompleted(chap.id);

              return (
                <button
                  key={chap.id}
                  onClick={() => handleSelectChapter(chap.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
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
