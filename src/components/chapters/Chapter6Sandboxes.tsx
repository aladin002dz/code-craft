import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { ShoppingApp } from '../sandboxes/ShoppingApp';
import { FormWizardApp } from '../sandboxes/FormWizardApp';
import { UndoRedoApp } from '../sandboxes/UndoRedoApp';
import { CustomHooksApp } from '../sandboxes/CustomHooksApp';
import {
  ShoppingCart,
  FileText,
  History,
  Sparkles,
  Clock
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

type SandboxTab = 'shopping' | 'form' | 'undoredo' | 'customhook';

export const Chapter6Sandboxes: React.FC = () => {
  const { playTone } = useProgress();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<SandboxTab>('shopping');

  const tabs: { id: SandboxTab; label: string; icon: React.ReactNode; badge: string; desc: string }[] = [
    {
      id: 'shopping',
      label: t.chapter6.tab1Title,
      icon: <ShoppingCart className="w-4 h-4" />,
      badge: t.chapter6.tab1Badge,
      desc: t.chapter6.tab1Desc
    },
    {
      id: 'form',
      label: t.chapter6.tab2Title,
      icon: <FileText className="w-4 h-4" />,
      badge: t.chapter6.tab2Badge,
      desc: t.chapter6.tab2Desc
    },
    {
      id: 'undoredo',
      label: t.chapter6.tab3Title,
      icon: <History className="w-4 h-4" />,
      badge: t.chapter6.tab3Badge,
      desc: t.chapter6.tab3Desc
    },
    {
      id: 'customhook',
      label: t.chapter6.tab4Title,
      icon: <Sparkles className="w-4 h-4" />,
      badge: t.chapter6.tab4Badge,
      desc: t.chapter6.tab4Desc
    },
  ];

  const handleTabChange = (tabId: SandboxTab) => {
    playTone('step');
    setActiveTab(tabId);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="border-t-2 border-emerald-400 bg-slate-900/40 border-x border-b border-slate-800 rounded-b-lg p-6 md:p-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="emerald" size="md">{t.chapter6.badge1}</Badge>
            <Badge variant="cyan" size="md">{t.chapter6.badge2}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono"><Clock className="w-3 h-3" /> {t.chapter6.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight font-display">
            {t.chapter6.title} <span className="text-emerald-400">{t.chapter6.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            {t.chapter6.subtitle}
          </p>
        </div>
      </div>

      {/* Sandbox Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`p-4 rounded-lg border text-left rtl:text-right transition-colors flex flex-col justify-between space-y-2 ${
              activeTab === tab.id
                ? 'border-t-2 border-t-emerald-400 border-x-slate-800 border-b-slate-800 bg-slate-900/40'
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={activeTab === tab.id ? 'text-emerald-400' : 'text-slate-500'}>
                {tab.icon}
              </span>
              <Badge variant={activeTab === tab.id ? 'emerald' : 'slate'}>
                {tab.badge}
              </Badge>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{tab.label}</div>
              <div className="text-xs text-slate-500 line-clamp-1">{tab.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Render Active Sandbox */}
      <div className="p-6 md:p-8 rounded-lg bg-slate-900/40 border border-slate-800">
        {activeTab === 'shopping' && <ShoppingApp />}
        {activeTab === 'form' && <FormWizardApp />}
        {activeTab === 'undoredo' && <UndoRedoApp />}
        {activeTab === 'customhook' && <CustomHooksApp />}
      </div>

    </div>
  );
};
