import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { ShoppingApp } from '../sandboxes/ShoppingApp';
import { FormWizardApp } from '../sandboxes/FormWizardApp';
import { UndoRedoApp } from '../sandboxes/UndoRedoApp';
import { CustomHooksApp } from '../sandboxes/CustomHooksApp';
import { 
  Terminal, 
  ShoppingCart, 
  FileText, 
  History, 
  Sparkles
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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-950/40 via-slate-900/80 to-slate-950 border border-emerald-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-8 opacity-10 pointer-events-none">
          <Terminal className="w-64 h-64 text-emerald-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="emerald" size="md">{t.chapter6.badge1}</Badge>
            <Badge variant="cyan" size="md">{t.chapter6.badge2}</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ {t.chapter6.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.chapter6.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{t.chapter6.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
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
            className={`p-4 rounded-2xl border text-left rtl:text-right transition-all flex flex-col justify-between space-y-2 ${
              activeTab === tab.id
                ? 'bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-xl ${
                activeTab === tab.id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
              }`}>
                {tab.icon}
              </div>
              <Badge variant={activeTab === tab.id ? 'emerald' : 'slate'}>
                {tab.badge}
              </Badge>
            </div>
            <div>
              <div className="text-sm font-bold text-white">{tab.label}</div>
              <div className="text-xs text-slate-400 line-clamp-1">{tab.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Render Active Sandbox */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
        {activeTab === 'shopping' && <ShoppingApp />}
        {activeTab === 'form' && <FormWizardApp />}
        {activeTab === 'undoredo' && <UndoRedoApp />}
        {activeTab === 'customhook' && <CustomHooksApp />}
      </div>

    </div>
  );
};
