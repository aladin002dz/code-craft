import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { 
  Camera, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  ListOrdered, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  Split
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

export const Chapter3SnapshotQueue: React.FC = () => {
  const { playTone } = useProgress();
  const { t, isRTL } = useLanguage();

  // Mode: 'direct' or 'functional'
  const [updaterMode, setUpdaterMode] = useState<'direct' | 'functional'>('direct');
  
  // Timeline Stepper State: 0 to 3
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Live playground state
  const [directCounter, setDirectCounter] = useState<number>(0);
  const [directLogs, setDirectLogs] = useState<string[]>([]);

  const [functionalCounter, setFunctionalCounter] = useState<number>(0);
  const [functionalLogs, setFunctionalLogs] = useState<string[]>([]);

  // Direct 3x increment handler
  const handleTripleDirect = () => {
    playTone('click');
    setDirectCounter(directCounter + 1);
    setDirectCounter(directCounter + 1);
    setDirectCounter(directCounter + 1);
    setDirectLogs(prev => [
      `count=${directCounter}. Queued setCount(${directCounter}+1) 3x. Result: ${directCounter + 1}!`,
      ...prev.slice(0, 3)
    ]);
  };

  // Functional 3x increment handler
  const handleTripleFunctional = () => {
    playTone('click');
    setFunctionalCounter(prev => prev + 1);
    setFunctionalCounter(prev => prev + 1);
    setFunctionalCounter(prev => prev + 1);
    setFunctionalLogs(prev => [
      `Queued 3 updaters (prev => prev + 1). Result: ${functionalCounter + 3}!`,
      ...prev.slice(0, 3)
    ]);
  };

  // Stepper timeline actions
  const timelineSteps = [
    {
      step: 1,
      title: t.chapter3.step1Title,
      desc: t.chapter3.step1Desc,
      badge: t.chapter3.step1Badge,
    },
    {
      step: 2,
      title: t.chapter3.step2Title,
      desc: updaterMode === 'direct' ? t.chapter3.step2DescDirect : t.chapter3.step2DescFunc,
      badge: t.chapter3.step2Badge,
    },
    {
      step: 3,
      title: t.chapter3.step3Title,
      desc: updaterMode === 'direct' ? t.chapter3.step3DescDirect : t.chapter3.step3DescFunc,
      badge: t.chapter3.step3Badge,
    },
    {
      step: 4,
      title: t.chapter3.step4Title,
      desc: updaterMode === 'direct' ? t.chapter3.step4DescDirect : t.chapter3.step4DescFunc,
      badge: t.chapter3.step4Badge,
    },
  ];

  const handleNextStep = () => {
    playTone('step');
    setCurrentStep(prev => (prev < timelineSteps.length - 1 ? prev + 1 : 0));
  };

  const handleResetTimeline = () => {
    playTone('step');
    setCurrentStep(0);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-950 border border-indigo-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-8 opacity-10 pointer-events-none">
          <Camera className="w-64 h-64 text-indigo-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="md">{t.chapter3.badge1}</Badge>
            <Badge variant="cyan" size="md">{t.chapter3.badge2}</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ {t.chapter3.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.chapter3.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">{t.chapter3.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {t.chapter3.subtitle}
          </p>
        </div>
      </div>

      {/* Snapshot Mental Model Card */}
      <Card
        title={t.chapter3.analogyTitle}
        subtitle={t.chapter3.analogySubtitle}
        icon={<Camera className="w-5 h-5 text-cyan-400" />}
        badge={<Badge variant="cyan">{t.chapter3.analogyBadge}</Badge>}
        glowColor="cyan"
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>{t.chapter3.analogyDesc}</p>
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300" dir="ltr">
            <span className="text-purple-400 font-bold">function</span> Counter() &#123;<br />
            &nbsp;&nbsp;<span className="text-slate-500">// Render #1:</span><br />
            &nbsp;&nbsp;<span className="text-purple-400">const</span> count = <span className="text-cyan-400 font-bold">0</span>; <span className="text-slate-500">// count is frozen at 0</span><br />
            &nbsp;&nbsp;<span className="text-purple-400">function</span> handleClick() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setCount(count + <span className="text-cyan-400">1</span>); <span className="text-slate-500">// setCount(0 + 1)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(count); <span className="text-slate-500">// still 0</span><br />
            &nbsp;&nbsp;&#125;<br />
            &#125;
          </div>
        </div>
      </Card>

      {/* Interactive Time-Travel Stepper */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">{t.chapter3.stepperTitle}</h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => {
                playTone('click');
                setUpdaterMode('direct');
                setCurrentStep(0);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                updaterMode === 'direct'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.chapter3.directModeBtn}
            </button>
            <button
              onClick={() => {
                playTone('click');
                setUpdaterMode('functional');
                setCurrentStep(0);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                updaterMode === 'functional'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.chapter3.funcModeBtn}
            </button>
          </div>
        </div>

        {/* Step Progression Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {timelineSteps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => {
                playTone('step');
                setCurrentStep(idx);
              }}
              className={`p-3 rounded-xl border text-left rtl:text-right transition-all ${
                currentStep === idx
                  ? 'bg-indigo-950/60 border-indigo-500 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  : currentStep > idx
                  ? 'bg-slate-900/60 border-emerald-900/40 text-emerald-400/80'
                  : 'bg-slate-950/40 border-slate-800 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono font-bold">{t.chapter3.stepOf} {s.step}</span>
                {currentStep > idx && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </div>
              <div className="text-xs font-semibold truncate">{s.badge}</div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Visualization Box */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {t.chapter3.stepOf} {timelineSteps[currentStep].step} / 4
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {timelineSteps[currentStep].title}
              </h3>
            </div>
            <Badge variant={updaterMode === 'direct' ? 'rose' : 'emerald'}>
              {updaterMode === 'direct' ? t.chapter3.directTitle : t.chapter3.funcTitle}
            </Badge>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {timelineSteps[currentStep].desc}
          </p>

          {/* Visual State Queue Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>{t.chapter3.queueLabel}</span>
              <span className="text-cyan-400 font-bold">
                {currentStep === 0 ? t.chapter3.queueEmpty : currentStep >= 2 ? t.chapter3.queuePending : t.chapter3.queueing}
              </span>
            </div>

            {/* Queue items animation */}
            <div className="flex items-center gap-3 overflow-x-auto p-2 min-h-[64px]" dir="ltr">
              {currentStep === 0 && (
                <div className="text-xs text-slate-500 italic">{t.chapter3.noUpdatesQueued}</div>
              )}

              {currentStep >= 1 && updaterMode === 'direct' && (
                <>
                  <div className="px-3 py-2 rounded-lg bg-rose-950/80 border border-rose-800 text-rose-200 text-xs font-mono">
                    setCount(0 + 1)
                  </div>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-slate-600" /> : <ArrowRight className="w-4 h-4 text-slate-600" />}
                  <div className="px-3 py-2 rounded-lg bg-rose-950/80 border border-rose-800 text-rose-200 text-xs font-mono">
                    setCount(0 + 1)
                  </div>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-slate-600" /> : <ArrowRight className="w-4 h-4 text-slate-600" />}
                  <div className="px-3 py-2 rounded-lg bg-rose-950/80 border border-rose-800 text-rose-200 text-xs font-mono">
                    setCount(0 + 1)
                  </div>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-slate-600" /> : <ArrowRight className="w-4 h-4 text-slate-600" />}
                  <div className="px-3 py-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold">
                    Result: 1
                  </div>
                </>
              )}

              {currentStep >= 1 && updaterMode === 'functional' && (
                <>
                  <div className="px-3 py-2 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs font-mono">
                    (0) =&gt; 0 + 1 = 1
                  </div>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-slate-600" /> : <ArrowRight className="w-4 h-4 text-slate-600" />}
                  <div className="px-3 py-2 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs font-mono">
                    (1) =&gt; 1 + 1 = 2
                  </div>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-slate-600" /> : <ArrowRight className="w-4 h-4 text-slate-600" />}
                  <div className="px-3 py-2 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs font-mono">
                    (2) =&gt; 2 + 1 = 3
                  </div>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-slate-600" /> : <ArrowRight className="w-4 h-4 text-slate-600" />}
                  <div className="px-3 py-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold">
                    Result: 3
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Step Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleResetTimeline}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.chapter3.resetTimeline}</span>
            </button>

            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-indigo-500/20"
            >
              <span>{currentStep === timelineSteps.length - 1 ? t.chapter3.startOver : t.chapter3.nextStep}</span>
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Live Side-by-Side Playground */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Split className="w-5 h-5 text-cyan-400" />
          <span>{t.chapter3.liveComparisonTitle}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Direct 3x Counter */}
          <div className="p-6 rounded-2xl bg-rose-950/10 border border-rose-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-rose-300">{t.chapter3.directTitle}</h3>
              <Badge variant="rose">{t.chapter3.directBadge}</Badge>
            </div>

            <CodeBlock
              filename="DirectUpdates.jsx"
              code={`function handleClick() {\n  setCount(count + 1);\n  setCount(count + 1);\n  setCount(count + 1);\n  // Result is 1, not 3!\n}`}
            />

            <RenderFlashingBox label="DirectCounter" flashColor="rose" className="bg-slate-950">
              <div className="text-center space-y-4">
                <div className="text-3xl font-black text-rose-400 font-mono">
                  {directCounter}
                </div>
                <button
                  onClick={handleTripleDirect}
                  className="w-full px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all shadow-lg shadow-rose-950/40"
                >
                  {t.chapter3.directBtn}
                </button>
              </div>
            </RenderFlashingBox>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 font-mono text-[11px] text-slate-400 max-h-24 overflow-y-auto" dir="ltr">
              {directLogs.length === 0 ? '> Click above to test' : directLogs.map((l, i) => <div key={i} className="text-rose-300/90">&gt; {l}</div>)}
            </div>
          </div>

          {/* Functional 3x Counter */}
          <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-emerald-300">{t.chapter3.funcTitle}</h3>
              <Badge variant="emerald">{t.chapter3.funcBadge}</Badge>
            </div>

            <CodeBlock
              filename="FunctionalUpdates.jsx"
              code={`function handleClick() {\n  setCount(prev => prev + 1);\n  setCount(prev => prev + 1);\n  setCount(prev => prev + 1);\n  // Result is 3!\n}`}
            />

            <RenderFlashingBox label="FunctionalCounter" flashColor="emerald" className="bg-slate-950">
              <div className="text-center space-y-4">
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  {functionalCounter}
                </div>
                <button
                  onClick={handleTripleFunctional}
                  className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-950/40"
                >
                  {t.chapter3.funcBtn}
                </button>
              </div>
            </RenderFlashingBox>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 font-mono text-[11px] text-slate-400 max-h-24 overflow-y-auto" dir="ltr">
              {functionalLogs.length === 0 ? '> Click above to test' : functionalLogs.map((l, i) => <div key={i} className="text-emerald-300/90">&gt; {l}</div>)}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
