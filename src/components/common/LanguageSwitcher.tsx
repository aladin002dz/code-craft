import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

interface LanguageSwitcherProps {
  /** Fires right before the language actually changes — e.g. so callers can play a UI sound. */
  onChange?: (lang: Language) => void;
  className?: string;
}

/**
 * Compact language-switcher dropdown, shared between the course Header and
 * the landing page so the two don't maintain separate copies of the same
 * open/close + selection logic.
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChange, className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    onChange?.(lang);
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs font-medium transition-colors"
        title="Switch Language / Changer de langue / تغيير اللغة"
        aria-label="Switch Language / Changer de langue / تغيير اللغة"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Languages className="w-3.5 h-3.5" />
        <span className="uppercase font-mono">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 rounded-md bg-slate-900 border border-slate-800 shadow-lg p-1 z-50 animate-fadeIn">
          {LANGUAGES.map((langItem) => (
            <button
              key={langItem.code}
              onClick={() => handleSelect(langItem.code)}
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
  );
};
