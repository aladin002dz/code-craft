import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { ShoppingBag, FileText, Palette, Box } from 'lucide-react';
import { ShoppingApp } from '../sandboxes/ShoppingApp';
import { FormWizardApp } from '../sandboxes/FormWizardApp';
import { UndoRedoApp } from '../sandboxes/UndoRedoApp';
import { CustomHooksApp } from '../sandboxes/CustomHooksApp';
import { useProgress } from '../../context/ProgressContext';

type TabType = 'shopping' | 'wizard' | 'undoredo' | 'customhooks';

export const Chapter6Sandboxes: React.FC = () => {
  const { playTone } = useProgress();
  const [activeTab, setActiveTab] = useState<TabType>('shopping');

  const tabs: { id: TabType; title: string; icon: React.ReactNode; badge: string; desc: string }[] = [
    {
      id: 'shopping',
      title: '1. Shopping Cart & Derived State',
      icon: <ShoppingBag className="w-4 h-4" />,
      badge: 'Derived State',
      desc: 'Learn how to calculate totals and discounts without creating redundant state.'
    },
    {
      id: 'wizard',
      title: '2. Multi-Step Form Wizard',
      icon: <FileText className="w-4 h-4" />,
      badge: 'Consolidated State',
      desc: 'Manage complex multi-field form data with a single state object.'
    },
    {
      id: 'undoredo',
      title: '3. Undo / Redo Time Machine',
      icon: <Palette className="w-4 h-4" />,
      badge: 'State Stacks',
      desc: 'Implement past, present, and future state history arrays.'
    },
    {
      id: 'customhooks',
      title: '4. Custom Hook Encapsulation',
      icon: <Box className="w-4 h-4" />,
      badge: 'Reusable Logic',
      desc: 'Encapsulate state logic into useToggle and useCounter custom hooks.'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 p-6 md:p-10 shadow-2xl">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="md">Module 6</Badge>
            <Badge variant="emerald" size="md">Hands-On Practice</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ 4 Interactive Live Sandboxes</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Real-World Labs</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Put state theory into practice. Explore 4 production-grade state patterns used in modern web applications.
          </p>
        </div>
      </div>

      {/* Lab Tabs Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playTone('click');
                setActiveTab(tab.id);
              }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                isActive
                  ? 'bg-slate-900 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/40'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                  {tab.icon}
                </div>
                <Badge variant={isActive ? 'cyan' : 'slate'} size="sm">{tab.badge}</Badge>
              </div>
              <div className="font-bold text-sm text-white">{tab.title}</div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-2">{tab.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Sandbox Render */}
      <div className="pt-2">
        {activeTab === 'shopping' && <ShoppingApp />}
        {activeTab === 'wizard' && <FormWizardApp />}
        {activeTab === 'undoredo' && <UndoRedoApp />}
        {activeTab === 'customhooks' && <CustomHooksApp />}
      </div>

    </div>
  );
};
