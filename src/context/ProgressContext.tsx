import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ChapterId } from '../types';

interface ProgressContextType {
  currentChapter: ChapterId;
  setCurrentChapter: (id: ChapterId) => void;
  completedChapters: string[];
  markChapterCompleted: (id: ChapterId) => void;
  isChapterCompleted: (id: ChapterId) => boolean;
  renderFlashEnabled: boolean;
  toggleRenderFlash: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playTone: (type: 'click' | 'render' | 'success' | 'error' | 'step') => void;
  resetProgress: () => void;
  progressPercentage: number;
}

const TOTAL_CHAPTERS = 7;

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentChapter, setCurrentChapter] = useState<ChapterId>('why-state');
  const [completedChapters, setCompletedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('usestate_completed_chapters');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [renderFlashEnabled, setRenderFlashEnabled] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    try {
      localStorage.setItem('usestate_completed_chapters', JSON.stringify(completedChapters));
    } catch (e) {
      console.warn('Could not persist progress to localStorage', e);
    }
  }, [completedChapters]);

  const markChapterCompleted = useCallback((id: ChapterId) => {
    setCompletedChapters(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  }, []);

  const isChapterCompleted = useCallback((id: ChapterId) => {
    return completedChapters.includes(id);
  }, [completedChapters]);

  const toggleRenderFlash = useCallback(() => {
    setRenderFlashEnabled(prev => !prev);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  const resetProgress = useCallback(() => {
    setCompletedChapters([]);
  }, []);

  // Web Audio API synthesized tones — a single AudioContext is created lazily
  // and reused for the app's lifetime instead of spawning a new one per tone
  // (browsers cap the number of concurrent contexts, which was throwing
  // "AudioContext encountered an error" once several piled up unclosed).
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTone = useCallback((type: 'click' | 'render' | 'success' | 'error' | 'step') => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        void ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'render') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'step') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.08); // C#
        osc.frequency.setValueAtTime(659.25, now + 0.16); // E
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.18);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch {
      // Audio context may be blocked by autoplay policies
    }
  }, [soundEnabled]);

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close().catch(() => {});
    };
  }, []);

  const progressPercentage = Math.round((completedChapters.length / TOTAL_CHAPTERS) * 100);

  return (
    <ProgressContext.Provider
      value={{
        currentChapter,
        setCurrentChapter,
        completedChapters,
        markChapterCompleted,
        isChapterCompleted,
        renderFlashEnabled,
        toggleRenderFlash,
        soundEnabled,
        toggleSound,
        playTone,
        resetProgress,
        progressPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
