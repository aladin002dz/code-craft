import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import {
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  RotateCcw,
  RefreshCw,
  Clock
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

// Dummy variable simulating plain JavaScript variable
let globalLetCounter = 0;

export const Chapter1WhyState: React.FC = () => {
  const { playTone } = useProgress();
  const { t } = useLanguage();

  // Local variable simulation state for demonstration
  const [dummyRenderTrigger, setDummyRenderTrigger] = useState(0);
  const [localVariableValue, setLocalVariableValue] = useState(0);
  const [variableLogs, setVariableLogs] = useState<string[]>([
    'let count = 0 initialized in RAM.'
  ]);

  // Real React State counter
  const [reactStateCount, setReactStateCount] = useState(0);
  const [stateLogs, setStateLogs] = useState<string[]>([
    'useState(0) registered in React Fiber node.'
  ]);

  const handleRegularVarClick = () => {
    globalLetCounter += 1;
    setLocalVariableValue(globalLetCounter);
    playTone('click');
    setVariableLogs(prev => [
      `RAM: count = ${globalLetCounter}, UI not updated.`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleForceRerender = () => {
    globalLetCounter = 0;
    setLocalVariableValue(0);
    setDummyRenderTrigger(prev => prev + 1);
    playTone('render');
    setVariableLogs(prev => [
      '⚠️ Re-rendered! Local variables wiped to 0!',
      ...prev.slice(0, 4)
    ]);
  };

  const handleStateClick = () => {
    playTone('click');
    setReactStateCount(prev => prev + 1);
    setStateLogs(prev => [
      `setCount(${reactStateCount + 1}) -> Re-render scheduled -> DOM: ${reactStateCount + 1}`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleResetState = () => {
    playTone('step');
    setReactStateCount(0);
    setStateLogs(prev => ['State reset to 0.', ...prev.slice(0, 4)]);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="border-t-2 border-cyan-400 bg-slate-900/40 border-x border-b border-slate-800 rounded-b-lg p-6 md:p-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="cyan" size="md">{t.chapter1.badge1}</Badge>
            <Badge variant="purple" size="md">{t.chapter1.badge2}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Clock className="w-3 h-3" /> {t.chapter1.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight font-display">
            {t.chapter1.title} <span className="text-cyan-400">{t.chapter1.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            {t.chapter1.subtitle}
          </p>
        </div>
      </div>

      {/* The 2 Core Problems Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Problem 1 */}
        <Card
          title={t.chapter1.prob1Title}
          subtitle={t.chapter1.prob1Subtitle}
          icon={<AlertTriangle className="w-4 h-4 text-rose-400" />}
          badge={<Badge variant="rose">{t.chapter1.prob1Badge}</Badge>}
          accent="rose"
        >
          <div className="space-y-3 text-sm text-slate-400">
            <p>{t.chapter1.prob1Desc}</p>
            <p className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
              {t.chapter1.prob1Box}
            </p>
          </div>
        </Card>

        {/* Problem 2 */}
        <Card
          title={t.chapter1.prob2Title}
          subtitle={t.chapter1.prob2Subtitle}
          icon={<HelpCircle className="w-4 h-4 text-amber-400" />}
          badge={<Badge variant="amber">{t.chapter1.prob2Badge}</Badge>}
          accent="amber"
        >
          <div className="space-y-3 text-sm text-slate-400">
            <p>{t.chapter1.prob2Desc}</p>
            <p className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
              {t.chapter1.prob2Box}
            </p>
          </div>
        </Card>

      </div>

      {/* Interactive Side-by-Side Sandbox */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white font-display">{t.chapter1.sandboxTitle}</h2>
          <span className="text-xs text-slate-500 hidden sm:inline">
            {t.chapter1.sandboxSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: Regular Variable Component */}
          <div className="flex flex-col space-y-4 p-6 rounded-lg border-t-2 border-t-rose-400 bg-slate-900/40 border-x border-b border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-100 text-base font-display">{t.chapter1.varTitle}</h3>
              <Badge variant="rose">{t.chapter1.varBadge}</Badge>
            </div>

            <CodeBlock
              filename="PlainVariableCounter.jsx"
              code={`function PlainCounter() {\n  let count = 0; // ⚠️ Wiped on every render!\n\n  function handleClick() {\n    count = count + 1;\n    // Mutates RAM, but React is never notified!\n  }\n\n  return <div>Count: {count}</div>;\n}`}
            />

            {/* Live Interactive Widget */}
            <RenderFlashingBox
              key={dummyRenderTrigger}
              label="PlainVariableCounter"
              flashColor="rose"
            >
              <div className="space-y-4 text-center">
                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">{t.chapter1.varUiDisplay}</div>
                  <div className="text-4xl font-semibold text-rose-400 font-mono">
                    0
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    {t.chapter1.varUiStuck}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs flex items-center justify-between font-mono">
                  <span className="text-slate-500">{t.chapter1.varRamValue}</span>
                  <span className="text-rose-400 font-semibold text-sm">{localVariableValue}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleRegularVarClick}
                    className="flex-1 px-4 py-2.5 rounded-md bg-rose-500 hover:bg-rose-400 text-slate-950 font-semibold text-xs transition-colors"
                  >
                    {t.chapter1.varIncrementBtn} ({localVariableValue})
                  </button>
                  <button
                    onClick={handleForceRerender}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors border border-slate-700"
                    title="Simulate re-render"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t.chapter1.varRerenderBtn}</span>
                  </button>
                </div>
              </div>
            </RenderFlashingBox>

            {/* Console output */}
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 font-mono text-xs space-y-1 text-slate-400 max-h-32 overflow-y-auto" dir="ltr">
              <div className="text-[10px] text-slate-600 uppercase font-semibold tracking-wider">{t.chapter1.consoleTrace}</div>
              {variableLogs.map((log, i) => (
                <div key={i} className="text-slate-400 text-[11px] leading-tight">
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>

          {/* Right: React useState Component */}
          <div className="flex flex-col space-y-4 p-6 rounded-lg border-t-2 border-t-cyan-400 bg-slate-900/40 border-x border-b border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-100 text-base font-display">{t.chapter1.stateTitle}</h3>
              <Badge variant="cyan">{t.chapter1.stateBadge}</Badge>
            </div>

            <CodeBlock
              filename="StateCounter.jsx"
              code={`function StateCounter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1); // Tells React to re-render with count + 1!\n  }\n\n  return <div>Count: {count}</div>;\n}`}
            />

            {/* Live Interactive Widget */}
            <RenderFlashingBox
              label="StateCounter"
              flashColor="cyan"
            >
              <div className="space-y-4 text-center">
                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-500 mb-1">{t.chapter1.stateUiDisplay}</div>
                  <div className="text-4xl font-semibold text-cyan-400 font-mono">
                    {reactStateCount}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    {t.chapter1.stateUiAuto}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs flex items-center justify-between font-mono">
                  <span className="text-slate-500">{t.chapter1.stateFiberValue}</span>
                  <span className="text-cyan-400 font-semibold text-sm">{reactStateCount}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleStateClick}
                    className="flex-1 px-4 py-2.5 rounded-md bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors"
                  >
                    {t.chapter1.stateIncrementBtn} ({reactStateCount})
                  </button>
                  <button
                    onClick={handleResetState}
                    className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors border border-slate-700"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.chapter1.stateResetBtn}</span>
                  </button>
                </div>
              </div>
            </RenderFlashingBox>

            {/* Console output */}
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 font-mono text-xs space-y-1 text-slate-400 max-h-32 overflow-y-auto" dir="ltr">
              <div className="text-[10px] text-slate-600 uppercase font-semibold tracking-wider">{t.chapter1.consoleTrace}</div>
              {stateLogs.map((log, i) => (
                <div key={i} className="text-slate-400 text-[11px] leading-tight">
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Deep Insight Callout */}
      <div className="p-6 rounded-lg border-l-2 border-l-cyan-400 bg-slate-900/40 border-y border-r border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-4">
        <Lightbulb className="w-5 h-5 text-cyan-400 flex-shrink-0" />
        <div className="space-y-1 flex-1">
          <h4 className="text-base font-semibold text-white font-display">
            {t.chapter1.modelTitle}
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            {t.chapter1.modelDesc}
          </p>
        </div>
      </div>

    </div>
  );
};
