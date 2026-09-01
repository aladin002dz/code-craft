/**
 * Central color map for chapter accent colors (see `Chapter.color` in
 * src/types/index.ts and the chapter lists in src/i18n/translations.ts).
 *
 * Tailwind can't construct classes from an arbitrary string at runtime
 * (`bg-${color}-500` never gets picked up by the JIT compiler), so every
 * color used anywhere in the app must be spelled out here explicitly.
 */

export type ChapterColor = 'cyan' | 'purple' | 'indigo' | 'teal' | 'emerald' | 'amber' | 'rose';

interface ChapterColorClasses {
  /** Active nav tab: text + background tint + border */
  navActiveText: string;
  navActiveBg: string;
  navActiveBorder: string;
  /** Solid badge/number pill background */
  pillBg: string;
  pillText: string;
  /** Scroll progress bar gradient */
  progressFrom: string;
  progressTo: string;
  /** Trophy / module badge when unlocked */
  badgeText: string;
  badgeBg: string;
  badgeBorder: string;
  badgeGlow: string;
}

const CHAPTER_COLOR_MAP: Record<ChapterColor, ChapterColorClasses> = {
  cyan: {
    navActiveText: 'text-cyan-300',
    navActiveBg: 'bg-cyan-500/15',
    navActiveBorder: 'border-cyan-500/40',
    pillBg: 'bg-cyan-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-cyan-500',
    progressTo: 'to-cyan-300',
    badgeText: 'text-cyan-300',
    badgeBg: 'bg-cyan-950/80',
    badgeBorder: 'border-cyan-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(6,182,212,0.5)]',
  },
  purple: {
    navActiveText: 'text-purple-300',
    navActiveBg: 'bg-purple-500/15',
    navActiveBorder: 'border-purple-500/40',
    pillBg: 'bg-purple-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-purple-500',
    progressTo: 'to-purple-300',
    badgeText: 'text-purple-300',
    badgeBg: 'bg-purple-950/80',
    badgeBorder: 'border-purple-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(168,85,247,0.5)]',
  },
  indigo: {
    navActiveText: 'text-indigo-300',
    navActiveBg: 'bg-indigo-500/15',
    navActiveBorder: 'border-indigo-500/40',
    pillBg: 'bg-indigo-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-indigo-500',
    progressTo: 'to-indigo-300',
    badgeText: 'text-indigo-300',
    badgeBg: 'bg-indigo-950/80',
    badgeBorder: 'border-indigo-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(99,102,241,0.5)]',
  },
  teal: {
    navActiveText: 'text-teal-300',
    navActiveBg: 'bg-teal-500/15',
    navActiveBorder: 'border-teal-500/40',
    pillBg: 'bg-teal-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-teal-500',
    progressTo: 'to-teal-300',
    badgeText: 'text-teal-300',
    badgeBg: 'bg-teal-950/80',
    badgeBorder: 'border-teal-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(20,184,166,0.5)]',
  },
  emerald: {
    navActiveText: 'text-emerald-300',
    navActiveBg: 'bg-emerald-500/15',
    navActiveBorder: 'border-emerald-500/40',
    pillBg: 'bg-emerald-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-emerald-500',
    progressTo: 'to-emerald-300',
    badgeText: 'text-emerald-300',
    badgeBg: 'bg-emerald-950/80',
    badgeBorder: 'border-emerald-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(16,185,129,0.5)]',
  },
  amber: {
    navActiveText: 'text-amber-300',
    navActiveBg: 'bg-amber-500/15',
    navActiveBorder: 'border-amber-500/40',
    pillBg: 'bg-amber-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-amber-500',
    progressTo: 'to-amber-300',
    badgeText: 'text-amber-300',
    badgeBg: 'bg-amber-950/80',
    badgeBorder: 'border-amber-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(245,158,11,0.5)]',
  },
  rose: {
    navActiveText: 'text-rose-300',
    navActiveBg: 'bg-rose-500/15',
    navActiveBorder: 'border-rose-500/40',
    pillBg: 'bg-rose-400',
    pillText: 'text-slate-950',
    progressFrom: 'from-rose-500',
    progressTo: 'to-rose-300',
    badgeText: 'text-rose-300',
    badgeBg: 'bg-rose-950/80',
    badgeBorder: 'border-rose-500/50',
    badgeGlow: 'shadow-[0_0_10px_rgba(244,63,94,0.5)]',
  },
};

const FALLBACK: ChapterColor = 'cyan';

export function getChapterColorClasses(color: string): ChapterColorClasses {
  return CHAPTER_COLOR_MAP[color as ChapterColor] ?? CHAPTER_COLOR_MAP[FALLBACK];
}
