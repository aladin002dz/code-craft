import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import {
  GitCommit,
  ArrowRight,
  ArrowLeft,
  ToggleLeft,
  ToggleRight,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

export const Chapter4FiberLinkedList: React.FC = () => {
  const { playTone } = useProgress();
  const { t, isRTL } = useLanguage();

  // Flag simulating conditional hook rendering
  const [isVipCondition, setIsVipCondition] = useState<boolean>(true);
  const [brokenOrderLogs, setBrokenOrderLogs] = useState<string[]>([]);

  const handleToggleCondition = () => {
    const nextVal = !isVipCondition;
    setIsVipCondition(nextVal);
    if (!nextVal) {
      playTone('error');
      setBrokenOrderLogs(prev => [
        `VIP Hook #1 skipped! Hook pointers mismatched!`,
        ...prev.slice(0, 3)
      ]);
    } else {
      playTone('success');
      setBrokenOrderLogs(prev => [
        `Normal order restored: Hook 1 -> Hook 2 -> Hook 3 in sync.`,
        ...prev.slice(0, 3)
      ]);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="border-t-2 border-purple-400 bg-slate-900/40 border-x border-b border-slate-800 rounded-b-lg p-6 md:p-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="purple" size="md">{t.chapter4.badge1}</Badge>
            <Badge variant="rose" size="md">{t.chapter4.badge2}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono"><Clock className="w-3 h-3" /> {t.chapter4.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight font-display">
            {t.chapter4.title} <span className="text-purple-400">{t.chapter4.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            {t.chapter4.subtitle}
          </p>
        </div>
      </div>

      {/* Fiber Linked List Architecture Card */}
      <Card
        title={t.chapter4.fiberTitle}
        subtitle={t.chapter4.fiberSubtitle}
        icon={<GitCommit className="w-5 h-5 text-purple-400" />}
        badge={<Badge variant="purple">{t.chapter4.fiberBadge}</Badge>}
        accent="purple"
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>{t.chapter4.fiberDesc}</p>

          {/* Linked List Visual Diagram */}
          <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 overflow-x-auto">
            <div className="text-xs font-mono text-slate-400 mb-3 font-semibold">
              {t.chapter4.linkedListHeader}
            </div>

            <div className="flex items-center gap-3 min-w-[600px]" dir="ltr">
              {/* Hook Node 1 */}
              <div className="p-4 rounded-lg bg-slate-900 border border-cyan-500/50 flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-cyan-300">{t.chapter4.hook1Label}</span>
                  <span className="text-slate-500">Index: 0</span>
                </div>
                <div className="p-2 rounded bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>memoizedState: <span className="text-cyan-400 font-semibold">'Alice'</span></div>
                  <div>queue: <span className="text-slate-500">null</span></div>
                  <div>next: <span className="text-purple-400 font-semibold">--&gt; Hook #2</span></div>
                </div>
              </div>

              {isRTL ? <ArrowLeft className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" /> : <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />}

              {/* Hook Node 2 */}
              <div className="p-4 rounded-lg bg-slate-900 border border-emerald-500/50 flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-emerald-300">{t.chapter4.hook2Label}</span>
                  <span className="text-slate-500">Index: 1</span>
                </div>
                <div className="p-2 rounded bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>memoizedState: <span className="text-emerald-400 font-semibold">28</span></div>
                  <div>queue: <span className="text-slate-500">null</span></div>
                  <div>next: <span className="text-purple-400 font-semibold">--&gt; Hook #3</span></div>
                </div>
              </div>

              {isRTL ? <ArrowLeft className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" /> : <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />}

              {/* Hook Node 3 */}
              <div className="p-4 rounded-lg bg-slate-900 border border-amber-500/50 flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-amber-300">{t.chapter4.hook3Label}</span>
                  <span className="text-slate-500">Index: 2</span>
                </div>
                <div className="p-2 rounded bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>memoizedState: <span className="text-amber-400 font-semibold">true</span></div>
                  <div>queue: <span className="text-slate-500">null</span></div>
                  <div>next: <span className="text-slate-500 font-semibold">null (End)</span></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic">
            {t.chapter4.noticeNoKeys}
          </p>
        </div>
      </Card>

      {/* "Break the Rules of Hooks" Interactive Simulation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{t.chapter4.simTitle}</h2>
          <Badge variant="rose">{t.chapter4.simBadge}</Badge>
        </div>

        <p className="text-sm text-slate-400">
          {t.chapter4.simDesc}
        </p>

        <div className="p-6 rounded-lg bg-slate-950 border border-slate-800 space-y-6">
          
          {/* Conditional Code Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Code */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase">{t.chapter4.illegalCode}</span>
                <button
                  onClick={handleToggleCondition}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                    isVipCondition
                      ? 'bg-emerald-950 border-emerald-500/50 text-emerald-300'
                      : 'bg-rose-950 border-rose-500/50 text-rose-300 animate-pulse'
                  }`}
                >
                  <span>isVip = {String(isVipCondition)}</span>
                  {isVipCondition ? <ToggleRight className="w-5 h-5 text-emerald-400" /> : <ToggleLeft className="w-5 h-5 text-rose-400" />}
                </button>
              </div>

              <CodeBlock
                filename="BadConditionalComponent.jsx"
                highlightLines={!isVipCondition ? [3, 4, 5] : [7]}
                code={`function BadComponent({ isVip }) {\n  // ❌ ILLEGAL: Hook inside conditional!\n  if (isVip) {\n    const [badge, setBadge] = useState('VIP_GOLD'); // Hook #1\n  }\n\n  const [points, setPoints] = useState(100);       // Hook #2\n  const [isActive, setIsActive] = useState(true);   // Hook #3\n\n  return <div>Points: {points}</div>;\n}`}
              />
            </div>

            {/* Fiber Node State Live Alignment */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase">{t.chapter4.alignmentHeader}</span>
              
              <div className={`p-4 rounded-lg border transition-all ${
                isVipCondition
                  ? 'bg-emerald-950/20 border-emerald-800/60 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-600 text-rose-200'
              }`}>
                {isVipCondition ? (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center gap-2 font-semibold text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{t.chapter4.inSyncTitle}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-emerald-900/40 space-y-1">
                      <div>1st Call: `badge` receives stored state: <span className="text-cyan-400 font-semibold">'VIP_GOLD'</span> (Hook #1)</div>
                      <div>2nd Call: `points` receives stored state: <span className="text-emerald-400 font-semibold">100</span> (Hook #2)</div>
                      <div>3rd Call: `isActive` receives stored state: <span className="text-amber-400 font-semibold">true</span> (Hook #3)</div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center gap-2 font-semibold text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>{t.chapter4.corruptTitle}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-rose-900/40 space-y-1 text-rose-200">
                      <div className="text-rose-400 font-semibold">{t.chapter4.corruptDesc}</div>
                      <div>1st Call reads Hook #1 state: <span className="text-cyan-400 font-semibold">'VIP_GOLD'</span> (points is a string!)</div>
                      <div>2nd Call reads Hook #2 state: <span className="text-emerald-400 font-semibold">100</span> (isActive is a number!)</div>
                      <div>Hook count mismatch crashes component!</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Logs */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-400 min-h-[64px]" dir="ltr">
                {brokenOrderLogs.length === 0 ? (
                  <div className="text-slate-500 italic">Toggle isVip above to test</div>
                ) : (
                  brokenOrderLogs.map((l, i) => (
                    <div key={i} className={isVipCondition ? 'text-emerald-300' : 'text-rose-300'}>
                      &gt; {l}
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* The 2 Rules of Hooks Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Card
          title={t.chapter4.rule1Title}
          subtitle={t.chapter4.rule1Subtitle}
          icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          badge={<Badge variant="emerald">Invariant</Badge>}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.chapter4.rule1Desc}
          </p>
        </Card>

        <Card
          title={t.chapter4.rule2Title}
          subtitle={t.chapter4.rule2Subtitle}
          icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          badge={<Badge variant="emerald">Scope</Badge>}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.chapter4.rule2Desc}
          </p>
        </Card>

      </div>

    </div>
  );
};
