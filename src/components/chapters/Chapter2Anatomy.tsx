import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { 
  Microscope, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  Layers
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

type SyntaxToken = 'destructuring' | 'state' | 'setter' | 'hook' | 'initial';

export const Chapter2Anatomy: React.FC = () => {
  const { playTone } = useProgress();

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
      title: 'JavaScript Array Destructuring `[ ... ]`',
      badge: 'JS Feature',
      description: 'useState returns a 2-element tuple: [currentValue, updateFunction]. Array destructuring lets you name these two variables whatever you want concisely without renaming object properties.',
      codeExample: `// Under the hood, useState returns an array of length 2:
const stateTuple = useState(0);
const count = stateTuple[0];    // 1st item: Current Value
const setCount = stateTuple[1]; // 2nd item: Dispatcher Function`
    },
    state: {
      title: 'The State Variable (`count`)',
      badge: 'Read-only Value',
      description: 'Holds the value of this state for the CURRENT render. It is a constant (const) within this specific function execution. You cannot reassign it (e.g. count = 5 is forbidden).',
      codeExample: `// In this render snapshot, 'count' is frozen at its current value
console.log(count); // e.g. 42
// ❌ count = 43 (TypeError: Assignment to constant variable)`
    },
    setter: {
      title: 'The Setter / Dispatcher (`setCount`)',
      badge: 'Trigger / Dispatcher',
      description: 'A function that accepts either a new value (setCount(5)) or an updater callback (setCount(prev => prev + 1)). Calling it informs React that state has changed and schedules a re-render.',
      codeExample: `// Direct value:
setCount(10);

// Functional updater (Safe for concurrent or queued updates):
setCount(prevCount => prevCount + 1);`
    },
    hook: {
      title: 'The `useState` Hook Identifier',
      badge: 'React API',
      description: 'A built-in React hook. The "use" prefix tells React and linters that this function must adhere to the Rules of Hooks (only call at top level, only in React function components or custom hooks).',
      codeExample: `import { useState } from 'react';

// Hooks must always be called at the top level:
function MyComponent() {
  const [value, setValue] = useState(0);
  // ...
}`
    },
    initial: {
      title: 'Initial State Argument `(initialValue)`',
      badge: 'Mount Argument',
      description: 'The value state will have on the VERY FIRST render (mount). On subsequent re-renders, React ignores this argument and returns the latest state stored in the Fiber node.',
      codeExample: `// Eager value: (Evaluated on mount, ignored on re-render)
const [count, setCount] = useState(0);

// Lazy Initializer: (Runs ONLY on mount, prevents lag on re-renders!)
const [data, setData] = useState(() => calculateMassiveDataset());`
    },
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-950/40 via-slate-900/80 to-slate-950 border border-blue-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Microscope className="w-64 h-64 text-blue-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="md">Module 2</Badge>
            <Badge variant="cyan" size="md">Syntax & Performance</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ 5 min read + interactive lab</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Anatomy of <code className="text-cyan-400 font-mono">useState</code> & Lazy Initialization
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Let's put the syntax under an interactive microscope to understand what each token does,
            why array destructuring was chosen, and how <strong className="text-cyan-300">lazy initial state</strong> prevents hidden performance bottlenecks.
          </p>
        </div>
      </div>

      {/* Interactive Syntax Microscope */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Microscope className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold text-white">Interactive Syntax Microscope</h2>
        </div>
        <p className="text-sm text-slate-400">
          Click any part of the declaration below to inspect its purpose, rules, and internal behavior:
        </p>

        {/* Clickable Code Tokens */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-lg md:text-2xl font-mono shadow-2xl">
          <span className="text-purple-400 font-semibold select-none">const</span>
          
          <button
            onClick={() => {
              playTone('step');
              setActiveToken('destructuring');
            }}
            className={`px-2 py-1 rounded-lg border transition-all ${
              activeToken === 'destructuring'
                ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
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
            className={`px-3 py-1 rounded-lg border font-bold transition-all ${
              activeToken === 'state'
                ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
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
            className={`px-3 py-1 rounded-lg border font-bold transition-all ${
              activeToken === 'setter'
                ? 'bg-emerald-500/25 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-105'
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
                ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
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
            className={`px-3 py-1 rounded-lg border font-bold transition-all ${
              activeToken === 'hook'
                ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105'
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
            className={`px-3 py-1 rounded-lg border font-bold transition-all ${
              activeToken === 'initial'
                ? 'bg-rose-500/25 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-105'
                : 'border-slate-800 text-rose-400/70 hover:text-rose-300 hover:border-slate-700'
            }`}
          >
            0
          </button>

          <span className="text-slate-500">);</span>
        </div>

        {/* Selected Token Detail Card */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
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

      {/* Why Array Destructuring vs Object Destructuring Callout */}
      <Card
        title="Why Array Destructuring Instead of Object?"
        subtitle="The clever ergonomics of React Hook design"
        icon={<Layers className="w-5 h-5 text-purple-400" />}
        badge={<Badge variant="purple">Architecture</Badge>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 pt-2">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="font-bold text-rose-400 text-xs uppercase tracking-wider">
              If useState returned an Object:
            </div>
            <pre className="font-mono text-xs text-slate-300 p-2 rounded bg-slate-900 overflow-x-auto">
{`// ❌ Clunky renaming needed for multiple states:
const { value: name, setValue: setName } = useState('Alice');
const { value: age, setValue: setAge } = useState(25);`}
            </pre>
            <p className="text-xs text-slate-400">
              You would have to alias every single property with <code className="text-rose-300">: alias</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-900/40 space-y-2">
            <div className="font-bold text-emerald-400 text-xs uppercase tracking-wider">
              With Array Destructuring (The React Way):
            </div>
            <pre className="font-mono text-xs text-slate-300 p-2 rounded bg-slate-900 overflow-x-auto">
{`// ✅ Clean, expressive, free naming:
const [name, setName] = useState('Alice');
const [age, setAge] = useState(25);`}
            </pre>
            <p className="text-xs text-slate-400">
              Positional array unpacking gives you complete freedom to name variables intuitively.
            </p>
          </div>
        </div>
      </Card>

      {/* Lazy Initial State Deep Dive & Benchmark Simulator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white">Lazy Initial State Benchmark Lab</h2>
          </div>
          <Badge variant="amber">Performance Pro-Tip</Badge>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          If your initial state requires heavy computation (like reading local storage or generating large matrices),
          passing a direct function call <code className="text-rose-300 bg-rose-950/40 px-1.5 py-0.5 rounded">useState(compute())</code> runs that function on <strong className="text-white">every single re-render</strong>!
          Using a lazy callback <code className="text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded">useState(() =&gt; compute())</code> runs it <strong className="text-white">only once on mount</strong>.
        </p>

        {/* Live Benchmark Simulator Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Eager Computation */}
          <div className="p-6 rounded-2xl bg-rose-950/10 border border-rose-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <h3 className="font-bold text-rose-300 text-base">Eager Initializer (Slow)</h3>
              </div>
              <Badge variant="rose">Re-computes Every Render</Badge>
            </div>

            <CodeBlock
              filename="EagerInit.jsx"
              code={`// ⚠️ computeMatrix() is called on EVERY re-render!
const [matrix, setMatrix] = useState(computeHeavyMatrix());`}
            />

            <RenderFlashingBox label="EagerComponent" flashColor="rose" className="bg-slate-950">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Total Re-renders:</div>
                    <div className="text-2xl font-black text-rose-400 font-mono">{eagerRenders}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Times Expensive Fn Ran:</div>
                    <div className="text-2xl font-black text-rose-400 font-mono">{eagerCalculations}</div>
                  </div>
                </div>

                <div className="text-xs text-rose-300/80 font-mono text-center p-2 rounded bg-rose-950/30 border border-rose-900/30">
                  ⚠️ Wasting CPU: Called {eagerCalculations} times for 0 reason!
                </div>

                <button
                  onClick={handleEagerClick}
                  className="w-full px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all shadow-lg shadow-rose-950/40"
                >
                  Trigger Re-render (Calls computeHeavyMatrix again!)
                </button>
              </div>
            </RenderFlashingBox>
          </div>

          {/* Lazy Initializer */}
          <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-emerald-300 text-base">Lazy Initializer (Fast & Optimal)</h3>
              </div>
              <Badge variant="emerald">Runs Once on Mount</Badge>
            </div>

            <CodeBlock
              filename="LazyInit.jsx"
              code={`// ✅ Function passed as reference; React only invokes it on mount!
const [matrix, setMatrix] = useState(() => computeHeavyMatrix());`}
            />

            <RenderFlashingBox label="LazyComponent" flashColor="emerald" className="bg-slate-950">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Total Re-renders:</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">{lazyRenders}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Times Expensive Fn Ran:</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">{lazyCalculations}</div>
                  </div>
                </div>

                <div className="text-xs text-emerald-300/80 font-mono text-center p-2 rounded bg-emerald-950/30 border border-emerald-900/30">
                  ✨ Perfect: Executed only 1 time during initial mount!
                </div>

                <button
                  onClick={handleLazyClick}
                  className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-950/40"
                >
                  Trigger Re-render (Zero CPU wasted!)
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
            Reset Benchmark Numbers
          </button>
        </div>
      </div>

    </div>
  );
};
