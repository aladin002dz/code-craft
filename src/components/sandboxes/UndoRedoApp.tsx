import React, { useState } from 'react';
import { Undo2, Redo2, Palette, Sparkles, RotateCcw } from 'lucide-react';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { CodeBlock } from '../common/CodeBlock';
import { useProgress } from '../../context/ProgressContext';

interface HistoryState {
  past: string[];
  present: string;
  future: string[];
}

const PRESET_COLORS = [
  '#06b6d4', // Cyan
  '#10b981', // Emerald
  '#a855f7', // Purple
  '#f59e0b', // Amber
  '#f43f5e', // Rose
  '#3b82f6', // Blue
];

export const UndoRedoApp: React.FC = () => {
  const { playTone } = useProgress();

  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: '#06b6d4',
    future: []
  });

  const canUndo = history.past.length > 0;
  const canRedo = history.future.length > 0;

  const handleSelectColor = (color: string) => {
    if (color === history.present) return;
    playTone('click');
    setHistory(prev => ({
      past: [...prev.past, prev.present],
      present: color,
      future: [] // Fresh branch clears future
    }));
  };

  const handleUndo = () => {
    if (!canUndo) return;
    playTone('step');
    setHistory(prev => {
      const previous = prev.past[prev.past.length - 1];
      const newPast = prev.past.slice(0, prev.past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [prev.present, ...prev.future]
      };
    });
  };

  const handleRedo = () => {
    if (!canRedo) return;
    playTone('step');
    setHistory(prev => {
      const next = prev.future[0];
      const newFuture = prev.future.slice(1);
      return {
        past: [...prev.past, prev.present],
        present: next,
        future: newFuture
      };
    });
  };

  const handleReset = () => {
    playTone('click');
    setHistory({
      past: [],
      present: '#06b6d4',
      future: []
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Visual Canvas Widget */}
      <div className="lg:col-span-7 space-y-4">
        <RenderFlashingBox label="UndoRedoCanvas" flashColor="amber">
          <div className="space-y-6">
            
            {/* Header & Controls */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-white text-base">Interactive State Time Machine</h3>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleUndo}
                  disabled={!canUndo}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    canUndo
                      ? 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700'
                      : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                  }`}
                  title="Undo (Ctrl+Z)"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                  <span>Undo ({history.past.length})</span>
                </button>

                <button
                  onClick={handleRedo}
                  disabled={!canRedo}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    canRedo
                      ? 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700'
                      : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                  }`}
                  title="Redo (Ctrl+Y)"
                >
                  <span>Redo ({history.future.length})</span>
                  <Redo2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
                  title="Reset Canvas"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Canvas Preview Area */}
            <div
              className="h-36 rounded-lg flex items-center justify-center border border-slate-800 transition-colors duration-500"
              style={{ backgroundColor: history.present }}
            >
              <div className="p-3 px-6 rounded-lg bg-slate-950/80 text-white font-mono font-semibold text-sm border border-white/20">
                Active State: {history.present}
              </div>
            </div>

            {/* Color Picker Palette */}
            <div>
              <div className="text-xs font-mono text-slate-400 mb-2 font-semibold">Choose Color (Creates New State Snapshot):</div>
              <div className="flex items-center gap-3">
                {PRESET_COLORS.map(c => (
                  <button
                    key={c}
                    onClick={() => handleSelectColor(c)}
                    className={`w-10 h-10 rounded-lg transition-all ${
                      history.present === c
                        ? 'ring-2 ring-offset-2 ring-offset-slate-950 ring-white'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* State Stack Visualizer */}
            <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Memory State Stack:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                {/* Past Stack */}
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-slate-500 font-semibold">PAST ({history.past.length})</div>
                  <div className="flex flex-wrap justify-center gap-1 min-h-[24px]">
                    {history.past.map((c, i) => (
                      <span key={i} className="w-4 h-4 rounded-full border border-slate-700" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>

                {/* Present Stack */}
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/60 space-y-1">
                  <div className="text-cyan-300 font-semibold">PRESENT</div>
                  <div className="flex justify-center min-h-[24px]">
                    <span className="w-5 h-5 rounded-full border border-white" style={{ backgroundColor: history.present }} />
                  </div>
                </div>

                {/* Future Stack */}
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-slate-500 font-semibold">FUTURE ({history.future.length})</div>
                  <div className="flex flex-wrap justify-center gap-1 min-h-[24px]">
                    {history.future.map((c, i) => (
                      <span key={i} className="w-4 h-4 rounded-full border border-slate-700" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </RenderFlashingBox>
      </div>

      {/* Code Blueprint */}
      <div className="lg:col-span-5 space-y-4">
        <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>State History Pattern (Past, Present, Future)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            By storing an immutable history object containing arrays of snapshots, you can build full undo/redo capabilities effortlessly in React!
          </p>

          <CodeBlock
            filename="useHistory.jsx"
            code={`// Undo shifts from past to present:
function undo() {
  const previous = past[past.length - 1];
  setPast(past.slice(0, -1));
  setFuture([present, ...future]);
  setPresent(previous);
}`}
          />
        </div>
      </div>

    </div>
  );
};
