import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import {
  Layers,
  Clock
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

type SyntaxToken = 'destructuring' | 'state' | 'setter' | 'hook' | 'initial';

export const Chapter2Anatomy: React.FC = () => {
  const { playTone } = useProgress();
  const { t } = useLanguage();

  // Active token for syntax dissection
  const [activeToken, setActiveToken] = useState<SyntaxToken>('state');

  // Benchmark simulator state
  const [eagerRenders, setEagerRenders] = useState(0);
  const [eagerCalculations, setEagerCalculations] = useState(0);

  const [lazyRenders, setLazyRenders] = useState(0);
  const [lazyCalculations, setLazyCalculations] = useState(0);

  // Trigger for eager button
  const handleEagerClick = () => {
    playTone('click');
    setEagerRenders(prev => prev + 1);
    setEagerCalculations(prev => prev + 1);
  };

  // Trigger for lazy button
  const handleLazyClick = () => {
    playTone('click');
    setLazyRenders(prev => prev + 1);
  };

  // Reset benchmark
  const handleResetBenchmark = () => {
    playTone('step');
    setEagerRenders(0);
    setEagerCalculations(1);

    setLazyRenders(0);
    setLazyCalculations(1);
  };

  const tokenDetails: Record<SyntaxToken, { title: string; badge: string; description: string; codeExample: string }> = {
    destructuring: {
      title: t.chapter2.destructuringTitle,
      badge: t.chapter2.destructuringBadge,
      description: t.chapter2.destructuringDesc,
      codeExample: `// Under the hood, useState returns an array of length 2:\nconst stateTuple = useState(0);\nconst count = stateTuple[0];    // 1st item: Current Value\nconst setCount = stateTuple[1]; // 2nd item: Dispatcher Function`
    },
    state: {
      title: t.chapter2.stateVarTitle,
      badge: t.chapter2.stateVarBadge,
      description: t.chapter2.stateVarDesc,
      codeExample: `// In this render snapshot, 'count' is frozen at its current value\nconsole.log(count); // e.g. 42\n// ❌ count = 43 (TypeError: Assignment to constant variable)`
    },
    setter: {
      title: t.chapter2.setterTitle,
      badge: t.chapter2.setterBadge,
      description: t.chapter2.setterDesc,
      codeExample: `// Direct value:\nsetCount(10);\n\n// Functional updater:\nsetCount(prevCount => prevCount + 1);`
    },
    hook: {
      title: t.chapter2.hookTitle,
      badge: t.chapter2.hookBadge,
      description: t.chapter2.hookDesc,
      codeExample: `import { useState } from 'react';\n\n// Top level in React components or custom hooks:\nfunction MyComponent() {\n  const [value, setValue] = useState(0);\n}`
    },
    initial: {
      title: t.chapter2.initialTitle,
      badge: t.chapter2.initialBadge,
      description: t.chapter2.initialDesc,
      codeExample: `// Eager value:\nconst [count, setCount] = useState(0);\n\n// Lazy Initializer:\nconst [data, setData] = useState(() => calculateMassiveDataset());`
    },
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="border-t-2 border-purple-400 bg-slate-900/40 border-x border-b border-slate-800 rounded-b-lg p-6 md:p-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="purple" size="md">{t.chapter2.badge1}</Badge>
            <Badge variant="cyan" size="md">{t.chapter2.badge2}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono"><Clock className="w-3 h-3" /> {t.chapter2.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight font-display">
            {t.chapter2.title} <code className="text-cyan-400 font-mono">{t.chapter2.titleAccent}</code>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            {t.chapter2.subtitle}
          </p>
        </div>
      </div>

      {/* Interactive Syntax Microscope */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">{t.chapter2.microscopeTitle}</h2>
        <p className="text-sm text-slate-400">
          {t.chapter2.microscopeSubtitle}
        </p>

        {/* Clickable Code Tokens */}
        <div className="p-6 md:p-8 rounded-lg bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-lg md:text-2xl font-mono " dir="ltr">
          <span className="text-purple-400 font-semibold select-none">const</span>
          
          <button
            onClick={() => {
              playTone('step');
              setActiveToken('destructuring');
            }}
            className={`px-2 py-1 rounded-lg border transition-all ${
              activeToken === 'destructuring'
                ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                : 'border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title="Array Destructuring"
          >
            [
          </button>

          <button
            onClick={() => {
              playTone('step');
              setActiveToken('state');
            }}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${
              activeToken === 'state'
                ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 scale-105'
                : 'border-slate-800 text-cyan-400/70 hover:text-cyan-300 hover:border-slate-700'
            }`}
          >
            count
          </button>

          <span className="text-slate-500">,</span>

          <button
            onClick={() => {
              playTone('step');
              setActiveToken('setter');
            }}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${
              activeToken === 'setter'
                ? 'bg-emerald-500/25 border-emerald-400 text-emerald-300 scale-105'
                : 'border-slate-800 text-emerald-400/70 hover:text-emerald-300 hover:border-slate-700'
            }`}
          >
            setCount
          </button>

          <button
            onClick={() => {
              playTone('step');
              setActiveToken('destructuring');
            }}
            className={`px-2 py-1 rounded-lg border transition-all ${
              activeToken === 'destructuring'
                ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                : 'border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
          >
            ]
          </button>

          <span className="text-purple-400 font-semibold select-none">=</span>

          <button
            onClick={() => {
              playTone('step');
              setActiveToken('hook');
            }}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${
              activeToken === 'hook'
                ? 'bg-amber-500/25 border-amber-400 text-amber-300 scale-105'
                : 'border-slate-800 text-amber-400/70 hover:text-amber-300 hover:border-slate-700'
            }`}
          >
            useState
          </button>

          <span className="text-slate-500">(</span>

          <button
            onClick={() => {
              playTone('step');
              setActiveToken('initial');
            }}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${
              activeToken === 'initial'
                ? 'bg-rose-500/25 border-rose-400 text-rose-300 scale-105'
                : 'border-slate-800 text-rose-400/70 hover:text-rose-300 hover:border-slate-700'
            }`}
          >
            0
          </button>

          <span className="text-slate-500">);</span>
        </div>

        {/* Selected Token Detail Card */}
        <div className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              {tokenDetails[activeToken].title}
            </h3>
            <Badge variant="cyan">{tokenDetails[activeToken].badge}</Badge>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {tokenDetails[activeToken].description}
          </p>
          <CodeBlock
            code={tokenDetails[activeToken].codeExample}
            language="javascript"
          />
        </div>
      </div>

      {/* Why Array Destructuring vs Object Destructuring */}
      <Card
        title={t.chapter2.whyArrayTitle}
        subtitle={t.chapter2.whyArraySubtitle}
        icon={<Layers className="w-5 h-5 text-purple-400" />}
        badge={<Badge variant="purple">{t.chapter2.whyArrayBadge}</Badge>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 pt-2">
          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="font-semibold text-rose-400 text-xs uppercase tracking-wider">
              {t.chapter2.ifObject}
            </div>
            <pre className="font-mono text-xs text-slate-300 p-2 rounded bg-slate-900 overflow-x-auto" dir="ltr">
{`const { value: name, setValue: setName } = useState('Alice');\nconst { value: age, setValue: setAge } = useState(25);`}
            </pre>
            <p className="text-xs text-slate-400">
              {t.chapter2.ifObjectDesc}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="font-semibold text-emerald-400 text-xs uppercase tracking-wider">
              {t.chapter2.withArray}
            </div>
            <pre className="font-mono text-xs text-slate-300 p-2 rounded bg-slate-900 overflow-x-auto" dir="ltr">
{`const [name, setName] = useState('Alice');\nconst [age, setAge] = useState(25);`}
            </pre>
            <p className="text-xs text-slate-400">
              {t.chapter2.withArrayDesc}
            </p>
          </div>
        </div>
      </Card>

      {/* Lazy Initial State Deep Dive */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{t.chapter2.lazyTitle}</h2>
          <Badge variant="amber">{t.chapter2.lazyBadge}</Badge>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
          {t.chapter2.lazyDesc}
        </p>

        {/* Live Benchmark Simulator Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Eager Computation */}
          <div className="p-6 rounded-lg border-t-2 border-t-rose-400 bg-slate-900/40 border-x border-b border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-100 text-base font-display">{t.chapter2.eagerTitle}</h3>
              <Badge variant="rose">{t.chapter2.eagerBadge}</Badge>
            </div>

            <CodeBlock
              filename="EagerInit.jsx"
              code={`// ⚠️ computeMatrix() is called on EVERY re-render!\nconst [matrix, setMatrix] = useState(computeHeavyMatrix());`}
            />

            <RenderFlashingBox label="EagerComponent" flashColor="rose" className="bg-slate-950">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">{t.chapter2.eagerRenders}</div>
                    <div className="text-2xl font-semibold text-rose-400 font-mono">{eagerRenders}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">{t.chapter2.eagerRuns}</div>
                    <div className="text-2xl font-semibold text-rose-400 font-mono">{eagerCalculations}</div>
                  </div>
                </div>

                <div className="text-xs text-rose-300/80 font-mono text-center p-2 rounded bg-rose-950/30 border border-rose-900/30">
                  {t.chapter2.eagerWarning}
                </div>

                <button
                  onClick={handleEagerClick}
                  className="w-full px-4 py-2.5 rounded-lg bg-rose-500 hover:bg-rose-400 text-slate-950 font-semibold text-xs transition-all"
                >
                  {t.chapter2.eagerBtn}
                </button>
              </div>
            </RenderFlashingBox>
          </div>

          {/* Lazy Initializer */}
          <div className="p-6 rounded-lg border-t-2 border-t-emerald-400 bg-slate-900/40 border-x border-b border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-100 text-base font-display">{t.chapter2.lazyCardTitle}</h3>
              <Badge variant="emerald">{t.chapter2.lazyCardBadge}</Badge>
            </div>

            <CodeBlock
              filename="LazyInit.jsx"
              code={`// ✅ Function passed as reference; React only invokes it on mount!\nconst [matrix, setMatrix] = useState(() => computeHeavyMatrix());`}
            />

            <RenderFlashingBox label="LazyComponent" flashColor="emerald" className="bg-slate-950">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">{t.chapter2.lazyRendersLabel}</div>
                    <div className="text-2xl font-semibold text-emerald-400 font-mono">{lazyRenders}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">{t.chapter2.lazyRunsLabel}</div>
                    <div className="text-2xl font-semibold text-emerald-400 font-mono">{lazyCalculations}</div>
                  </div>
                </div>

                <div className="text-xs text-emerald-300/80 font-mono text-center p-2 rounded bg-emerald-950/30 border border-emerald-900/30">
                  {t.chapter2.lazySuccess}
                </div>

                <button
                  onClick={handleLazyClick}
                  className="w-full px-4 py-2.5 rounded-md bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-colors"
                >
                  {t.chapter2.lazyBtn}
                </button>
              </div>
            </RenderFlashingBox>
          </div>

        </div>

        <div className="flex justify-end">
          <button
            onClick={handleResetBenchmark}
            className="text-xs text-slate-400 hover:text-slate-200 underline font-mono"
          >
            {t.chapter2.resetBenchmark}
          </button>
        </div>
      </div>

    </div>
  );
};
