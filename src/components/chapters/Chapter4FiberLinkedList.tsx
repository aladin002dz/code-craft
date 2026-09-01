import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { 
  GitCommit, 
  AlertTriangle, 
  ArrowRight, 
  ToggleLeft, 
  ToggleRight, 
  CheckCircle2, 
  XCircle,
  Network
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

export const Chapter4FiberLinkedList: React.FC = () => {
  const { playTone } = useProgress();

  // Flag simulating conditional hook rendering
  const [isVipCondition, setIsVipCondition] = useState<boolean>(true);
  const [brokenOrderLogs, setBrokenOrderLogs] = useState<string[]>([]);

  const handleToggleCondition = () => {
    const nextVal = !isVipCondition;
    setIsVipCondition(nextVal);
    if (!nextVal) {
      playTone('error');
      setBrokenOrderLogs(prev => [
        `🚨 VIP Hook #1 skipped! Hook pointers mismatched: Hook #2 ('points') read 'VIP_GOLD' instead of 100!`,
        ...prev.slice(0, 3)
      ]);
    } else {
      playTone('success');
      setBrokenOrderLogs(prev => [
        `✨ Normal order restored: Hook 1 -> Hook 2 -> Hook 3 in sync.`,
        ...prev.slice(0, 3)
      ]);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-purple-950/40 via-slate-900/80 to-slate-950 border border-purple-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Network className="w-64 h-64 text-purple-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="md">Module 4</Badge>
            <Badge variant="rose" size="md">React Internals</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ 7 min read + Fiber simulator</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Under the Hood: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">React Fiber</span> & The Hooks Linked List
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Ever wondered how React knows which state belongs to which <code className="text-purple-300">useState</code> call without passing unique string keys?
            Let's dive into the internal <strong className="text-white">Fiber Node linked list</strong> and see why breaking the Rules of Hooks causes chaos!
          </p>
        </div>
      </div>

      {/* Fiber Linked List Architecture Card */}
      <Card
        title="How React Stores State in Memory"
        subtitle="The fiber.memoizedState Singly Linked List"
        icon={<GitCommit className="w-5 h-5 text-purple-400" />}
        badge={<Badge variant="purple">Fiber Architecture</Badge>}
        glowColor="purple"
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            When React renders a component, it creates a <strong className="text-white">Fiber Node</strong> (a plain JavaScript object tracking component metadata, DOM nodes, and state).
            All hooks called in that component are stored in a linear <strong className="text-purple-300 font-mono">singly-linked list</strong> referenced by <code className="text-purple-300">fiber.memoizedState</code>.
          </p>

          {/* Linked List Visual Diagram */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 overflow-x-auto">
            <div className="text-xs font-mono text-slate-400 mb-3 font-semibold">
              fiber.memoizedState (Hooks Linked List Structure):
            </div>

            <div className="flex items-center gap-3 min-w-[600px]">
              {/* Hook Node 1 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/50 shadow-lg shadow-cyan-500/10 flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-cyan-300">Hook #1 (useState)</span>
                  <span className="text-slate-500">Index: 0</span>
                </div>
                <div className="p-2 rounded bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>memoizedState: <span className="text-cyan-400 font-bold">'Alice'</span></div>
                  <div>queue: <span className="text-slate-500">null</span></div>
                  <div>next: <span className="text-purple-400 font-bold">--&gt; Hook #2</span></div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />

              {/* Hook Node 2 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/50 shadow-lg shadow-emerald-500/10 flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-emerald-300">Hook #2 (useState)</span>
                  <span className="text-slate-500">Index: 1</span>
                </div>
                <div className="p-2 rounded bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>memoizedState: <span className="text-emerald-400 font-bold">28</span></div>
                  <div>queue: <span className="text-slate-500">null</span></div>
                  <div>next: <span className="text-purple-400 font-bold">--&gt; Hook #3</span></div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />

              {/* Hook Node 3 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/50 shadow-lg shadow-amber-500/10 flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-amber-300">Hook #3 (useState)</span>
                  <span className="text-slate-500">Index: 2</span>
                </div>
                <div className="p-2 rounded bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>memoizedState: <span className="text-amber-400 font-bold">true</span></div>
                  <div>queue: <span className="text-slate-500">null</span></div>
                  <div>next: <span className="text-slate-500 font-bold">null (End)</span></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic">
            Notice that React stores <strong>NO variable names</strong>. It only knows: "1st hook call gets Hook #1, 2nd hook call gets Hook #2".
          </p>
        </div>
      </Card>

      {/* "Break the Rules of Hooks" Interactive Simulation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <h2 className="text-xl font-bold text-white">"Break the Rules of Hooks" Simulator</h2>
          </div>
          <Badge variant="rose">Interactive Experiment</Badge>
        </div>

        <p className="text-sm text-slate-300">
          What happens when a hook is wrapped inside an <code className="text-rose-300 bg-rose-950/40 px-1.5 py-0.5 rounded">if (condition)</code> block?
          Toggle the switch below to simulate what happens during the next render!
        </p>

        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
          
          {/* Conditional Code Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Code */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Illegal Component Code:</span>
                <button
                  onClick={handleToggleCondition}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
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
                code={`function BadComponent({ isVip }) {
  // ❌ ILLEGAL: Hook called inside conditional!
  if (isVip) {
    const [badge, setBadge] = useState('VIP_GOLD'); // Hook #1
  }

  const [points, setPoints] = useState(100);       // Hook #2
  const [isActive, setIsActive] = useState(true);   // Hook #3

  return <div>Points: {points}</div>;
}`}
              />
            </div>

            {/* Fiber Node State Live Alignment */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Fiber Node State Pointer Alignment:</span>
              
              <div className={`p-4 rounded-xl border transition-all ${
                isVipCondition
                  ? 'bg-emerald-950/20 border-emerald-800/60 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-600 shadow-[0_0_25px_rgba(244,63,94,0.3)] text-rose-200'
              }`}>
                {isVipCondition ? (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center gap-2 font-bold text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Render 1 (isVip = true): Pointers In Sync</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-emerald-900/40 space-y-1">
                      <div>1st Call: `badge` receives stored state: <span className="text-cyan-400 font-bold">'VIP_GOLD'</span> (Hook #1)</div>
                      <div>2nd Call: `points` receives stored state: <span className="text-emerald-400 font-bold">100</span> (Hook #2)</div>
                      <div>3rd Call: `isActive` receives stored state: <span className="text-amber-400 font-bold">true</span> (Hook #3)</div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center gap-2 font-bold text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>Render 2 (isVip = false): STATE POINTER CORRUPTION!</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-rose-900/40 space-y-1 text-rose-200">
                      <div className="text-rose-400 font-bold">💥 Hook #1 was skipped!</div>
                      <div>1st Call in code is `points` -&gt; Reads Hook #1 state: <span className="text-cyan-400 font-bold">'VIP_GOLD'</span> (BUG: points is now a string!)</div>
                      <div>2nd Call in code is `isActive` -&gt; Reads Hook #2 state: <span className="text-emerald-400 font-bold">100</span> (BUG: isActive is a number!)</div>
                      <div>3rd Hook was expected but React ran out of hook calls!</div>
                    </div>
                    <div className="p-2 rounded bg-rose-950/80 border border-rose-800 text-[11px] text-rose-300">
                      ⚠️ React throws: <em>"Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement."</em>
                    </div>
                  </div>
                )}
              </div>

              {/* Logs */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-400 min-h-[64px]">
                {brokenOrderLogs.length === 0 ? (
                  <div className="text-slate-500 italic">Toggle isVip above to observe the corruption</div>
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
          title="Rule #1: Top Level Only"
          subtitle="Never call hooks inside loops, conditions, or nested functions"
          icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          badge={<Badge variant="emerald">Invariant</Badge>}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            By following this rule, you guarantee that hooks are called in the <strong className="text-white">exact same sequence on every single render</strong>.
            This allows React to correctly match internal state to the right hook every time.
          </p>
        </Card>

        <Card
          title="Rule #2: React Functions Only"
          subtitle="Only call hooks from React function components or custom hooks"
          icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          badge={<Badge variant="emerald">Scope</Badge>}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            Do not call hooks from regular JavaScript functions.
            Hooks require an active React Fiber rendering context to find <code className="text-emerald-300">ReactCurrentDispatcher</code>.
          </p>
        </Card>

      </div>

    </div>
  );
};
