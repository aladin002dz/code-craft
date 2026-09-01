import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, Plus, Minus, RotateCcw, Sparkles, Box } from 'lucide-react';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { CodeBlock } from '../common/CodeBlock';
import { Badge } from '../common/Badge';
import { useProgress } from '../../context/ProgressContext';

// Simple custom hook: useToggle
function useToggle(initialValue = false): [boolean, () => void, (val: boolean) => void] {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle, setValue];
}

// Simple custom hook: useCounter
function useCounter(initialValue = 0, { min = 0, max = 100, step = 1 } = {}) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => Math.min(max, c + step));
  const decrement = () => setCount(c => Math.max(min, c - step));
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

export const CustomHooksApp: React.FC = () => {
  const { playTone } = useProgress();

  const [isDarkMode, toggleDarkMode] = useToggle(true);
  const [isModalOpen, toggleModal] = useToggle(false);
  const counterA = useCounter(10, { min: 0, max: 50, step: 5 });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Interactive Custom Hooks Playground */}
      <div className="lg:col-span-7 space-y-4">
        <RenderFlashingBox label="CustomHooksPlayground" flashColor="emerald">
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Box className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold text-white text-base">Custom Hook Encapsulation</h3>
              </div>
              <Badge variant="emerald">Clean Architecture</Badge>
            </div>

            {/* useToggle Demonstration */}
            <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-semibold text-cyan-300 uppercase">
                1. useToggle() Hook Demo
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    playTone('step');
                    toggleDarkMode();
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    isDarkMode ? 'bg-cyan-950 border-cyan-500/50 text-cyan-300' : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <span>Dark Mode: {isDarkMode ? 'ON' : 'OFF'}</span>
                  {isDarkMode ? <ToggleRight className="w-4 h-4 text-cyan-400" /> : <ToggleLeft className="w-4 h-4 text-slate-500" />}
                </button>

                <button
                  onClick={() => {
                    playTone('step');
                    toggleModal();
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    isModalOpen ? 'bg-purple-950 border-purple-500/50 text-purple-300' : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <span>Modal State: {isModalOpen ? 'OPEN' : 'CLOSED'}</span>
                  {isModalOpen ? <ToggleRight className="w-4 h-4 text-purple-400" /> : <ToggleLeft className="w-4 h-4 text-slate-500" />}
                </button>
              </div>
            </div>

            {/* useCounter Demonstration */}
            <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-semibold text-emerald-300 uppercase">
                2. useCounter() Hook Demo (Step 5, Range 0-50)
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-mono font-semibold text-emerald-400 w-16">
                  {counterA.count}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      playTone('step');
                      counterA.decrement();
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                    title="Decrement by step 5"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      playTone('step');
                      counterA.increment();
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                    title="Increment by step 5"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      playTone('click');
                      counterA.reset();
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200"
                    title="Reset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </RenderFlashingBox>
      </div>

      {/* Code Blueprint */}
      <div className="lg:col-span-5 space-y-4">
        <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Building Custom Hooks</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Custom hooks are standard JavaScript functions whose names start with <code className="text-emerald-300 font-mono">use</code> and can call other hooks like <code className="text-cyan-300 font-mono">useState</code> inside them!
          </p>

          <CodeBlock
            filename="useToggle.js"
            code={`// Reusable custom hook
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// In your components:
const [isOpen, toggleOpen] = useToggle(false);`}
          />
        </div>
      </div>

    </div>
  );
};
