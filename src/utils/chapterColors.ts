/**
 * Central color map for chapter accent colors (see `Chapter.color` in
 * src/types/index.ts and the chapter lists in src/i18n/translations.ts).
 *
 * Tailwind can't construct classes from an arbitrary string at runtime
 * (`bg-${color}-500` never gets picked up by the JIT compiler), so every
 * color used anywhere in the app must be spelled out here explicitly.
 *
 * Kept deliberately minimal — a solid accent color used sparingly (text,
 * a hairline border/underline, a small solid fill) rather than glows,
 * gradients or filled pills. See the "editorial/technical" design direction.
 */

export type ChapterColor = 'cyan' | 'purple' | 'indigo' | 'teal' | 'emerald' | 'amber' | 'rose';

interface ChapterColorClasses {
  /** Accent text color — active nav tab, floating-button label, progress bar aria. */
  text: string;
  /** Solid accent border — active tab underline, floating-button border, card left-rule. */
  border: string;
  /** Solid accent fill — progress bar, small status dots. */
  bg: string;
  /** Faint accent wash — floating-button background. */
  bgSubtle: string;
}

const CHAPTER_COLOR_MAP: Record<ChapterColor, ChapterColorClasses> = {
  cyan: { text: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400', bgSubtle: 'bg-cyan-500/10' },
  purple: { text: 'text-purple-400', border: 'border-purple-400', bg: 'bg-purple-400', bgSubtle: 'bg-purple-500/10' },
  indigo: { text: 'text-indigo-400', border: 'border-indigo-400', bg: 'bg-indigo-400', bgSubtle: 'bg-indigo-500/10' },
  teal: { text: 'text-teal-400', border: 'border-teal-400', bg: 'bg-teal-400', bgSubtle: 'bg-teal-500/10' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-400', bg: 'bg-emerald-400', bgSubtle: 'bg-emerald-500/10' },
  amber: { text: 'text-amber-400', border: 'border-amber-400', bg: 'bg-amber-400', bgSubtle: 'bg-amber-500/10' },
  rose: { text: 'text-rose-400', border: 'border-rose-400', bg: 'bg-rose-400', bgSubtle: 'bg-rose-500/10' },
};

const FALLBACK: ChapterColor = 'cyan';

export function getChapterColorClasses(color: string): ChapterColorClasses {
  return CHAPTER_COLOR_MAP[color as ChapterColor] ?? CHAPTER_COLOR_MAP[FALLBACK];
}
